import React from 'react'
import { View, Platform, StatusBar, Image, Linking, Dimensions } from 'react-native'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import Button from 'react-native-button'
import LoginScreen from './screens/LoginScreen'
import ForgotPasswordScreen from './screens/ForgotPasswordScreen'
import RegisterScreen from './screens/RegisterScreen'
import AboutScreen from './screens/AboutScreen'
import SearchScreen from './screens/SearchScreen'
import ShoppingCartScreen from './screens/ShoppingCartScreen'
import ProductScreen from './screens/ProductScreen'
import ProductDetailsScreen from './screens/ProductDetailsScreen'
import AccountScreen from './screens/AccountScreen'
import BenefitScreen from './screens/BenefitScreen'
import BenefitDetailsScreen from './screens/BenefitDetailsScreen'
import AccountEditScreen from './screens/AccountEditScreen'
import DrugScreen from './screens/search/DrugScreen'
import VisionScreen from './screens/search/VisionScreen'
import DentalScreen from './screens/search/DentalScreen'
import PharmacyScreen from './screens/search/PharmacyScreen'
import Step1Screen from './screens/checkout/Step1Screen'
import Step2Screen from './screens/checkout/Step2Screen'
import Step3Screen from './screens/checkout/Step3Screen'
import Step4Screen from './screens/checkout/Step4Screen'
import styles from './utils/style'

const headerStyle = {
    marginTop: Platform.OS === 'android' ? 0 : 0,
}
 
    const dimensions = Dimensions.get('window');
    const deviceheight = dimensions.height;
    

function phoneCall() {
    phoneNumberUrl = 'tel:8772716559'
    Linking.canOpenURL(phoneNumberUrl).then(supported => {
        if (!supported) {
            console.error('Can\'t handle url: ' + url)
        } else {
            return Linking.openURL(phoneNumberUrl)
        }
    }).catch(err => console.error('An error occurred', err))
}

const ProfileStackNavigator = StackNavigator({
    Account: {
        screen: AccountScreen,
        navigationOptions: ({ navigation }) => {
            if (navigation.state.params && navigation.state.params.authenticated) {
                return {
                    title: 'My Account',
                    headerStyle,
                    headerRight: (
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Button onPress={() => phoneCall()}>
                                <Image style={styles.stackNavIcon} source={require('./assets/flaticon/164-phone-call.png')} />
                            </Button>
                            <Button onPress={() => navigation.navigate('InfoNavigator')}>
                                <Image style={styles.stackNavIcon} source={require('./assets/flaticon/info.png')} />
                            </Button>

                           

                        </View>
                    )
                }
            } else {
                return {
                    title: 'My Account',
                    headerStyle,
                    headerRight: (
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Button onPress={() => phoneCall()}>
                                <Image style={styles.stackNavIcon} source={require('./assets/flaticon/164-phone-call.png')} />
                            </Button>
                            <Button onPress={() => navigation.navigate('InfoNavigator')}>
                                <Image style={styles.stackNavIcon} source={require('./assets/flaticon/info.png')} />
                            </Button>


                        </View>
                    )
                }
            }
        }
    },
    AccountEditScreen: {
        screen: AccountEditScreen,
        navigationOptions: {
            title: 'Edit Account',
            headerStyle,
        }
    },
    ProductDetail: {
        screen: BenefitDetailsScreen,
        navigationOptions: {
            title: 'Product Details',
            headerStyle,
        }
    },
})

const AboutStackNavigator = StackNavigator({
    Account: {
        screen: AboutScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Information',
            headerStyle,
            headerRight: (
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Button onPress={() => phoneCall()}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/164-phone-call.png')} />
                    </Button>
                    <Button onPress={() => navigation.navigate('MainNavigator')}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/045-shop.png')} />
                    </Button>
                </View>
            ),
        })
    },
})

