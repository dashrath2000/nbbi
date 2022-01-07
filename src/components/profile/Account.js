import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { View, Text, Switch } from 'react-native'
import styles from '../../utils/style'

export default function Personal({ userData, geofencingSwitchChange, nbbiUpdatesSwitchChange, cardExpSwitchChange }) {
    let dobDate = moment()
    if (userData.dob) {
        dobDate = moment(userData.dob, 'YYYY-MM-DD')
    }

    return (
        <View style={styles.contentContainer}>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Name:</Text>
                <Text style={styles.inputText}>{userData.firstname} {userData.lastname}</Text>
            </View>

            <View style={styles.horizontalLine} />

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email:</Text>
                <Text style={styles.inputText}>{userData.email}</Text>
            </View>

            <View style={styles.horizontalLine} />

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Date of Birth:</Text>
                <Text style={styles.inputText}>{dobDate.format('MM/DD/YYYY')}</Text>
            </View>

            <View style={styles.horizontalLine} />

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Phone:</Text>
                <Text style={styles.inputText}>{userData.phone1}</Text>
            </View>

            <View style={styles.horizontalLine} />

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Address:</Text>
                <Text style={styles.inputText}>{userData.address1}</Text>
            </View>

            <View style={styles.horizontalLine} />

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>City:</Text>
                <Text style={styles.inputText}>{userData.city}</Text>
            </View>

            <View style={styles.horizontalLine} />

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>State:</Text>
                <Text style={styles.inputText}>{userData.state}</Text>
            </View>

            <View style={styles.horizontalLine} />

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Zip:</Text>
                <Text style={styles.inputText}>{userData.zipcode}</Text>
            </View>

            <View style={{ marginTop: 20 }}>
                <Text style={{ color: '#666666' }}>Push Notifications</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Geofencing:</Text>
                <Switch
                  onValueChange={(geofencing) => geofencingSwitchChange(geofencing)}
                  value={userData.geofencing} />
            </View>
        </View>
    )
}

Personal.propTypes = {
    userData: PropTypes.object.isRequired,
    geofencingSwitchChange: PropTypes.func.isRequired,
    nbbiUpdatesSwitchChange: PropTypes.func.isRequired,
    cardExpSwitchChange: PropTypes.func.isRequired,
}
