import React from 'react'
import moment from 'moment'
import { StatusBar, Dimensions, View, Text, TextInput, Image, ImageBackground, ActivityIndicator, Platform, AsyncStorage, Alert } from 'react-native'
import Modal from 'react-native-modal'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from 'react-native-button'
import Geocoder from 'react-native-geocoder'
import styles from '../utils/style'
// import PushNotificationIOS from '@react-native-community/push-notification-ios'
import PushNotification from 'react-native-push-notification'
import * as Animatable from 'react-native-animatable'
import { providerSearch } from '../utils/api/administrationApi'
import { onSignIn, isSignedIn } from '../utils/auth'
import { sleep } from '../utils/main'
import * as authActions from '../actions/authAction'
import { authenticateUser } from '../utils/api/enrollmentApi'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import BackgroundGeolocation from '@mauron85/react-native-background-geolocation'

class LoginScreen extends React.Component {
    constructor(props) {
        super(props)
        const dimensionsWidth = Dimensions.get('window').width
        const bgImgHeight = dimensionsWidth * 4 / 5
        this.state = {
            loadingLogin: false,
            dimensionsWidth,
            bgImgHeight,
        }

        this.authenticateLogin = this.authenticateLogin.bind(this)
        this.forgotPassword = this.forgotPassword.bind(this)
        this.skipLogin = this.skipLogin.bind(this)
    }

    //import PushNotification from 'react-native-push-notification'

    /*
react-native bundle --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --dev false --platform android --assets-dest ./android/app/src/main/res/
react-native run-android

for release apk in aab format

$ cd android
$ ./gradlew bundleRelease

or

for release apk in apk format

$ cd android
$ ./gradlew assembleRelease
    */



    async geofencingBackgroundTask(location) {
        const today = moment()
        const geofencingDate = await AsyncStorage.getItem('GEOFENCING_DATE')
        if (!today.isSame(moment(geofencingDate), 'd')) {
            AsyncStorage.setItem('GEOFENCING_DATE', today.format())
            AsyncStorage.removeItem('GEOFENCING_PHARMACIES_LIST')
            AsyncStorage.removeItem('GEOFENCING_ZIPCODE_LIST')
            AsyncStorage.removeItem('NOTIFICATION_SENT_LIST')
            return
        }
        const zipList = await AsyncStorage.getItem('GEOFENCING_ZIPCODE_LIST')
        const geofencingZipcodeList = zipList ? JSON.parse(zipList) : []
        console.log('zipcodeList: ', geofencingZipcodeList)
        Geocoder.geocodePosition({ lat: location.latitude, lng: location.longitude }).then(
            json => {
                for (let i = 0; i < json.length; i++) {
                    const zipcode = json[i].postalCode
                    if (zipcode.length === 5 && !geofencingZipcodeList.includes(zipcode)) {
                        geofencingZipcodeList.push(zipcode)
                        AsyncStorage.setItem('GEOFENCING_ZIPCODE_LIST', JSON.stringify(geofencingZipcodeList))
                        this.setProvidersGeofencing(zipcode)
                        break
                    }
                }
            },
            error => {
                // console.log(error)
            }
        )
        this.providersGeofencing(location)
    }

