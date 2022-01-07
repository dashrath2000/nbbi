import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { View, Text } from 'react-native'
import styles from '../../utils/style'
import Benefit from './Benefit'

export default function BenefitList({ userState, getProductDetails, isTypeTwoUser,JerryToken }) {
    const todayDate = moment()
    const activeProductComponents = []
    const inactiveProductComponents = []
    const productsLength = userState.products.length

    const  d = (`"${userState?.agent?.DESCRIPTION}"`)
    // const obj = JSON.parse(d);
    let replace = d?.replace("CBD ","");
    const words = replace?.split(',');
    const first = words[0]
     const firsturl = first?.slice(5);

     const second = words[1]
     const secondurl = second?.slice(3);

     const third = words[2]
     const thirdurl = third?.slice(3);
   
     const fourth = words[3]
     const replacefourt = fourth?.replace(/"/g,"");
     const replacefour = replacefourt?.replace("}","");
   
     const fourthurl = replacefour?.slice(3);   
   
 

const Customurldata = [firsturl,secondurl,thirdurl,fourthurl]

    for (let i = 0; i < productsLength; i++) {
        const product = userState.products[i]
        if (product.dtcancelled) {
            const cancelledDate = moment(product.dtcancelled, 'YYYY-MM-DD')
            if (cancelledDate >= todayDate) {

                activeProductComponents.push(<Benefit  key={product.pdid} Customurldata={Customurldata} JerryToken={JerryToken} product={product} userState={userState} getProductDetails={getProductDetails} color={"#3e7cba"} isTypeTwoUser={isTypeTwoUser} />)
            } else {
                inactiveProductComponents.push(<Benefit key={product.pdid} Customurldata={Customurldata} product={product} JerryToken={JerryToken} userState={userState} getProductDetails={getProductDetails} color={"#505050"} isTypeTwoUser={isTypeTwoUser} />)
            }
        } else {
            activeProductComponents.push(<Benefit key={product.pdid} Customurldata={Customurldata} product={product} userState={userState} JerryToken={JerryToken} getProductDetails={getProductDetails} color={"#3e7cba"} isTypeTwoUser={isTypeTwoUser} />)
        }
    }

    return (
        <View>
            <Text style={{ fontSize: 20, marginLeft: 15, marginTop: 10, color: 'black' }}>{userState.agent ? userState.agent.LABEL : "Welcome"}</Text>
            <Text style={{ fontSize: 16, marginLeft: 15, marginTop: 30}}>Active</Text>
            {activeProductComponents}

            {inactiveProductComponents.length > 0 &&
                <View>
                    <Text style={{ fontSize: 16, marginLeft: 15, marginTop: 30 }}>Inactive</Text>
                    {inactiveProductComponents}
                </View>
            }

            <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 20 }}>Don't see your benefit?</Text>
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Please call 877-271-6559</Text>
        </View>
    )
}

BenefitList.propTypes = {
    userState: PropTypes.object.isRequired,
    getProductDetails: PropTypes.func.isRequired,
}
