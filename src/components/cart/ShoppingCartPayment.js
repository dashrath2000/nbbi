import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../../utils/style'
import Button from 'react-native-button'

export default function ShoppingCartPayment({ product }) {
    return (
        <View style={styles.shoppingCartListItem}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text numberOfLines={2} style={{ flex: 2 }}>{product.productLabel}</Text>
                <Text style={{ flex: 2 }}>{product.packageDetails.BENEFITLABEL}</Text>
                <Text style={{ flex: 2 }}>${product.packageDetails.RATE} {product.packageDetails.PERIODLABEL}</Text>
            </View>
        </View>
    )
}

ShoppingCartPayment.propTypes = {
    product: PropTypes.object.isRequired,
}
