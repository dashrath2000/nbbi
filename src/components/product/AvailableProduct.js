import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../../utils/style'
import { getProductImageByLabel } from '../../utils/main'
import Button from 'react-native-button'

export default function AvailableProduct({ product, getProductRate }) {
    const imageSource = getProductImageByLabel(product.LABEL)
    return (
        <TouchableOpacity style={styles.productsContainer} onPress={() => getProductRate(product)}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flex: 6 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{product.LABEL}</Text>
                    <Text style={{ fontSize: 16 }}>{product.CATEGORY}</Text>
                    
                </View>
                <View style={{ flex: 2 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Image style={{ width: 50, height: 50 }} source={imageSource} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

AvailableProduct.propTypes = {
    product: PropTypes.object.isRequired,
    getProductRate: PropTypes.func.isRequired,
}
