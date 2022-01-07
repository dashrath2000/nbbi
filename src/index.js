import React from 'react';
import { View, Image, Text, ActivityIndicator, AsyncStorage, Alert, Label } from 'react-native'
import { Provider } from 'react-redux'
import { RootNavigator } from './Router'
import { isSignedIn } from './utils/auth'
import store from './store'
import styles from './utils/style'




export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checkedSignIn: false,
            signedIn: false,
        }
        
        Text.defaultProps = Text.defaultProps || {};
        Text.defaultProps.allowFontScaling = false;

        

        
    }

    componentWillMount() {
        AsyncStorage.getItem('geofencing')
            .then(res => {
                if (res === null) {
                    AsyncStorage.setItem('geofencing', 'true')
                }
            })
            .then( () => isSignedIn())
            .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
            .catch(err => Alert.alert(`An error occurred: ${err}`))
    }

    render() {
        console.disableYellowBox = true;
        if (!this.state.checkedSignIn) {
            return (
                <View style={styles.mainLoginContainer}>
                    <View style={styles.logoContainer}>
                        <Image source={require('./assets/logo.png')} />
                    </View>
                    <ActivityIndicator size="large" />
                </View>
            )
        }

        return (
            <Provider store={store}>
                <RootNavigator onNavigationStateChange={null} />
            </Provider>
        )
    }
}