const BenefitStackNavigator = StackNavigator({
    BenefitStack: {
        screen: BenefitScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Benefits',
            headerStyle,
            headerRight: (
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Button onPress={() => phoneCall()}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/164-phone-call.png')} />
                    </Button>
                    <Button onPress={() => navigation.navigate('InfoNavigator')}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/info.png')} />
                    </Button>
                    
                    <Button onPress={() => navigation.navigate('ShoppingCart')}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/085-commerce.png')} />
                    </Button>
                </View>
            ),
        })
    },
    BenefitDetails: {
        screen: BenefitDetailsScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Details',
            headerStyle,
            headerRight: (
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Button onPress={() => phoneCall()}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/164-phone-call.png')} />
                    </Button>
                    <Button onPress={() => navigation.navigate('InfoNavigator')}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/info.png')} />
                    </Button>
                    <Button onPress={() => navigation.navigate('ShoppingCart')}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/085-commerce.png')} />
                    </Button>
                </View>
            ),
        })
    },
})

const SearchStackNavigator = StackNavigator({
    SearchStack: {
        screen: SearchScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Search',
            headerStyle,
            headerRight: (
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Button onPress={() => phoneCall()}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/164-phone-call.png')} />
                    </Button>
                    <Button onPress={() => navigation.navigate('InfoNavigator')}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/info.png')} />
                    </Button>
                    <Button onPress={() => navigation.navigate('ShoppingCart')}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/085-commerce.png')} />
                    </Button>
                </View>
            ),
        })
    },
    Doctor: {
        screen: DrugScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Find Doctor',
            headerStyle,
            headerRight: (
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Button onPress={() => phoneCall()}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/164-phone-call.png')} />
                    </Button>
                    <Button onPress={() => navigation.navigate('InfoNavigator')}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/info.png')} />
                    </Button>
                    <Button onPress={() => navigation.navigate('ShoppingCart')}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/085-commerce.png')} />
                    </Button>
                </View>
            ),
        })
    },
    Dental: {
        screen: DentalScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Find Dental',
            headerStyle,
            headerRight: (
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Button onPress={() => phoneCall()}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/164-phone-call.png')} />
                    </Button>
                    <Button onPress={() => navigation.navigate('InfoNavigator')}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/info.png')} />
                    </Button>
                    <Button onPress={() => navigation.navigate('ShoppingCart')}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/085-commerce.png')} />
                    </Button>
                </View>
            ),
        })
    },
    Pharmacy: {
        screen: PharmacyScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Find Pharmacy',
            headerStyle,
            headerRight: (
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Button onPress={() => phoneCall()}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/164-phone-call.png')} />
                    </Button>
                    <Button onPress={() => navigation.navigate('InfoNavigator')}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/info.png')} />
                    </Button>
                    <Button onPress={() => navigation.navigate('ShoppingCart')}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/085-commerce.png')} />
                    </Button>
                </View>
            ),
        })
    },
    Vision: {
        screen: VisionScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Find Vision',
            headerStyle,
            headerRight: (
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Button onPress={() => phoneCall()}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/164-phone-call.png')} />
                    </Button>
                    <Button onPress={() => navigation.navigate('InfoNavigator')}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/info.png')} />
                    </Button>
                    <Button onPress={() => navigation.navigate('ShoppingCart')}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/085-commerce.png')} />
                    </Button>
                </View>
            ),
        })
    },
    DrugFinder: {
        screen: DrugScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Find Drug',
            headerStyle,
            headerRight: (
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Button onPress={() => phoneCall()}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/164-phone-call.png')} />
                    </Button>
                    <Button onPress={() => navigation.navigate('InfoNavigator')}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/info.png')} />
                    </Button>
                    <Button onPress={() => navigation.navigate('ShoppingCart')}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/085-commerce.png')} />
                    </Button>
                </View>
            ),
        })
    },
})

const ProductStackNavigator = StackNavigator({
    ProductStack: {
        screen: ProductScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Products',
            headerStyle,
            headerRight: (
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Button onPress={() => phoneCall()}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/164-phone-call.png')} />
                    </Button>
                    <Button onPress={() => navigation.navigate('InfoNavigator')}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/info.png')} />
                    </Button>
                    <Button onPress={() => navigation.navigate('ShoppingCart')}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/085-commerce.png')} />
                    </Button>
                </View>
            ),
        })
    },
    ProductDetailsStack: {
        screen: ProductDetailsScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Product Details',
            headerStyle,
            headerRight: (
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Button onPress={() => phoneCall()}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/164-phone-call.png')} />
                    </Button>
                    <Button onPress={() => navigation.navigate('InfoNavigator')}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/info.png')} />
                    </Button>
                    <Button onPress={() => navigation.navigate('ShoppingCart')}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/085-commerce.png')} />
                    </Button>
                </View>
            ),
        })
    },
})

