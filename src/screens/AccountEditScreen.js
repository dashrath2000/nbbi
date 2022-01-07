import React from 'react'
import moment from 'moment'
import { View, ScrollView, Text, AsyncStorage, ActivityIndicator, TextInput } from 'react-native'
import Button from 'react-native-button'
import Modal from 'react-native-modal'
import { TextField } from 'react-native-material-textfield'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from '../utils/style'
import { updateMember } from '../utils/api/administrationApi'
import { validatedate } from '../utils/main'
import * as authActions from '../actions/authAction'

class AccountEditScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
        }

        this.submitChanges = this.submitChanges.bind(this)
    }

    componentWillMount() {
        let dobDate = moment()
        if (this.props.userState.dob) {
            dobDate = moment(this.props.userState.dob, 'YYYY-MM-DD')
        }

        this.setState({
            firstname: this.props.userState.firstname,
            lastname: this.props.userState.lastname,
            phone1: this.props.userState.phone1,
            state: this.props.userState.state,
            city: this.props.userState.city,
            address1: this.props.userState.address1,
            email: this.props.userState.email,
            zipcode: this.props.userState.zipcode,
            dob: dobDate.format('MM/DD/YYYY'),
        })
    }

    submitChanges() {
        this.setState({ loading: true })
        if (this.state.firstname.length < 3) {
            this.setState({ loading: false })
            return this.setState({ firstNameError: 'Firstname must be at least 3 characters' })
        }
        this.setState({ firstNameError: '' })
        if (this.state.lastname.length < 3) {
            this.setState({ loading: false })
            return this.setState({ lastNameError: 'Lastname must be at least 3 characters' })
        }
        this.setState({ lastNameError: '' })
        if (!validatedate(this.state.dob)) {
            this.setState({ loading: false })
            return this.setState({ dobError: 'Not a valid date' })
        }
        this.setState({ dobError: '' })

        const data = {
            corpid: this.props.userState.corpid,
            agent: this.props.userState.brokerid,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            phone1: this.state.phone1,
            state: this.state.state,
            city: this.state.city,
            address1: this.state.address1,
            email: this.state.email,
            zipcode: this.state.zipcode,
            dob: moment(this.state.dob, 'MM/DD/YYYY').format('YYYY-MM-DD'),
        }
        updateMember(this.props.userState.memberid, this.props.userState.brokerid, data)
            .then((response) => {
                if (response.SUCCESS === true) {
                    this.setState({ errorMsg: 'Success' })
                    this.setState({ loading: false })
                    this.props.actions.updateUser(data)
                        .then(() => this.props.navigation.goBack())
                } else {
                    this.setState({ errorMsg: `Error updating user: ${JSON.stringify(response.MESSAGES)}` })
                    this.setState({ loading: false })
                }
            })
    }

    render() {
        return (
            <KeyboardAwareScrollView style={styles.mainContainer} keyboardOpeningTime={0} extraHeight={150}>
                <View style={styles.contentContainer}>
                    <Text style={styles.error}>{this.state.errorMsg}</Text>

                    <TextField
                      label='First Name'
                      onChangeText={(firstname) => this.setState({ firstname })}
                      value={this.state.firstname}
                      error={this.state.firstNameError}
                      underlineColorAndroid="transparent"
                      onSubmitEditing={() => this.lastnameInput.focus() }
                      ref={(input) => this.firstnameInput = input}
                      returnKeyType="next"
                      autoCapitalize="none"
                      autoCorrect={false} />

                    <TextField
                      label='Last Name'
                      onChangeText={(lastname) => this.setState({ lastname })}
                      value={this.state.lastname}
                      error={this.state.lastNameError}
                      underlineColorAndroid="transparent"
                      onSubmitEditing={() => this.dobInput.focus() }
                      ref={(input) => this.lastnameInput = input}
                      returnKeyType="next"
                      autoCapitalize="none"
                      autoCorrect={false} />

                    <TextField
                      label='Date of Birth (MM/DD/YYYY)'
                      onChangeText={(dob) => this.setState({ dob })}
                      value={this.state.dob}
                      error={this.state.dobError}
                      underlineColorAndroid="transparent"
                      onSubmitEditing={() => this.phone1Input.focus() }
                      ref={(input) => this.dobInput = input}
                      returnKeyType="next"
                      autoCapitalize="none"
                      autoCorrect={false} />

                    <TextField
                      label='Phone'
                      onChangeText={(phone1) => this.setState({ phone1 })}
                      value={this.state.phone1}
                      error={this.state.phone1Error}
                      underlineColorAndroid="transparent"
                      onSubmitEditing={() => this.address1Input.focus() }
                      ref={(input) => this.phone1Input = input}
                      returnKeyType="next"
                      autoCapitalize="none"
                      autoCorrect={false} />

                    <TextField
                      label='Address'
                      onChangeText={(address1) => this.setState({ address1 })}
                      value={this.state.address1}
                      error={this.state.address1Error}
                      underlineColorAndroid="transparent"
                      onSubmitEditing={() => this.cityInput.focus() }
                      ref={(input) => this.address1Input = input}
                      returnKeyType="next"
                      autoCapitalize="none"
                      autoCorrect={false} />

                    <TextField
                      label='City'
                      onChangeText={(city) => this.setState({ city })}
                      value={this.state.city}
                      error={this.state.cityError}
                      underlineColorAndroid="transparent"
                      onSubmitEditing={() => this.stateInput.focus() }
                      ref={(input) => this.cityInput = input}
                      returnKeyType="next"
                      autoCapitalize="none"
                      autoCorrect={false} />

                    <TextField
                      label='State'
                      onChangeText={(state) => this.setState({ state })}
                      value={this.state.state}
                      error={this.state.stateError}
                      underlineColorAndroid="transparent"
                      onSubmitEditing={() => this.zipcodeInput.focus() }
                      ref={(input) => this.stateInput = input}
                      returnKeyType="next"
                      autoCapitalize="none"
                      autoCorrect={false} />

                    <TextField
                      label='Zipcode'
                      onChangeText={(zipcode) => this.setState({ zipcode })}
                      value={this.state.zipcode}
                      error={this.state.zipcodeError}
                      underlineColorAndroid="transparent"
                      ref={(input) => this.zipcodeInput = input}
                      returnKeyType="done"
                      autoCapitalize="none"
                      autoCorrect={false} />
                </View>

                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Button
                      onPress={this.submitChanges}
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

export default connect(mapStateToProps, matchDispatchToProps)(AccountEditScreen)
