import React from 'react'
import { View, ScrollView, Text, Share, ActivityIndicator, Platform, Linking, AsyncStorage, Alert } from 'react-native'
import Button from 'react-native-button'
import Modal from 'react-native-modal'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from '../utils/style'
import { getCredentials, onSignOut } from '../utils/auth'
import Unauthorized from '../components/Unauthorized'
import BenefitList from '../components/benefit/BenefitList'
import * as authActions from '../actions/authAction'
import * as contants from '../utils/constants'
import { providerSearch } from '../utils/api/administrationApi'
import Geocoder from 'react-native-geocoder'
import { sleep } from '../utils/main'

class BenefitScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            JerryToken:'',
        }
     

        this.initialDataLoad = this.initialDataLoad.bind(this)
        this.getProductDetails = this.getProductDetails.bind(this)
        this.getLocationAsync = this.getLocationAsync.bind(this)
        this.shareApp = this.shareApp.bind(this)
        this.logout = this.logout.bind(this)
    }

    componentWillMount() {
        getCredentials()
                    .then((creds) => this.props.actions.getUser(creds.username))
                    .then((data) => {
                     
                      
                        this.setState({JerryToken:agentId})

                    }),
        this.setState({ loading: true })
        if (!this.props.userState.initialDataLoad) {
            this.initialDataLoad()
        } else {
            this.setState({ loading: false })
        }
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.userState.navigateTo) {
            this.props.actions.navigateTo(null)
            console.log(nextProps.userState.products)
            console.warn(nextProps.userState.navigateTo)
            const product = nextProps.userState.products.find(x => x.label.includes(nextProps.userState.navigateTo))
            console.warn(product)
            if (product)
                return this.getProductDetails(product.pdid)
            const shop = nextProps.productState.shop.find(x => x.LABEL.includes(nextProps.userState.navigateTo))
            console.warn(shop)
            if (shop) {
                return this.props.actions.setSelectedProductRate(shop)
                    .then(() => this.props.navigation.navigate('ProductDetailsStack'))
            }
        }
    }

    initialDataLoad() {

        this.getLocationAsync()

        if (this.props.userState.authentication === 'loggedin') {

            Promise.all([
                getCredentials()
                    .then((creds) => this.props.actions.getUser(creds.username))
                    .then((data) => {
                        const agentId = data.action.payload.method.users[0].user[0].brokerid[0]
                        this.props.actions.getAgent(agentId)
                        this.props.actions.getProducts(agentId)
                        console.log('>>>>>>>>>>>>>>>>>',agentId)
                        this.setState({JerryToken:agentId})

                    }),
                this.props.actions.emptyShoppingCart(),
                this.props.actions.getGeofencing(),
                this.props.actions.getNbbiUpdates(),
                this.props.actions.getCardExp(),
                this.props.navigation.setParams({ authenticated: true }),
            ])
                .then(() => this.setState({ loading: false }))
                .then(() => this.props.navigation.navigate('Benefit'))
                .catch(() => this.setState({ loading: false }))
        } else {
            Promise.all([
                this.props.actions.emptyShoppingCart(),
                this.props.actions.getGeofencing(),
                this.props.actions.setDefaultProducts(),
                this.props.actions.getProducts(),
                this.props.navigation.setParams({ authenticated: false }),
            ])
                .then(() => this.setState({ loading: false }))
                .then(() => this.props.navigation.navigate('Benefit'))
                .catch(() => this.setState({ loading: false }))
        }
        this.props.actions.initialDataLoad()
    }

    getLocationAsync() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                Geocoder.geocodePosition({ lat: position.coords.latitude, lng: position.coords.longitude }).then(
                    json => {
                        for (let i = 0; i < json.length; i++) {
                            if (json[i].postalCode.length === 5) {
                                this.props.actions.setAllZipcode(json[i].postalCode)
                                break
                            }
                        }
                    },
                    error => {

                        // console.error(error)
                    }
                )
            },
            (error) => {

                // console.error(error)
            }
        )
    }

    getProductDetails(productID) {
        this.props.actions.setSelectedProduct(productID)
            .then(() => this.props.navigation.navigate('BenefitDetails'))
    }

    shareApp() {
        Share.share({
            message: 'I’m using the NBBI app to save money with discount health & lifestyle benefits. https://nbbihome.com/mobile',
            url: 'https://nbbihome.com/mobile/',
            title: 'NBBI',
        })
    }

    logout() {
        onSignOut()
            .then(() => {
                this.props.actions.logout()
                this.props.navigation.navigate('Login')
            })
    }

    render() {
        if (this.state.loading) {
            return (
                <Modal
                    hideOnBack={false}
                    isVisible={this.state.loading}>
                    <View style={styles.loadingModal}>
                        <Text>Loading</Text>
                        <ActivityIndicator size="large" />
                    </View>
                </Modal>
            )
        }

        // if (this.props.userState.error) {
        //     return <View>
        //         <Text>There was an error loading the benefits. Please try again later.</Text>
        //         <Text style={{ color: 'red' }}>{this.props.userState.error}</Text>
        //     </View>

        // }

        if (this.props.userState.products && this.props.userState.products.length === 0) {
            return <View>
                <Text>No products purchased </Text>
            </View>
        }

        return (
            <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: "#C0C0C0" }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Button
                                onPress={this.shareApp}
                                style={{ margin: 10, color: '#345d82' }} >
                                <Text style={{ margin: 10, fontSize: 17, fontWeight: 'bold', color: '#345d82' }}>Share App</Text>
                            </Button>
                            <Button
                                onPress={() => Linking.openURL('https://www.nbbihome.com/mobile/guide')}
                                style={{ margin: 10, color: '#345d82' }} >
                                <Text style={{ margin: 10, fontSize: 17, fontWeight: 'bold', color: '#345d82' }}> How to use? </Text>
                            </Button>
                        </View>

                        <BenefitList userState={this.props.userState} getProductDetails={this.getProductDetails} JerryToken={this.state.JerryToken} isTypeTwoUser={this.props.isTypeTwoUser} />

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
        productState: state.product,
        isTypeTwoUser: (state.user.agent && state.user.agent.BROKERFLAG === 'EligibilityFile'),
    }
}
function matchDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(BenefitScreen)
