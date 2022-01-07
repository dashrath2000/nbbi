import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../../utils/style'

export default function Provider({ provider, openMaps }) {
    return (
        <TouchableOpacity style={[styles.providersContainer, { }]} onPress={() => openMaps(provider)}>
            {provider.ProviderName.length > 0 &&
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{provider.ProviderName}</Text>
            }
            {provider.ProviderGroup.length > 0 &&
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{provider.ProviderGroup}</Text>
            }
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                <View style={{ flex: 8 }}>
                    {provider.ProviderAddress.length > 0 &&
                        <Text>{provider.ProviderAddress}</Text>
                    }
                    {provider.ProviderAddress2.length > 0 &&
                        <Text>{provider.ProviderAddress2}</Text>
                    }
                    <Text>{provider.ProviderCity}, {provider.ProviderState} {provider.ProviderZipCode}</Text>
                    {provider.ProviderPhone.length > 0 &&
                        <Text>{provider.ProviderPhone}</Text>
                    }
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={{ fontWeight: 'bold' }}>{provider.Miles}</Text>
                    <Text>miles</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

Provider.propTypes = {
    provider: PropTypes.object.isRequired,
    openMaps: PropTypes.func.isRequired,
}