    async providersGeofencing(location) {
        console.log(location)
        const notificationSent = await AsyncStorage.getItem('NOTIFICATION_SENT_LIST')
        const notificationSentList = notificationSent ? JSON.parse(notificationSent) : []

        const pharmaciesString = await AsyncStorage.getItem('GEOFENCING_PHARMACIES_LIST')
        const pharmacies = pharmaciesString ? JSON.parse(pharmaciesString) : []
        console.log('[DEBUG] ASYNC GEO Value', pharmacies)
        const pharmacyLength = pharmacies.length
        let notFound = true
        for (let i = 0; i < pharmacyLength; i++) {
            const pharmacyLatLon = `${pharmacies[i].lat1}${pharmacies[i].lon1}`
            if ((!notificationSentList.includes(pharmacyLatLon)) && pharmacies[i].lat1 <= location.latitude && location.latitude <= pharmacies[i].lat2 &&
                pharmacies[i].lon1 <= location.longitude && location.longitude <= pharmacies[i].lon2) {
                console.warn('point is within polygon')
                notFound = false
                notificationSentList.push(pharmacyLatLon)
                AsyncStorage.setItem('NOTIFICATION_SENT_LIST', JSON.stringify(notificationSentList))
                let providerMessage = 'You are near a participating provider.'
                if (pharmacies[i].type === 'Pharmacy') {
                    providerMessage = 'You are near a participating pharmacy. Save on your prescription with the discount rx card.'
                } else if (pharmacies[i].type === 'Vision') {
                    providerMessage = 'You are near a participating vision provider. Save with the discount vision program.'
                } else if (pharmacies[i].type === 'Dental') {
                    providerMessage = 'You are near a participating dental provider. Save with the discount dental program.'
                }
                // PushNotification.localNotification({
                //     title: pharmacies[i].name,
                //     message: providerMessage,
                // })
                break
            }
        }
        // if (notFound) {
        //     PushNotification.localNotification({
        //         title: 'Geofencing ran but no hits',
        //         message: `list Length: ${pharmacyLength} - latitude: ${location.latitude} - longitude: ${location.longitude}`,
        //     })
        // }
        console.log('running Background done')
    }

    async setProvidersGeofencing(zipcode) {
        const pharmacyResponse = await providerSearch({
            providerTable: 'ALLpro',
            zipCode: zipcode,
            zipRadius: 0,
            speciality: '*',
            providerName: '*',
        })
        const providers = await AsyncStorage.getItem('GEOFENCING_PHARMACIES_LIST')
        const providersList = providers ? JSON.parse(providers) : []
        const distance = .0005
        const pharmacyList = pharmacyResponse.GetPharmacyListResult
        for (let i = 0; i < pharmacyList.length; i++) {
            const pharmacy = pharmacyList[i]
            const name = pharmacy.ProviderType === 'Pharmacy' ? pharmacy.ProviderName : pharmacy.ProviderGroup
            try {
                if (Platform.OS === 'ios') {
                    await sleep(2000)
                }
                let geoJson = await Geocoder.geocodeAddress(`${pharmacy.ProviderAddress}, ${pharmacy.ProviderCity}, ${pharmacy.ProviderState} - ${pharmacy.ProviderZipCode}`)
                const location = geoJson[0].position
                providersList.push({
                    name: name,
                    lat1: parseFloat(location.lat) - distance,
                    lon1: parseFloat(location.lng) - distance,
                    lat2: parseFloat(location.lat) + distance,
                    lon2: parseFloat(location.lng) + distance,
                    type: pharmacy.ProviderType,
                })
                console.log('added new geo')
            }
            catch (err) {
                console.log("Error fetching geodata:", err);
            }
        }
        AsyncStorage.setItem('GEOFENCING_PHARMACIES_LIST', JSON.stringify(providersList))
        console.log('Set provider geo list')
    }

