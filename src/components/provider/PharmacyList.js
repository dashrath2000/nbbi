import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from '../../utils/style'
import Pharmacy from './Pharmacy'

export default function PharmacyList({ pharmacies, openPharmacy }) {
    const pharmacyComponents = pharmacies.map((pharmacy, index) => (
        <Pharmacy key={index} pharmacy={pharmacy} openPharmacy={openPharmacy} />
    ))

    return (
        <View>
            {pharmacyComponents}
        </View>
    )
}

PharmacyList.propTypes = {
    pharmacies: PropTypes.array.isRequired,
    openPharmacy: PropTypes.func.isRequired,
}
