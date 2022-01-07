import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, ScrollView, Switch } from 'react-native'
import Button from 'react-native-button'
import styles from '../utils/style'

export default function Unauthorized({ userData, logout, geofencingSwitchChange }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.logoContainer}>
                <Text style={{ fontSize: 20 }}>This section is only available</Text>
                <Text style={{ fontSize: 20 }}>for subscribed members</Text>

                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Button
                      onPress={logout}
                      containerStyle={styles.normalButtonContainer}
                      style={styles.normalButton} >
                        Login
                    </Button>
                </View>

                <View style={{ marginTop: 50 }}>
                    <Text style={{ color: '#666666' }}>Push Notifications</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Geofencing:</Text>
                    <Switch
                      onValueChange={(geofencing) => geofencingSwitchChange(geofencing)}
                      value={userData.geofencing} />
                </View>
            </View>
        </View>
    )
}

Unauthorized.propTypes = {
    userData: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    geofencingSwitchChange: PropTypes.func.isRequired,
}
