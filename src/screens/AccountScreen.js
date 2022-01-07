import React from 'react'
import { View, ScrollView, Text, AsyncStorage, ActivityIndicator, Image, Alert } from 'react-native'
import Button from 'react-native-button'
import Modal from 'react-native-modal'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import BackgroundGeolocation from '@mauron85/react-native-background-geolocation'
import styles from '../utils/style'
import { getCredentials, onSignOut } from '../utils/auth'
import Unauthorized from '../components/Unauthorized'
import Personal from '../components/profile/Personal'
import Account from '../components/profile/Account'
import ProductList from '../components/profile/ProductList'
import * as authActions from '../actions/authAction'

class AccountScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            template: 'Account',
            loading: false,
        }

        this.logout = this.logout.bind(this)
        this.geofencingSwitchChange = this.geofencingSwitchChange.bind(this)
        this.nbbiUpdatesSwitchChange = this.nbbiUpdatesSwitchChange.bind(this)
        this.cardExpSwitchChange = this.cardExpSwitchChange.bind(this)
        this.getProductDetails = this.getProductDetails.bind(this)
        this.initialDataLoad = this.initialDataLoad.bind(this)
    }

    componentDidMount() {
        getCredentials()
                        .then((creds) => this.props.actions.getUser(creds.username))
                        .then((data) => {
                         
                          
    
                        })
                        this.setState({ loading: true })

            if (!this.props.userState.initialDataLoad) {
                this.initialDataLoad()
            } else {
                this.setState({ loading: false })
            }
        if (!this.props.userState.initialDataLoad) {
            if (this.props.userState.authentication === 'loggedin') {
                this.props.navigation.setParams({ authenticated: true })
            } else {
                this.props.navigation.setParams({ authenticated: false })
            }
        }
    }

    logout() {
        onSignOut()
          .then(() => {
            this.props.actions.logout()
            this.props.navigation.navigate('Login')
          })
    }

    geofencingSwitchChange(geofencing) {
        
    }

    nbbiUpdatesSwitchChange(nbbiUpdates) {
        AsyncStorage.setItem('nbbiupdates', nbbiUpdates.toString())
        this.props.actions.setNbbiUpdates(nbbiUpdates)
    }

    cardExpSwitchChange(cardExp) {
        AsyncStorage.setItem('cardexp', cardExp.toString())
        this.props.actions.setCardExp(cardExp)
    }

    getProductDetails(productID) {
        this.props.actions.setSelectedProduct(productID)
            .then(() => this.props.navigation.navigate('ProductDetail'))
    }

    initialDataLoad() {
    
        if (this.props.userState.authentication === 'loggedin') {

            Promise.all([
                getCredentials()
                    .then((creds) => this.props.actions.getUser(creds.username))
                    .then((data) => {
                        const agentId = data.action.payload.method.users[0].user[0].brokerid[0]
                        this.props.actions.getAgent(agentId)
                        this.props.actions.getProducts(agentId)
                    }),             
            ])
                .then(() => this.setState({ loading: false }))
               
                .catch(() => this.setState({ loading: false }))
        }else{
            this.setState({ loading: false })
        }
    }

    render() {
        if (this.props.userState.authentication !== 'loggedin') {
            return <Unauthorized userData={this.props.userState} logout={this.logout} geofencingSwitchChange={this.geofencingSwitchChange} />
        }

        return (
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Account
                          userData={this.props.userState}
                          geofencingSwitchChange={this.geofencingSwitchChange}
                          nbbiUpdatesSwitchChange={this.nbbiUpdatesSwitchChange}
                          cardExpSwitchChange={this.cardExpSwitchChange} />

                        <View style={{ alignItems: 'center' }}>
                            <Button
                              onPress={this.logout}
                              style={{ color: '#10ABDD', fontSize: 22 }} >
                                Logout
                            </Button>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
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

export default connect(mapStateToProps, matchDispatchToProps)(AccountScreen)
