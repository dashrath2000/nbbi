import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from '../../utils/style'
import Dental from './Dental'

export default function ProviderList({ providers, openMaps }) {
    const providerComponents = providers.map((provider, index) => (
        <Dental key={index} provider={provider} openMaps={openMaps} />
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
