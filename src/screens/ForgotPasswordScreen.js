import React from 'react'
import { View, TextInput, Text, AsyncStorage, ActivityIndicator, Image, Linking } from 'react-native'
import Button from 'react-native-button'
import Modal from 'react-native-modal'
import { bindActionCreators } from 'redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'
import styles from '../utils/style'
import { createMember } from '../utils/api/administrationApi'
import * as authActions from '../actions/authAction'
import { onSignIn } from '../utils/auth'
import { validatedate, validateEmail } from '../utils/main'
import { TextField } from 'react-native-material-textfield'
import { getUserByUsername } from '../utils/api/enrollmentApi'
import moment from 'moment'

class ForgotPasswordScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
        }

        this.submitForgotPassword = this.submitForgotPassword.bind(this)
    }

    submitForgotPassword() {
         phoneNumberUrl = 'tel:8772716559'
    Linking.canOpenURL(phoneNumberUrl).then(supported => {
        if (!supported) {
            console.error('Can\'t handle url: ' + url)
        } else {
            return Linking.openURL(phoneNumberUrl)
        }
    }).catch(err => console.error('An error occurred', err))
    }

    render() {
        return (
            <KeyboardAwareScrollView style={styles.mainContainer}>
                <View style={styles.contentContainer}>
                    <Text style={styles.error}>{this.state.errorMsg}</Text>

                    <Text style={{ fontSize: 18, color: '#000000', textAlign: 'center', padding: 20 }}>Please Call Customer Service For Account Changes</Text>
                    
                </View>

                <View style={{ alignItems: 'center', marginTop: 1 }}>
                    <Button
                      onPress={this.submitForgotPassword}
                      containerStyle={styles.normalButtonContainer}
                      style={styles.normalButton} >
                        Call Now
                    </Button>
                </View>

                <Text style={{ fontSize: 18, color: '#345d82', textAlign: 'center', padding: 50 }}>{this.state.response}</Text>

                <Modal
                  hideOnBack={false}
                  isVisible={this.state.loading}>
                    <View style={styles.loadingModal}>
                        <Text>Loading</Text>
                        <ActivityIndicator size="large" />
                    </View>
                </Modal>

            </KeyboardAwareScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userState: state.user,
    }
}
function matchDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(ForgotPasswordScreen)