    componentDidMount() {
        const props = this.props

        //  In the NBBI Discounts app once the user is logged in,  A background task will be started to find the nearest pharmacies based on the user's current location. 
        //We are using background mode because we have the motion tracking feature in the app to find the nearest pharmacies when the user is moving from one place to another.
        //If user reached a particular pharmacy a notification will be shown to the user.
        //This background location tracking task continuously happens in the application until the user stops the geofencing feature by clicking the switch button in the account tab.
        //This is a Key Feature of our App. 


        // PushNotification.configure({
        //     onNotification: function (notification) {
        //         console.log('NOTIFICATION:', notification)
        //         if (notification.message.includes('pharmacy')) {
        //             props.actions.navigateTo('Prescription')
        //         } else if (notification.message.includes('vision')) {
        //             props.actions.navigateTo('Vision')
        //         } else if (notification.message.includes('dental')) {
        //             props.actions.navigateTo('Dentachoice')
        //         }
        //         notification.finish(PushNotificationIOS.FetchResult.NoData)
        //     },
        // })

        BackgroundGeolocation.configure({
            desiredAccuracy: 0,
            stationaryRadius: 15,
            distanceFilter: 15,
            notificationTitle: 'NBBI Discounts',
            notificationText: 'Discount Health and Lifestyle Programs',
            debug: false,
            startOnBoot: true,
            stopOnTerminate: false,
            locationProvider: BackgroundGeolocation.ACTIVITY_PROVIDER,
            interval: 20000,
            fastestInterval: 10000,
            activitiesInterval: 20000,
            stopOnStillActivity: false,
            activityType: 'Fitness',
        });

        BackgroundGeolocation.on('location', (location) => {
            // handle your locations here
            // to perform long running operation on iOS
            // you need to create background task
            BackgroundGeolocation.startTask(taskKey => {
                // execute long running task
                // eg. ajax post location
                console.log('starting task:', taskKey)
                this.geofencingBackgroundTask(location)

                // IMPORTANT: task has to be ended by endTask
                BackgroundGeolocation.endTask(taskKey);
            });
        });

        BackgroundGeolocation.on('error', (error) => {
            console.log('[ERROR] BackgroundGeolocation error:', error);
        });

        BackgroundGeolocation.on('start', () => {
            console.log('[INFO] BackgroundGeolocation service has been started');
        });

        BackgroundGeolocation.on('stop', () => {
            console.log('[INFO] BackgroundGeolocation service has been stopped');
        });

        BackgroundGeolocation.on('authorization', (status) => {
            console.log('[INFO] BackgroundGeolocation authorization status: ' + status);
            if (status !== BackgroundGeolocation.AUTHORIZED) {
                // we need to set delay or otherwise alert may not be shown
                setTimeout(() =>
                    Alert.alert('App requires location tracking permission', 'Would you like to open app settings?', [
                        { text: 'Yes', onPress: () => BackgroundGeolocation.showAppSettings() },
                        { text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel' }
                    ]), 1000);
            }
        });

        BackgroundGeolocation.on('background', () => {
            console.log('[INFO] App is in background');
        });

        BackgroundGeolocation.on('foreground', () => {
            console.log('[INFO] App is in foreground');
        });

        AsyncStorage.getItem('geofencing')
            .then(res => {
                if (res === 'true') {
                    BackgroundGeolocation.checkStatus(status => {
                        // you don't need to check status before start (this is just the example)
                        if (!status.isRunning) {
                            BackgroundGeolocation.start(); //triggers start on start event
                        }
                    })
                }
            })

        isSignedIn()
            .then(res => {
                if (res) {
                    this.props.actions.login()
                        .then(() => this.props.navigation.navigate('MainNavigator'))
                }
            })
            .catch(err => Alert.alert(`An error occurred: ${err}`))
    }

    componentWillUnmount() {
        // unregister all event listeners
        BackgroundGeolocation.events.forEach(event => BackgroundGeolocation.removeAllListeners(event));


    }

    authenticateLogin() {
        this.setState({ loadingLogin: true })
        authenticateUser(this.emailInput._lastNativeText, this.passwordInput._lastNativeText)
            .then(response => {
                if (response === '0 ') {
                    this.setState({ errorMsg: 'Invalid username or password.', loadingLogin: false })
                } else if (response.charAt(0) === '1') {

                    const data = response.split('|')
                    Promise.all([
                        onSignIn(data[3]),
                        this.props.actions.login(),
                        this.setState({ loadingLogin: false }),
                    ])
                        .then(() => this.props.navigation.navigate('MainNavigator'))
                } else {

                    this.setState({ errorMsg: response, loadingLogin: false })
                }
            })
    }

    forgotPassword() {

        this.props.navigation.navigate('ForgotPasswordStack')
    }

    skipLogin() {

        this.props.navigation.navigate('MainNavigator')
    }

    render() {
        return (
            <View style={styles.mainLoginContainer}>
                <StatusBar hidden={true} />
                <View style={{ flex: 8 }}>
                    <KeyboardAwareScrollView>
                         <Image resizeMode="cover" style={{ width: this.state.dimensionsWidth, height: this.state.bgImgHeight }} source={require('../assets/appbg2.png')}  />
                        {/* {this.state.imageError && <Image resizeMode="cover" style={{ width: this.state.dimensionsWidth, height: this.state.bgImgHeight }} source={require('../assets/appbg.png')} />} */}
                        <View style={{ paddingHorizontal: 20 }}>
                            <Animatable.View animation="fadeInUp" delay={300} duration={600} style={[styles.inputContainer, { marginTop: Platform.OS === 'android' ? 0 : 15, paddingVertical: 0 }]}>
                                <Image style={{ width: 20, height: 20, marginRight: 10, marginTop: Platform.OS === 'android' ? 15 : 0, tintColor: '#b6b6b6' }} source={require('../assets/flaticon/064-profile.png')} />
                                <TextInput
                                    placeholder="Username"
                                    placeholderTextColor="#345d82"
                                    underlineColorAndroid="transparent"
                                    returnKeyType="next"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    ref={(input) => this.emailInput = input}
                                    onSubmitEditing={() => this.passwordInput.focus()}
                                    style={{ flex: 9 }} />
                            </Animatable.View>

                            <Animatable.View animation="fadeInUp" delay={300} duration={600} style={{ marginHorizontal: 15, marginBottom: 10 }}>
                                <View style={styles.horizontalLine} />
                            </Animatable.View>
                            <Animatable.View animation="fadeInUp" delay={600} duration={600} style={styles.inputContainer}>
                                <Image style={{ width: 20, height: 20, marginRight: 10, marginTop: Platform.OS === 'android' ? 15 : 0, tintColor: '#b6b6b6' }} source={require('../assets/flaticon/015-padlock.png')} />
                                <TextInput
                                    placeholder="Password"
                                    placeholderTextColor="#345d82"
                                    underlineColorAndroid="transparent"
                                    returnKeyType="go"
                                    secureTextEntry
                                    ref={(input) => this.passwordInput = input}
                                    onSubmitEditing={this.authenticateLogin}
                                    style={{ flex: 9 }} />
                            </Animatable.View>
                            <Animatable.View animation="fadeInUp" delay={600} duration={600} style={{ marginHorizontal: 15, marginBottom: 10 }}>
                                <View style={styles.horizontalLine} />
                            </Animatable.View>

                            <Text style={styles.error}>{this.state.errorMsg}</Text>

                            <Animatable.View animation="fadeIn" delay={900} duration={300}>
                                <Button
                                    onPress={this.authenticateLogin}
                                    containerStyle={styles.signInButtonContainer}
                                    style={styles.signInButton} >
                                    Sign In
                            </Button>
                            </Animatable.View>

                            <Animatable.View animation="fadeIn" delay={900} duration={300}>
                                <Button
                                    onPress={this.forgotPassword}
                                    style={{ fontSize: 15, margin: 10, color: '#345d82' }} >
                                    Forgot password?
                            </Button>
                            </Animatable.View>

                            <View style={{ flex: 1, marginTop: 20, marginBottom: 40 }}>
                                <View>
                                    <Button
                                        onPress={this.skipLogin}
                                        style={{ color: '#345d82', fontWeight: 'bold' }} >
                                        Don’t have a login? Continue as guest.
                                </Button>
                                </View>
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>

                <Modal
                    hideOnBack={false}
                    isVisible={this.state.loadingLogin}>
                    <View style={styles.loadingModal}>
                        <Text>Authorizing</Text>
                        <ActivityIndicator size="large" />
                    </View>
                </Modal>

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

export default connect(mapStateToProps, matchDispatchToProps)(LoginScreen)
