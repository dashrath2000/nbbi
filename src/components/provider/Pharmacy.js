import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../../utils/style'

export default function Pharmacy({ pharmacy, openPharmacy }) {
    return (
        <TouchableOpacity style={[styles.drugsContainer, { }]} onPress={() => openPharmacy(pharmacy)}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{pharmacy._pharmacyName}</Text>
            <Text style={{ fontWeight: 'bold' }}>{pharmacy._drugName}</Text>
            <Text>${pharmacy._amount}</Text>
            <Text style={{ fontWeight: 'bold' }}>{pharmacy._genericName}</Text>
            <Text>{pharmacy._genericPrice}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                <View style={{ flex: 8 }}>
                    <Text>{pharmacy._address}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: 'bold' }}>{pharmacy._distance}</Text>
                    <Text>miles</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

Pharmacy.propTypes = {
    pharmacy: PropTypes.object.isRequired,
    openPharmacy: PropTypes.func.isRequired,
}
