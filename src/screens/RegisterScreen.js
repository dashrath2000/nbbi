import React from 'react'
import { View, TextInput, Text, AsyncStorage, ActivityIndicator, Image } from 'react-native'
import Button from 'react-native-button'
import Modal from 'react-native-modal'
import { bindActionCreators } from 'redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'
import styles from '../utils/style'
import { createMember } from '../utils/api/administrationApi'
import * as authActions from '../actions/authAction'
import { onSignIn } from '../utils/auth'

class RegisterScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
        }

        this.submitRegister = this.submitRegister.bind(this)
    }

    submitRegister() {
        this.setState({ loading: true })
        if (this.state.password !== this.state.password2) {
            this.setState({ loading: false })
            return this.setState({ errorMsg: 'Passwords do not match' })
        }
        const data = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
        }
        return createMember(data)
            .then((response) => {
                if (response.SUCCESS === true) {
                    this.setState({ errorMsg: 'Success', loading: false })
                    onSignIn(response.MEMBER.ID.toString())
                        .then(() => this.props.actions.login())
                        .then(() => this.props.navigation.navigate('MainNavigator'))
                } else {
                    this.setState({ errorMsg: `Error creating user: ${JSON.stringify(response.MESSAGES)}` })
                    this.setState({ loading: false })
                }
            })
    }

    render() {
        return (
            <KeyboardAwareScrollView style={styles.mainContainer}>
                <View style={styles.contentContainer}>
                    <Text style={styles.error}>{this.state.errorMsg}</Text>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Username:</Text>
                        <TextInput
                          onChangeText={(username) => this.setState({ username })}
                          value={this.state.username}
                          underlineColorAndroid="transparent"
                          autoCapitalize="none"
                          autoCorrect={false}
                          style={styles.input} />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Password:</Text>
                        <TextInput
                          onChangeText={(password) => this.setState({ password })}
                          value={this.state.password}
                          underlineColorAndroid="transparent"
                          autoCapitalize="none"
                          autoCorrect={false}
                          style={styles.input} />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Confirm Password:</Text>
                        <TextInput
                          onChangeText={(password2) => this.setState({ password2 })}
                          value={this.state.password2}
                          underlineColorAndroid="transparent"
                          autoCapitalize="none"
                          autoCorrect={false}
                          style={styles.input} />
                    </View>

                    <View style={styles.horizontalLine} />

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>First Name:</Text>
                        <TextInput
                          onChangeText={(firstname) => this.setState({ firstname })}
                          value={this.state.firstname}
                          underlineColorAndroid="transparent"
                          autoCapitalize="none"
                          autoCorrect={false}
                          style={styles.input} />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Last Name:</Text>
                        <TextInput
                          onChangeText={(lastname) => this.setState({ lastname })}
                          value={this.state.lastname}
                          underlineColorAndroid="transparent"
                          autoCapitalize="none"
                          autoCorrect={false}
                          style={styles.input} />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Email:</Text>
                        <TextInput
                          onChangeText={(email) => this.setState({ email })}
                          value={this.state.email}
                          underlineColorAndroid="transparent"
                          autoCapitalize="none"
                          autoCorrect={false}
                          style={styles.input} />
                    </View>

                </View>

                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Button
                      onPress={this.submitRegister}
                      containerStyle={styles.normalButtonContainer}
                      style={styles.normalButton} >
                        Submit
                    </Button>
                </View>

                <Modal
                  hideOnBack={false}
                  isVisible={this.state.loading}>
                    <View style={styles.loadingModal}>
                        <Text>Saving</Text>
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

export default connect(mapStateToProps, matchDispatchToProps)(RegisterScreen)
