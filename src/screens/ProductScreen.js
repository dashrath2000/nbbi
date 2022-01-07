import React from 'react'
import { View, Text } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from '../utils/style'
import AvailableProductList from '../components/product/AvailableProductList'
import * as authActions from '../actions/authAction'

class ProductScreen extends React.Component {
    constructor(props) {
        super(props)

        this.getProductRate = this.getProductRate.bind(this)
        this.hideProductDetail = this.hideProductDetail.bind(this)
        this.purchaseProduct = this.purchaseProduct.bind(this)
    }

    getProductRate(product) {
        // this.props.actions.getProductRate(productID, this.props.userState.brokerid)
        this.props.actions.setSelectedProductRate(product)
            .then(() => this.props.navigation.navigate('ProductDetailsStack'))
    }

    hideProductDetail() {
        this.props.actions.removeProductRate()
    }

    purchaseProduct(productDetails, packageDetails, enrollmentRate) {
        const data = {
            productID: productDetails.ID,
            productLabel: productDetails.LABEL,
            packageDetails,
            enrollmentRate,
        }
        this.props.actions.addShoppingCart(data)
        this.props.actions.removeProductRate()
    }

    render() {
        if (!this.props.productState.shop || this.props.productState.shop.length === 0 || this.props.isTypeTwoUser) {
            return (
                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                    <View style={{ flex: 9, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                        <Text style={{ fontSize: 20 }}>No Available Products.</Text>
                        <Text style={{ fontSize: 20 }}>Visit shop in the future for more products</Text>
                    </View>
                    <View style={styles.notInsuranceTextContainer}>
                        <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                    </View>
                </View>
            )
        }

        return (
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <AvailableProductList
                        products={this.props.userState.products}
                        shoppingCart={this.props.productState.shopping_cart}
                        shop={this.props.productState.shop}
                        getProductRate={this.getProductRate} />
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
      setTimeout(() => {
    console.log('getdash:', state.product)
  }, 5000);
    return {
        userState: state.user,
        productState: state.product,
        isTypeTwoUser: (state.user.agent && state.user.agent.BROKERFLAG === 'EligibilityFile')
    }
}
function matchDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(ProductScreen)
