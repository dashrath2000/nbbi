import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { View, Dimensions, Platform, Text, TouchableOpacity, ImageBackground, Alert, Linking, AsyncStorage } from 'react-native'
import styles from '../../utils/style'
import { getProductImageByLabel } from '../../utils/main'



export default function Benefit({ product, userState, getProductDetails, color, isTypeTwoUser,JerryToken,Customurldata }) {
    const date = moment(product.dteffective, 'YYYY-MM-DD')
    const cancelledDate = moment(product.dtcancelled, 'YYYY-MM-DD')
    const imageSource = getProductImageByLabel(product.label)
    const departmentval = userState.agent ? userState.agent.DEPARTMENT : ""
    //const memberval = userState.memberid ? userState.memberid : ""
    //const memberval = "1234567890"
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9 / 16);
    const imageWidth = dimensions.width;
    const deviceheight = dimensions.height;
    console.log("Policy number is " + product.policynumber);
    console.log("isType two user id is " + isTypeTwoUser);
    console.log("member id id is " + userState.memberid);
 let url4 = (`https://${Customurldata[3]}`)
 let url2 = (`https://${Customurldata[2]}`)



//    const Token = 22
// let d = ({fined"}
    if (Customurldata[1] !== undefined)
    {
        if (product.pdid == '12152') {
            if (departmentval === '009893' || departmentval === '021783') {
                return (
                    <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                        <ImageBackground style={{ flex: 1, width: imageWidth, height: imageHeight, borderRadius: 10 }} source={{uri:Customurldata[0]}}>
                            <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 8 }} >
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 52, paddingLeft: 3 }}>
                                    <Text style={{ flex: 1, color: 'black', fontSize: 18, backgroundColor: 'transparent',fontFamily:'consola' }}>ID: {userState.agent ? userState.agent.DIVISION : ""}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 3 }}>
                                    <Text style={{ flex: 1, color: 'black', fontSize: 18,backgroundColor: 'transparent',fontFamily:'consola' }}>BIN: {userState.agent ? userState.agent.DEPARTMENT : ""}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 3 }}>
                                    <Text style={{ flex: 1, color: 'black', fontSize: 18, backgroundColor: 'transparent',fontFamily:'consola' }}>PCN: AE02</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 3 }}>
                                    <Text style={{ flex: 1, color: 'black', fontSize: 18,backgroundColor: 'transparent',fontFamily:'consola' }}>GRP: {userState.agent ? userState.agent.REGION : ""}</Text>
                                </View>
    
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between',paddingLeft:30}}>
                                    <Text style={{ flex: 1, color: 'blue', fontSize: 13,backgroundColor: 'transparent',paddingLeft:80,marginBottom:5 }}
                                    // onPress={() => Linking.openURL('https://www.ndnlookup.com')}>https://www.ndnlookup.com </Text>
                                     onPress={() => Linking.openURL(url2)}>{Customurldata[2]} </Text>
                                </View>

                        </ImageBackground>
                    </View>
                )
            }
            
         } else if (product.pdid === '20222') {
            if (departmentval === '009893' || departmentval === '021783') {
                return (
                    <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                        <ImageBackground resizeMode="cover" style={{ flex: 1, width: imageWidth, height: imageHeight, borderRadius: 10 }} source={{uri:Customurldata[1]}}>
                            <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15 }} >
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 55 }}>
                                    <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent', }}>1.Price your medications at:</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                    <Text onPress={() => Linking.openURL(url4)} style={{ flex: 1, color: '#225AE6', backgroundColor: 'transparent' }}>{Customurldata[3]}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
                                    <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent' }}>2.Order online or call 855-633-7977 to place your order</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                    <Text style={{ flex: 1, color: '#225AE6',  backgroundColor: 'transparent' }}>Rx GRP: {userState.agent ? userState.agent.REFERREDBY : ""}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                    <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent' }}>3.Your medications ship directly to you.</Text>
                                </View>
                            </TouchableOpacity>
                            
                        </ImageBackground>
                    </View>
                )
            }
           

        }

        else if (product.dtcancelled.length > 0) {
            return (
                <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                    <ImageBackground resizeMode="cover" style={{ width: '100%', height: undefined, borderRadius: 10 }} source={imageSource}>
                        <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15, opacity: 0.8, backgroundColor: color }} onPress={() => getProductDetails(product.pdid)}>
                            <Text style={{ fontSize: 20,  textAlign: 'center', color: 'white', backgroundColor: 'transparent' }}>{product.label}</Text>
                            <Text style={{ fontSize: 16, color: 'white', backgroundColor: 'transparent' }}>Member ID: {getMemberId(product, userState, isTypeTwoUser)}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                <Text style={{ flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>Effective Date</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                <Text style={{ flex: 1, fontSize: 18, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>{date.format('MM/DD/YYYY')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                <Text style={{ flex: 1, color: 'white', backgroundColor: 'transparent' }}>Card Holder</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                <Text style={{ flex: 1, fontSize: 18, color: 'white', backgroundColor: 'transparent' }}>{userState.firstname} {userState.lastname}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                <Text style={{ flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>Inactive Date</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                <Text style={{ flex: 1, fontSize: 18, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>{cancelledDate.format('MM/DD/YYYY')}</Text>
                            </View>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
            )
        }
        else {
            return (
                <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                    <ImageBackground resizeMode="cover" style={{ width: '100%', height: undefined, borderRadius: 10 }} source={imageSource}>
                        <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15, opacity: 0.8, backgroundColor: color }} onPress={() => getProductDetails(product.pdid)}>
                            <Text style={{ fontSize: 20,  textAlign: 'center', color: 'white', backgroundColor: 'transparent' }}>{product.label}</Text>
                            <Text style={{ fontSize: 16, color: 'white', backgroundColor: 'transparent' }}>Member ID: {getMemberId(product, userState, isTypeTwoUser)}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 30 }}>
                                <Text style={{ flex: 1, color: 'white', backgroundColor: 'transparent' }}>Card Holder</Text>
                                <Text style={{ flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>Effective Date</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 18, flex: 1, color: 'white', backgroundColor: 'transparent' }}>{userState.firstname} {userState.lastname}</Text>
                                <Text style={{ fontSize: 18, flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>{date.format('MM/DD/YYYY')}</Text>
                            </View>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
            )
        }
    }
    
    else {
        if (Platform.OS === 'ios') {
            if (deviceheight > 890) {
                if (product.pdid === '12152') {
                    if (departmentval === '009893' || departmentval === '021783') {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                                <ImageBackground style={{ flex: 1, width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 5 }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 65, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 20,fontFamily: 'consola', backgroundColor: 'transparent' }}>ID: {userState.agent ? userState.agent.DIVISION : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 20,fontFamily: 'consola',backgroundColor: 'transparent' }}>BIN: {userState.agent ? userState.agent.DEPARTMENT : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 20,fontFamily: 'consola',backgroundColor: 'transparent' }}>PCN: AE02</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 20,fontFamily: 'consola', backgroundColor: 'transparent' }}>GRP: {userState.agent ? userState.agent.REGION : ""}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',paddingLeft:30}}>
                                            <Text style={{ flex: 1, color: 'blue', fontSize: 13,backgroundColor: 'transparent',paddingLeft:80,marginBottom:5 }}
                                            onPress={() => Linking.openURL('https://www.ndnlookup.com')}>www.ndnlookup.com </Text>
                                        </View>
                                </ImageBackground>
                            </View>
                        )
                    }
                    else if 
                     (departmentval === '009893' || departmentval === '021783') {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                                <ImageBackground style={{ flex: 1, width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 5 }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 65, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 20,fontFamily: 'consola', backgroundColor: 'transparent' }}>ID: {userState.agent ? userState.agent.DIVISION : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 20,fontFamily: 'consola',backgroundColor: 'transparent' }}>BIN: {userState.agent ? userState.agent.DEPARTMENT : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 20,fontFamily: 'consola',backgroundColor: 'transparent' }}>PCN: AE02</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 20,fontFamily: 'consola', backgroundColor: 'transparent' }}>GRP: {userState.agent ? userState.agent.REGION : ""}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',paddingLeft:30}}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 13,backgroundColor: 'transparent',paddingLeft:80,marginBottom:5 }}
                                            onPress={() => Linking.openURL('https://www.ndnlookup.com')}>www.ndnlookup.com </Text>
                                        </View>
                                </ImageBackground>
                            </View>
                        )
                    }
                    else {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                                <ImageBackground style={{ width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 10 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 60, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 20,fontFamily: 'consola', backgroundColor: 'transparent' }}>ID: 201906101</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 20,fontFamily: 'consola', backgroundColor: 'transparent' }}>BIN: 021783</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 20,fontFamily: 'consola',backgroundColor: 'transparent' }}>PCN: AE02</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 20,fontFamily: 'consola', backgroundColor: 'transparent' }}>GRP: NDN101</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',paddingLeft:30}}>
                                            <Text style={{ flex: 1, color: 'blue', fontSize: 15,backgroundColor: 'transparent',paddingLeft:80,marginBottom:5 }}
                                            onPress={() => Linking.openURL('https://www.ndnlookup.com')}>www.NDNLookup.com</Text>
                                        </View>
                                </ImageBackground>
                            </View>
                        )
                    }
    
                } else if (product.pdid === '20222') {
                    if (departmentval === '009893' || departmentval === '021783') {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                                <ImageBackground resizeMode="cover" style={{ flex: 1, width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 60 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent' }}>1.Price your medications at:</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text onPress={() => Linking.openURL('https://www.medaffordglobal.com/' + userState.agent.CODE2)} style={{ flex: 1, color: '#225AE6', backgroundColor: 'transparent' }}>www.medaffordglobal.com/{userState.agent ? userState.agent.CODE2 : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent' }}>2.Order online or call 855-633-7977 to place your order</Text>
    
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: '#225AE6',  backgroundColor: 'transparent' }}>Rx GRP: {userState.agent ? userState.agent.REFERblackBY : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent' }}>3.Your medications ship directly to you.</Text>
                                        </View>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        )
                    }
                    else {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                                <ImageBackground resizeMode="cover" style={{ width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 60 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent' }}>1.Price your medications at:</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text onPress={() => Linking.openURL('https://www.medaffordglobal.com/ndn')} style={{ flex: 1, color: '#225AE6',  backgroundColor: 'transparent' }}>www.medaffordglobal.com/ndn</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent' }}>2.Order online or call 855-633-7977 to place your order</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: '#225AE6',  backgroundColor: 'transparent' }}>Rx GRP: USM7318</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: 'black',backgroundColor: 'transparent' }}>3.Your medications ship directly to you.</Text>
                                        </View>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        )
                    }
    
                }
                else if (product.dtcancelled.length > 0) {
                    return (
                        <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                            <ImageBackground resizeMode="cover" style={{ width: '100%', height: undefined, borderRadius: 10 }} source={imageSource}>
                                <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15, opacity: 0.8, backgroundColor: color }} onPress={() => getProductDetails(product.pdid)}>
                                    <Text style={{ fontSize: 20,  textAlign: 'center', color: 'white', backgroundColor: 'transparent' }}>{product.label}</Text>
                                    <Text style={{ fontSize: 16, color: 'white',backgroundColor: 'transparent' }}>Member ID: {getMemberId(product, userState, isTypeTwoUser)}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, textAlign: 'right', color: 'white',backgroundColor: 'transparent' }}>Effective Date</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, fontSize: 18, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>{date.format('MM/DD/YYYY')}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, color: 'white',backgroundColor: 'transparent' }}>Card Holder</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, fontSize: 18, color: 'white', backgroundColor: 'transparent' }}>{userState.firstname} {userState.lastname}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>Inactive Date</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, fontSize: 18, textAlign: 'right',color: 'white', backgroundColor: 'transparent' }}>{cancelledDate.format('MM/DD/YYYY')}</Text>
                                    </View>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                    )
    
                }
                else {
    
                    return (
                        <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                            <ImageBackground resizeMode="cover" style={{ width: '100%', height: undefined, borderRadius: 10 }} source={imageSource}>
                                <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15, opacity: 0.8, backgroundColor: color }} onPress={() => getProductDetails(product.pdid)}>
                                    <Text style={{ fontSize: 20,  textAlign: 'center', color: 'white', backgroundColor: 'transparent' }}>{product.label}</Text>
                                    <Text style={{ fontSize: 16, color: 'white', backgroundColor: 'transparent' }}>Member ID: {getMemberId(product, userState, isTypeTwoUser)}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 30 }}>
                                        <Text style={{ flex: 1, color: 'white', backgroundColor: 'transparent' }}>Card Holder</Text>
                                        <Text style={{ flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>Effective Date</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 18, flex: 1, color: 'white', backgroundColor: 'transparent' }}>{userState.firstname} {userState.lastname}</Text>
                                        <Text style={{ fontSize: 18, flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>{date.format('MM/DD/YYYY')}</Text>
                                    </View>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                    )
    
                }
    
            }
            else {
                if (product.pdid === '12152') {
                    if (departmentval === '009893' || departmentval === '021783') {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                                <ImageBackground style={{ flex: 1, width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 5 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 60, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 18,   backgroundColor: 'transparent',fontFamily:'consola' }}>ID: {userState.agent ? userState.agent.DIVISION : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 18,  backgroundColor: 'transparent',fontFamily:'consola' }}>BIN: {userState.agent ? userState.agent.DEPARTMENT : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 18,  backgroundColor: 'transparent',fontFamily:'consola' }}>PCN: AE02</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 18,   backgroundColor: 'transparent',fontFamily:'consola' }}>GRP: {userState.agent ? userState.agent.REGION : ""}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',paddingLeft:30}}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 13,backgroundColor: 'transparent',paddingLeft:80,marginBottom:5 }}
                                            onPress={() => Linking.openURL('https://www.ndnlookup.com')}>www.ndnlookup.com </Text>
                                        </View>
                                </ImageBackground>
                            </View>
                        )
                    }
                    else {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                                <ImageBackground style={{ width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 10 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 60, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 18,  backgroundColor: 'transparent',fontFamily:'consola' }}>ID: 201906101</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 18,   backgroundColor: 'transparent',fontFamily:'consola' }}>BIN: 021783</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 18,   backgroundColor: 'transparent',fontFamily:'consola' }}>PCN: AE02</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 18,   backgroundColor: 'transparent',fontFamily:'consola' }}>GRP: NDN101</Text>
                                        </View>
                                    </TouchableOpacity>
                                </ImageBackground>
    
                            </View>
                        )
                    }
    
                } else if (product.pdid === '20222') {
                    if (departmentval === '009893' || departmentval === '021783') {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                                <ImageBackground resizeMode="cover" style={{ flex: 1, width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 60 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent' }}>1.Price your medications at:</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text onPress={() => Linking.openURL('https://www.medaffordglobal.com/' + userState.agent.CODE2)} style={{ flex: 1, color: '#225AE6', backgroundColor: 'transparent' }}>www.medaffordglobal.com/{userState.agent ? userState.agent.CODE2 : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent', }}>2.Order online or call 855-633-7977 to place your order</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: '#225AE6', backgroundColor: 'transparent' }}>Rx GRP: {userState.agent ? userState.agent.REFERblackBY : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent' }}>3.Your medications ship directly to you.</Text>
                                        </View>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        )
                    }
                    else {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                                <ImageBackground resizeMode="cover" style={{ width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 60 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent' }}>1.Price your medications at:</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text onPress={() => Linking.openURL('https://www.medaffordglobal.com/ndn')} style={{ flex: 1, color: '#225AE6', backgroundColor: 'transparent' }}>www.medaffordglobal.com/ndn</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent', }}>2.Order online or call 855-633-7977 to place your order</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: '#225AE6',  backgroundColor: 'transparent' }}>Rx GRP: USM7318</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent' }}>3.Your medications ship directly to you.</Text>
                                        </View>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        )
                    }
    
                }
                else if (product.dtcancelled.length > 0) {
                    return (
                        <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                            <ImageBackground resizeMode="cover" style={{ width: '100%', height: undefined, borderRadius: 10 }} source={imageSource}>
                                <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15, opacity: 0.8, backgroundColor: color }} onPress={() => getProductDetails(product.pdid)}>
                                    <Text style={{ fontSize: 20,  textAlign: 'center', color: 'white', backgroundColor: 'transparent' }}>{product.label}</Text>
                                    <Text style={{ fontSize: 16, color: 'white', backgroundColor: 'transparent' }}>Member ID: {getMemberId(product, userState, isTypeTwoUser)}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>Effective Date</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, fontSize: 18, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>{date.format('MM/DD/YYYY')}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, color: 'white', backgroundColor: 'transparent' }}>Card Holder</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, fontSize: 18, color: 'white', backgroundColor: 'transparent' }}>{userState.firstname} {userState.lastname}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>Inactive Date</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, fontSize: 18, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>{cancelledDate.format('MM/DD/YYYY')}</Text>
                                    </View>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                    )
                }
                else {
                    return (
                        <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                            <ImageBackground resizeMode="cover" style={{ width: '100%', height: undefined, borderRadius: 10 }} source={imageSource}>
                                <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15, opacity: 0.8, backgroundColor: color }} onPress={() => getProductDetails(product.pdid)}>
                                    <Text style={{ fontSize: 20,  textAlign: 'center', color: 'white', backgroundColor: 'transparent' }}>{product.label}</Text>
                                    <Text style={{ fontSize: 16, color: 'white', backgroundColor: 'transparent' }}>Member ID: {getMemberId(product, userState, isTypeTwoUser)}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 30 }}>
                                        <Text style={{ flex: 1, color: 'white', backgroundColor: 'transparent' }}>Card Holder</Text>
                                        <Text style={{ flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>Effective Date</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 18, flex: 1, color: 'white', backgroundColor: 'transparent' }}>{userState.firstname} {userState.lastname}</Text>
                                        <Text style={{ fontSize: 18, flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>{date.format('MM/DD/YYYY')}</Text>
                                    </View>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                    )
                }
    
            }
    
        }
        else if (Platform.OS === 'android') {
            if (deviceheight > 950 && deviceheight < 1100) {
                if (product.pdid === '12152') {
                    if (departmentval === '009893' || departmentval === '021783') {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                                <ImageBackground style={{ flex: 1, width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 120, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 22, backgroundColor: 'transparent',fontFamily:'consola' }}>ID:  {userState.agent ? userState.agent.DIVISION : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 22, backgroundColor: 'transparent',fontFamily:'consola' }}>BIN: {userState.agent ? userState.agent.DEPARTMENT : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 22, backgroundColor: 'transparent',fontFamily:'consola' }}>PCN:  AE02</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 22, backgroundColor: 'transparent',fontFamily:'consola' }}>GRP:  {userState.agent ? userState.agent.REGION : ""}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',paddingLeft:30}}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 13,backgroundColor: 'transparent',paddingLeft:80,marginBottom:5 }}
                                            onPress={() => Linking.openURL('https://www.ndnlookup.com')}>www.ndnlookup.com </Text>
                                        </View>
                                </ImageBackground>
                            </View>
                        )
                    }
                    else {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                                <ImageBackground style={{ width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 120, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 22, backgroundColor: 'transparent',fontFamily:'consola' }}>ID:  201906101</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 22, backgroundColor: 'transparent',fontFamily:'consola' }}>BIN:  021783</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 22,backgroundColor: 'transparent',fontFamily:'consola' }}>PCN:  AE02</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 10 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 22, backgroundColor: 'transparent',fontFamily:'consola' }}>GRP:  NDN101</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',paddingLeft:30}}>
                                            <Text style={{ flex: 1, color: 'blue', fontSize: 15,backgroundColor: 'transparent',paddingLeft:80,marginBottom:5 }}
                                            onPress={() => Linking.openURL('https://www.ndnlookup.com')}>www.NDNLookup.com</Text>
                                        </View>
                                </ImageBackground>
    
                            </View>
                        )
                    }
    
                } else if (product.pdid === '20222') {
                    if (departmentval === '009893' || departmentval === '021783') {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                                <ImageBackground resizeMode="cover" style={{ flex: 1, width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 120 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 22, backgroundColor: 'transparent'}}>1.Price your medications at:</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text onPress={() => Linking.openURL('https://www.medaffordglobal.com/' + userState.agent.CODE2)} style={{ flex: 1, color: '#225AE6',  fontSize: 22, backgroundColor: 'transparent' }}>www.medaffordglobal.com/{userState.agent ? userState.agent.CODE2 : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 22, backgroundColor: 'transparent', }}>2.Order online or call 855-633-7977 to place your order</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: '#225AE6', fontSize: 22,  backgroundColor: 'transparent'}}>Rx GRP: {userState.agent ? userState.agent.REFERREDBY : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 22, backgroundColor: 'transparent'}}>3.Your medications ship directly to you.</Text>
                                        </View>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        )
                    }
                    else {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                                <ImageBackground resizeMode="cover" style={{ width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 120 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 22, backgroundColor: 'transparent' }}>1.Price your medications at:</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: '#225AE6', fontSize: 22,  backgroundColor: 'transparent' }}>www.medaffordglobal.com/ndn</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 22, backgroundColor: 'transparent' }}>2.Order online or call 855-633-7977 to place your order</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: '#225AE6', fontSize: 22,  backgroundColor: 'transparent' }}>Rx GRP: USM7318</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 22, backgroundColor: 'transparent' }}>3.Your medications ship directly to you.</Text>
                                        </View>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        )
                    }
    
                }
                else if (product.dtcancelled.length > 0) {
                    return (
                        <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                            <ImageBackground resizeMode="cover" style={{ width: '100%', height: undefined, borderRadius: 10 }} source={imageSource}>
                                <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15, opacity: 0.8, backgroundColor: color }} onPress={() => getProductDetails(product.pdid)}>
                                    <Text style={{ fontSize: 20,  textAlign: 'center', color: 'white', backgroundColor: 'transparent' }}>{product.label}</Text>
                                    <Text style={{ fontSize: 16, color: 'white', backgroundColor: 'transparent' }}>Member ID: {getMemberId(product, userState, isTypeTwoUser)}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>Effective Date</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, fontSize: 18, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>{date.format('MM/DD/YYYY')}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, color: 'white', backgroundColor: 'transparent' }}>Card Holder</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, fontSize: 18, color: 'white', backgroundColor: 'transparent' }}>{userState.firstname} {userState.lastname}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>Inactive Date</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, fontSize: 18, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>{cancelledDate.format('MM/DD/YYYY')}</Text>
                                    </View>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                    )
                }
                else {
                    return (
                        <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                            <ImageBackground resizeMode="cover" style={{ width: '100%', height: undefined, borderRadius: 10 }} source={imageSource}>
                                <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15, opacity: 0.8, backgroundColor: color }} onPress={() => getProductDetails(product.pdid)}>
                                    <Text style={{ fontSize: 20,  textAlign: 'center', color: 'white', backgroundColor: 'transparent' }}>{product.label}</Text>
                                    <Text style={{ fontSize: 16, color: 'white', backgroundColor: 'transparent' }}>Member ID: {getMemberId(product, userState, isTypeTwoUser)}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 30 }}>
                                        <Text style={{ flex: 1, color: 'white', backgroundColor: 'transparent' }}>Card Holder</Text>
                                        <Text style={{ flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>Effective Date</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 18, flex: 1, color: 'white', backgroundColor: 'transparent' }}>{userState.firstname} {userState.lastname}</Text>
                                        <Text style={{ fontSize: 18, flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>{date.format('MM/DD/YYYY')}</Text>
                                    </View>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                    )
                }
    
    
            }
            else if (deviceheight > 800 && deviceheight < 950) {
                if (product.pdid === '12152') {
                    if (departmentval === '009893' || departmentval === '021783') {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                                <ImageBackground style={{ flex: 1, width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 6 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 100, paddingLeft: 20 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 21, backgroundColor: 'transparent',fontFamily:'consola' }}>ID: {userState.agent ? userState.agent.DIVISION : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 20 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 21,backgroundColor: 'transparent',fontFamily:'consola' }}>BIN: {userState.agent ? userState.agent.DEPARTMENT : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 20 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 21, backgroundColor: 'transparent',fontFamily:'consola' }}>PCN: AE02</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 20 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 21, backgroundColor: 'transparent',fontFamily:'consola' }}>GRP: {userState.agent ? userState.agent.REGION : ""}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',paddingLeft:30}}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 13,backgroundColor: 'transparent',paddingLeft:80,marginBottom:5 }}
                                            onPress={() => Linking.openURL('https://www.ndnlookup.com')}>www.ndnlookup.com </Text>
                                        </View>
                                </ImageBackground>
                            </View>
                        )
                    }
                    else {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                                <ImageBackground style={{ width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 6 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 100, paddingLeft: 20 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 21,backgroundColor: 'transparent',fontFamily:'consola' }}>ID: 201906101</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 20 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 21,backgroundColor: 'transparent',fontFamily:'consola' }}>BIN: 021783</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 20 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 21, backgroundColor: 'transparent',fontFamily:'consola' }}>PCN: AE02</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 20 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 21, backgroundColor: 'transparent',fontFamily:'consola' }}>GRP: NDN101</Text>
                                        </View>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        )
                    }
    
                } else if (product.pdid === '20222') {
    
                    if (departmentval === '009893' || departmentval === '021783') {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                                <ImageBackground resizeMode="cover" style={{ flex: 1, width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 100 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 21, backgroundColor: 'transparent' }}>1.Price your medications at:</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text onPress={() => Linking.openURL('https://www.medaffordglobal.com/' + userState.agent.CODE2)} style={{ flex: 1, color: '#225AE6', fontSize: 21,  backgroundColor: 'transparent' }}>www.medaffordglobal.com/{userState.agent ? userState.agent.CODE2 : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 21, backgroundColor: 'transparent' }}>2.Order online or call 855-633-7977 to place your order</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: '#225AE6', fontSize: 21,  backgroundColor: 'transparent' }}>Rx GRP: {userState.agent ? userState.agent.REFERREDBY : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 21, backgroundColor: 'transparent' }}>3.Your medications ship directly to you.</Text>
                                        </View>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        )
                    }
                    else {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                                <ImageBackground resizeMode="cover" style={{ width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 100 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 21, backgroundColor: 'transparent' }}>1.Price your medications at:</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text onPress={() => Linking.openURL('https://www.medaffordglobal.com/ndn')} style={{ flex: 1, color: '#225AE6',  fontSize: 21, backgroundColor: 'transparent' }}>www.medaffordglobal.com/ndn</Text>
    
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 21, backgroundColor: 'transparent'}}>2.Order online or call 855-633-7977 to place your order</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: '#225AE6',  fontSize: 21, backgroundColor: 'transparent'}}>Rx GRP: USM7318</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 21, backgroundColor: 'transparent'}}>3.Your medications ship directly to you.</Text>
    
                                        </View>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        )
                    }
    
                }
    
                else if (product.dtcancelled.length > 0) {
    
                    return (
                        <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                            <ImageBackground resizeMode="cover" style={{ width: '100%', height: undefined, borderRadius: 10 }} source={imageSource}>
                                <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15, opacity: 0.8, backgroundColor: color }} onPress={() => getProductDetails(product.pdid)}>
                                    <Text style={{ fontSize: 20,  textAlign: 'center', color: 'white', backgroundColor: 'transparent' }}>{product.label}</Text>
                                    <Text style={{ fontSize: 16, color: 'white', backgroundColor: 'transparent' }}>Member ID: {getMemberId(product, userState, isTypeTwoUser)}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>Effective Date</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, fontSize: 18, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>{date.format('MM/DD/YYYY')}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, color: 'white', backgroundColor: 'transparent' }}>Card Holder</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, fontSize: 18, color: 'white', backgroundColor: 'transparent' }}>{userState.firstname} {userState.lastname}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>Inactive Date</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, fontSize: 18, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>{cancelledDate.format('MM/DD/YYYY')}</Text>
                                    </View>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                    )
    
                }
                else {
                    return (
                        <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                            <ImageBackground resizeMode="cover" style={{ width: '100%', height: undefined, borderRadius: 10 }} source={imageSource}>
                                <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15, opacity: 0.8, backgroundColor: color }} onPress={() => getProductDetails(product.pdid)}>
                                    <Text style={{ fontSize: 20,  textAlign: 'center', color: 'white', backgroundColor: 'transparent' }}>{product.label}</Text>
                                    <Text style={{ fontSize: 16, color: 'white', backgroundColor: 'transparent' }}>Member ID: {getMemberId(product, userState, isTypeTwoUser)}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 30 }}>
                                        <Text style={{ flex: 1, color: 'white', backgroundColor: 'transparent' }}>Card Holder</Text>
                                        <Text style={{ flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>Effective Date</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 18, flex: 1, color: 'white', backgroundColor: 'transparent' }}>{userState.firstname} {userState.lastname}</Text>
                                        <Text style={{ fontSize: 18, flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>{date.format('MM/DD/YYYY')}</Text>
                                    </View>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                    )
    
                }
    
    
            }
            else if (deviceheight > 600 && deviceheight < 800) {
                if (product.pdid == '12152') {
                    if (departmentval === '009893' || departmentval === '021783') {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                                <ImageBackground style={{ flex: 1, width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 8 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 52, paddingLeft: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 18, backgroundColor: 'transparent',fontFamily:'consola' }}>ID: {userState.agent ? userState.agent.DIVISION : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 18,backgroundColor: 'transparent',fontFamily:'consola' }}>BIN: {userState.agent ? userState.agent.DEPARTMENT : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 18, backgroundColor: 'transparent',fontFamily:'consola' }}>PCN: AE02</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 18,backgroundColor: 'transparent',fontFamily:'consola' }}>GRP: {userState.agent ? userState.agent.REGION : ""}</Text>
                                        </View>
            
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',paddingLeft:30}}>
                                            <Text style={{ flex: 1, color: 'blue', fontSize: 13,backgroundColor: 'transparent',paddingLeft:80,marginBottom:5 }}
                                            onPress={() => Linking.openURL('https://www.ndnlookup.com')}>www.ndnlookup.com </Text>
                                        </View>
    
                                </ImageBackground>
                            </View>
                        )
                    }
                    else {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                                <ImageBackground style={{ width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 8 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 52, paddingLeft: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 18, backgroundColor: 'transparent',fontFamily:'consola' }}>ID: 201906101</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 18, backgroundColor: 'transparent',fontFamily:'consola' }}>BIN: 021783</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 18, backgroundColor: 'transparent',fontFamily:'consola' }}>PCN: AE02</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 18, backgroundColor: 'transparent',fontFamily:'consola' }}>GRP: NDN101</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',paddingLeft:30}}>
                                            <Text style={{ flex: 1, color: 'blue', fontSize: 15,backgroundColor: 'transparent',paddingLeft:80,marginBottom:5 }}
                                            onPress={() => Linking.openURL('https://www.ndnlookup.com')}>www.NDNLookup.com</Text>
                                        </View>
                                </ImageBackground>
                            </View>
                        )
                    }
    
                 } else if (product.pdid === '20222') {
                    if (departmentval === '009893' || departmentval === '021783') {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                                <ImageBackground resizeMode="cover" style={{ flex: 1, width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 55 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent'}}>1.Price your medications at:</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text onPress={() => Linking.openURL('https://www.medaffordglobal.com/' + userState.agent.CODE2)} style={{ flex: 1, color: '#225AE6', backgroundColor: 'transparent' }}>www.medaffordglobal.com/{userState.agent ? userState.agent.CODE2 : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent' }}>2.Order online or call 855-633-7977 to place your order</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: '#225AE6',  backgroundColor: 'transparent' }}>Rx GRP: {userState.agent ? userState.agent.REFERREDBY : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent' }}>3.Your medications ship directly to you.</Text>
                                        </View>
                                    </TouchableOpacity>
                                    
                                </ImageBackground>
                            </View>
                        )
                    }
                    else {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                                <ImageBackground resizeMode="cover" style={{ width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 55 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent'}}>1.Price your medications at:</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text onPress={() => Linking.openURL('https://www.medaffordglobal.com/ndn')} style={{ flex: 1, color: '#225AE6', backgroundColor: 'transparent' }}>www.medaffordglobal.com/ndn</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent'}}>2.Order online or call 855-633-7977 to place your order</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: '#225AE6',  backgroundColor: 'transparent'}}>Rx GRP: USM7318</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent'}}>3.Your medications ship directly to you.</Text>
                                        </View>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        )
                    }
    
                }
    
                else if (product.dtcancelled.length > 0) {
                    return (
                        <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                            <ImageBackground resizeMode="cover" style={{ width: '100%', height: undefined, borderRadius: 10 }} source={imageSource}>
                                <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15, opacity: 0.8, backgroundColor: color }} onPress={() => getProductDetails(product.pdid)}>
                                    <Text style={{ fontSize: 20,  textAlign: 'center', color: 'white', backgroundColor: 'transparent' }}>{product.label}</Text>
                                    <Text style={{ fontSize: 16, color: 'white', backgroundColor: 'transparent' }}>Member ID: {getMemberId(product, userState, isTypeTwoUser)}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>Effective Date</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, fontSize: 18, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>{date.format('MM/DD/YYYY')}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, color: 'white', backgroundColor: 'transparent' }}>Card Holder</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, fontSize: 18, color: 'white', backgroundColor: 'transparent' }}>{userState.firstname} {userState.lastname}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>Inactive Date</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, fontSize: 18, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>{cancelledDate.format('MM/DD/YYYY')}</Text>
                                    </View>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                    )
                }
                else {
                    return (
                        <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                            <ImageBackground resizeMode="cover" style={{ width: '100%', height: undefined, borderRadius: 10 }} source={imageSource}>
                                <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15, opacity: 0.8, backgroundColor: color }} onPress={() => getProductDetails(product.pdid)}>
                                    <Text style={{ fontSize: 20,  textAlign: 'center', color: 'white', backgroundColor: 'transparent' }}>{product.label}</Text>
                                    <Text style={{ fontSize: 16, color: 'white', backgroundColor: 'transparent' }}>Member ID: {getMemberId(product, userState, isTypeTwoUser)}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 30 }}>
                                        <Text style={{ flex: 1, color: 'white', backgroundColor: 'transparent' }}>Card Holder</Text>
                                        <Text style={{ flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>Effective Date</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 18, flex: 1, color: 'white', backgroundColor: 'transparent' }}>{userState.firstname} {userState.lastname}</Text>
                                        <Text style={{ fontSize: 18, flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>{date.format('MM/DD/YYYY')}</Text>
                                    </View>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                    )
                }
            }
            else if (deviceheight > 500 && deviceheight < 600) {
                if (product.pdid === '12152') {
                    if (departmentval === '009893' || departmentval === '021783') {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                                <ImageBackground style={{ flex: 1, width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 8 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 48, paddingLeft: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 13,backgroundColor: 'transparent',fontFamily:'consola' }}>ID: {userState.agent ? userState.agent.DIVISION : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 13,backgroundColor: 'transparent',fontFamily:'consola' }}>BIN: {userState.agent ? userState.agent.DEPARTMENT : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 13,backgroundColor: 'transparent',fontFamily:'consola' }}>PCN: AE02</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 13,backgroundColor: 'transparent',fontFamily:'consola' }}>GRP: {userState.agent ? userState.agent.REGION : ""}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',paddingLeft:30}}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 13,backgroundColor: 'transparent',paddingLeft:80,marginBottom:5 }}
                                            onPress={() => Linking.openURL('https://www.ndnlookup.com')}>www.ndnlookup.com </Text>
                                        </View>
                                </ImageBackground>
                            </View>
                        )
                    }
                    else {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                                <ImageBackground style={{ width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 8 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 48, paddingLeft: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 13,backgroundColor: 'transparent',fontFamily:'consola' }}>ID: 201906101</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 13,backgroundColor: 'transparent',fontFamily:'consola' }}>BIN: 021783</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 13, backgroundColor: 'transparent',fontFamily:'consola' }}>PCN: AE02</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 13,backgroundColor: 'transparent',fontFamily:'consola' }}>GRP: NDN101</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',paddingLeft:30}}>
                                            <Text style={{ flex: 1, color: 'blue', fontSize: 15,backgroundColor: 'transparent',paddingLeft:80,marginBottom:5 }}
                                            onPress={() => Linking.openURL('https://www.ndnlookup.com')}>www.NDNLookup.com</Text>
                                        </View>
                                </ImageBackground>
                            </View>
                        )
                    }
    
                } else if (product.pdid === '20222') {
    
                    if (departmentval === '009893' || departmentval === '021783') {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                                <ImageBackground resizeMode="cover" style={{ flex: 1, width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 55 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent' }}>1.Price your medications at:</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text onPress={() => Linking.openURL('https://www.medaffordglobal.com/' + userState.agent.CODE2)} style={{ flex: 1, color: '#225AE6',  backgroundColor: 'transparent' }}>www.medaffordglobal.com/{userState.agent ? userState.agent.CODE2 : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent'}}>2.Order online or call 855-633-7977 to place your order</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: '#225AE6',  backgroundColor: 'transparent'}}>Rx GRP: {userState.agent ? userState.agent.REFERREDBY : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent'}}>3.Your medications ship directly to you.</Text>
                                        </View>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        )
                    }
                    else {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
    
                                <ImageBackground resizeMode="cover" style={{ width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 55 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent'}}>1.Price your medications at:</Text>
                                        </View> 
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text onPress={() => Linking.openURL('https://www.medaffordglobal.com/ndn')} style={{ flex: 1, color: '#225AE6',  backgroundColor: 'transparent' }}>www.medaffordglobal.com/ndn</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent' }}>2.Order online or call 855-633-7977 to place your order</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: '#225AE6',  backgroundColor: 'transparent' }}>Rx GRP: USM7318</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent' }}>3.Your medications ship directly to you.</Text>
                                        </View>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        )
                    }
    
                }
    
                else if (product.dtcancelled.length > 0) {
    
                    return (
                        <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                            <ImageBackground resizeMode="cover" style={{ width: '100%', height: undefined, borderRadius: 10 }} source={imageSource}>
                                <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15, opacity: 0.8, backgroundColor: color }} onPress={() => getProductDetails(product.pdid)}>
                                    <Text style={{ fontSize: 20,  textAlign: 'center', color: 'white', backgroundColor: 'transparent' }}>{product.label}</Text>
                                    <Text style={{ fontSize: 16, color: 'white', backgroundColor: 'transparent' }}>Member ID: {getMemberId(product, userState, isTypeTwoUser)}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>Effective Date</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, fontSize: 18, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>{date.format('MM/DD/YYYY')}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, color: 'white', backgroundColor: 'transparent' }}>Card Holder</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, fontSize: 18, color: 'white', backgroundColor: 'transparent' }}>{userState.firstname} {userState.lastname}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>Inactive Date</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, fontSize: 18, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>{cancelledDate.format('MM/DD/YYYY')}</Text>
                                    </View>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                    )
                }
                else {
    
                    return (
                        <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                            <ImageBackground resizeMode="cover" style={{ width: '100%', height: undefined, borderRadius: 10 }} source={imageSource}>
                                <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15, opacity: 0.8, backgroundColor: color }} onPress={() => getProductDetails(product.pdid)}>
                                    <Text style={{ fontSize: 20,  textAlign: 'center', color: 'white', backgroundColor: 'transparent' }}>{product.label}</Text>
                                    <Text style={{ fontSize: 16, color: 'white', backgroundColor: 'transparent' }}>Member ID: {getMemberId(product, userState, isTypeTwoUser)}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 30 }}>
                                        <Text style={{ flex: 1, color: 'white', backgroundColor: 'transparent' }}>Card Holder</Text>
                                        <Text style={{ flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>Effective Date</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 18, flex: 1, color: 'white', backgroundColor: 'transparent' }}>{userState.firstname} {userState.lastname}</Text>
                                        <Text style={{ fontSize: 18, flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>{date.format('MM/DD/YYYY')}</Text>
                                    </View>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                    )
                }
            }
            else if (deviceheight < 500) {
                if (product.pdid === '12152') {
                    if (departmentval === '009893' || departmentval === '021783') {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                                <ImageBackground style={{ flex: 1, width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 8 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 48, paddingLeft: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 13,backgroundColor: 'transparent',fontFamily:'consola' }}>ID: {userState.agent ? userState.agent.DIVISION : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 13,backgroundColor: 'transparent',fontFamily:'consola' }}>BIN: {userState.agent ? userState.agent.DEPARTMENT : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 13,backgroundColor: 'transparent',fontFamily:'consola' }}>PCN: AE02</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 13, backgroundColor: 'transparent',fontFamily:'consola' }}>GRP: {userState.agent ? userState.agent.REGION : ""}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',paddingLeft:30}}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 13,backgroundColor: 'transparent',paddingLeft:80,marginBottom:5 }}
                                            onPress={() => Linking.openURL('https://www.ndnlookup.com')}>www.ndnlookup.com </Text>
                                        </View>
                                    
                                </ImageBackground>
                            </View>
                        )
                    }
                    else {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
    
                                <ImageBackground style={{ width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 8 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 48, paddingLeft: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 13,backgroundColor: 'transparent',fontFamily:'consola' }}>ID: 201906101</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 13,backgroundColor: 'transparent',fontFamily:'consola' }}>BIN: 021783</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 13,backgroundColor: 'transparent',fontFamily:'consola' }}>PCN: AE02</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1, paddingLeft: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', fontSize: 13, backgroundColor: 'transparent',fontFamily:'consola' }}>GRP: NDN101</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',paddingLeft:30}}>
                                            <Text style={{ flex: 1, color: 'blue', fontSize: 15,backgroundColor: 'transparent',paddingLeft:80,marginBottom:5 }}
                                            onPress={() => Linking.openURL('https://www.ndnlookup.com')}>www.NDNLookup.com</Text>
                                        </View>
                                </ImageBackground>
                            </View>
                        )
                    }
    
                } else if (product.pdid === '20222') {
                    if (departmentval === '009893' || departmentval === '021783') {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                                <ImageBackground resizeMode="cover" style={{ flex: 1, width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 55 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent' }}>1.Price your medications at:</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text onPress={() => Linking.openURL('https://www.medaffordglobal.com/' + userState.agent.CODE2)} style={{ flex: 1, color: '#225AE6', backgroundColor: 'transparent' }}>www.medaffordglobal.com/{userState.agent ? userState.agent.CODE2 : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent' }}>2.Order online or call 855-633-7977 to place your order</Text>
    
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: '#225AE6',  backgroundColor: 'transparent' }}>Rx GRP: {userState.agent ? userState.agent.REFERREDBY : ""}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent' }}>3.Your medications ship directly to you.</Text>
                                        </View>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        )
                    }
                    else {
                        return (
                            <View style={{ marginHorizontal: 2, marginTop: 15 }}>
    
                                <ImageBackground resizeMode="cover" style={{ width: imageWidth, height: imageHeight, borderRadius: 10 }} source={imageSource}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15 }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 55 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent'}}>1.Price your medications at:</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text onPress={() => Linking.openURL('https://www.medaffordglobal.com/ndn')} style={{ flex: 1, color: '#225AE6',  backgroundColor: 'transparent' }}>www.medaffordglobal.com/ndn</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent'}}>2.Order online or call 855-633-7977 to place your order</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: '#225AE6',  backgroundColor: 'transparent'}}>Rx GRP: USM7318</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                            <Text style={{ flex: 1, color: 'black', backgroundColor: 'transparent'}}>3.Your medications ship directly to you.</Text>
                                        </View>
                                    </TouchableOpacity>
                                </ImageBackground>
    
                            </View>
                        )
                    }
    
                }
    
                else if (product.dtcancelled.length > 0) {
                    return (
                        <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                            <ImageBackground resizeMode="cover" style={{ width: '100%', height: undefined, borderRadius: 10 }} source={imageSource}>
                                <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15, opacity: 0.8, backgroundColor: color }} onPress={() => getProductDetails(product.pdid)}>
                                    <Text style={{ fontSize: 20,  textAlign: 'center', color: 'white', backgroundColor: 'transparent' }}>{product.label}</Text>
                                    <Text style={{ fontSize: 16, color: 'white', backgroundColor: 'transparent' }}>Member ID: {getMemberId(product, userState, isTypeTwoUser)}</Text>
    
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>Effective Date</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, fontSize: 18, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>{date.format('MM/DD/YYYY')}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, color: 'white', backgroundColor: 'transparent' }}>Card Holder</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, fontSize: 18, color: 'white', backgroundColor: 'transparent' }}>{userState.firstname} {userState.lastname}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>Inactive Date</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3 }}>
                                        <Text style={{ flex: 1, fontSize: 18, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>{cancelledDate.format('MM/DD/YYYY')}</Text>
                                    </View>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                    )
                }
                else {
    
                    return (
                        <View style={{ marginHorizontal: 2, marginTop: 15 }}>
                            <ImageBackground resizeMode="cover" style={{ width: '100%', height: undefined, borderRadius: 10 }} source={imageSource}>
                                <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 15, opacity: 0.8, backgroundColor: color }} onPress={() => getProductDetails(product.pdid)}>
                                    <Text style={{ fontSize: 20,  textAlign: 'center', color: 'white', backgroundColor: 'transparent' }}>{product.label}</Text>
                                    <Text style={{ fontSize: 16, color: 'white', backgroundColor: 'transparent' }}>Member ID: {getMemberId(product, userState, isTypeTwoUser)}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 30 }}>
                                        <Text style={{ flex: 1, color: 'white', backgroundColor: 'transparent' }}>Card Holder</Text>
                                        <Text style={{ flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>Effective Date</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 18, flex: 1, color: 'white', backgroundColor: 'transparent' }}>{userState.firstname} {userState.lastname}</Text>
                                        <Text style={{ fontSize: 18, flex: 1, textAlign: 'right', color: 'white', backgroundColor: 'transparent' }}>{date.format('MM/DD/YYYY')}</Text>
                                    </View>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                    )
    
                }
            }
        }
    }

}

const getMemberId = (pdt, usrStat, isTypeTwo) => {
    var id = isTypeTwo ? pdt.policynumber : usrStat.memberid;
    var memberIdLength = id.length;
    var loopLength = memberIdLength / 3;
    var remanderDigits = memberIdLength % 3;
    var memberIdToDisplay = "";
    var last = 0;
    for (var i = 0; i < loopLength; i++) {
        memberIdToDisplay += id.substring(i * 3, i * 3 + 3) + " ";
        last = i * 3 + 3;
    }
    memberIdToDisplay += id.substring(last, last + remanderDigits);

    return memberIdToDisplay;
};


Benefit.propTypes = {
    product: PropTypes.object.isRequired,
    userState: PropTypes.object.isRequired,
    getProductDetails: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
}
