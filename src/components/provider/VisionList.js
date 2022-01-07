import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from '../../utils/style'
import Vision from './Vision'

export default function ProviderList({ providers, openMaps }) {
    const providerComponents = providers.map((provider, index) => (
        <Vision key={index} provider={provider} openMaps={openMaps} />
    ))

    return (
        <View>
            {providerComponents}
        </View>
    )
}

ProviderList.propTypes = {
    providers: PropTypes.array.isRequired,
    openMaps: PropTypes.func.isRequired,
}
