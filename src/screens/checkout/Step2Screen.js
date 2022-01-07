import React from 'react'
import { View, ActivityIndicator, Text, TouchableOpacity, TextInput, Image, Dimensions, Platform, Switch, CheckBox, Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import cardValidator from 'card-validator'
import { TextField } from 'react-native-material-textfield'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from '../../utils/style'
import * as authActions from '../../actions/authAction'

class Step2Screen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            check:false,
            address_edt:true,
            city_edt:true,
            state_edt:true,
            zip_edt:true,
            ccExp: '',
        }

        this.submitRegister = this.submitRegister.bind(this)
    }

    componentDidMount() {
        // calculate image width and height 
        const screenWidth = Dimensions.get('window').width - 100
        const scaleFactor = 1104 / screenWidth
        const imageHeight = 254 / scaleFactor
        this.setState({imgWidth: screenWidth, imgHeight: imageHeight})


      
    }

    submitRegister() {
        const numberValidation = cardValidator.number(this.state.ccNumber)
        if (!numberValidation.isValid) {
            return this.setState({ errorMsg: 'Invalid Credit Card', ccNumberError: 'Invalid number' })
        }
        this.setState({ ccNumberError: '' })

        const dateValidation = cardValidator.expirationDate(this.state.ccExp)
        if (!(dateValidation.isValid && this.state.ccExp.length === 7)) {
            return this.setState({ errorMsg: 'Invalid Credit Card', ccExpError: 'Invalid date (mm/yyyy)' })
        }
        this.setState({ ccExpError: '' })

        if (!(!isNaN(this.state.ccSecurityCode) && this.state.ccSecurityCode.length >= 3)) {
            return this.setState({ errorMsg: 'Invalid Credit Card', ccSecurityCodeError: 'Invalid CVC'})
        }
        this.setState({ ccSecurityCodeError: '' })

        this.setState({ errorMsg: '' })

        let ccType = null
        if (numberValidation.card.type === 'visa') {
            ccType = 'Visa'
        } else if (numberValidation.card.type === 'master-card') {
            ccType = 'Mastercard'
        } else if (numberValidation.card.type === 'american-express') {
            ccType = 'American Express'
        } else if (numberValidation.card.type === 'discover') {
            ccType = 'Discover'
        } else {
            ccType = numberValidation.card.type
        }

       

        const data = {
            step2: {
                paymentType: 'CC',
                ccType: ccType,
                ccNumber: this.state.ccNumber.replace(/\s/g, ''),
                ccExpMonth: dateValidation.month,
                ccExpYear: dateValidation.year,
                ccSecurityCode: this.state.ccSecurityCode,
                firstname: this.state.firstname,
                lastname:this.state.lastname,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                zipcode: this.state.zipcode,
            },
        }
        this.props.actions.addCheckoutData(data)
        return this.props.navigation.navigate('Step3')
    }

    checkBoxTest()
    {

      if (this.props.userState.authentication === 'loggedin') {

this.setState({check:!this.state.check})

if(!this.state.check)
{

if(this.props.userState.address2.length == 0)
       {
     this.setState({ 

                address:this.props.userState.address1,
                city:this.props.userState.city,
                state:this.props.userState.state,
                zipcode:this.props.userState.zipcode,
                

              })

this.setState({

address_edt:false,
city_edt:false,
state_edt:false,
zip_edt:false,

})
       }
       else
       {
     this.setState({ 

                address:this.props.userState.address1 +"  "+ this.props.userState.address2,
                city:this.props.userState.city,
                state:this.props.userState.state,
                zipcode:this.props.userState.zipcode,
                

              })

this.setState({

address_edt:false,
city_edt:false,
state_edt:false,
zip_edt:false,

})

       }
  
          

}else
{
                 this.setState({ 

                address:'',
                city:'',
                state:'',
                zipcode:'',

              })

  this.setState({

address_edt:true,
city_edt:true,
state_edt:true,
zip_edt:true,

})


}

      }
      else
      {
this.setState({check:!this.state.check})

if(!this.state.check)
{
  
       if(this.props.productState.checkout_data.step1.address2.length == 0)
       {
       this.setState({ 

                address:this.props.productState.checkout_data.step1.address1,
                city:this.props.productState.checkout_data.step1.city,
                state:this.props.productState.checkout_data.step1.state,
                zipcode:this.props.productState.checkout_data.step1.zipcode,
                

              })

this.setState({

address_edt:false,
city_edt:false,
state_edt:false,
zip_edt:false,

})
       }
       else
       {

               this.setState({ 

                address:this.props.productState.checkout_data.step1.address1 + "  "+ this.props.productState.checkout_data.step1.address2,
                city:this.props.productState.checkout_data.step1.city,
                state:this.props.productState.checkout_data.step1.state,
                zipcode:this.props.productState.checkout_data.step1.zipcode,
                

              })

this.setState({

address_edt:false,
city_edt:false,
state_edt:false,
zip_edt:false,

})


       }

        





}else
{


                 this.setState({ 

                address:'',
                city:'',
                state:'',
                zipcode:'',

              })

  this.setState({

address_edt:true,
city_edt:true,
state_edt:true,
zip_edt:true,

})


}
      }

    }

    render() {

   if(Platform.OS === 'ios')
    {
return (
            <View style={styles.shoppingCartContainer}>
                <View style={{ flex: 1 }}>
                    <View style={styles.progressContainer}>
                        <View style={[styles.progressBigCircle, styles.progressActive]} />
                        <View style={[styles.progressLine, styles.progressActive]} />
                        <View style={[styles.progressSmallCircle, styles.progressActive]} />
                        <View style={styles.progressLine} />
                        <View style={styles.progressSmallCircle} />
                        <View style={styles.progressLine} />
                        <View style={styles.progressBigCircle} />
                    </View>
                    <View style={styles.shoppingCartList}>
                        <KeyboardAwareScrollView keyboardOpeningTime={0} extraHeight={270}>
                            <View>
                                <Text style={{ }}>Credit Card Payment</Text>
                                <Image style={{ width: this.state.imgWidth, height: this.state.imgHeight }} source={require('../../assets/credit-cards.png')} />
                            </View>
                            <TextField
                              label='First Name (as it appears on your card)'
                              onChangeText={(firstname) => this.setState({ firstname })}
                              value={this.state.firstname}
                              error={this.state.firstnameError}
                              underlineColorAndroid="transparent"
                              onSubmitEditing={() => this.lastnameInput.focus() }
                              ref={(input) => this.firstnameInput = input}
                              returnKeyType="next"
                              autoCapitalize="words"
                              autoCorrect={false} />

                              <TextField
                              label='Last Name (as it appears on your card)'
                              onChangeText={(lastname) => this.setState({ lastname })}
                              value={this.state.lastname}
                              error={this.state.lastnameError}
                              underlineColorAndroid="transparent"
                              onSubmitEditing={() => this.ccNumberInput.focus() }
                              ref={(input) => this.lastnameInput = input}
                              returnKeyType="next"
                              autoCapitalize="words"
                              autoCorrect={false} />

                            <TextField
                              label='Credit Card Number'
                              onChangeText={(ccNumber) => this.setState({ ccNumber })}
                              value={this.state.ccNumber}
                              error={this.state.ccNumberError}
                              underlineColorAndroid="transparent"
                              onSubmitEditing={() => this.ccExpInput.focus() }
                              ref={(input) => this.ccNumberInput = input}
                              returnKeyType="next"
                              keyboardType="numeric"
                              autoCapitalize="words"
                              autoCorrect={false} />

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TextField
                              containerStyle={{ flex: 3, marginRight: 10 }}
                              label='Expiration Date'
                              title='(mm/yyyy)'
                              onChangeText={(ccExp) => this.setState({ ccExp })}
                              value={this.state.ccExp}
                              error={this.state.ccExpError}
                              underlineColorAndroid="transparent"
                              onSubmitEditing={() => this.ccSecurityCodeInput.focus() }
                              ref={(input) => this.ccExpInput = input}
                              returnKeyType="next"
                              autoCapitalize="words"
                              autoCorrect={false} />

                            <TextField
                              containerStyle={{ flex: 3, marginLeft: 10 }}
                              label='CVC'
                              onChangeText={(ccSecurityCode) => this.setState({ ccSecurityCode })}
                              value={this.state.ccSecurityCode}
                              error={this.state.ccSecurityCodeError}
                              underlineColorAndroid="transparent"
                              maxLength={4}
                              onSubmitEditing={() => this.addressInput.focus() }
                              ref={(input) => this.ccSecurityCodeInput = input}
                              returnKeyType="next"
                              keyboardType="numeric"
                              autoCapitalize="words"
                              autoCorrect={false} />
                            </View>

            


<View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>

               <Switch 
          onValueChange={() => this.checkBoxTest()}
          value={this.state.check} 
        />
                            <Text style={{marginTop: 5 }}>Switch if Billing Address same as Primary Address</Text>
                            

                            </View>
                            

                            <TextField
                              label='Address'
                              onChangeText={(address) => this.setState({ address })}
                              editable = {this.state.address_edt} 
                              value={this.state.address}
                              error={this.state.addressError}
                              underlineColorAndroid="transparent"
                              onSubmitEditing={() => this.cityInput.focus() }
                              ref={(input) => this.addressInput = input}
                              returnKeyType="next"
                              autoCapitalize="none"
                              autoCorrect={false} />

                            <TextField
                              label='City'
                              onChangeText={(city) => this.setState({ city })}
                              editable = {this.state.city_edt}
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
                              editable = {this.state.state_edt}
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
                              editable = {this.state.zip_edt}
                              value={this.state.zipcode}
                              error={this.state.zipcodeError}
                              underlineColorAndroid="transparent"
                              ref={(input) => this.zipcodeInput = input}
                              returnKeyType="done"
                              keyboardType="numeric"
                              maxLength={5}
                              autoCorrect={false} />
                        </KeyboardAwareScrollView>
                    </View>
                    <TouchableOpacity onPress={() => this.submitRegister()} style={styles.shoppingCartCheckout} >
                        <Text style={styles.shoppingCartCheckoutText}>NEXT</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
    else  if(Platform.OS === 'android')
    {
return (
            <View style={styles.shoppingCartContainer}>
                <View style={{ flex: 1 }}>
                    <View style={styles.progressContainer}>
                        <View style={[styles.progressBigCircle, styles.progressActive]} />
                        <View style={[styles.progressLine, styles.progressActive]} />
                        <View style={[styles.progressSmallCircle, styles.progressActive]} />
                        <View style={styles.progressLine} />
                        <View style={styles.progressSmallCircle} />
                        <View style={styles.progressLine} />
                        <View style={styles.progressBigCircle} />
                    </View>
                    <View style={styles.shoppingCartList}>
                        <KeyboardAwareScrollView keyboardOpeningTime={0} extraHeight={270}>
                            <View>
                                <Text style={{ }}>Credit Card Payment</Text>
                                <Image style={{ width: this.state.imgWidth, height: this.state.imgHeight }} source={require('../../assets/credit-cards.png')} />
                            </View>
                            <TextField
                              label='First Name (as it appears on your card)'
                              onChangeText={(firstname) => this.setState({ firstname })}
                              value={this.state.firstname}
                              error={this.state.firstnameError}
                              underlineColorAndroid="transparent"
                              onSubmitEditing={() => this.lastnameInput.focus() }
                              ref={(input) => this.firstnameInput = input}
                              returnKeyType="next"
                              autoCapitalize="words"
                              autoCorrect={false} />

                              <TextField
                              label='Last Name (as it appears on your card)'
                              onChangeText={(lastname) => this.setState({ lastname })}
                              value={this.state.lastname}
                              error={this.state.lastnameError}
                              underlineColorAndroid="transparent"
                              onSubmitEditing={() => this.ccNumberInput.focus() }
                              ref={(input) => this.lastnameInput = input}
                              returnKeyType="next"
                              autoCapitalize="words"
                              autoCorrect={false} />

                            <TextField
                              label='Credit Card Number'
                              onChangeText={(ccNumber) => this.setState({ ccNumber })}
                              value={this.state.ccNumber}
                              error={this.state.ccNumberError}
                              underlineColorAndroid="transparent"
                              onSubmitEditing={() => this.ccExpInput.focus() }
                              ref={(input) => this.ccNumberInput = input}
                              returnKeyType="next"
                              keyboardType="numeric"
                              autoCapitalize="words"
                              autoCorrect={false} />

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TextField
                              containerStyle={{ flex: 3, marginRight: 10 }}
                              label='Expiration Date'
                              title='(mm/yyyy)'
                              onChangeText={(ccExp) => this.setState({ ccExp })}
                              value={this.state.ccExp}
                              error={this.state.ccExpError}
                              underlineColorAndroid="transparent"
                              onSubmitEditing={() => this.ccSecurityCodeInput.focus() }
                              ref={(input) => this.ccExpInput = input}
                              returnKeyType="next"
                              autoCapitalize="words"
                              autoCorrect={false} />

                            <TextField
                              containerStyle={{ flex: 3, marginLeft: 10 }}
                              label='CVC'
                              onChangeText={(ccSecurityCode) => this.setState({ ccSecurityCode })}
                              value={this.state.ccSecurityCode}
                              error={this.state.ccSecurityCodeError}
                              underlineColorAndroid="transparent"
                              maxLength={4}
                              onSubmitEditing={() => this.addressInput.focus() }
                              ref={(input) => this.ccSecurityCodeInput = input}
                              returnKeyType="next"
                              keyboardType="numeric"
                              autoCapitalize="words"
                              autoCorrect={false} />
                            </View>

                            <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>

                            <CheckBox value={this.state.check} onChange={()=>this.checkBoxTest()}/>
                            <Text style={{marginTop: 5 }}>Check if Billing Address is the same as Primary Address</Text>
                            </View>

                            <TextField
                              label='Address'
                              onChangeText={(address) => this.setState({ address })}
                              editable = {this.state.address_edt} 
                              value={this.state.address}
                              error={this.state.addressError}
                              underlineColorAndroid="transparent"
                              onSubmitEditing={() => this.cityInput.focus() }
                              ref={(input) => this.addressInput = input}
                              returnKeyType="next"
                              autoCapitalize="none"
                              autoCorrect={false} />

                            <TextField
                              label='City'
                              onChangeText={(city) => this.setState({ city })}
                              editable = {this.state.city_edt}
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
                              editable = {this.state.state_edt}
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
                              editable = {this.state.zip_edt}
                              value={this.state.zipcode}
                              error={this.state.zipcodeError}
                              underlineColorAndroid="transparent"
                              ref={(input) => this.zipcodeInput = input}
                              returnKeyType="done"
                              keyboardType="numeric"
                              maxLength={5}
                              autoCorrect={false} />
                        </KeyboardAwareScrollView>
                    </View>
                    <TouchableOpacity onPress={() => this.submitRegister()} style={styles.shoppingCartCheckout} >
                        <Text style={styles.shoppingCartCheckoutText}>NEXT</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
       
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

export default connect(mapStateToProps, matchDispatchToProps)(Step2Screen)
