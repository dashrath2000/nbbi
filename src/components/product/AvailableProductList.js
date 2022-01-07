import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, ScrollView } from 'react-native'
import styles from '../../utils/style'
import AvailableProduct from './AvailableProduct'

export default function AvailableProductList({ shop, products, shoppingCart, getProductRate }) {
    const productComponents = shop.map((product) => {
        const inPurchased = products.filter(x => x.pdid == product.ID).length > 0
        const inCart = shoppingCart.filter(x => x.productID == product.ID).length > 0
        if (product.ACTIVE === 1 && !inPurchased && !inCart) {
            return <AvailableProduct key={product.ID} product={product} getProductRate={getProductRate} />
        }
        return null
    })
    let productAvailable = false
    for (let i = 0; i < productComponents.length; i++) {
        if (productComponents[i] !== null) {
            productAvailable = true
        }
    }
    if (productAvailable) {
        return (
            <ScrollView style={{ flex: 9 }}>
                <Text style={{ color: '#666666', textAlign: 'center', marginTop: 10 }}>Scroll to browse</Text>
                {productComponents}
            </ScrollView>
        )
    }
    return (
        <View style={{ flex: 9 }}>
            <View style={styles.logoContainer}>
                <Text style={{ fontSize: 20 }}>All products purchased.</Text>
                <Text style={{ fontSize: 20 }}>Visit shop in the future for more products</Text>
            </View>
        </View>
    )
}

AvailableProductList.propTypes = {
    products: PropTypes.array,
    shop: PropTypes.array.isRequired,
    shoppingCart: PropTypes.array,
    getProductRate: PropTypes.func.isRequired,
}

AvailableProductList.defaultProps = {
    products: [],
    shoppingCart: [],
}
