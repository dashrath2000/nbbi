import React from 'react'
import { View, ScrollView, Text, AsyncStorage, ActivityIndicator, Alert, Image } from 'react-native'
import Modal from 'react-native-modal'
import Button from 'react-native-button'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from '../utils/style'
import AvailableProductList from '../components/product/AvailableProductList'
import AvailableProductDetailsList from '../components/product/AvailableProductDetailsList'
import * as authActions from '../actions/authAction'

class ProductDetailsScreen extends React.Component {
    constructor(props) {
        super(props)

        this.purchaseProduct = this.purchaseProduct.bind(this)
        this.navigateBack = this.navigateBack.bind(this)
    }

    componentWillMount() {

        this.setState({ loading: true })
        this.props.actions.getProductRate(this.props.userState.selectedProductRate.ID, this.props.userState.brokerid)
            .then(response => {

                console.log(" Get rate respnose in Product details screen " + JSON.stringify(response))


            })
            .then(() => this.setState({ loading: false }))
    }

    purchaseProduct(productDetails, packageDetails, enrollmentRate) {
        const data = {
            productID: productDetails.ID,
            productLabel: productDetails.LABEL,
            packageDetails,
            enrollmentRate,
        }
        this.props.actions.addShoppingCart(data)
            .then(() => this.props.navigation.goBack())
            .then(() => this.props.navigation.navigate('ShoppingCart'))
    }

    navigateBack() {
        this.props.navigation.goBack()
    }

    render() {
        if (this.state.loading) {
            return (
                <Modal
                    hideOnBack={false}
                    isVisible={this.state.loading}>
                    <View style={styles.loadingModal}>
                        <Text>Loading</Text>
                        <ActivityIndicator size="large" />
                    </View>
                </Modal>
            )
        }

        return (

            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                {console.log(" In details render")}
                <View style={{ flex: 9 }}>
                    {console.log(" In details render1")}
                    <ScrollView>
                        <AvailableProductDetailsList
                            productDetails={this.props.productState.product_details}
                            product={this.props.userState.selectedProductRate}
                            purchaseProduct={this.purchaseProduct}
                            navigateBack={this.navigateBack} />
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {

    console.log(" STATE is " + JSON.stringify(state));
    return {
        userState: state.user,
        productState: state.product,
    }
}
function matchDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(ProductDetailsScreen)
