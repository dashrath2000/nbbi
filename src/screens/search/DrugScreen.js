import React from 'react'
import { View, ScrollView, Text, TextInput, ActivityIndicator, Platform, Linking, TouchableOpacity } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import Modal from 'react-native-modal'
import Button from 'react-native-button'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DrugList from '../../components/provider/DrugList'
import styles from '../../utils/style'

import * as authActions from '../../actions/authAction'

class DrugScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            filterModal: false,
        }

        this.submitSearch = this.submitSearch.bind(this)
        this.openDrug = this.openDrug.bind(this)
    }

    openDrug(drug) {
        this.props.actions.drugSelected(drug)
            .then(() => this.props.navigation.navigate('Pharmacy'))
    }

    submitSearch() {
        if (this.props.providerState.drug_name.length < 3) {
            return this.setState({ drugNameError: "Must be at least 3 chars" })
        }
        this.setState({ drugNameError: "" })

        this.setState({ loading: true })
        const data = {
            prefixText: this.props.providerState.drug_name,
        }
        this.props.actions.drugSearchStep1(data)
            .then(() => this.setState({ loading: false }))
    }

    render() {
        return (
            <View>
                <View style={{ margin: 15 }}>
                    <TextField
                      label='Drug Name'
                      onChangeText={(data) => this.props.actions.drugName(data)}
                      value={this.props.providerState.drug_name}
                      error={this.state.drugNameError}
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                      autoCorrect={false} />
                    <Button
                      onPress={() => this.submitSearch()}
                      containerStyle={styles.normalButtonContainer}
                      style={styles.normalButton} >
                        Search
                    </Button>
                </View>
                <ScrollView style={{ marginBottom: 50 }}>
                    <Modal
                      hideOnBack={false}
                      isVisible={this.state.loading}>
                        <View style={styles.loadingModal}>
                            <Text>Loading</Text>
                            <ActivityIndicator size="large" />
                        </View>
                    </Modal>

                    <DrugList drugs={this.props.providerState.drug_search} openDrug={this.openDrug} />
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

export default connect(mapStateToProps, matchDispatchToProps)(DrugScreen)
