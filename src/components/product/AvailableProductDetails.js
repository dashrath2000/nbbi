import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../../utils/style'
import Button from 'react-native-button'

export default function AvailableProductDetails({ productDetails, packageDetails, purchaseProduct, enrollmentRate }) {
    return (
        <View style={{ flex: 1, margin: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flex: 5 }}>
                    <Text>{packageDetails.BENEFITLABEL}</Text>
                    <Text>${packageDetails.RATE} {packageDetails.PERIODLABEL}</Text>
                </View>
                <View style={{ flex: 2 }}>
                    <Button
                      onPress={() => purchaseProduct(productDetails, packageDetails, enrollmentRate)}
                      containerStyle={styles.modalButtonContainer}
                      style={styles.normalButton} >
                        Buy
                    </Button>
                </View>
            </View>
        </View>
    )
}

AvailableProductDetails.propTypes = {
    productDetails: PropTypes.object.isRequired,
    packageDetails: PropTypes.object.isRequired,
    purchaseProduct: PropTypes.func.isRequired,
    enrollmentRate: PropTypes.number.isRequired,
}
