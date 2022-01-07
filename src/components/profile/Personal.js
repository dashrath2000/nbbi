import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from '../../utils/style'

export default function Personal({ userData }) {
    const dobDate = new Date(userData.dob.replace(' ', 'T'))
    return (
        <View style={styles.contentContainer}>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>First Name:</Text>
                <Text style={styles.inputText}>{userData.firstname}</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Last Name:</Text>
                <Text style={styles.inputText}>{userData.lastname}</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Date of Birth:</Text>
                <Text style={styles.inputText}>{dobDate.getMonth() + 1}/{dobDate.getDate()}/{dobDate.getFullYear()}</Text>
            </View>

            <View style={styles.horizontalLine} />

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Address:</Text>
                <Text style={styles.inputText}>{userData.address}</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>City:</Text>
                <Text style={styles.inputText}>{userData.city}</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>State:</Text>
                <Text style={styles.inputText}>{userData.state}</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Zip:</Text>
                <Text style={styles.inputText}>{userData.zip}</Text>
            </View>
        </View>
    )
}

Personal.propTypes = {
    userData: PropTypes.object.isRequired,
}
