import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from '../utils/style'

class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ width: 100, height: 50 }}>
                        <Button onPress={() => this.props.navigation.navigate('Account', { name: 'Lucy' })} title="Account" />
                    </View>
                    <View style={{ width: 100, height: 50 }}>
                        <Button onPress={() => this.props.navigation.navigate('Personal', { name: 'Dude' })} title="Personal" />
                    </View>
                    <View style={{ width: 100, height: 50 }}>
                        <Button onPress={() => this.props.navigation.navigate('Purchases', { name: 'Dude' })} title="Purchases" />
                    </View>
                </View>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
            </View>
        )
    }
}

export default ProfileScreen
