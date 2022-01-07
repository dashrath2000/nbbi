import React from 'react'
import { View, ScrollView, Text, TextInput, ActivityIndicator, Platform, Linking, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import { TextField } from 'react-native-material-textfield'
import Button from 'react-native-button'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import VisionList from '../../components/provider/VisionList'
import styles from '../../utils/style'

import * as authActions from '../../actions/authAction'

class VisionScreen extends React.Component {
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
        if (!(!isNaN(this.props.providerState.vision_zipcode) && this.props.providerState.vision_zipcode.length === 5)) {
            return this.setState({ zipcodeError: 'Not a valid zipcode', filterModal: true })
        }
        if (!(this.props.providerState.vision_radius >= 1 && this.props.providerState.vision_radius < 100)) {
            return this.setState({ radiusError: 'Must be range of 1-99', filterModal: true })
        }
        this.setState({ zipcodeError: '', radiusError: '', specialityError: '', nameError: '' })

        this.setState({ loading: true })
        const data = {
            providerTable: 'Vision',
            zipCode: this.props.providerState.vision_zipcode,
            zipRadius: this.props.providerState.vision_radius,
            speciality: this.props.providerState.vision_speciality,
            providerName: this.props.providerState.vision_name,
        }
        this.props.actions.visionSearch(data)
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
                              onChangeText={(data) => this.props.actions.visionZipcode(data)}
                              value={this.props.providerState.vision_zipcode}
                              error={this.state.zipcodeError}
                              underlineColorAndroid="transparent"
                              autoCapitalize="none"
                              autoCorrect={false} />
                            <TextField
                              label='Radius'
                              onChangeText={(data) => this.props.actions.visionRadius(data)}
                              value={this.props.providerState.vision_radius}
                              error={this.state.radiusError}
                              underlineColorAndroid="transparent"
                              autoCapitalize="none"
                              autoCorrect={false} />
                            <TextField
                              label='Specialty'
                              onChangeText={(data) => this.props.actions.visionSpeciality(data)}
                              value={this.props.providerState.vision_speciality}
                              error={this.state.specialityError}
                              underlineColorAndroid="transparent"
                              autoCapitalize="none"
                              autoCorrect={false} />
                            <TextField
                              label='Provider Name'
                              onChangeText={(data) => this.props.actions.visionName(data)}
                              value={this.props.providerState.vision_name}
                              error={this.state.nameError}
                              underlineColorAndroid="transparent"
                              autoCapitalize="none"
                              autoCorrect={false} />

                            <View style={{ alignItems: 'center', paddingTop: 10 }}>
                                <Button
                                  onPress={() => this.setState({ filterModal: false })}
                                  containerStyle={styles.normalButtonContainer}
                                  style={styles.normalButton} >
                                    Search
                                </Button>
                            </View>
                        </View>
                    </Modal>

                    <VisionList providers={this.props.providerState.vision_search} openMaps={this.openMaps} />
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

export default connect(mapStateToProps, matchDispatchToProps)(VisionScreen)
