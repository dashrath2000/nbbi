import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import styles from '../../utils/style'
import ShoppingCartPayment from './ShoppingCartPayment'
import Button from 'react-native-button'

export default function ShoppingCartPaymentList({ products, processOrder, responseMsg }) {
    let productTotal = 0
    let enrollmentTotal = 0
    const productComponents = products.map((product) => {
        productTotal += product.packageDetails.RATE
        enrollmentTotal += product.enrollmentRate
        return <ShoppingCartPayment key={product.productID} product={product} />
    })
    const total = productTotal + enrollmentTotal

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.progressContainer}>
                <View style={[styles.progressBigCircle, styles.progressActive]} />
                <View style={[styles.progressLine, styles.progressActive]} />
                <View style={[styles.progressSmallCircle, styles.progressActive]} />
                <View style={[styles.progressLine, styles.progressActive]} />
                <View style={[styles.progressSmallCircle, styles.progressActive]} />
                <View style={styles.progressLine} />
                <View style={styles.progressBigCircle} />
            </View>
            <View style={styles.progressContainer}>
                <Text style={{ fontSize: 22 }}>${total.toFixed(2)}</Text>
            </View>
            <View style={styles.shoppingCartList}>
                <Text style={styles.error}>{responseMsg}</Text>
                <ScrollView>
                    {productComponents}
                    <View style={styles.horizontalLine} />
                    <Text style={{ marginTop: 15 }}>Subtotal: ${productTotal.toFixed(2)}</Text>
                    <Text>Enrollment Total: ${enrollmentTotal.toFixed(2)}</Text>
                    <Text style={{ fontWeight: 'bold' }}>Total: ${total.toFixed(2)}</Text>
                </ScrollView>
            </View>
            <TouchableOpacity onPress={() => processOrder()} style={styles.shoppingCartCheckout} >
                <Text style={styles.shoppingCartCheckoutText}>PROCESS PAYMENT</Text>
            </TouchableOpacity>
        </View>
    )
}

ShoppingCartPaymentList.propTypes = {
    products: PropTypes.array.isRequired,
    processOrder: PropTypes.func.isRequired,
    responseMsg: PropTypes.string.isRequired,
}