const MainTabNavigator = TabNavigator({
    Benefit: {
        screen: BenefitStackNavigator,
        navigationOptions: {
            tabBarLabel: 'Benefits',
            tabBarIcon: ({ tintColor }) => (
                <Image style={[styles.tabNavIcon, {tintColor: tintColor}]} source={require('./assets/flaticon/121-wallet.png')} />
            )
        }
    },
    Product: {
        screen: ProductStackNavigator,
        navigationOptions: {
            tabBarLabel: 'Shop',
            tabBarIcon: ({ tintColor }) => (
                <Image style={[styles.tabNavIcon, {tintColor: tintColor}]} source={require('./assets/flaticon/031-package.png')} />
            )
        }
    },
    Search: {
        screen: SearchStackNavigator,
        navigationOptions: {
            tabBarLabel: 'Search',
            tabBarIcon: ({ tintColor }) => (
                <Image style={[styles.tabNavIcon, {tintColor: tintColor}]} source={require('./assets/flaticon/139-search.png')} />
            )
        }
    },
    Profile: {
        screen: ProfileStackNavigator,
        navigationOptions: {
            tabBarLabel: 'Account',
            tabBarIcon: ({ tintColor }) => (
                <Image style={[styles.tabNavIcon, {tintColor: tintColor}]} source={require('./assets/flaticon/064-profile.png')} />
            )
        }
    },
},
{
    initialRouteName: 'Benefit',
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: '#bdbdbd',
        showIcon: true,
        showLabel: true,
        allowFontScaling: false,
        labelStyle: {
    
            fontSize: deviceheight > 500 ? 12 : 9 ,
        },
        style: {
            backgroundColor: '#0088b6',
        }
    },
})

const LoginStackNavigator = StackNavigator({
    LoginStack: {
        screen: LoginScreen,
        navigationOptions: {
            title: 'Login',
            header: null,
        }
    },
    ForgotPasswordStack: {
        screen: ForgotPasswordScreen,
        navigationOptions: {
            title: 'Forgot Password',
            headerStyle,
        }
    },
    RegisterStack: {
        screen: RegisterScreen,
        navigationOptions: {
            title: 'Register',
            headerStyle,
        }
    },
})

const ShoppingCartStackNavigator = StackNavigator({
    ShoppingCartStack: {
        screen: ShoppingCartScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Shopping Cart',
            headerStyle,
            headerRight: (
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Button onPress={() => phoneCall()}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/164-phone-call.png')} />
                    </Button>
                    <Button onPress={() => navigation.navigate('MainNavigator')}>
                        <Image style={styles.stackNavIcon} source={require('./assets/flaticon/045-shop.png')} />
                    </Button>
                </View>
            ),
        })
    },
    Step1: {
        screen: Step1Screen,
        navigationOptions: {
            title: 'Step 1',
            headerStyle,
        }
    },
    Step2: {
        screen: Step2Screen,
        navigationOptions: {
            title: 'Step 2',
            headerStyle,
        }
    },
    Step3: {
        screen: Step3Screen,
        navigationOptions: {
            title: 'Step 3',
            headerStyle,
        }
    },
    Step4: {
        screen: Step4Screen,
        navigationOptions: {
            title: 'Step 4',
            headerStyle,
        }
    },
    Step5: {
        screen: Step4Screen,
        navigationOptions: {
            title: 'Step 5',
            headerStyle,
        }
    },
    
})

export const RootNavigator = DrawerNavigator(
    {
        Login: {
            screen: LoginStackNavigator,
            navigationOptions: {
                title: 'Login',
                drawerLockMode: 'locked-closed',
            }
        },
        ShoppingCart: {
            screen: ShoppingCartStackNavigator,
            navigationOptions: {
                title: 'Shopping Cart',
                drawerLockMode: 'locked-closed',
            }
        },
        InfoNavigator: {
            screen: AboutStackNavigator,
            navigationOptions: {
                title: 'Info',
                drawerLockMode: 'locked-closed',
            }
        },
        MainNavigator: {
            screen: MainTabNavigator,
            navigationOptions: {
                title: 'Personal',
                drawerLockMode: 'locked-closed',
            }
        },
    },
    {
        initialRouteName: 'Login',
    },
)
