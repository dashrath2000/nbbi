import React from 'react'
import { View, ScrollView, Text, TextInput, ActivityIndicator, Platform, Linking, TouchableOpacity, Picker } from 'react-native'
import Modal from 'react-native-modal'
import Button from 'react-native-button'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PharmacyList from '../../components/provider/PharmacyList'
import styles from '../../utils/style'

import * as authActions from '../../actions/authAction'

class PharmacyScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            filterModal: false,
            specialDosageCode: ['TABS', 'CAPS', 'CPEP', 'TBEC', 'CHEW', 'TB12', 'TB24', 'TBCR', 'CP12', 'CP24', 'CPCR', 'T24A', 'C12A', 'CPDR', 'TBDP', 'T12A'],
        }

        this.submitSearch = this.submitSearch.bind(this)
        this.openPharmacy = this.openPharmacy.bind(this)
        this.getSizeSearch = this.getSizeSearch.bind(this)
        this.setDrugSize = this.setDrugSize.bind(this)
    }

    componentWillMount() {
        if (this.state.specialDosageCode.indexOf(this.props.providerState.drug_selected.DosageCode) > -1) {
            this.props.actions.drugSize('')
        } else {
            this.props.actions.drugSupply('1')
            this.getSizeSearch()
        }        
    }

    openPharmacy(pharmacy) {
        if (Platform.OS === 'android') {
            Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${pharmacy._address}`)
        } else {
            Linking.openURL(`http://maps.apple.com?address=${pharmacy._address}`)
        }
    }

    getSizeSearch() {
        this.setState({ loading: true })
        const data = {
             drug: this.props.providerState.drug_selected.LabelName,
             gpi14: this.props.providerState.drug_selected.Gpi14,
        }
        this.props.actions.drugSearchStep2(data)
            .then((data) => {
                if (data.action.payload.GetPackageSizeListResult && data.action.payload.GetPackageSizeListResult.length > 0) {
                    return this.props.actions.drugSize(data.action.payload.GetPackageSizeListResult[0].Strength)
                }
                return null
            })
            .then(() => this.setState({ loading: false }))
    }

    setDrugSize(drug) {
        this.props.actions.drugSize(drug.Strength)
            .then(() => this.setState({ sizeModal: false }))
    }

    submitSearch() {
        this.setState({ loading: true })
        const data = {
            zipCode: this.props.providerState.drug_zipcode,
            miles: this.props.providerState.drug_radius,
            dayOfSupply: this.props.providerState.drug_supply,
            selectedSize: this.props.providerState.drug_size,
             drug: this.props.providerState.drug_selected.LabelName,
             gpi14: this.props.providerState.drug_selected.Gpi14,
            prodExtn: this.props.providerState.drug_selected.ProductExtn,
            dosageCode: this.props.providerState.drug_selected.DosageCode,
        }
        this.props.actions.drugSearchStep3(data)
            .then(() => this.setState({ loading: false }))
    }

    render() {
        const drugSizeComponents = this.props.providerState.drug_size_search.map((drug, index) => (
            <TouchableOpacity key={index} style={{ padding: 15, margin: 10, backgroundColor: '#f6f6f6' }} onPress={() => this.setDrugSize(drug)}>
                <Text>{drug.Size}</Text>
            </TouchableOpacity>
        ))

        const inputSizeOrSupply = (this.state.specialDosageCode.indexOf(this.props.providerState.drug_selected.DosageCode) > -1)
            ?   <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Drug Supply:</Text>
                    <TextInput
                      onChangeText={(data) => this.props.actions.drugSupply(data)}
                      value={this.props.providerState.drug_supply}
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={styles.input} />
                </View>
            :   <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Drug Size:</Text>
                    <TouchableOpacity style={{ flex: 3, padding: 5, backgroundColor: '#f6f6f6' }} onPress={() => this.setState({ sizeModal: true })}>
                        <Text>{this.props.providerState.drug_size}</Text>
                    </TouchableOpacity>
                </View>

        return (
            <View>
                <Text style={{ fontWeight: 'bold' }}>{this.props.providerState.drug_selected.LabelName}</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Drug Zipcode:</Text>
                    <TextInput
                      onChangeText={(data) => this.props.actions.drugZipcode(data)}
                      value={this.props.providerState.drug_zipcode}
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={styles.input} />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Drug Radius:</Text>
                    <TextInput
                      onChangeText={(data) => this.props.actions.drugRadius(data)}
                      value={this.props.providerState.drug_radius}
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={styles.input} />
                </View>
                
                { inputSizeOrSupply }

                <Button
                  onPress={() => this.submitSearch()}
                  containerStyle={styles.normalButtonContainer}
                  style={styles.normalButton} >
                    Submit
                </Button>
                <ScrollView style={{ marginBottom: 50 }}>
                    <Modal
                      hideOnBack={false}
                      isVisible={this.state.loading}>
                        <View style={styles.loadingModal}>
                            <Text>Loading</Text>
                            <ActivityIndicator size="large" />
                        </View>
                    </Modal>
                    <Modal
                      isVisible={this.state.sizeModal}>
                        <ScrollView style={styles.drugSizeModal}>
                            {drugSizeComponents}
                            <Button
                              onPress={() => this.setState({ sizeModal: false })}
                              containerStyle={styles.normalButtonContainer}
                              style={styles.normalButton} >
                                Close
                            </Button>
                        </ScrollView>
                    </Modal>

                    <PharmacyList pharmacies={this.props.providerState.drug_pharmacy_search} openPharmacy={this.openPharmacy} />
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        providerState: state.provider,
    }
}
function matchDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(PharmacyScreen)
