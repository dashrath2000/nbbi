import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { View, Text, Image } from 'react-native'
import styles from '../../utils/style'
import Button from 'react-native-button'

export default function Product({ product, getProductDetails }) {
    const todayDate = moment()
    const effectiveDate = moment(product.dteffective, 'YYYY-MM-DD')
    let status = ''
    if (effectiveDate > todayDate) {
        status = '(active)'
    } else {
        status = '(inactive)'
    }

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ flex: 3, margin: 5 }}>{product.label} {status}</Text>
            <Text style={{ flex: 3, margin: 5 }}>{product.benefitlabel}</Text>
            <Button
              onPress={() => getProductDetails(product.pdid)}
              containerStyle={{ flex: 1 }} >
                <Image style={{ width: 20, height: 20 }} source={require('../../assets/flaticon/050-id-card.png')} />
            </Button>
        </View>
    )
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
    getProductDetails: PropTypes.func.isRequired,
}
