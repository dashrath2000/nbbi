import React from 'react'
import { View, ActivityIndicator, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import Modal from 'react-native-modal'
import { NavigationActions } from 'react-navigation'
import Button from 'react-native-button'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from '../../utils/style'
import ShoppingCartPaymentList from '../../components/cart/ShoppingCartPaymentList'
import { updateMember, createMember } from '../../utils/api/administrationApi'
import * as authActions from '../../actions/authAction'
import { onSignIn } from '../../utils/auth'

class Step3Screen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            responseMsg: '',
        }

        this.processOrder = this.processOrder.bind(this)
        this.navigateStep4 = this.navigateStep4.bind(this)
    }

    navigateStep4() {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Step4' })],
        })
        this.props.navigation.dispatch(resetAction)
    }

    processOrder() {

        this.setState({ loading: true })

        const productList = []
        this.props.productState.shopping_cart.map(product => {
            productList.push({
                pdid: product.productID,
                benefitid: product.packageDetails.BENEFITID,
                periodid: product.packageDetails.PERIODID,
            })
        })

        if (this.props.productState.checkout_data.step1.creating) {
            const data = {
                firstname: this.props.productState.checkout_data.step1.firstname,
                lastname: this.props.productState.checkout_data.step1.lastname,
                dob: this.props.productState.checkout_data.step1.dob,
                email: this.props.productState.checkout_data.step1.email,
                username: this.props.productState.checkout_data.step1.username,
                password: this.props.productState.checkout_data.step1.password,
                address1:this.props.productState.checkout_data.step1.address1,
                address2:this.props.productState.checkout_data.step1.address2,
                city:this.props.productState.checkout_data.step1.city,
                state:this.props.productState.checkout_data.step1.state,
                zipcode:this.props.productState.checkout_data.step1.zipcode,
                phone1:this.props.productState.checkout_data.step1.phone1,
                source:this.props.productState.checkout_data.step1.source,
                paymentProcess: 'Y',
                payment: this.props.productState.checkout_data.step2,
                products: productList,
            }

            return createMember(data)
                .then((response) => {
                    if (response.SUCCESS === true) {
                        this.setState({ responseMsg: 'Success', loading: false })
                        this.props.actions.emptyShoppingCart()
                        onSignIn(response.MEMBER.ID.toString())
                            .then(() => this.props.actions.login())
                            .then(() => this.props.actions.processOrderResponse(response.MESSAGES))
                            .then(() => this.navigateStep4())
                    } else {
                        this.setState({ responseMsg: `Error creating user: ${JSON.stringify(response.MESSAGES)}. Please call 877-271-6559` })
                        this.setState({ loading: false })
                    }
                })
        } else {
            const data = {
                corpid: this.props.userState.corpid,
                agent: this.props.userState.brokerid,
                lastname: this.props.userState.lastname,
                paymentProcess: 'Y',
                payment: this.props.productState.checkout_data.step2,
                products: productList,
            }
            return updateMember(this.props.userState.memberid, this.props.userState.brokerid, data)
                .then((response) => {
                    if (response.SUCCESS === true) {
                        this.props.actions.emptyShoppingCart()
                        this.props.actions.login()
                        this.props.actions.processOrderResponse(response.MESSAGES)
                        this.setState({ responseMsg: 'Success', loading: false })
                        this.navigateStep4()
                    } else {
                        this.setState({ responseMsg: `Error proccessing order: ${JSON.stringify(response.MESSAGES)}. Please call 877-271-6559` })
                        this.setState({ loading: false })
                    }
                })
        }
    }

    render() {
        return (
            <View style={styles.shoppingCartContainer}>
                <ShoppingCartPaymentList
                  products={this.props.productState.shopping_cart}
                  processOrder={this.processOrder}
                  responseMsg={this.state.responseMsg}
                />
                <Modal
                  hideOnBack={false}
                  isVisible={this.state.loading}>
                    <View style={styles.loadingModal}>
                        <Text>Processing Payment</Text>
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
        productState: state.product,
    }
}
function matchDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Step3Screen)
