import React from 'react'
import { View, ScrollView, Text, AsyncStorage, ActivityIndicator, Image } from 'react-native'
import Modal from 'react-native-modal'
import moment from 'moment'
import Button from 'react-native-button'
import HTMLView from 'react-native-htmlview'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from '../utils/style'
import { getProductImageByLabel } from '../utils/main'
import AvailableProductList from '../components/product/AvailableProductList'
import AvailableProductDetailsList from '../components/product/AvailableProductDetailsList'
import * as authActions from '../actions/authAction'

class BenefitDetailsScreen extends React.Component {

    render() {
        const product = this.props.userState.products.find(x => x.pdid === this.props.userState.selectedProduct)
        if (!product) {
            return null
        }

        const effectiveDate = moment(product.dteffective, 'YYYY-MM-DD')
        const cancelledDate = moment(product.dtcancelled, 'YYYY-MM-DD')

        const imageSource = getProductImageByLabel(product.label)

        if (cancelledDate < moment()) {
            return (
                <ScrollView style={{ backgroundColor: '#fff', padding: 30 }}>
                    <Image style={{ width: undefined, height: 190 }} source={imageSource} />
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{product.label}</Text>
                    <Text style={{ marginTop: 10, fontWeight: 'bold' }}>This benefit is Inactive. Please call 877-271-6559 to reactivate.</Text>
                    <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Effective Date</Text>
                    <Text>{effectiveDate.format('MM/DD/YYYY')}</Text>
                    <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Inactive Date</Text>
                    <Text>{cancelledDate.format('MM/DD/YYYY')}</Text>
                    {product.dtholdcreated.length + product.dtcancelled.length > 0 && <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Status: Inactive</Text>}
                    <View style={{ paddingBottom: 50 }}></View>
                </ScrollView>
            )
        }

        return (
            <ScrollView style={{ backgroundColor: '#fff', padding: 30 }}>
                <Image style={{ width: undefined, height: 190 }} source={imageSource} />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{product.label}</Text>
                <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Description:</Text>
                <HTMLView value={product.description} />
                <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Benefit Type:</Text>
                <Text>{product.benefitlabel}</Text>
                <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Amount</Text>
                <Text>${product.amount} {product.periodlabel}</Text>
                <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Effective Date</Text>
                <Text>{effectiveDate.format('MM/DD/YYYY')}</Text>
                {product.dtholdcreated.length + product.dtcancelled.length > 0 && <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Status</Text>}
                {product.dtholdcreated.length > 0 && <Text>{product.dtholdcreated} - {product.holdreason}</Text>}
                {product.dtcancelled.length > 0 && <Text>{product.dtcancelled} - {product.reasonforcancel}</Text>}
                <View style={{ paddingBottom: 50 }}></View>
            </ScrollView>
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

export default connect(mapStateToProps, matchDispatchToProps)(BenefitDetailsScreen)
