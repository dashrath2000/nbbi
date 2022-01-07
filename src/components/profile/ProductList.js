import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from '../../utils/style'
import Product from './Product'

export default function ProductList({ products, getProductDetails }) {
    const productComponents = products.map((product) => (
        <Product key={product.pdid} product={product} getProductDetails={getProductDetails} />
    ))

    return (
        <View style={styles.contentContainer}>
            {productComponents}
            <Text style={{ marginTop: 20, fontWeight: 'bold' }}>To update or unsuscribe please call 877-271-6559</Text>
        </View>
    )
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    getProductDetails: PropTypes.func.isRequired,
}
