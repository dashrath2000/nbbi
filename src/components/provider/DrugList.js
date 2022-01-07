import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from '../../utils/style'
import Drug from './Drug'

export default function DrugList({ drugs, openDrug }) {
    const drugComponents = drugs.map((drug, index) => (
        <Drug key={index} drug={drug} openDrug={openDrug} />
    ))

    return (
        <View>
            {drugComponents}
        </View>
    )
}

DrugList.propTypes = {
    drugs: PropTypes.array.isRequired,
    openDrug: PropTypes.func.isRequired,
}
