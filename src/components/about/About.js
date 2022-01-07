import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, Dimensions } from 'react-native'
import styles from '../../utils/style'

export default function About() {
    const width = Dimensions.get('window').width
    const height = 0.56 * width
    return (
        <View style={{ flex: 1 }}>
            <Image style={{ width, height }} resizeMode={'contain'} source={require('../../assets/nbbi-15-year-anniversary.jpg')} />
            <View style={styles.contentContainer}>
                <Text style={{ fontSize: 20, marginTop: 20 }}>Celebrating 15 Years</Text>
                <Text style={{ fontWeight: 'bold', marginTop: 25 }}>Providing Businesses & the Community with Quality Discount Benefits & Services</Text>
                <Text style={{ marginTop: 15 }}>National Benefit Builders, Inc. (NBBI), a New Jersey Corporation, continues to earn the highest rating from the Better Business Bureau. Under the leadership of the founders NBBI continues to provide the discount benefit marketplace with comprehensive affordable discount benefits and unmatched service.</Text>
                <Text style={{ marginTop: 15 }}>Established in 2001, today NBBI owns and manages ten companies: Starting with America’s Drug Card, which discounts over 400,000 monthly prescriptions for the uninsured community, has grown to include to health and lifestyle discount benefit programs, international medical networks, medical credentialing and consulting, technology for data management, cutting edge gaming and app technology, and cybersecurity solutions.</Text>
                <Text style={{ marginTop: 15 }}>When asked about NBBI’s greatest achievement Kevin Faherty, President and CEO commented “NBBI’s long term business and customer relationships have contributed to our ability to grow and continue to provide our valuable programs.”</Text>
                <Text style={{ fontWeight: 'bold', marginTop: 15 }}>NBBI: The Partner You Keep.</Text>
            </View>
        </View>
    )
}

About.propTypes = {
    data: PropTypes.object.isRequired,
}
