import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import styles from '../../utils/style'
import ShoppingCartProduct from './ShoppingCartProduct'
import Button from 'react-native-button'

export default function ShoppingCartProductList({ products, removeProduct, navigatePhaseRegistration }) {
    let productTotal = 0
    let enrollmentTotal = 0
    const productComponents = products.map((product) => {
        productTotal += product.packageDetails.RATE
        enrollmentTotal += product.enrollmentRate
        return <ShoppingCartProduct key={product.productID} product={product} removeProduct={removeProduct} />
    })
    const total = productTotal + enrollmentTotal

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.shoppingCartTotal}>
                <Text style={{ fontSize: 22 }}>${total.toFixed(2)}</Text>
            </View>
            <View style={styles.shoppingCartList}>
                <ScrollView>
                    {productComponents}
                </ScrollView>
            </View>
            <TouchableOpacity onPress={() => navigatePhaseRegistration()} style={styles.shoppingCartCheckout} >
                <Text style={styles.shoppingCartCheckoutText}>CHECKOUT</Text>
            </TouchableOpacity>
        </View>
    )
}

ShoppingCartProductList.propTypes = {
    products: PropTypes.array.isRequired,
    removeProduct: PropTypes.func.isRequired,
    navigatePhaseRegistration: PropTypes.func.isRequired,
}
