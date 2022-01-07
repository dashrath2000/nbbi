import React from 'react'
import { View, ScrollView, Text, TextInput, ActivityIndicator, Platform, Linking, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import { TextField } from 'react-native-material-textfield'
import Button from 'react-native-button'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DentalList from '../../components/provider/DentalList'
import styles from '../../utils/style'

import * as authActions from '../../actions/authAction'

class DentalScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            filterModal: false,
        }

        this.submitSearch = this.submitSearch.bind(this)
        this.openMaps = this.openMaps.bind(this)
    }

    componentWillMount() {
        this.submitSearch()
    }

    openMaps(provider) {
        if (Platform.OS === 'android') {
            Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${provider.ProviderAddress}, ${provider.ProviderCity}, ${provider.ProviderState} - ${provider.ProviderZipCode}`)
        } else {
            Linking.openURL(`http://maps.apple.com?address=${provider.ProviderAddress}, ${provider.ProviderCity}, ${provider.ProviderState} - ${provider.ProviderZipCode}`)
        }
    }

    submitSearch() {
        if (!(!isNaN(this.props.providerState.dental_zipcode) && this.props.providerState.dental_zipcode.length === 5)) {
            return this.setState({ zipcodeError: 'Not a valid zipcode', filterModal: true })
        }
        if (!(this.props.providerState.dental_radius >= 1 && this.props.providerState.dental_radius < 100)) {
            return this.setState({ radiusError: 'Must be range of 1-99', filterModal: true })
        }
        this.setState({ zipcodeError: '', radiusError: '', specialityError: '', nameError: '' })

        this.setState({ loading: true })
        const data = {
            providerTable: 'Dental',
            zipCode: this.props.providerState.dental_zipcode,
            zipRadius: this.props.providerState.dental_radius,
            speciality: this.props.providerState.dental_speciality,
            providerName: this.props.providerState.dental_name,
        }
        this.props.actions.dentalSearch(data)
            .then(() => this.setState({ loading: false }))
    }

    render() {
        return (
            <View>
                <TouchableOpacity style={styles.providerSearchContainer} onPress={() => this.setState({ filterModal: true })}>
                    <Text style={{ fontWeight: 'bold', color: '#0088b6' }}>Modify Search</Text>
                </TouchableOpacity>
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
                      onModalHide={this.submitSearch}
                      isVisible={this.state.filterModal}>
                        <View style={{ padding: 30, backgroundColor: 'white', borderRadius: 8 }}>
                            <TextField
                              label='Zipcode'
                              onChangeText={(data) => this.props.actions.dentalZipcode(data)}
                              value={this.props.providerState.dental_zipcode}
                              error={this.state.zipcodeError}
                              underlineColorAndroid="transparent"
                              autoCapitalize="none"
                              autoCorrect={false} />
                            <TextField
                              label='Radius'
                              onChangeText={(data) => this.props.actions.dentalRadius(data)}
                              value={this.props.providerState.dental_radius}
                              error={this.state.radiusError}
                              underlineColorAndroid="transparent"
                              autoCapitalize="none"
                              autoCorrect={false} />
                            <TextField
                              label='Specialty'
                              onChangeText={(data) => this.props.actions.dentalSpeciality(data)}
                              value={this.props.providerState.dental_speciality}
                              error={this.state.specialityError}
                              underlineColorAndroid="transparent"
                              autoCapitalize="none"
                              autoCorrect={false} />
                            <TextField
                              label='Provider Name'
                              onChangeText={(data) => this.props.actions.dentalName(data)}
                              value={this.props.providerState.dental_name}
                              error={this.state.nameError}
                              underlineColorAndroid="transparent"
                              autoCapitalize="none"
                              autoCorrect={false} />

                            <View style={{ alignItems: 'center' }}>
                                <Button
                                  onPress={() => this.setState({ filterModal: false })}
                                  containerStyle={styles.normalButtonContainer}
                                  style={styles.normalButton} >
                                    Search
                                </Button>
                            </View>
                        </View>
                    </Modal>

                    <DentalList providers={this.props.providerState.dental_search} openMaps={this.openMaps} />
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

export default connect(mapStateToProps, matchDispatchToProps)(DentalScreen)
