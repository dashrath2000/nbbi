import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import styles from '../../utils/style'

export default function Info({ data }) {
    return (
        <View style={styles.contentContainer}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>National Benefit Builders, Inc.</Text>
            <Text style={{ marginTop: 5, marginLeft: 10 }}>{data.email}</Text>
            <Text style={{ marginBottom: 15, marginLeft: 10 }}>{data.phone}</Text>

            <View style={styles.horizontalLine} />

            <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 15 }}>Follow Us</Text>
            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com/nbbinc/')}>
                    <Image style={styles.socialMediaImages} source={require('../../assets/facebook-icon.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/company/national-benefit-builders-inc--nbbi-')}>
                    <Image style={styles.socialMediaImages} source={require('../../assets/linkedin-icon.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.bbb.org/new-jersey/business-reviews/health-savings-administrators/national-benefit-builders-inc-in-florham-park-nj-3000635')}>
                    <Image style={{ width: 132, height: 50, margin: 10, borderRadius: 8 }} source={require('../../assets/bbb-rating.png')} />
                </TouchableOpacity>
            </View>

            <View style={styles.horizontalLine} />

            
            <TouchableOpacity onPress={() => Linking.openURL('https://nbbihome.com/')}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#0000EE', marginTop: 15 }}>Visit Our Website</Text>
            </TouchableOpacity>
        </View>
    )
}

Info.propTypes = {
    data: PropTypes.object.isRequired,
}
