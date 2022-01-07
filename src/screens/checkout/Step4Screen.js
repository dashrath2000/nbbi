import React from 'react'
import { View, ScrollView, Text, AsyncStorage, ActivityIndicator, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'
import Modal from 'react-native-modal'
import Button from 'react-native-button'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from '../../utils/style'
import * as authActions from '../../actions/authAction'

class Step4Screen extends React.Component {
    constructor(props) {
        super(props)

        this.finalizePurchase = this.finalizePurchase.bind(this)
    }

    finalizePurchase() {


                  
   

       const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'ShoppingCartStack' })],
            params: { success: true },
        })
        this.props.actions.setShoppingNavigate(true)
           .then(() => this.props.navigation.dispatch(resetAction))

         // this.props.navigation.navigate('BenefitStackNavigator')

    }

    render() {
        let errorMsg
        if (this.props.productState.process_order_response) {
            errorMsg = (
                <View style={{ marginTop: 25, marginHorizontal: 10 }}>
                    <Text style={styles.error}>There was some issues processing your payment</Text>
                    <Text style={styles.error}>Please call 877-271-6559</Text>
                    <Text style={styles.error}>Error: {JSON.stringify(this.props.productState.process_order_response)}</Text>
                </View>
            )
        }
        return (
            <View style={styles.shoppingCartTotal}>
                <Text style={{ fontSize: 40, margin: 25, textAlign: 'center' }}>Thank you for your purchase</Text>
                <Button
                  onPress={this.finalizePurchase}
                  style={styles.skipButton} >
                    VIEW YOUR BENEFITS
                </Button>
                {errorMsg}
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

export default connect(mapStateToProps, matchDispatchToProps)(Step4Screen)
