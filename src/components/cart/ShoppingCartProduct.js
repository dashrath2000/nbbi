import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../../utils/style'
import Button from 'react-native-button'

export default function ShoppingCartProduct({ product, removeProduct }) {
    return (
        <View style={styles.shoppingCartListItem}>
            <Text style={{ fontWeight: 'bold' }}>{product.productLabel} - {product.productID}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flex: 8, marginLeft: 5 }}>
                    <Text>Benefit: {product.packageDetails.BENEFITLABEL}</Text>
                    <Text>${product.packageDetails.RATE} {product.packageDetails.PERIODLABEL}</Text>
                    <Text>One-time Enrollment: ${product.enrollmentRate}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Button
                      onPress={() => removeProduct(product.productID)} >
                        <Image style={styles.stackNavIcon} source={require('../../assets/flaticon/065-remove-1.png')} />
                    </Button>
                </View>
            </View>
        </View>
    )
}

ShoppingCartProduct.propTypes = {
    product: PropTypes.object.isRequired,
    removeProduct: PropTypes.func.isRequired,
}
