import React from 'react'
import { View, ScrollView, Text, AsyncStorage, ActivityIndicator, Image, BackHandler } from 'react-native'
import Modal from 'react-native-modal'
import Button from 'react-native-button'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from '../utils/style'
import ShoppingCartProductList from '../components/cart/ShoppingCartProductList'
import * as authActions from '../actions/authAction'

class ShoppingCartScreen extends React.Component {
    constructor(props) {
        super(props)

        this.navigatePhaseRegistration = this.navigatePhaseRegistration.bind(this)
        this.removeProduct = this.removeProduct.bind(this)
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick)
        if (this.props.productState.shopping_navigate) {
            this.props.actions.setShoppingNavigate(false)
                .then(() => this.props.navigation.navigate('MainNavigator'))
        }
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick)
    }

    handleBackButtonClick() {
        this.props.navigation.navigate('MainNavigator')
        return true
    }

    navigatePhaseRegistration() {
        return this.props.navigation.navigate('Step1')
    }

    removeProduct(productID) {
        this.props.actions.removeShoppingCart(productID)
    }

    render() {
        if (!this.props.productState.shopping_cart || this.props.productState.shopping_cart.length === 0) {
            return (
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View style={styles.logoContainer}>
                        <Text style={{ fontSize: 20 }}>Shopping Cart is empty</Text>
                    </View>
                </View>
            )
        }

        return (
            <View style={styles.shoppingCartContainer}>
                <ShoppingCartProductList
                  products={this.props.productState.shopping_cart}
                  removeProduct={this.removeProduct}
                  navigatePhaseRegistration={this.navigatePhaseRegistration}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, matchDispatchToProps)(ShoppingCartScreen)
