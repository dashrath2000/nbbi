import React from 'react'
import { View, ScrollView, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import Modal from 'react-native-modal'
import { TextField } from 'react-native-material-textfield'
import Button from 'react-native-button'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../../utils/style'
import { validateEmail, validatedate } from '../../utils/main'
import * as authActions from '../../actions/authAction'
import { getUserByUsername } from '../../utils/api/enrollmentApi'
import { Dropdown } from 'react-native-material-dropdown'

class Step1Screen extends React.Component {

  

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            password2: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zipcode: '',
            phone1:'',
            ddlSelectedValue:'',
        }



        this.submitNext = this.submitNext.bind(this)
        this.submitNew = this.submitNew.bind(this)
        this.submitCurrent = this.submitCurrent.bind(this)
    }

    submitNext() {
        if (this.props.userState.authentication === 'loggedin') {
            this.submitCurrent()
        } else {
            this.submitNew()
        }
    }

    submitNew() {

      console.log('ddlValue: ' + this.state.ddlSelectedValue)

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
        if (!validateEmail(this.state.username)) {
            this.setState({ loading: false })
            return this.setState({ usernameError: 'Username must be a valid email' })
        }
        this.setState({ usernameError: '' })
        if (this.state.password !== this.state.password2) {
            this.setState({ loading: false })
            return this.setState({ password2Error: 'Passwords do not match' })
        }
        if (this.state.password.length < 5) {
            this.setState({ loading: false })
            return this.setState({ password2Error: 'Password must be at least 5 characters' })
        }
        this.setState({ password2Error: '' })
        if (this.state.address1.length == 0) {
            this.setState({ loading: false })
            return this.setState({ address1Error: 'Please enter your address ' })
        }
        this.setState({ address1Error: '' })
        if (this.state.city.length == 0) {
            this.setState({ loading: false })
            return this.setState({ cityError: 'Please enter your city ' })
        }
        this.setState({ cityError: '' })
        if (this.state.state.length == 0 || this.state.state.length != 2) {
            this.setState({ loading: false })
            return this.setState({ stateError: 'Please enter your state' })
        }
        this.setState({ stateError: '' })
        if (this.state.zipcode.length == 0 || this.state.zipcode.length != 5) {
            this.setState({ loading: false })
            return this.setState({ zipcodeError: 'Please enter 5 digit zipcode ' })
        }
        this.setState({ zipcodeError: '' })
        if (this.state.phone1.length == 0 || this.state.phone1.length != 10) {
            this.setState({ loading: false })
            return this.setState({ phone1Error: 'Please enter 10 digit phone number ' })
        }
        this.setState({ phone1Error: '' })
        if(this.state.ddlSelectedValue.length == 0)
        {
            this.setState({ loading: false })
            return this.setState({ ddlSelectedValueError: 'Please Select Value From Dropdown List ' })
        }
        this.setState({ ddlSelectedValueError: '' })

        getUserByUsername(this.state.username)
            .then(response => {
                if (response.method.users[0].$.total === '0') {
                    this.setState({ loading: false })
                    const data = {
                        step1: {
                            creating: true,
                            firstname: this.state.firstname,
                            lastname: this.state.lastname,
                            username: this.state.username,
                            password: this.state.password,
                            email: this.state.username,
                            dob: this.state.dob,
                            address1: this.state.address1,
                            address2: this.state.address2,
                            city: this.state.city,
                            state: this.state.state,
                            zipcode: this.state.zipcode,
                            phone1:this.state.phone1,
                            source:this.state.ddlSelectedValue,
                        },
                    }
                    this.props.actions.addCheckoutData(data)
                        .then(() => this.props.navigation.navigate('Step2'))
                } else {
                    this.setState({ usernameError: 'Username is already taken', loading: false })
                }
            })
    }

    submitCurrent() {

      



        const data = {
            step1: {
                 creating: false,
                 address1: this.props.userState.address1,
                 address2:this.props.userState.address2,
                 city: this.props.userState.city,
                 state: this.props.userState.state,
                 zipcode: this.props.zipcode,
                 phone1:this.props.userState.phone1,
            },
        }
        this.props.actions.addCheckoutData(data)
        return this.props.navigation.navigate('Step2')
    }

    setSelectedStateValue = (ddlValue) =>
    {

this.setState({

ddlSelectedValue: ddlValue

});


console.log('ddlValue: ' + ddlValue)


    }



    render() {

      let data = [{

      value: 'Social Media',
    }, {
      value: 'Newsletter',
    }, {
      value: 'Agent',
    },
    {
      value:'Friend/Family',
    },
    {
      value:'Web Search',
    },
    {
      value:'Other',
    }

    ];
        let authenticationContainer = null
        if (this.props.userState.authentication === 'loggedin') {
            authenticationContainer = (
                <View>
                    <Text style={{ fontSize: 18 }}>Account</Text>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>First Name:</Text>
                        <Text style={styles.inputText}>{this.props.userState.firstname}</Text>
                    </View>

                    <View style={styles.horizontalLine} />

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Last Name:</Text>
                        <Text style={styles.inputText}>{this.props.userState.lastname}</Text>
                    </View>
                    <View style={styles.horizontalLine} />

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Email:</Text>
                        <Text style={styles.inputText}>{this.props.userState.email}</Text>
                    </View>



        
     

                </View>
            )
        } else {
            authenticationContainer = (
                <View>
                    <Text style={styles.error}>{this.state.errorMsg}</Text>
                    <Text style={{ fontSize: 18 }}>Create Account</Text>
                    <TextField
                      label='First Name'
                      onChangeText={(firstname) => this.setState({ firstname })}
                      value={this.state.firstname}
                      error={this.state.firstNameError}
                      underlineColorAndroid="transparent"
                      onSubmitEditing={() => this.lastnameInput.focus() }
                      ref={(input) => this.firstnameInput = input}
                      returnKeyType="next"
                      autoCapitalize="words"
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
                      autoCapitalize="words"
                      autoCorrect={false} />

                    <TextField
                      label='Date of Birth (MM/DD/YYYY)'
                      onChangeText={(dob) => this.setState({ dob })}
                      value={this.state.dob}
                      error={this.state.dobError}
                      underlineColorAndroid="transparent"
                      onSubmitEditing={() => this.usernameInput.focus() }
                      ref={(input) => this.dobInput = input}
                      returnKeyType="next"
                      keyboardType="numbers-and-punctuation"
                      autoCorrect={false} />

                    <TextField
                      label='Username (email)'
                      onChangeText={(username) => this.setState({ username })}
                      value={this.state.username}
                      error={this.state.usernameError}
                      underlineColorAndroid="transparent"
                      onSubmitEditing={() => this.passwordInput.focus() }
                      ref={(input) => this.usernameInput = input}
                      returnKeyType="next"
                      autoCapitalize="none"
                      keyboardType="email-address"
                      autoCorrect={false} />

                    <TextField
                      label='Password'
                      onChangeText={(password) => this.setState({ password })}
                      value={this.state.password}
                      error={this.state.passwordError}
                      underlineColorAndroid="transparent"
                      onSubmitEditing={() => this.password2Input.focus() }
                      ref={(input) => this.passwordInput = input}
                      returnKeyType="next"
                      autoCapitalize="none"
                      secureTextEntry
                      autoCorrect={false} />

                    <TextField
                      label='Verify Password'
                      onChangeText={(password2) => this.setState({ password2 })}
                      value={this.state.password2}
                      error={this.state.password2Error}
                      underlineColorAndroid="transparent"
                      onSubmitEditing={() => this.address1Input.focus() }
                      ref={(input) => this.password2Input = input}
                      returnKeyType="next"
                      autoCapitalize="none"
                      secureTextEntry
                      autoCorrect={false} />

                      <TextField
                              label='Address1'
                              onChangeText={(address1) => this.setState({ address1 })}
                              value={this.state.address1}
                              error={this.state.address1Error}
                              underlineColorAndroid="transparent"
                              onSubmitEditing={() => this.address2Input.focus() }
                              ref={(input) => this.address1Input = input}
                              returnKeyType="next"
                              autoCapitalize="none"
                              autoCorrect={false} />

                              <TextField
                              label='Address2'
                              onChangeText={(address2) => this.setState({ address2 })}
                              value={this.state.address2}
                              error={this.state.address2Error}
                              underlineColorAndroid="transparent"
                              onSubmitEditing={() => this.cityInput.focus() }
                              ref={(input) => this.address2Input = input}
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
                              autoCapitalize="words"
                              autoCorrect={false} />

                            <TextField
                              label='State (Example: NY, NJ )'
                              onChangeText={(state) => this.setState({ state })}
                              value={this.state.state}
                              error={this.state.stateError}
                              underlineColorAndroid="transparent"
                              onSubmitEditing={() => this.zipcodeInput.focus() }
                              ref={(input) => this.stateInput = input}
                              returnKeyType="next"
                              maxLength={2}
                              autoCapitalize="characters"
                              autoCorrect={false} />

                            <TextField
                              label='Zipcode'
                              onChangeText={(zipcode) => this.setState({ zipcode })}
                              value={this.state.zipcode}
                              error={this.state.zipcodeError}
                              underlineColorAndroid="transparent"
                              ref={(input) => this.zipcodeInput = input}
                              onSubmitEditing={() => this.phone1Input.focus() }
                              returnKeyType="next"
                              maxLength={5}
                              keyboardType="numeric"
                              autoCorrect={false} />

                               <TextField
                              label='Phone'
                              onChangeText={(phone1) => this.setState({ phone1 })}
                              value={this.state.phone1}
                              error={this.state.phone1Error}
                              underlineColorAndroid="transparent"
                              ref={(input) => this.phone1Input = input}
                              returnKeyType="done"
                              maxLength={10}
                              keyboardType="numeric"
                              autoCorrect={false} />


<View style={{ marginBottom: 10 }}>

                                     <Dropdown   
                                          data={data}
        label='How did you hear about us?'
        value={this.state.ddlSelectedValue}
        onChangeText={(value,index,data)=>this.setSelectedStateValue(value)}
        error={this.state.ddlSelectedValueError}
        
      />

</View>

     
                </View>
            )
        }
        return (
            <View style={styles.shoppingCartContainer}>
                <View style={{ flex: 1 }}>
                    <View style={styles.progressContainer}>
                        <View style={[styles.progressBigCircle, styles.progressActive]} />
                        <View style={styles.progressLine} />
                        <View style={styles.progressSmallCircle} />
                        <View style={styles.progressLine} />
                        <View style={styles.progressSmallCircle} />
                        <View style={styles.progressLine} />
                        <View style={styles.progressBigCircle} />
                    </View>
                    <View style={styles.shoppingCartList}>
                        <KeyboardAwareScrollView keyboardOpeningTime={0} extraHeight={270} >
                            {authenticationContainer}
                            <Modal
                              hideOnBack={false}
                              isVisible={this.state.loading}>
                                <View style={styles.loadingModal}>
                                    <Text>Processing</Text>
                                    <ActivityIndicator size="large" />
                                </View>
                            </Modal>
                        </KeyboardAwareScrollView>
                    </View>
                    <TouchableOpacity onPress={() => this.submitNext()} style={styles.shoppingCartCheckout} >
                        <Text style={styles.shoppingCartCheckoutText}>NEXT</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userState: state.user,
        productState: state.product,
    }
}
function matchDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Step1Screen)
