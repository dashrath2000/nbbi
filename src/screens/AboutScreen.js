import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import Button from 'react-native-button'
import styles from '../utils/style'
import About from '../components/about/About'
import Info from '../components/about/Info'

class AboutScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: 'contact@nbbihome.com',
            phone: '877-271-6559',
            address: '23 Bulls Court, ste',
            city: 'Chicago, Illinois - 90210',
            template: 'Info',
        }
    }

    render() {
        return (
            <ScrollView style={styles.mainContainer}>
                <Info data={this.state} />
            </ScrollView>
        )
    }
}

export default AboutScreen
