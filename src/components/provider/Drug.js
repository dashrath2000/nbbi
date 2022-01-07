import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../../utils/style'

export default function Drug({ drug, openDrug }) {
    return (
        <TouchableOpacity style={[styles.drugsContainer, { }]} onPress={() => openDrug(drug)}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{drug.ProductExtn}</Text>
            <Text style={{ fontWeight: 'bold' }}>{drug.LabelName}</Text>
        </TouchableOpacity>
    )
}

Drug.propTypes = {
    drug: PropTypes.object.isRequired,
    openDrug: PropTypes.func.isRequired,
}
