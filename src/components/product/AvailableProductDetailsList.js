import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import HTMLView from 'react-native-htmlview'
import styles from '../../utils/style'
import { getProductImageByLabel } from '../../utils/main'
import AvailableProductDetails from './AvailableProductDetails'
import Button from 'react-native-button'

export default function AvailableProductDetailsList({ productDetails, product, purchaseProduct, navigateBack }) {
    const imageSource = getProductImageByLabel(productDetails.LABEL)
    if (!productDetails.RATES) {
        return (
            <View style={styles.contentContainer}>
                <Image style={{ width: undefined, height: 190 }} source={imageSource} />
                <Text style={{ marginTop: 10, fontWeight: 'bold' }}>PRODUCT DETAILS</Text>
                <HTMLView value={product.DESCRIPTION} />
                <Text style={{ fontWeight: 'bold', marginTop: 10 }}>{productDetails.LABEL}</Text>
                <TouchableOpacity style={{ marginTop: 40, padding: 10 }} onPress={() => navigateBack()}>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Continue shopping discount benefits</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const enrollment = productDetails.RATES.find(x => x.TYPE === 'Enrollment')
    const enrollmentRate = enrollment ? enrollment.RATE : 0
    const productComponents = productDetails.RATES.map((packageDetails, index) => {
        if (packageDetails.TYPE !== 'Enrollment') {
            console.log(" None enrolment ");
            return <AvailableProductDetails key={index} productDetails={productDetails} packageDetails={packageDetails}
                purchaseProduct={purchaseProduct} enrollmentRate={enrollmentRate} />
        }
        return null
    })
    console.log("enrolment ");
    return (
        <View style={styles.contentContainer}>
            <Image style={{ width: undefined, height: 190 }} source={imageSource} />
            <Text style={{ marginTop: 10, fontWeight: 'bold' }}>PRODUCT DETAILS</Text>
            <HTMLView value={product.DESCRIPTION} />
            <Text style={{ marginTop: 20 }}>There is a one-time enrollment fee: ${enrollmentRate}</Text>
            <Text style={{ fontWeight: 'bold', marginTop: 10 }}>{productDetails.LABEL}</Text>
            {productComponents}
            <TouchableOpacity style={{ marginTop: 40, padding: 10 }} onPress={() => navigateBack()}>
                <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Continue shopping discount benefits</Text>
            </TouchableOpacity>
        </View>
    )
}

AvailableProductDetailsList.propTypes = {
    productDetails: PropTypes.object.isRequired,
    product: PropTypes.object.isRequired,
    purchaseProduct: PropTypes.func.isRequired,
    navigateBack: PropTypes.func.isRequired,
}
