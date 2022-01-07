import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, ScrollView, Image,Platform, TouchableOpacity, Linking, ActivityIndicator } from 'react-native'
import styles from '../utils/style'
import Modal from 'react-native-modal'
import * as authActions from '../actions/authAction'


import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getCredentials, onSignOut } from '../utils/auth'


class SearchScreen extends React.Component {

    
    
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            condition:this.props.userState.agent ? (`"${this?.props?.userState?.agent.DESCRIPTION}"`.indexOf('}') > -1): 0
        }
        this.initialDataLoad = this.initialDataLoad.bind(this)
       

       
       
          

         
        }

        componentWillMount() {
            // this.setState({ loading: true })
            getCredentials()
                        .then((creds) => this.props.actions.getUser(creds.username))
                        .then((data) => {
                         
                          
    
                        })
                        this.setState({ loading: true })

            if (!this.props.userState.initialDataLoad) {
                this.initialDataLoad()
            } else {
                this.setState({ loading: false })
            }
        }
       
    
        initialDataLoad() {
    
            if (this.props.userState.authentication === 'loggedin') {

                Promise.all([
                    getCredentials()
                        .then((creds) => this.props.actions.getUser(creds.username))
                        .then((data) => {
                            const agentId = data.action.payload.method.users[0].user[0].brokerid[0]
                            this.props.actions.getAgent(agentId)
                            this.props.actions.getProducts(agentId)
                        }),             
                ])
                    .then(() => this.setState({ loading: false }))
                   
                    .catch(() => this.setState({ loading: false }))
            }else{
                this.setState({ loading: false })
            }
        }
       
    


    render() {
        if (this.state.loading) {
            return (
                <Modal
                    hideOnBack={false}
                    isVisible={this.state.loading}>
                    <View style={styles.loadingModal}>
                        <Text>Loading</Text>
                        <ActivityIndicator size="large" />
                    </View>
                </Modal>
            )
        }

        if (this.props.userState.authentication !== 'loggedin') {


 //const input = 'Dental;Vision;Pet';

//const [name, street, unit] = input.split(';');

//console.log(name); // krunal lathiya
//console.log(street); // 123 Street
//console.log(unit); // Apt 4
//console.log(city); // New York
//console.log(state); // NY
//console.log(zip); // 12345





const identifier = this.props.userState.agent ? this.props.userState.agent.DESCRIPTION : ""





              return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/ndn')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/ndn')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>

                            
                          </View>


                               <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.multiplan.com/nbbi')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/114-stethoscope-1.png')} />
                                <Text style={styles.searchText}>Medical</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Dental')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/106-tooth.png')} />
                                <Text style={styles.searchText}>Dental</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                           

                             <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Vision')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/112-eye-chart.png')} />
                                <Text style={styles.searchText}>Vision</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.petassure.com/networkvetsearch?showDetails=true')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/veterinary.png')} />
                                <Text style={styles.searchText}>Veterinary</Text>
                            </TouchableOpacity>
                        </View>

                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )
        }
        else 
        {

            const description = this.props.userState.agent ? this.props.userState.agent.DESCRIPTION : ""

            if(description === 'CBD')
{

 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                      

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>

                         </View>

                        




                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}

else if(description === 'Dental')
{

 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

 ]                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                         </View>

                        <View style={styles.searchRowContainer}>
                            

                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Dental')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/106-tooth.png')} />
                                <Text style={styles.searchText}>Dental</Text>
                            </TouchableOpacity>
                        </View>




                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else if(description === 'Vision')
{

  return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                            
                        </View>

                        <View style={styles.searchRowContainer}>
                            

                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Vision')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/112-eye-chart.png')} />
                                <Text style={styles.searchText}>Vision</Text>
                            </TouchableOpacity>
                        </View>




                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )   

}
else if(description === 'Medical')
{

 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                           
                        </View>

                        <View style={styles.searchRowContainer}>
                            

                           <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.multiplan.com/nbbi')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/114-stethoscope-1.png')} />
                                <Text style={styles.searchText}>Medical</Text>
                            </TouchableOpacity>
                        </View>




                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )


}
else if(description === 'Pet')
{


 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                           </View>
                      

                       <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.petassure.com/networkvetsearch?showDetails=true')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/veterinary.png')} />
                                <Text style={styles.searchText}>Veterinary</Text>
                            </TouchableOpacity>

                           
                        </View>




                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else 
    if(description === 'CBD;Dental' ||description ==='Dental;CBD' ||description === 'CBD, Dental' || description === 'Dental, CBD')
{

 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>

                         </View>

                        <View style={styles.searchRowContainer}>
                            

                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Dental')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/106-tooth.png')} />
                                <Text style={styles.searchText}>Dental</Text>
                            </TouchableOpacity>
                        </View>




                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else if(description === 'CBD;Vision' ||description === 'Vision;CBD' ||description === 'CBD, Vision' || description === 'Vision, CBD')
{

  return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

 <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>
                            
                        </View>

                        <View style={styles.searchRowContainer}>
                            

                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Vision')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/112-eye-chart.png')} />
                                <Text style={styles.searchText}>Vision</Text>
                            </TouchableOpacity>
                        </View>




                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )   

}
else if(description === 'CBD;Medical' ||description === 'Medical;CBD' ||description === 'CBD, Medical' || description === 'Medical, CBD')
{

 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

 <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>
                           
                        </View>

                        <View style={styles.searchRowContainer}>
                            

                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.multiplan.com/nbbi')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/114-stethoscope-1.png')} />
                                <Text style={styles.searchText}>Medical</Text>
                            </TouchableOpacity>
                        </View>




                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )


}
else if(description === 'CBD;Pet' ||description === 'Pet;CBD' ||description === 'CBD, Pet' || description === 'Pet, CBD')
{


 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                         <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>   

                           </View>
                      

                       <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.petassure.com/networkvetsearch?showDetails=true')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/veterinary.png')} />
                                <Text style={styles.searchText}>Veterinary</Text>
                            </TouchableOpacity>

                           
                        </View>




                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else if(description === 'CBD;Dental;Vision' || description === 'CBD;Vision;Dental' 
    || description === 'Dental;CBD;Vision'  || description === 'Dental;Vision;CBD'
    || description === 'Vision;CBD;Dental'   || description === 'Vision;Dental;CBD'
    || description === 'CBD, Dental, Vision' || description === 'CBD, Vision, Dental'
    || description === 'Dental, CBD, Vision'  || description === 'Dental, Vision, CBD'
    || description === 'Vision, CBD, Dental'   || description === 'Vision, Dental, CBD')
{


 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>


 <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>
                            
</View>


                               <View style={styles.searchRowContainer}>
                           


                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Dental')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/106-tooth.png')} />
                                <Text style={styles.searchText}>Dental</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Vision')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/112-eye-chart.png')} />
                                <Text style={styles.searchText}>Vision</Text>
                            </TouchableOpacity>
                        </View>

                       
                      

                     




                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else if(description === 'CBD;Dental;Medical' || description === 'CBD;Medical;Dental' 
        || description === 'Dental;CBD;Medical' || description === 'Dental;Medical;CBD'
        || description === 'Medical;Dental;CBD'  || description === 'Medical;CBD;Dental'
        || description === 'CBD, Dental, Medical' || description === 'CBD, Medical, Dental'
        || description === 'Dental, CBD, Medical' || description === 'Dental, Medical, CBD'
        || description === 'Medical, Dental, CBD'  || description === 'Medical, CBD, Dental')
{


 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>

                           
</View>


                               <View style={styles.searchRowContainer}>
                           


                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Dental')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/106-tooth.png')} />
                                <Text style={styles.searchText}>Dental</Text>
                            </TouchableOpacity>

                              <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.multiplan.com/nbbi')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/114-stethoscope-1.png')} />
                                <Text style={styles.searchText}>Medical</Text>
                            </TouchableOpacity>

                        </View>

                    
                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else if(description === 'CBD;Dental;Pet' || description === 'CBD;Pet;Dental' 
      || description === 'Dental;CBD;Pet' || description === 'Dental;Pet;CBD'
      || description === 'Pet;CBD;Dental'  || description === 'Pet;Dental;CBD'
    || description === 'CBD, Dental, Pet' || description === 'CBD, Pet, Dental'
    || description === 'Dental, CBD, Pet' || description === 'Dental, Pet, CBD'
      || description === 'Pet, CBD, Dental'  || description === 'Pet, Dental, CBD')
{


 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>

                           </View>


                               <View style={styles.searchRowContainer}>
                          

                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Dental')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/106-tooth.png')} />
                                <Text style={styles.searchText}>Dental</Text>
                            </TouchableOpacity>

                             
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.petassure.com/networkvetsearch?showDetails=true')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/veterinary.png')} />
                                <Text style={styles.searchText}>Veterinary</Text>
                            </TouchableOpacity>
            
                        </View>


                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else if(description === 'CBD;Vision;Medical' || description === 'CBD;Medical;Vision' 
    || description === 'Medical;CBD;Vision' || description === 'Medical;Vision;CBD'
    || description === 'Vision;Medical;CBD'  || description === 'Vision;CBD;Medical'
    || description === 'CBD, Vision, Medical' || description === 'CBD, Medical, Vision'
    || description === 'Medical, CBD, Vision' || description === 'Medical, Vision, CBD'
    || description === 'Vision, Medical, CBD'  || description === 'Vision, CBD, Medical')
{


 return (

            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/ndn')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>

                            
                            </View>



                               <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.multiplan.com/nbbi')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/114-stethoscope-1.png')} />
                                <Text style={styles.searchText}>Medical</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Vision')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/112-eye-chart.png')} />
                                <Text style={styles.searchText}>Vision</Text>
                            </TouchableOpacity>
                        </View>

                
                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else if(description === 'CBD;Vision;Pet' || description === 'CBD;Pet;Vision' 
        || description == 'Pet;Vision;CBD' || description === 'Pet;CBD;Vision'
        ||description === 'Vision;CBD;Pet'  || description === 'Vision;Pet;CBD'
    || description === 'CBD, Vision, Pet' || description === 'CBD, Pet, Vision'
    || description == 'Pet, Vision, CBD' || description === 'Pet, CBD, Vision'
    ||description === 'Vision, CBD, Pet'  || description === 'Vision, Pet, CBD')
{


 return (

            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/ndn')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                              <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>

                            
                            </View>



                               <View style={styles.searchRowContainer}>
                           

                             <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Vision')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/112-eye-chart.png')} />
                                <Text style={styles.searchText}>Vision</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.petassure.com/networkvetsearch?showDetails=true')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/veterinary.png')} />
                                <Text style={styles.searchText}>Veterinary</Text>
                            </TouchableOpacity>
                        </View>

                
                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else if(description === 'CBD;Medical;Pet' || description === 'CBD;Pet;Medical' 
|| description === 'Medical;Pet;CBD' || description === 'Medical;CBD;Pet'
|| description === 'Pet;CBD;Medical' || description === 'Pet;Medical;CBD'

    || description === 'CBD, Medical, Pet' || description === 'CBD, Pet, Medical'
|| description === 'Medical, Pet, CBD' || description === 'Medical, CBD, Pet'
|| description === 'Pet, CBD, Medical' || description === 'Pet, Medical, CBD')
{


 return (

            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/ndn')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                              <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>

                            
                            </View>



                               <View style={styles.searchRowContainer}>
                           

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.multiplan.com/nbbi')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/114-stethoscope-1.png')} />
                                <Text style={styles.searchText}>Medical</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.petassure.com/networkvetsearch?showDetails=true')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/veterinary.png')} />
                                <Text style={styles.searchText}>Veterinary</Text>
                            </TouchableOpacity>
                        </View>

                
                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else if(description === 'Dental;Vision' || description === 'Vision;Dental' || description === 'Dental, Vision' || description === 'Vision, Dental')
{


 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                            
</View>


                               <View style={styles.searchRowContainer}>
                           


                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Dental')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/106-tooth.png')} />
                                <Text style={styles.searchText}>Dental</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Vision')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/112-eye-chart.png')} />
                                <Text style={styles.searchText}>Vision</Text>
                            </TouchableOpacity>
                        </View>

                       
                      

                     




                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else if(description === 'Dental;Medical' || description === 'Medical;Dental' || description === 'Dental, Medical' || description === 'Medical, Dental')
{


 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                           
</View>


                               <View style={styles.searchRowContainer}>
                           


                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Dental')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/106-tooth.png')} />
                                <Text style={styles.searchText}>Dental</Text>
                            </TouchableOpacity>

                              <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.multiplan.com/nbbi')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/114-stethoscope-1.png')} />
                                <Text style={styles.searchText}>Medical</Text>
                            </TouchableOpacity>

                        </View>

                    
                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else if(description === 'Dental;Pet' || description === 'Dental;Pet' || description === 'Dental, Pet' || description === 'Dental, Pet')
{


 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                           </View>


                               <View style={styles.searchRowContainer}>
                          

                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Dental')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/106-tooth.png')} />
                                <Text style={styles.searchText}>Dental</Text>
                            </TouchableOpacity>

                             
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.petassure.com/networkvetsearch?showDetails=true')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/veterinary.png')} />
                                <Text style={styles.searchText}>Veterinary</Text>
                            </TouchableOpacity>
            
                        </View>


                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else if(description === 'Vision;Medical' || description === 'Medical;Vision' || description === 'Vision, Medical' || description === 'Medical, Vision')
{


 return (

            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                            
                            </View>



                               <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.multiplan.com/nbbi')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/114-stethoscope-1.png')} />
                                <Text style={styles.searchText}>Medical</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Vision')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/112-eye-chart.png')} />
                                <Text style={styles.searchText}>Vision</Text>
                            </TouchableOpacity>
                        </View>

                
                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else if(description === 'Vision;Pet' || description === 'Pet;Vision' || description === 'Vision, Pet' || description === 'Pet, Vision')
{


 return (

            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                            
                            </View>



                               <View style={styles.searchRowContainer}>
                           

                             <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Vision')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/112-eye-chart.png')} />
                                <Text style={styles.searchText}>Vision</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.petassure.com/networkvetsearch?showDetails=true')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/veterinary.png')} />
                                <Text style={styles.searchText}>Veterinary</Text>
                            </TouchableOpacity>
                        </View>

                
                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else if(description === 'Medical;Pet' || description === 'Pet;Medical' || description === 'Medical, Pet' || description === 'Pet, Medical')
{


 return (

            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                            
                            </View>



                               <View style={styles.searchRowContainer}>
                           

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.multiplan.com/nbbi')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/114-stethoscope-1.png')} />
                                <Text style={styles.searchText}>Medical</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.petassure.com/networkvetsearch?showDetails=true')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/veterinary.png')} />
                                <Text style={styles.searchText}>Veterinary</Text>
                            </TouchableOpacity>
                        </View>

                
                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else if(description === 'Dental;Vision;Medical' || description === 'Dental;Medical;Vision' 
    ||  description === 'Vision;Dental;Medical' || description === 'Vision;Medical;Dental'
    || description === 'Medical;Vision;Dental' || description === 'Medical;Dental;Vision'
    || description === 'Dental, Vision, Medical' || description === 'Dental, Medical, Vision' 
    ||  description === 'Vision, Dental, Medical' || description === 'Vision, Medical, Dental'
    || description === 'Medical, Vision, Dental' || description === 'Medical, Dental, Vision')
{


 return (

            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                            
                            </View>



                               <View style={styles.searchRowContainer}>
    
                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Dental')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/106-tooth.png')} />
                                <Text style={styles.searchText}>Dental</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.multiplan.com/nbbi')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/114-stethoscope-1.png')} />
                                <Text style={styles.searchText}>Medical</Text>
                            </TouchableOpacity>

                             
                        </View>


                        <View style={styles.searchRowContainer}>
                            

                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Vision')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/112-eye-chart.png')} />
                                <Text style={styles.searchText}>Vision</Text>
                            </TouchableOpacity>
                        </View>


                
                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else if(description === 'Dental;Vision;Pet' || description === 'Dental;Pet;Vision' 
    ||  description === 'Vision;Dental;Pet' || description === 'Vision;Pet;Dental'
    || description === 'Pet;Vision;Dental' || description === 'Pet;Dental;Vision'
    || description === 'Dental, Vision, Pet' || description === 'Dental, Pet, Vision' 
    ||  description === 'Vision, Dental, Pet' || description === 'Vision, Pet, Dental'
    || description === 'Pet, Vision, Dental' || description === 'Pet, Dental, Vision')
{


 return (

            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                            
                            </View>



                               <View style={styles.searchRowContainer}>
    
                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Dental')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/106-tooth.png')} />
                                <Text style={styles.searchText}>Dental</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Vision')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/112-eye-chart.png')} />
                                <Text style={styles.searchText}>Vision</Text>
                            </TouchableOpacity>

                             
                        </View>


                        <View style={styles.searchRowContainer}>
                            

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.petassure.com/networkvetsearch?showDetails=true')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/veterinary.png')} />
                                <Text style={styles.searchText}>Veterinary</Text>
                            </TouchableOpacity>

                        </View>


                
                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else if(description === 'Dental;Medical;Pet' || description === 'Dental;Pet;Medical' 
    ||  description === 'Medical;Dental;Pet' || description === 'Medical;Pet;Dental'
    || description === 'Pet;Medical;Dental' || description === 'Pet;Dental;Medical'
    || description === 'Dental, Medical, Pet' || description === 'Dental, Pet, Medical' 
    ||  description === 'Medical, Dental, Pet' || description === 'Medical, Pet, Dental'
    || description === 'Pet, Medical, Dental' || description === 'Pet, Dental, Medical')
{


 return (

            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                            
                            </View>



                               <View style={styles.searchRowContainer}>
    
                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Dental')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/106-tooth.png')} />
                                <Text style={styles.searchText}>Dental</Text>
                            </TouchableOpacity>

                              <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.multiplan.com/nbbi')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/114-stethoscope-1.png')} />
                                <Text style={styles.searchText}>Medical</Text>
                            </TouchableOpacity>


                             
                        </View>


                        <View style={styles.searchRowContainer}>
                            

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.petassure.com/networkvetsearch?showDetails=true')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/veterinary.png')} />
                                <Text style={styles.searchText}>Veterinary</Text>
                            </TouchableOpacity>

                        </View>


                
                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else if(description === 'Vision;Medical;Pet' || description === 'Vision;Pet;Medical' 
    ||  description === 'Medical;Vision;Pet' || description === 'Medical;Pet;Vision'
    || description === 'Pet;Medical;Vision' || description === 'Pet;Vision;Medical'
    || description === 'Vision, Medical, Pet' || description === 'Vision, Pet, Medical' 
    ||  description === 'Medical, Vision, Pet' || description === 'Medical, Pet, Vision'
    || description === 'Pet, Medical, Vision' || description === 'Pet, Vision, Medical')
{


 return (

            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                            
                            </View>



                               <View style={styles.searchRowContainer}>
    
                           <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Vision')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/112-eye-chart.png')} />
                                <Text style={styles.searchText}>Vision</Text>
                            </TouchableOpacity>

                              <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.multiplan.com/nbbi')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/114-stethoscope-1.png')} />
                                <Text style={styles.searchText}>Medical</Text>
                            </TouchableOpacity>


                             
                        </View>


                        <View style={styles.searchRowContainer}>
                            

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.petassure.com/networkvetsearch?showDetails=true')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/veterinary.png')} />
                                <Text style={styles.searchText}>Veterinary</Text>
                            </TouchableOpacity>

                        </View>


                
                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else if(description === 'CBD;Dental;Vision;Medical' || description === 'CBD;Dental;Medical;Vision' 
    ||  description === 'CBD;Vision;Dental;Medical' || description === 'CBD;Vision;Medical;Dental'
    || description === 'CBD;Medical;Vision;Dental' || description === 'CBD;Medical;Dental;Vision'

   || description === 'Dental;CBD;Vision;Medical' || description === 'Dental;CBD;Medical;Vision' 
    ||  description === 'Dental;Vision;CBD;Medical' || description === 'Dental;Vision;Medical;CBD'
    || description === 'Dental;Medical;CBD;Vision' || description === 'Dental;Medical;Vision;CBD'


    || description === 'Vision;CBD;Dental;Medical' || description === 'Vision;CBD;Medical;Dental' 
    ||  description === 'Vision;Dental;CBD;Medical' || description === 'Vision;Dental;Medical;CBD'
    || description === 'Vision;Medical;CBD;Dental' || description === 'Vision;Medical;Dental;CBD'


   || description === 'Medical;CBD;Dental;Vision' || description === 'Medical;CBD;Vision;Dental' 
    ||  description === 'Medical;Dental;CBD;Vision' || description === 'Medical;Dental;Vision;CBD'
    || description === 'Medical;Vision;CBD;Dental' || description === 'Medical;Vision;Dental;CBD'

    || description === 'CBD, Dental, Vision, Medical' || description === 'CBD, Dental, Medical, Vision' 
    ||  description === 'CBD, Vision, Dental, Medical' || description === 'CBD, Vision, Medical, Dental'
    || description === 'CBD, Medical, Vision, Dental' || description === 'CBD, Medical, Dental, Vision'

    || description === 'Dental, CBD, Vision, Medical' || description === 'Dental, CBD, Medical, Vision' 
    ||  description === 'Dental, Vision, CBD, Medical' || description === 'Dental, Vision, Medical, CBD'
    || description === 'Dental, Medical, CBD, Vision' || description === 'Dental, Medical, Vision, CBD'


    || description === 'Vision, CBD, Dental, Medical' || description === 'Vision, CBD, Medical, Dental' 
    ||  description === 'Vision, Dental, CBD, Medical' || description === 'Vision, Dental, Medical, CBD'
    || description === 'Vision, Medical, CBD, Dental' || description === 'Vision, Medical, Dental, CBD'


   || description === 'Medical, CBD, Dental, Vision' || description === 'Medical, CBD, Vision, Dental' 
    ||  description === 'Medical, Dental, CBD, Vision' || description === 'Medical, Dental, Vision, CBD'
    || description === 'Medical, Vision, CBD, Dental' || description === 'Medical, Vision, Dental, CBD')
{


 return (

            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>


 <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>
                            
                            </View>



                               <View style={styles.searchRowContainer}>
    
                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Dental')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/106-tooth.png')} />
                                <Text style={styles.searchText}>Dental</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.multiplan.com/nbbi')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/114-stethoscope-1.png')} />
                                <Text style={styles.searchText}>Medical</Text>
                            </TouchableOpacity>

                             
                        </View>


                        <View style={styles.searchRowContainer}>
                            

                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Vision')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/112-eye-chart.png')} />
                                <Text style={styles.searchText}>Vision</Text>
                            </TouchableOpacity>
                        </View>


                
                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else if(description === 'CBD;Dental;Vision;Pet' || description === 'CBD;Dental;Pet;Vision' 
    ||  description === 'CBD;Vision;Dental;Pet' || description === 'CBD;Vision;Pet;Dental'
    || description === 'CBD;Pet;Vision;Dental' || description === 'CBD;Pet;Dental;Vision'

    || description === 'Dental;CBD;Vision:Pet' || description === 'Dental;CBD;Pet;Vision' 
    ||  description === 'Dental;Vision;CBD;Pet' || description === 'Dental;Vision;Pet;CBD'
    || description === 'Dental;Pet;Vision;CBD' || description === 'Dental;Pet;CBD;Vision'

    || description === 'Vision;CBD;Dental;Pet' || description === 'Vision;CBD;Pet;Dental' 
    ||  description === 'Vision;Dental;CBD;Pet' || description === 'Vision;Dental;Pet;CBD'
    || description === 'Vision;Pet;Dental;CBD' || description === 'Vision;Pet;CBD;Dental'

    || description === 'Pet;CBD;Dental;Vision' || description === 'Pet;CBD;Vision;Dental' 
    ||  description === 'Pet;Dental;CBD;Vision' || description === 'Pet;Dental;Vision;CBD'
    || description === 'Pet;Vision;Dental;CBD' || description === 'Pet;Vision;CBD;Dental'


    || description === 'CBD, Dental, Vision, Pet' || description === 'CBD, Dental, Pet, Vision' 
    ||  description === 'CBD, Vision, Dental, Pet' || description === 'CBD, Vision, Pet, Dental'
    || description === 'CBD, Pet, Vision, Dental' || description === 'CBD, Pet, Dental, Vision'

    || description === 'Dental, CBD, Vision, Pet' || description === 'Dental, CBD, Pet, Vision' 
    ||  description === 'Dental, Vision, CBD, Pet' || description === 'Dental, Vision, Pet, CBD'
    || description === 'Dental, Pet, Vision, CBD' || description === 'Dental, Pet, CBD, Vision'

    || description === 'Vision, CBD, Dental, Pet' || description === 'Vision, CBD, Pet, Dental' 
    ||  description === 'Vision, Dental, CBD, Pet' || description === 'Vision, Dental, Pet, CBD'
    || description === 'Vision, Pet, Dental, CBD' || description === 'Vision, Pet, CBD, Dental'

    || description === 'Pet, CBD, Dental, Vision' || description === 'Pet, CBD, Vision, Dental' 
    ||  description === 'Pet, Dental, CBD, Vision' || description === 'Pet, Dental, Vision, CBD'
    || description === 'Pet, Vision, Dental, CBD' || description === 'Pet, Vision, CBD, Dental'


    )
{


 return (

            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

 <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>
                            
                            </View>



                               <View style={styles.searchRowContainer}>
    
                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Dental')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/106-tooth.png')} />
                                <Text style={styles.searchText}>Dental</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Vision')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/112-eye-chart.png')} />
                                <Text style={styles.searchText}>Vision</Text>
                            </TouchableOpacity>

                             
                        </View>


                        <View style={styles.searchRowContainer}>
                            

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.petassure.com/networkvetsearch?showDetails=true')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/veterinary.png')} />
                                <Text style={styles.searchText}>Veterinary</Text>
                            </TouchableOpacity>

                        </View>


                
                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else if(description === 'CBD;Dental;Medical;Pet' || description === 'CBD;Dental;Pet;Medical' 
    ||  description === 'CBD;Medical;Dental;Pet' || description === 'CBD;Medical;Pet;Dental'
    || description === 'CBD;Pet;Medical;Dental' || description === 'CBD;Pet;Dental;Medical'

    
    || description === 'Dental;CBD;Medical;Pet' || description === 'Dental;CBD;Pet;Medical' 
    ||  description === 'Dental;Medical;CBD;Pet' || description === 'Dental;Medical;Pet;CBD'
    || description === 'Dental;Pet;CBD;Medical' || description === 'Dental;Pet;Medical;CBD'


    || description === 'Medical;CBD;Dental;Pet' || description === 'Medical;CBD;Pet;Dental' 
    ||  description === 'Medical;Dental;CBD;Pet' || description === 'Medical;Dental;Pet;CBD'
    || description === 'Medical;Pet;CBD;Dental' || description === 'Medical;Pet;Dental;CBD'

    || description === 'Pet;CBD;Dental;Medical' || description === 'Pet;CBD;Medical;Dental' 
    ||  description === 'Pet;Dental;CBD;Medical' || description === 'Pet;Dental;Medical;CBD'
    || description === 'Pet;Medical;CBD;Dental' || description === 'Pet;Medical;Dental;CBD'




    || description === 'CBD, Dental, Medical, Pet' || description === 'CBD, Dental, Pet, Medical' 
    ||  description === 'CBD, Medical, Dental, Pet' || description === 'CBD, Medical, Pet, Dental'
    || description === 'CBD, Pet, Medical, Dental' || description === 'CBD, Pet, Dental, Medical'

    || description === 'Dental, CBD, Medical, Pet' || description === 'Dental, CBD, Pet, Medical' 
    ||  description === 'Dental, Medical, CBD, Pet' || description === 'Dental, Medical, Pet, CBD'
    || description === 'Dental, Pet, CBD, Medical' || description === 'Dental, Pet, Medical, CBD'


    || description === 'Medical, CBD, Dental, Pet' || description === 'Medical, CBD, Pet, Dental' 
    ||  description === 'Medical, Dental, CBD, Pet' || description === 'Medical, Dental, Pet, CBD'
    || description === 'Medical, Pet, CBD, Dental' || description === 'Medical, Pet, Dental, CBD'

    || description === 'Pet, CBD, Dental, Medical' || description === 'Pet, CBD, Medical, Dental' 
    ||  description === 'Pet, Dental, CBD, Medical' || description === 'Pet, Dental, Medical, CBD'
    || description === 'Pet, Medical, CBD, Dental' || description === 'Pet, Medical, Dental, CBD')
{


 return (

            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>

                            
                            </View>



                               <View style={styles.searchRowContainer}>
    
                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Dental')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/106-tooth.png')} />
                                <Text style={styles.searchText}>Dental</Text>
                            </TouchableOpacity>

                              <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.multiplan.com/nbbi')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/114-stethoscope-1.png')} />
                                <Text style={styles.searchText}>Medical</Text>
                            </TouchableOpacity>


                             
                        </View>


                        <View style={styles.searchRowContainer}>
                            

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.petassure.com/networkvetsearch?showDetails=true')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/veterinary.png')} />
                                <Text style={styles.searchText}>Veterinary</Text>
                            </TouchableOpacity>

                        </View>


                
                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else if(description === 'CBD;Vision;Medical;Pet' || description === 'CBD;Vision;Pet;Medical' 
    ||  description === 'CBD;Medical;Vision;Pet' || description === 'CBD;Medical;Pet;Vision'
    || description === 'CBD;Pet;Medical;Vision' || description === 'CBD;Pet;Vision;Medical'


     || description === 'Vision;CBD;Medical;Pet' || description === 'Vision;CBD;Pet;Medical' 
    ||  description === 'Vision;Medical;CBD;Pet' || description === 'Vision;Medical;Pet;CBD'
    || description === 'Vision;Pet;CBD;Medical' || description === 'Vision;Pet;Medical;CBD'

    || description === 'Medical;CBD;Vision;Pet' || description === 'Medical;CBD;Pet;Vision' 
    ||  description === 'Medical;Vision;CBD;Pet' || description === 'Medical;Vision;Pet;CBD'
    || description === 'Medical;Pet;CBD;Vision' || description === 'Medical;Pet;Vision;CBD'

     || description === 'Pet;CBD;Vision;Medical' || description === 'Pet;CBD;Medical;Vision' 
    ||  description === 'Pet;Vision;CBD;Medical' || description === 'Pet;Vision;Medical;CBD'
    || description === 'Pet;Medical;CBD;Vision' || description === 'Pet;Medical;Vision;CBD'

  
    || description === 'CBD, Vision, Medical, Pet' || description === 'CBD, Vision, Pet, Medical' 
    ||  description === 'CBD, Medical, Vision, Pet' || description === 'CBD, Medical, Pet, Vision'
    || description === 'CBD, Pet, Medical, Vision' || description === 'CBD, Pet, Vision, Medical'

    || description === 'Vision, CBD, Medical, Pet' || description === 'Vision, CBD, Pet, Medical' 
    ||  description === 'Vision, Medical, CBD, Pet' || description === 'Vision, Medical, Pet, CBD'
    || description === 'Vision, Pet, CBD, Medical' || description === 'Vision, Pet, Medical, CBD'

    || description === 'Medical, CBD, Vision, Pet' || description === 'Medical, CBD, Pet, Vision' 
    ||  description === 'Medical, Vision, CBD, Pet' || description === 'Medical, Vision, Pet, CBD'
    || description === 'Medical, Pet, CBD, Vision' || description === 'Medical, Pet, Vision, CBD'

     || description === 'Pet, CBD, Vision, Medical' || description === 'Pet, CBD, Medical, Vision' 
    ||  description === 'Pet, Vision, CBD, Medical' || description === 'Pet, Vision, Medical, CBD'
    || description === 'Pet, Medical, CBD, Vision' || description === 'Pet, Medical, Vision, CBD')
{


 return (

            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>

                            
                            </View>



                               <View style={styles.searchRowContainer}>
    
                           <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Vision')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/112-eye-chart.png')} />
                                <Text style={styles.searchText}>Vision</Text>
                            </TouchableOpacity>

                              <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.multiplan.com/nbbi')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/114-stethoscope-1.png')} />
                                <Text style={styles.searchText}>Medical</Text>
                            </TouchableOpacity>


                             
                        </View>


                        <View style={styles.searchRowContainer}>
                            

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.petassure.com/networkvetsearch?showDetails=true')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/veterinary.png')} />
                                <Text style={styles.searchText}>Veterinary</Text>
                            </TouchableOpacity>

                        </View>


                
                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else if(description === 'Dental;Vision;Medical;Pet' || description === 'Dental;Vision;Pet;Medical' 
    ||  description === 'Dental;Medical;Vision;Pet' || description === 'Dental;Medical;Pet;Vision'
    || description === 'Dental;Pet;Vision;Medical' || description === 'Dental;Pet;Medical;Vision'

    ||description === 'Vision;Dental;Medical;Pet' || description === 'Vision;Dental;Pet;Medical' 
    ||  description === 'Vision;Pet;Dental;Medical' || description === 'Vision;Pet;Medical;Dental'
    || description === 'Vision;Medical;Dental;Pet' || description === 'Vision;Medical;Pet;Dental'

    || description === 'Medical;Dental;Vision;Pet' || description === 'Medical;Dental;Pet;Vision' 
    ||  description === 'Medical;Vision;Dental;Pet' || description === 'Medical;Vision;Pet;Dental'
    || description === 'Medical;Pet;Dental;Vision' || description === 'Medical;Pet;Vision;Dental'

    || description === 'Pet;Dental;Vision;Medical' || description === 'Pet;Dental;Medical;Vision' 
    ||  description === 'Pet;Vision;Dental;Medical' || description === 'pet;Vision;Medical;Dental'
    || description === 'Pet;Medical;Dental;Vision' || description === 'Pet;Medical;Vision;Dental'


    | description === 'Dental, Vision, Medical, Pet' || description === 'Dental, Vision, Pet, Medical' 
    ||  description === 'Dental, Medical, Vision, Pet' || description === 'Dental, Medical, Pet, Vision'
    || description === ' Dental, Pet, Vision, Medical' || description === 'Dental, Pet, Medical, Vision'

    ||description === 'Vision, Dental, Medical, Pet' || description === 'Vision, Dental, Pet, Medical' 
    ||  description === 'Vision, Pet, Dental, Medical' || description === 'Vision, Pet, Medical, Dental'
    || description === 'Vision, Medical, Dental, Pet' || description === 'Vision, Medical, Pet, Dental'

    || description === 'Medical, Dental, Vision;Pet' || description === 'Medical, Dental, Pet, Vision' 
    ||  description === 'Medical, Vision, Dental, Pet' || description === 'Medical, Vision, Pet, Dental'
    || description === 'Medical, Pet, Dental, Vision' || description === 'Medical, Pet, Vision, Dental'

    || description === 'Pet, Dental, Vision, Medical' || description === 'Pet, Dental, Medical, Vision' 
    ||  description === 'Pet, Vision, Dental, Medical' || description === 'pet, Vision, Medical, Dental'
    || description === 'Pet, Medical, Dental, Vision' || description === 'Pet, Medical, Vision, Dental')
{


 return (

            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>



                            
                            </View>



                               <View style={styles.searchRowContainer}>
    
                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Dental')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/106-tooth.png')} />
                                <Text style={styles.searchText}>Dental</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Vision')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/112-eye-chart.png')} />
                                <Text style={styles.searchText}>Vision</Text>
                            </TouchableOpacity>

                             
                        </View>


                        <View style={styles.searchRowContainer}>


                          <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.multiplan.com/nbbi')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/114-stethoscope-1.png')} />
                                <Text style={styles.searchText}>Medical</Text>
                            </TouchableOpacity>

                            

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.petassure.com/networkvetsearch?showDetails=true')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/veterinary.png')} />
                                <Text style={styles.searchText}>Veterinary</Text>
                            </TouchableOpacity>

                        </View>


                
                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else if(description === 'CBD;Dental;Vision;Medical;Pet' || description === 'CBD;Dental;Vision;Pet;Medical' 
    ||  description === 'CBD;Dental;Medical;Vision;Pet' || description === 'CBD;Dental;Medical;Pet;Vision'
    || description === 'CBD;Dental;Pet;Vision;Medical' || description === 'CBD;Dental;Pet;Medical;Vision'

    ||description === 'CBD;Vision;Dental;Medical;Pet' || description === 'CBD;Vision;Dental;Pet;Medical' 
    ||  description === 'CBD;Vision;Pet;Dental;Medical' || description === 'CBD;Vision;Pet;Medical;Dental'
    || description === 'CBD;Vision;Medical;Dental;Pet' || description === 'CBD;Vision;Medical;Pet;Dental'

    || description === 'CBD;Medical;Dental;Vision;Pet' || description === 'CBD;Medical;Dental;Pet;Vision' 
    ||  description === 'CBD;Medical;Vision;Dental;Pet' || description === 'CBD;Medical;Vision;Pet;Dental'
    || description === 'CBD;Medical;Pet;Dental;Vision' || description === 'CBD;Medical;Pet;Vision;Dental'

    || description === 'CBD;Pet;Dental;Vision;Medical' || description === 'CBD;Pet;Dental;Medical;Vision' 
    ||  description === 'CBD;Pet;Vision;Dental;Medical' || description === 'CBD;pet;Vision;Medical;Dental'
    || description === 'CBD;Pet;Medical;Dental;Vision' || description === 'CBD;Pet;Medical;Vision;Dental'

    || description === 'CBD, Dental, Vision, Medical, Pet' || description === 'CBD, Dental, Vision, Pet, Medical' 
    ||  description === 'CBD, Dental, Medical, Vision, Pet' || description === 'CBD, Dental, Medical, Pet, Vision'
    || description === 'CBD, Dental, Pet, Vision, Medical' || description === 'CBD, Dental, Pet, Medical, Vision'

    ||description === 'CBD, Vision, Dental, Medical, Pet' || description === 'CBD, Vision, Dental, Pet, Medical' 
    ||  description === 'CBD, Vision, Pet, Dental, Medical' || description === 'CBD, Vision, Pet, Medical, Dental'
    || description === 'CBD, Vision, Medical, Dental, Pet' || description === 'CBD, Vision, Medical, Pet, Dental'

    || description === 'CBD, Medical, Dental, Vision;Pet' || description === 'CBD, Medical, Dental, Pet, Vision' 
    ||  description === 'CBD, Medical, Vision, Dental, Pet' || description === 'CBD, Medical, Vision, Pet, Dental'
    || description === 'CBD, Medical, Pet, Dental, Vision' || description === 'CBD, Medical, Pet, Vision, Dental'

    || description === 'CBD, Pet, Dental, Vision, Medical' || description === 'CBD, Pet, Dental, Medical, Vision' 
    ||  description === 'CBD, Pet, Vision, Dental, Medical' || description === 'CBD, pet, Vision, Medical, Dental'
    || description === 'CBD, Pet, Medical, Dental, Vision' || description === 'CBD, Pet, Medical, Vision, Dental')
{


 return (

            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

 <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>

                            
                            </View>



                               <View style={styles.searchRowContainer}>
    
                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Dental')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/106-tooth.png')} />
                                <Text style={styles.searchText}>Dental</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Vision')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/112-eye-chart.png')} />
                                <Text style={styles.searchText}>Vision</Text>
                            </TouchableOpacity>

                             
                        </View>


                        <View style={styles.searchRowContainer}>


                          <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.multiplan.com/nbbi')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/114-stethoscope-1.png')} />
                                <Text style={styles.searchText}>Medical</Text>
                            </TouchableOpacity>

                            

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.petassure.com/networkvetsearch?showDetails=true')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/veterinary.png')} />
                                <Text style={styles.searchText}>Veterinary</Text>
                            </TouchableOpacity>

                        </View>


                
                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else if(description === 'Rx, Mail-order' || description === 'Mail-order, Rx' || description === 'Rx;Mail-order' || description === 'Mail-order;Rx')
{


 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                            
</View>
                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )



}
else if(description === 'CBD, Rx, Mail-order' || description === 'CBD, Mail-order, Rx'

     ||description === 'Rx, CBD, Mail-order' || description === 'Rx, Mail-order, CBD' 
     ||description === 'Mail-order, CBD, Rx' || description === 'Mail-order, Rx, CBD'

    || description === 'CBD;Rx;Mail-order' || description === 'CBD;Mail-order;Rx'
    ||description === 'Rx;CBD;Mail-order' || description === 'Rx;Mail-order;CBD' 
    ||description === 'Mail-order;CBD;Rx' || description === 'Mail-order;Rx;CBD')
{


 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/ndn')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>

                            
</View>
                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )



}
else if(description === 'Dental, Vision, Rx, Mail-order' || description === 'Dental, Vision, Mail-order, Rx'

    ||  description === 'Dental, Rx, Vision, Mail-order' || description === 'Dental, Rx, Mail-order, Vision'
    || description === 'Dental, Mail-order, Vision, Rx' || description === 'Dental, Mail-order, Rx, Vision'

    ||description === 'Vision, Dental, Rx, Mail-order' || description === 'Vision, Dental, Mail-order, Rx' 
    ||  description === 'Vision, Rx, Dental, Mail-order' || description === 'Vision, Rx, Mail-order, Dental'
    || description === 'Vision, Mail-order, Dental, Rx' || description === 'Vision, Mail-order, Rx, Dental'

    || description === 'Rx, Dental, Vision, Mail-order' || description === 'Rx, Dental, Mail-order, Vision' 
    ||  description === 'Rx, Vision, Mail-order, Dental' || description === 'Rx, Vision, Dental, Mail-order'
    || description === 'Rx, Mail-order, Dental, Vision' || description === 'Rx, Mail-order, Vision, Dental'

    || description === 'Mail-order, Dental, Vision, Rx' || description === 'Mail-order, Dental, Rx, Vision' 
    ||  description === 'Mail-order, Vision, Dental, Rx' || description === 'Mail-order, Vision, Rx, Dental'
    || description === 'Mail-order, Rx, Dental, Vision' || description === 'Mail-order, Rx, Vision, Dental'


    || description === 'Dental;Vision;Rx;Mail-order' || description === 'Dental;Vision;Mail-order;Rx'

    ||  description === 'Dental;Rx;Vision;Mail-order' || description === 'Dental;Rx;Mail-order;Vision'
    || description === 'Dental;Mail-order;Vision;Rx' || description === 'Dental;Mail-order;Rx;Vision'

    ||description === 'Vision;Dental;Rx;Mail-order' || description === 'Vision;Dental;Mail-order;Rx' 
    ||  description === 'Vision;Rx;Dental;Mail-order' || description === 'Vision;Rx;Mail-order;Dental'
    || description === 'Vision;Mail-order;Dental;Rx' || description === 'Vision;Mail-order;Rx;Dental'

    || description === 'Rx;Dental;Vision;Mail-order' || description === 'Rx;Dental;Mail-order;Vision' 
    ||  description === 'Rx;Vision;Mail-order;Dental' || description === 'Rx;Vision;Dental;Mail-order'
    || description === 'Rx;Mail-order;Dental;Vision' || description === 'Rx;Mail-order;Vision;Dental'

    || description === 'Mail-order;Dental;Vision;Rx' || description === 'Mail-order;Dental;Rx;Vision' 
    ||  description === 'Mail-order;Vision;Dental;Rx' || description === 'Mail-order;Vision;Rx;Dental'
    || description === 'Mail-order;Rx;Dental;Vision' || description === 'Mail-order;Rx;Vision;Dental')
{


 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                           
</View>


                               <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Vision')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/112-eye-chart.png')} />
                                <Text style={styles.searchText}>Vision</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Dental')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/106-tooth.png')} />
                                <Text style={styles.searchText}>Dental</Text>
                            </TouchableOpacity>
                        </View>

                    
                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )


}
else if(description === 'Dental, Medical, Rx, Mail-order' || description === 'Medical, Dental, Mail-order, Rx'
    || description === 'Dental, Rx, Medical, Mail-order' || description === 'Dental, Rx, Mail-order, Medical'
    ||description === 'Dental, Mail-order, Rx, Medical' || description === 'Dental, Mail-order, Medical, Rx' 

    ||  description === 'Medical, Dental, Rx, Mail-order' || description === 'Medical, Dental, Mail-order, Rx'
    || description === 'Medical, Rx, Dental, Mail-order' || description === 'Medical, Rx, Mail-order, Dental'
    || description === 'Medical, Mail-order, Dental, Rx' || description === 'Mail-order, Mail-order, Rx, Dental'

    ||  description === 'Rx, Dental, Medical, Mail-order' || description === 'Rx, Dental, Mail-order, Medical'
    || description === 'Rx, Medical, Dental, Mail-order' || description === 'Rx, Medical, Mail-order, Dental'
    || description === 'Rx, Mail-order, Medical, Dental' || description === 'Rx, Mail-order, Dental, Medical'

    ||  description === 'Mail-order, Dental, Medical, Rx' || description === 'Mail-order, Dental, Rx, Medical'
    || description === 'Mail-order, Medical, Dental, Rx' || description === 'Mail-order, Medical, Rx, Dental'
    || description === 'Mail-order, Rx, Dental, Medical' || description === 'Mail-order, Rx, Medical, Dental'

    || description === 'Dental;Medical;Rx;Mail-order' || description === 'Medical;Dental;Mail-order;Rx'
    || description === 'Dental;Rx;Medical;Mail-order' || description === 'Dental;Rx;Mail-order;Medical'
    ||description === 'Dental;Mail-order;Rx;Medical' || description === 'Dental;Mail-order;Medical;Rx' 

    ||  description === 'Medical;Dental;Rx;Mail-order' || description === 'Medical;Dental;Mail-order;Rx'
    || description === 'Medical;Rx;Dental;Mail-order' || description === 'Medical;Rx;Mail-order;Dental'
    || description === 'Medical;Mail-order;Dental;Rx' || description === 'Mail-order;Mail-order;Rx;Dental'

    ||  description === 'Rx;Dental;Medical;Mail-order' || description === 'Rx;Dental;Mail-order;Medical'
    || description === 'Rx;Medical;Dental;Mail-order' || description === 'Rx;Medical;Mail-order;Dental'
    || description === 'Rx;Mail-order;Medical;Dental' || description === 'Rx;Mail-order;Dental;Medical'

    ||  description === 'Mail-order;Dental;Medical;Rx' || description === 'Mail-order;Dental;Rx;Medical'
    || description === 'Mail-order, Medical, Dental, Rx' || description === 'Mail-order;Medical;Rx;Dental'
    || description === 'Mail-order;Rx;Dental;Medical' || description === 'Mail-order;Rx;Medical;Dental')
{



 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                            
</View>


                               <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.multiplan.com/nbbi')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/114-stethoscope-1.png')} />
                                <Text style={styles.searchText}>Medical</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Dental')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/106-tooth.png')} />
                                <Text style={styles.searchText}>Dental</Text>
                            </TouchableOpacity>
                        </View>

                               
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )



}
else if(description === 'Dental, Pet, Rx, Mail-order' || description === 'Dental, Pet, Mail-order, Rx'
|| description === 'Dental, Rx, Pet, Mail-order' || description === 'Dental, Rx,Mail-order, Pet'
|| description === 'Dental, Mail-order, Pet, Rx' || description === 'Dental, Mail-order, Rx, Pet'

|| description === 'Pet, Dental, Rx, Mail-order' || description === 'Pet, Rx, Mail-order, Rx'
|| description === 'Pet, Rx, Dental, Mail-order' || description === 'Pet, Rx, Mail-order, Dental'
|| description === 'Pet, Mail-order, Rx, Dental' || description === 'Pet, Mail-order, Dental, Rx'

|| description === 'Rx, Dental, Pet, Mail-order' || description === 'Rx, Dental, Mail-order, Pet'
|| description === 'Rx, Pet, Dental, Mail-order' || description === 'Rx, Pet, Mail-order, Dental'
|| description === 'Rx, Mail-order, Dental, Pet' || description === 'Rx, Mail-order, Pet, Dental'

|| description === 'Mail-order, Dental, Pet, Rx' || description === 'Mail-order, Dental, Rx, Pet'
|| description === 'Mail-order, Pet, Dental, Rx' || description === 'Mail-order, Pet, Rx, Dental'
|| description === 'Mail-order, Rx, Pet, Dental' || description === 'Mail-order, Rx, Dental, Pet'


    || description === 'Dental;Pet;Rx;Mail-order' || description === 'Pet;Dental;Rx;Mail-order'
    || description === 'Dental;Rx;Pet;Mail-order' || description === 'Dental;Rx;Mail-order;Pet'
|| description === 'Dental;Mail-order;Pet;Rx' || description === 'Dental;Mail-order;Rx;Pet'

|| description === 'Pet;Dental;Rx;Mail-order' || description === 'Pet;Rx;Mail-order;Rx'
|| description === 'Pet;Rx;Dental;Mail-order' || description === 'Pet;Rx;Mail-order;Dental'
|| description === 'Pet;Mail-order;Rx;Dental' || description === 'Pet;Mail-order;Dental;Rx'

|| description === 'Rx;Dental;Pet;Mail-order' || description === 'Rx;Dental;Mail-order;Pet'
|| description === 'Rx;Pet;Dental;Mail-order' || description === 'Rx;Pet;Mail-order;Dental'
|| description === 'Rx;Mail-order;Dental;Pet' || description === 'Rx;Mail-order;Pet;Dental'

|| description === 'Mail-order;Dental;Pet;Rx' || description === 'Mail-order;Dental;Rx;Pet'
|| description === 'Mail-order;Pet;Dental;Rx' || description === 'Mail-order;Pet;Rx;Dental'
|| description === 'Mail-order;Rx;Pet;Dental' || description === 'Mail-order;Rx;Dental;Pet'



    )
{


 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                            
</View>


                               <View style={styles.searchRowContainer}>
                            

                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Dental')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/106-tooth.png')} />
                                <Text style={styles.searchText}>Dental</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.petassure.com/networkvetsearch?showDetails=true')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/veterinary.png')} />
                                <Text style={styles.searchText}>Veterinary</Text>
                            </TouchableOpacity>
                        </View>

                    
                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )


}
else if(description === 'Medical, Vision, Rx, Mail-order' || description === 'Medical, Vision, Mail-order, Rx'
|| description === 'Medical, Rx, Vision, Mail-order' || description === 'Medical, Rx, Mail-order, Vision'
|| description === 'Medical, Mail-order, Rx, Vision' || description === 'Medical, Mail-order, Vision, Rx'

|| description === 'Vision, Medical, Rx, Mail-order' || description === 'Vision, Medical, Mail-order, Rx'
|| description === 'Vision, Rx, Medical, Mail-order' || description === 'Vision, Rx, Mail-order, Medical'
|| description === 'Vision, Mail-order, Rx, Medical' || description === 'Vision, Mail-order, Medical, Rx'

|| description === 'Rx, Medical, Vision, Mail-order' || description === 'Rx, Medical, Mail-order, Vision'
|| description === 'Rx, Vision, Medical, Mail-order' || description === 'Rx, Vision, Mail-order, Medical'
|| description === 'Rx, Mail-order, Vision, Medical' || description === 'Rx, Mail-order, Medical, Vision'

|| description === 'Mail-order, Medical, Vision, Rx' || description === 'Mail-order, Medical, Rx, Vision'
|| description === 'Mail-order, Rx, Medical, Vision' || description === 'Mail-order, Rx, Vision, Medical'
|| description === 'Mail-order, Vision, Rx, Medical' || description === 'Mail-order, Vision, Medical, Rx'


   || description === 'Medical;Vision;Rx;Mail-order' || description === 'Medical;Vision;Mail-order;Rx'
|| description === 'Medical;Rx;Vision;Mail-order' || description === 'Medical;Rx;Mail-order;Vision'
|| description === 'Medical;Mail-order;Rx;Vision' || description === 'Medical;Mail-order;Vision;Rx'

|| description === 'Vision;Medical;Rx;Mail-order' || description === 'Vision;Medical;Mail-order;Rx'
|| description === 'Vision;Rx;Medical;Mail-order' || description === 'Vision;Rx;Mail-order;Medical'
|| description === 'Vision;Mail-order;Rx;Medical' || description === 'Vision;Mail-order;Medical;Rx'

|| description === 'Rx;Medical;Vision;Mail-order' || description === 'Rx;Medical;Mail-order;Vision'
|| description === 'Rx;Vision;Medical;Mail-order' || description === 'Rx;Vision;Mail-order;Medical'
|| description === 'Rx;Mail-order;Vision;Medical' || description === 'Rx;Mail-order;Medical;Vision'

|| description === 'Mail-order;Medical;Vision;Rx' || description === 'Mail-order;Medical;Rx;Vision'
|| description === 'Mail-order;Rx;Medical;Vision' || description === 'Mail-order;Rx;Vision;Medical'
|| description === 'Mail-order;Vision;Rx;Medical' || description === 'Mail-order;Vision;Medical;Rx')
{



 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                           
</View>


                               <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.multiplan.com/nbbi')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/114-stethoscope-1.png')} />
                                <Text style={styles.searchText}>Medical</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Vision')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/112-eye-chart.png')} />
                                <Text style={styles.searchText}>Vision</Text>
                            </TouchableOpacity>
                        </View>

                       



  




                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )


}
else if(description === 'Medical, Dental, Rx, Mail-order' || description === 'Dental, Medical, Mail-order, Rx' 

|| description === 'Medical, Rx, Dental, Mail-order' || description === 'Medical, Rx, Mail-order, Dental'
|| description === 'Medical, Mail-order, Rx, Dental' || description === 'Medical, Mail-order, Dental, Rx'

|| description === 'Dental, Medical, Rx, Mail-order' || description === 'Dental, Medical, Mail-order, Rx'
|| description === 'Dental, Rx, Medical, Mail-order' || description === 'Dental, Rx, Mail-order, Medical'
|| description === 'Dental, Mail-order, Rx, Medical' || description === 'Dental, Mail-order, Medical, Rx'

|| description === 'Rx, Medical, Dental, Mail-order' || description === 'Rx, Medical, Mail-order, Dental'
|| description === 'Rx, Dental, Medical, Mail-order' || description === 'Rx, Dental, Mail-order, Medical'
|| description === 'Rx, Mail-order, Dental, Medical' || description === 'Rx, Mail-order, Medical, Dental'

|| description === 'Mail-order, Medical, Dental, Rx' || description === 'Mail-order, Medical, Rx, Dental'
|| description === 'Mail-order, Dental, Medical, Rx' || description === 'Mail-order, Dental, Rx, Medical'
|| description === 'Mail-order, Rx, Dental, Medical' || description === 'Mail-order, Rx, Medical, Dental'


|| description === 'Medical;Dental;Rx;Mail-order' || description === 'Dental;Medical;Mail-order;Rx' 

|| description === 'Medical;Rx;Dental;Mail-order' || description === 'Medical;Rx;Mail-order;Dental'
|| description === 'Medical;Mail-order;Rx;Dental' || description === 'Medical;Mail-order;Dental;Rx'

|| description === 'Dental;Medical;Rx;Mail-order' || description === 'Dental;Medical;Mail-order;Rx'
|| description === 'Dental;Rx;Medical;Mail-order' || description === 'Dental;Rx;Mail-order;Medical'
|| description === 'Dental;Mail-order;Rx;Medical' || description === 'Dental;Mail-order;Medical;Rx'

|| description === 'Rx;Medical;Dental;Mail-order' || description === 'Rx;Medical;Mail-order;Dental'
|| description === 'Rx;Dental;Medical;Mail-order' || description === 'Rx;Dental;Mail-order;Medical'
|| description === 'Rx;Mail-order;Dental;Medical' || description === 'Rx;Mail-order;Medical;Dental'

|| description === 'Mail-order;Medical;Dental;Rx' || description === 'Mail-order;Medical;Rx;Dental'
|| description === 'Mail-order;Dental;Medical;Rx' || description === 'Mail-order;Dental;Rx;Medical'
|| description === 'Mail-order;Rx;Dental;Medical' || description === 'Mail-order;Rx;Medical;Dental'

)
{


 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                            
</View>


                               <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.multiplan.com/nbbi')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/114-stethoscope-1.png')} />
                                <Text style={styles.searchText}>Medical</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Dental')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/106-tooth.png')} />
                                <Text style={styles.searchText}>Dental</Text>
                            </TouchableOpacity>
                        </View>

                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )



}
else if(description === 'Medical, Pet, Rx, Mail-order' || description === 'Medical, Pet, Mail-order, Rx'
      || description === 'Medical, Rx, Pet, Mail-order' || description === 'Medical, Rx, Mail-order, Pet'
      || description === 'Medical, Mail-order, Pet, Rx' || description === 'Medical, Mail-order, Rx, Pet'


      || description === 'Pet, Medical, Rx, Mail-order' || description === 'Pet, Medical, Mail-order, Rx'
      || description === 'Pet, Mail-order, Medical, Rx' || description === 'Pet, Mail-order, Rx, Medical'
      || description === 'Pet, Rx, Medical, Mail-order' || description === 'Pet, Rx, Mail-order, Medical'


      || description === 'Rx, Medical, Pet, Mail-order' || description === 'Rx, Medical, Mail-order, Pet'
      || description === 'Rx, Pet, Medical, Mail-order' || description === 'Rx, Pet, Mail-order, Medical'
      || description === 'Rx, Mail-order, Pet, Medical' || description === 'Rx, Mail-order, Medical, Pet'


      || description === 'Mail-order, Medical, Pet, Rx' || description === 'Mail-order, Medical, Rx, Pet'
      || description === 'Mail-order, Pet, Medical, Rx' || description === 'Mail-order, Pet, Rx, Medical'
      || description === 'Mail-order, Rx, Pet, Medical' || description === 'Mail-order, Rx, Medical, Pet'


    || description === 'Medical;Pet;Rx;Mail-order' || description === 'Pet;Medical;Rx;Mail-order'
    || description === 'Medical;Rx;Pet;Mail-order' || description === 'Medical;Rx;Mail-order;Pet'
      || description === 'Medical;Mail-order;Pet;Rx' || description === 'Medical;Mail-order;Rx;Pet'


      || description === 'Pet;Medical;Rx;Mail-order' || description === 'Pet;Medical;Mail-order;Rx'
      || description === 'Pet;Mail-order;Medical;Rx' || description === 'Pet;Mail-order;Rx;Medical'
      || description === 'Pet;Rx, Medical;Mail-order' || description === 'Pet;Rx;Mail-order;Medical'


      || description === 'Rx;Medical;Pet;Mail-order' || description === 'Rx;Medical;Mail-order;Pet'
      || description === 'Rx;Pet;Medical;Mail-order' || description === 'Rx;Pet;Mail-order;Medical'
      || description === 'Rx;Mail-order;Pet;Medical' || description === 'Rx;Mail-order;Medical;Pet'


      || description === 'Mail-order;Medical;Pet;Rx' || description === 'Mail-order;Medical;Rx;Pet'
      || description === 'Mail-order;Pet;Medical;Rx' || description === 'Mail-order;Pet;Rx;Medical'
      || description === 'Mail-order;Rx;Pet;Medical' || description === 'Mail-order;Rx;Medical;Pet'

    )
{



 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                            
</View>


                               <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.multiplan.com/nbbi')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/114-stethoscope-1.png')} />
                                <Text style={styles.searchText}>Medical</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.petassure.com/networkvetsearch?showDetails=true')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/veterinary.png')} />
                                <Text style={styles.searchText}>Veterinary</Text>
                            </TouchableOpacity>
                        </View>

                        




                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )


}
else if(description === 'Pet, Vision, Rx, Mail-order' || description === 'Pet, Vision, Rx, Mail-order' 



    || description === 'Pet;Vision;Rx;Mail-order' || description === 'Pet;Vision;Mail-order;Rx'
    || description === 'Pet;Rx;Vision;Mail-order;' || description === 'Pet;Rx;Mail-order;Vision'
    || description === 'Pet;Mail-order;Rx;Vision' || description === 'Pet;Mail-order;Vision;Rx'

    || description === 'Vision;Pet;Rx;Mail-order' || description === 'Vision;Pet;Mail-order;Rx'
    || description === 'Vision;Rx;Pet;Mail-order' || description === 'Vision;Rx;Mail-order;Pet'
    || description === 'Vision;Mail-order;Rx;Pet' || description === 'Vision;Mail-order;Pet;Rx'


    || description === 'Rx;Pet;Vision;Mail-order' || description === 'Rx;Pet;Mail-order;Vision'
    || description === 'Rx;Vision;Pet;Mail-order' || description === 'Rx;Vision;Mail-order;Pet'
    || description === 'Rx;Mail-order;Vision;Pet' || description === 'Rx;Mail-order;Pet;Vision'



    || description === 'Mail-order;Pet;Vision;Rx' || description === 'Mail-order;Pet;Rx;Vision'
    || description === 'Mail-order;Vision;Pet;Rx' || description === 'Mail-order;Vision;Rx;Pet'
    || description === 'Mail-order;Rx;Pet;Vision' || description === 'Mail-order;Rx;Vision;Pet'
    )
{



 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                            
</View>


                               <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Vision')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/112-eye-chart.png')} />
                                <Text style={styles.searchText}>Vision</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.petassure.com/networkvetsearch?showDetails=true')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/veterinary.png')} />
                                <Text style={styles.searchText}>Veterinary</Text>
                            </TouchableOpacity>


                        </View>

                       


                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )   

}
else if(description === 'CBD;Dental;Vision;Rx;Mail-order' || description === 'CBD;Vision;Dental;Rx;Mail-order'
      || description === 'CBD;Dental;Mail-order;Vision;Rx' || description === 'CBD;Dental;Mail-order;Rx;Vision'
      || description === 'CBD;Dental;Rx;Mail-order;Vision' || description === 'CBD;Dental;Rx;Vision;Mail-order'

      || description === 'CBD;Vision;Dental;Rx;Mail-order' || description === 'CBD;Vision;Dental;Mail-order;Rx'
      || description === 'CBD;Vision;Rx;Mail-order;Dental' || description === 'CBD;Vision;Rx;Dental;Mail-order'
      || description === 'CBD;Vision;Mail-order;Dental;Rx' || description === 'CBD;Vision;Mail-order;Rx;Dental'

      || description === 'CBD;Rx;Dental;Vision;Mail-order' || description === 'CBD;Rx;Dental;Mail-order;Vision'
      || description === 'CBD;Rx;Mail-order;Dental;Vision' || description === 'CBD;Rx;Mail-order;Vision;Dental'
      || description === 'CBD;Rx;Vision;Mail-order;Dental' || description === 'CBD;Rx;Vision;Dental;Mail-order'

      || description === 'CBD;Mail-order;Dental;Vision;Rx' || description === 'CBD;Mail-order;Dental;Rx;Vision'
      || description === 'CBD;Mail-order;Vision;Dental;Rx' || description === 'CBD;Mail-order;Vision;Rx;Dental'
      || description === 'CBD;Mail-order;Rx;Vision;Dental' || description === 'CBD;Mail-order;Rx;Dental;Vision'

      || description === 'Dental;CBD;Vision;Rx;Mail-order' || description === 'Dental;CBD;Vision;Mail-order;Rx'
      || description === 'Dental;CBD;Mail-order;Vision;Rx' || description === 'Dental;CBD;Mail-order;Rx;Vision'
      || description === 'Dental;CBD;Rx;Mail-order;Vision' || description === 'Dental;CBD;Rx;Vision;Mail-order'

      || description === 'Dental;Vision;CBD;Rx;Mail-order' || description === 'Dental;Vision;CBD;Mail-order;Rx'
      || description === 'Dental;Vision;Mail-order;CBD;Rx' || description === 'Dental;Vision;Mail-order;Rx;CBD'
      || description === 'Dental;Vision;Rx;Mail-order;CBD' || description === 'Dental;Vision;Rx;CBD;Mail-order'

      || description === 'Dental;Rx;CBD;Vision;Mail-order' || description === 'Dental;Rx;CBD;Mail-order;Vision'
      || description === 'Dental;Rx;Vision;CBD;Mail-order' || description === 'Dental;Rx;Vision;Mail-order;CBD'
      || description === 'Dental;Rx;CBD;Vision;Mail-order' || description === 'Dental;Rx;CBD;Mail-order;Vision'

      || description === 'Dental;Mail-order;CBD;Vision;Rx' || description === 'Dental;Mail-order;CBD;Rx;Vision'
      || description === 'Dental;Mail-order;Vision;CBD;Rx' || description === 'Dental;Mail-order;Vision;Rx;CBD'
      || description === 'Dental;Mail-order;Rx;CBD;Vision' || description === 'Dental;Mail-order;Rx;Vision;CBD'

      || description === 'Vision;CBD;Dental;Rx;Mail-order' || description === 'Vision;CBD;Dental;Mail-order;Rx'
      || description === 'Vision;CBD;Rx;Dental;Mail-order' || description === 'Vision;CBD;Rx;Mail-order;Dental'
      || description === 'Vision;CBD;Mail-order;Rx;Dental' || description === 'Vision;CBD;Mail-order;Dental;Rx'

      || description === 'Vision;Dental;CBD;Rx;Mail-order' || description === 'Vision;Dental;CBD;Mail-order;Rx'
      || description === 'Vision;Dental;Mail-order;Rx;CBD' || description === 'Vision;Dental;Mail-order;CBD;Rx'
      || description === 'Vision;Dental;Rx;CBD;Mail-order' || description === 'Vision;Dental;Rx;Mail-order;CBD'

      || description === 'Vision;Rx;CBD;Dental;Mail-order' || description === 'Vision;Rx;CBD;Mail-order;Dental'
      || description === 'Vision;Rx;Mail-order;CBD;Dental' || description === 'Vision;Rx;Mail-order;Dental;CBD'
      || description === 'Vision;Rx;Dental;CBD;Mail-order' || description === 'Vision;Rx;Dental;Mail-order;CBD'

      || description === 'Vision;Mail-order;CBD;Dental;Rx' || description === 'Vision;Mail-order;CBD;Rx;Dental'
      || description === 'Vision;Mail-order;Rx;CBD;Dental' || description === 'Vision;Mail-order;Rx;Dental;CBD'
      || description === 'Vision;Mail-order;Dental;Rx;CBD' || description === 'Vision;Mail-order;Dental;CBD;Rx'


      || description === 'Rx;CBD;Dental;Vision;Mail-order' || description === 'Rx;CBD;Dental;Mail-order;Vision'
      || description === 'Rx;CBD;Mail-order;Dental;Vision' || description === 'Rx;CBD;Mail-order;Vision;Dental'
      || description === 'Rx;CBD;Vision;Dental;Mail-order' || description === 'Rx;CBD;Vision;Mail-order;Dental'

      || description === 'Rx;Dental;CBD;Vision;Mail-order' || description === 'Rx;Dental;CBD;Mail-order;Vision'
      || description === 'Rx;Dental;Vision;CBD;Mail-order' || description === 'Rx;Dental;Vision;Mail-order;CBD'
      || description === 'Rx;Dental;Mail-order;Vision;CBD' || description === 'Rx;Dental;Mail-order;CBD;Vision'

      || description === 'Rx;Vision;CBD;Dental;Mail-order' || description === 'Rx;Vision;CBD;Mail-order;Dental'
      || description === 'Rx;Vision;Mail-order;CBD;Dental' || description === 'Rx;Vision;Mail-order;Dental;CBD'
      || description === 'Rx;Vision;Dental;Mail-order;CBD' || description === 'Rx;Vision;Dental;CBD;Mail-order'

      || description === 'Rx;Mail-order;CBD;Dental;Vision' || description === 'Rx;Mail-order;CBD;Vision;Dental'
      || description === 'Rx;Mail-order;Dental;CBD;Vision' || description === 'Rx;Mail-order;Dental;Vision;CBD'
      || description === 'Rx;Mail-order;Vision;CBD;Dental' || description === 'Rx;Mail-order;Vision;Dental;CBD'


      || description === 'Mail-order;CBD;Dental;Vision;Rx' || description === 'Mail-order;CBD;Dental;Rx;Dental'
      || description === 'Mail-order;CBD;Vision;Dental;Rx' || description === 'Mail-order;CBD;Vision;Rx;Dental'
      || description === 'Mail-order;CBD;Rx;Vision;Dental' || description === 'Mail-order;CBD;Rx;Dental;Vision'

      || description === 'Mail-order;Dental;CBD;Vision;Rx' || description === 'Mail-order;Dental;CBD;Rx;Vision'
      || description === 'Mail-order;Dental;Vision;CBD;Rx' || description === 'Mail-order;Dental;Vision;Rx;CBD'
      || description === 'Mail-order;Dental;Rx;Vision;CBD' || description === 'Mail-order;Dental;Rx;CBD;Vision'

      || description === 'Mail-order;Vision;CBD;Dental;Rx' || description === 'Mail-order;Vision;CBD;Rx;Dental'
      || description === 'Mail-order;Vision;Dental;CBD;Rx' || description === 'Mail-order;Vision;Dental;Rx;CBD'
      || description === 'Mail-order;Vision;Rx;CBD;Dental' || description === 'Mail-order;Vision;Rx;Dental;CBD'

      || description === 'Mail-order;Rx;CBD;Dental;Vision' || description === 'Mail-order;Rx;CBD;Vision;Dental'
      || description === 'Mail-order;Rx;Dental;CBD;Vision' || description === 'Mail-order;Rx;Dental;Vision;CBD'
      || description === 'Mail-order;Rx;Vision;CBD;Dental' || description === 'Mail-order;Rx;Vision;Dental;CBD'
    )
{


 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>

                           
</View>


                               <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Vision')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/112-eye-chart.png')} />
                                <Text style={styles.searchText}>Vision</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Dental')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/106-tooth.png')} />
                                <Text style={styles.searchText}>Dental</Text>
                            </TouchableOpacity>
                        </View>

                    
                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )


}
else if( description === 'CBD;Dental;Medical;Rx;Mail-order' || description === 'CBD;Dental;Medical;Mail-order;Rx'
      || description === 'CBD;Dental;Mail-order;Medical;Rx' || description === 'CBD;Dental;Mail-order;Rx;Medical'
      || description === 'CBD;Dental;Rx;Mail-order;Medical' || description === 'CBD;Dental;Rx;Medical;Mail-order'

      || description === 'CBD;Medical;Dental;Rx;Mail-order' || description === 'CBD;Medical;Dental;Mail-order;Rx'
      || description === 'CBD;Medical;Rx;Mail-order;Dental' || description === 'CBD;Medical;Rx;Dental;Mail-order'
      || description === 'CBD;Medical;Mail-order;Dental;Rx' || description === 'CBD;Medical;Mail-order;Rx;Dental'

      || description === 'CBD;Rx;Dental;Medical;Mail-order' || description === 'CBD;Rx;Dental;Mail-order;Medical'
      || description === 'CBD;Rx;Mail-order;Dental;Medical' || description === 'CBD;Rx;Mail-order;Medical;Dental'
      || description === 'CBD;Rx;Medical;Mail-order;Dental' || description === 'CBD;Rx;Medical;Dental;Mail-order'

      || description === 'CBD;Mail-order;Dental;Medical;Rx' || description === 'CBD;Mail-order;Dental;Rx;Medical'
      || description === 'CBD;Mail-order;Medical;Dental;Rx' || description === 'CBD;Mail-order;Medical;Rx;Dental'
      || description === 'CBD;Mail-order;Rx;Medical;Dental' || description === 'CBD;Mail-order;Rx;Dental;Medical'

      || description === 'Dental;CBD;Medical;Rx;Mail-order' || description === 'Dental;CBD;Medical;Mail-order;Rx'
      || description === 'Dental;CBD;Mail-order;Medical;Rx' || description === 'Dental;CBD;Mail-order;Rx;Medical'
      || description === 'Dental;CBD;Rx;Mail-order;Medical' || description === 'Dental;CBD;Rx;Medical;Mail-order'

      || description === 'Dental;Medical;CBD;Rx;Mail-order' || description === 'Dental;Medical;CBD;Mail-order;Rx'
      || description === 'Dental;Medical;Mail-order;CBD;Rx' || description === 'Dental;Medical;Mail-order;Rx;CBD'
      || description === 'Dental;Medical;Rx;Mail-order;CBD' || description === 'Dental;Medical;Rx;CBD;Mail-order'

      || description === 'Dental;Rx;CBD;Medical;Mail-order' || description === 'Dental;Rx;CBD;Mail-order;Medical'
      || description === 'Dental;Rx;Medical;CBD;Mail-order' || description === 'Dental;Rx;Medical;Mail-order;CBD'
      || description === 'Dental;Rx;CBD;Medical;Mail-order' || description === 'Dental;Rx;CBD;Mail-order;Medical'

      || description === 'Dental;Mail-order;CBD;Medical;Rx' || description === 'Dental;Mail-order;CBD;Rx;Medical'
      || description === 'Dental;Mail-order;Medical;CBD;Rx' || description === 'Dental;Mail-order;Medical;Rx;CBD'
      || description === 'Dental;Mail-order;Rx;CBD;Medical' || description === 'Dental;Mail-order;Rx;Medical;CBD'

      || description === 'Medical;CBD;Dental;Rx;Mail-order' || description === 'Medical;CBD;Dental;Mail-order;Rx'
      || description === 'Medical;CBD;Rx;Dental;Mail-order' || description === 'Medical;CBD;Rx;Mail-order;Dental'
      || description === 'Medical;CBD;Mail-order;Rx;Dental' || description === 'Medical;CBD;Mail-order;Dental;Rx'

      || description === 'Medical;Dental;CBD;Rx;Mail-order' || description === 'Medical;Dental;CBD;Mail-order;Rx'
      || description === 'Medical;Dental;Mail-order;Rx;CBD' || description === 'Medical;Dental;Mail-order;CBD;Rx'
      || description === 'Medical;Dental;Rx;CBD;Mail-order' || description === 'Medical;Dental;Rx;Mail-order;CBD'

      || description === 'Medical;Rx;CBD;Dental;Mail-order' || description === 'Medical;Rx;CBD;Mail-order;Dental'
      || description === 'Medical;Rx;Mail-order;CBD;Dental' || description === 'Medical;Rx;Mail-order;Dental;CBD'
      || description === 'Medical;Rx;Dental;CBD;Mail-order' || description === 'Medical;Rx;Dental;Mail-order;CBD'

      || description === 'Medical;Mail-order;CBD;Dental;Rx' || description === 'Medical;Mail-order;CBD;Rx;Dental'
      || description === 'Medical;Mail-order;Rx;CBD;Dental' || description === 'Medical;Mail-order;Rx;Dental;CBD'
      || description === 'Medical;Mail-order;Dental;Rx;CBD' || description === 'Medical;Mail-order;Dental;CBD;Rx'


      || description === 'Rx;CBD;Dental;Medical;Mail-order' || description === 'Rx;CBD;Dental;Mail-order;Medical'
      || description === 'Rx;CBD;Mail-order;Dental;Medical' || description === 'Rx;CBD;Mail-order;Medical;Dental'
      || description === 'Rx;CBD;Medical;Dental;Mail-order' || description === 'Rx;CBD;Medical;Mail-order;Dental'

      || description === 'Rx;Dental;CBD;Medical;Mail-order' || description === 'Rx;Dental;CBD;Mail-order;Medical'
      || description === 'Rx;Dental;Medical;CBD;Mail-order' || description === 'Rx;Dental;Medical;Mail-order;CBD'
      || description === 'Rx;Dental;Mail-order;Medical;CBD' || description === 'Rx;Dental;Mail-order;CBD;Medical'

      || description === 'Rx;Medical;CBD;Dental;Mail-order' || description === 'Rx;Medical;CBD;Mail-order;Dental'
      || description === 'Rx;Medical;Mail-order;CBD;Dental' || description === 'Rx;Medical;Mail-order;Dental;CBD'
      || description === 'Rx;Medical;Dental;Mail-order;CBD' || description === 'Rx;Medical;Dental;CBD;Mail-order'

      || description === 'Rx;Mail-order;CBD;Dental;Medical' || description === 'Rx;Mail-order;CBD;Medical;Dental'
      || description === 'Rx;Mail-order;Dental;CBD;Medical' || description === 'Rx;Mail-order;Dental;Medical;CBD'
      || description === 'Rx;Mail-order;Medical;CBD;Dental' || description === 'Rx;Mail-order;Medical;Dental;CBD'


      || description === 'Mail-order;CBD;Dental;Medical;Rx' || description === 'Mail-order;CBD;Dental;Rx;Dental'
      || description === 'Mail-order;CBD;Medical;Dental;Rx' || description === 'Mail-order;CBD;Medical;Rx;Dental'
      || description === 'Mail-order;CBD;Rx;Medical;Dental' || description === 'Mail-order;CBD;Rx;Dental;Medical'

      || description === 'Mail-order;Dental;CBD;Medical;Rx' || description === 'Mail-order;Dental;CBD;Rx;Medical'
      || description === 'Mail-order;Dental;Medical;CBD;Rx' || description === 'Mail-order;Dental;Medical;Rx;CBD'
      || description === 'Mail-order;Dental;Rx;Medical;CBD' || description === 'Mail-order;Dental;Rx;CBD;Medical'

      || description === 'Mail-order;Medical;CBD;Dental;Rx' || description === 'Mail-order;Medical;CBD;Rx;Dental'
      || description === 'Mail-order;Medical;Dental;CBD;Rx' || description === 'Mail-order;Medical;Dental;Rx;CBD'
      || description === 'Mail-order;Medical;Rx;CBD;Dental' || description === 'Mail-order;Medical;Rx;Dental;CBD'

      || description === 'Mail-order;Rx;CBD;Dental;Medical' || description === 'Mail-order;Rx;CBD;Medical;Dental'
      || description === 'Mail-order;Rx;Dental;CBD;Medical' || description === 'Mail-order;Rx;Dental;Medical;CBD'
      || description === 'Mail-order;Rx;Medical;CBD;Dental' || description === 'Mail-order;Rx;Medical;Dental;CBD'

    )
{



 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>

                            
</View>


                               <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.multiplan.com/nbbi')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/114-stethoscope-1.png')} />
                                <Text style={styles.searchText}>Medical</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Dental')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/106-tooth.png')} />
                                <Text style={styles.searchText}>Dental</Text>
                            </TouchableOpacity>
                        </View>

                               
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )



}
else if(description === 'CBD;Dental;Pet;Rx;Mail-order' || description === 'CBD;Dental;Pet;Mail-order;Rx'
      || description === 'CBD;Dental;Mail-order;Pet;Rx' || description === 'CBD;Dental;Mail-order;Rx;Pet'
      || description === 'CBD;Dental;Rx;Mail-order;Pet' || description === 'CBD;Dental;Rx;Pet;Mail-order'

      || description === 'CBD;Pet;Dental;Rx;Mail-order' || description === 'CBD;Pet;Dental;Mail-order;Rx'
      || description === 'CBD;Pet;Rx;Mail-order;Dental' || description === 'CBD;Pet;Rx;Dental;Mail-order'
      || description === 'CBD;Pet;Mail-order;Dental;Rx' || description === 'CBD;Pet;Mail-order;Rx;Dental'

      || description === 'CBD;Rx;Dental;Pet;Mail-order' || description === 'CBD;Rx;Dental;Mail-order;Pet'
      || description === 'CBD;Rx;Mail-order;Dental;Pet' || description === 'CBD;Rx;Mail-order;Pet;Dental'
      || description === 'CBD;Rx;Pet;Mail-order;Dental' || description === 'CBD;Rx;Pet;Dental;Mail-order'

      || description === 'CBD;Mail-order;Dental;Pet;Rx' || description === 'CBD;Mail-order;Dental;Rx;Pet'
      || description === 'CBD;Mail-order;Pet;Dental;Rx' || description === 'CBD;Mail-order;Pet;Rx;Dental'
      || description === 'CBD;Mail-order;Rx;Pet;Dental' || description === 'CBD;Mail-order;Rx;Dental;Pet'

      || description === 'Dental;CBD;Pet;Rx;Mail-order' || description === 'Dental;CBD;Pet;Mail-order;Rx'
      || description === 'Dental;CBD;Mail-order;Pet;Rx' || description === 'Dental;CBD;Mail-order;Rx;Pet'
      || description === 'Dental;CBD;Rx;Mail-order;Pet' || description === 'Dental;CBD;Rx;Pet;Mail-order'

      || description === 'Dental;Pet;CBD;Rx;Mail-order' || description === 'Dental;Pet;CBD;Mail-order;Rx'
      || description === 'Dental;Pet;Mail-order;CBD;Rx' || description === 'Dental;Pet;Mail-order;Rx;CBD'
      || description === 'Dental;Pet;Rx;Mail-order;CBD' || description === 'Dental;Pet;Rx;CBD;Mail-order'

      || description === 'Dental;Rx;CBD;Pet;Mail-order' || description === 'Dental;Rx;CBD;Mail-order;Pet'
      || description === 'Dental;Rx;Pet;CBD;Mail-order' || description === 'Dental;Rx;Pet;Mail-order;CBD'
      || description === 'Dental;Rx;CBD;Pet;Mail-order' || description === 'Dental;Rx;CBD;Mail-order;Pet'

      || description === 'Dental;Mail-order;CBD;Pet;Rx' || description === 'Dental;Mail-order;CBD;Rx;Pet'
      || description === 'Dental;Mail-order;Pet;CBD;Rx' || description === 'Dental;Mail-order;Pet;Rx;CBD'
      || description === 'Dental;Mail-order;Rx;CBD;Pet' || description === 'Dental;Mail-order;Rx;Pet;CBD'

      || description === 'Pet;CBD;Dental;Rx;Mail-order' || description === 'Pet;CBD;Dental;Mail-order;Rx'
      || description === 'Pet;CBD;Rx;Dental;Mail-order' || description === 'Pet;CBD;Rx;Mail-order;Dental'
      || description === 'Pet;CBD;Mail-order;Rx;Dental' || description === 'Pet;CBD;Mail-order;Dental;Rx'

      || description === 'Pet;Dental;CBD;Rx;Mail-order' || description === 'Pet;Dental;CBD;Mail-order;Rx'
      || description === 'Pet;Dental;Mail-order;Rx;CBD' || description === 'Pet;Dental;Mail-order;CBD;Rx'
      || description === 'Pet;Dental;Rx;CBD;Mail-order' || description === 'Pet;Dental;Rx;Mail-order;CBD'

      || description === 'Pet;Rx;CBD;Dental;Mail-order' || description === 'Pet;Rx;CBD;Mail-order;Dental'
      || description === 'Pet;Rx;Mail-order;CBD;Dental' || description === 'Pet;Rx;Mail-order;Dental;CBD'
      || description === 'Pet;Rx;Dental;CBD;Mail-order' || description === 'Pet;Rx;Dental;Mail-order;CBD'

      || description === 'Pet;Mail-order;CBD;Dental;Rx' || description === 'Pet;Mail-order;CBD;Rx;Dental'
      || description === 'Pet;Mail-order;Rx;CBD;Dental' || description === 'Pet;Mail-order;Rx;Dental;CBD'
      || description === 'Pet;Mail-order;Dental;Rx;CBD' || description === 'Pet;Mail-order;Dental;CBD;Rx'


      || description === 'Rx;CBD;Dental;Pet;Mail-order' || description === 'Rx;CBD;Dental;Mail-order;Pet'
      || description === 'Rx;CBD;Mail-order;Dental;Pet' || description === 'Rx;CBD;Mail-order;Pet;Dental'
      || description === 'Rx;CBD;Pet;Dental;Mail-order' || description === 'Rx;CBD;Pet;Mail-order;Dental'

      || description === 'Rx;Dental;CBD;Pet;Mail-order' || description === 'Rx;Dental;CBD;Mail-order;Pet'
      || description === 'Rx;Dental;Pet;CBD;Mail-order' || description === 'Rx;Dental;Pet;Mail-order;CBD'
      || description === 'Rx;Dental;Mail-order;Pet;CBD' || description === 'Rx;Dental;Mail-order;CBD;Pet'

      || description === 'Rx;Pet;CBD;Dental;Mail-order' || description === 'Rx;Pet;CBD;Mail-order;Dental'
      || description === 'Rx;Pet;Mail-order;CBD;Vision' || description === 'Rx;Pet;Mail-order;Vision;CBD'
      || description === 'Rx;Pet;Dental;Mail-order;CBD' || description === 'Rx;Pet;Dental;CBD;Mail-order'

      || description === 'Rx;Mail-order;CBD;Dental;Pet' || description === 'Rx;Mail-order;CBD;Pet;Dental'
      || description === 'Rx;Mail-order;Dental;CBD;Pet' || description === 'Rx;Mail-order;Dental;Pet;CBD'
      || description === 'Rx;Mail-order;Pet;CBD;Dental' || description === 'Rx;Mail-order;Pet;Dental;CBD'


      || description === 'Mail-order;CBD;Dental;Pet;Rx' || description === 'Mail-order;CBD;Dental;Rx;Pet'
      || description === 'Mail-order;CBD;Pet;Dental;Rx' || description === 'Mail-order;CBD;Pet;Rx;Dental'
      || description === 'Mail-order;CBD;Rx;Pet;Dental' || description === 'Mail-order;CBD;Rx;Dental;Pet'

      || description === 'Mail-order;Dental;CBD;Pet;Rx' || description === 'Mail-order;Dental;CBD;Rx;Pet'
      || description === 'Mail-order;Dental;Pet;CBD;Rx' || description === 'Mail-order;Dental;Pet;Rx;CBD'
      || description === 'Mail-order;Dental;Rx;Pet;CBD' || description === 'Mail-order;Dental;Rx;CBD;Pet'

      || description === 'Mail-order;Pet;CBD;Dental;Rx' || description === 'Mail-order;Pet;CBD;Rx;Dental'
      || description === 'Mail-order;Pet;Dental;CBD;Rx' || description === 'Mail-order;Pet;Dental;Rx;CBD'
      || description === 'Mail-order;Pet;Rx;CBD;Dental' || description === 'Mail-order;Pet;Rx;Dental;CBD'

      || description === 'Mail-order;Rx;CBD;Dental;Pet' || description === 'Mail-order;Rx;CBD;Pet;Dental'
      || description === 'Mail-order;Rx;Dental;CBD;Pet' || description === 'Mail-order;Rx;Dental;Pet;CBD'
      || description === 'Mail-order;Rx;Pet;CBD;Dental' || description === 'Mail-order;Rx;Pet;Dental;CBD')
{


 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>

                            
</View>


                               <View style={styles.searchRowContainer}>
                            

                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Dental')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/106-tooth.png')} />
                                <Text style={styles.searchText}>Dental</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.petassure.com/networkvetsearch?showDetails=true')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/veterinary.png')} />
                                <Text style={styles.searchText}>Veterinary</Text>
                            </TouchableOpacity>
                        </View>

                    
                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )


}
else if(description === 'CBD;Medical;Vision;Rx;Mail-order' || description === 'CBD;Medical;Vision;Mail-order;Rx'
        
      || description === 'CBD;Medical;Mail-order;Vision;Rx' || description === 'CBD;Medical;Mail-order;Rx;Vision'
      || description === 'CBD;Medical;Rx;Mail-order;Vision' || description === 'CBD;Medical;Rx;Vision;Mail-order'

      || description === 'CBD;Vision;Medical;Rx;Mail-order' || description === 'CBD;Vision;Medical;Mail-order;Rx'
      || description === 'CBD;Vision;Rx;Mail-order;Medical' || description === 'CBD;Vision;Rx;Medical;Mail-order'
      || description === 'CBD;Vision;Mail-order;Medical;Rx' || description === 'CBD;Vision;Mail-order;Rx;Medical'

      || description === 'CBD;Rx;Medical;Vision;Mail-order' || description === 'CBD;Rx;Medical;Mail-order;Vision'
      || description === 'CBD;Rx;Mail-order;Medical;Vision' || description === 'CBD;Rx;Mail-order;Vision;Medical'
      || description === 'CBD;Rx;Vision;Mail-order;Medical' || description === 'CBD;Rx;Vision;Medical;Mail-order'

      || description === 'CBD;Mail-order;Medical;Vision;Rx' || description === 'CBD;Mail-order;Medical;Rx;Vision'
      || description === 'CBD;Mail-order;Vision;Medical;Rx' || description === 'CBD;Mail-order;Vision;Rx;Medical'
      || description === 'CBD;Mail-order;Rx;Vision;Medical' || description === 'CBD;Mail-order;Rx;Medical;Vision'

      || description === 'Medical;CBD;Vision;Rx;Mail-order' || description === 'Medical;CBD;Vision;Mail-order;Rx'
      || description === 'Medical;CBD;Mail-order;Vision;Rx' || description === 'Medical;CBD;Mail-order;Rx;Vision'
      || description === 'Medical;CBD;Rx;Mail-order;Vision' || description === 'Medical;CBD;Rx;Vision;Mail-order'

      || description === 'Medical;Vision;CBD;Rx;Mail-order' || description === 'Medical;Vision;CBD;Mail-order;Rx'
      || description === 'Medical;Vision;Mail-order;CBD;Rx' || description === 'Medical;Vision;Mail-order;Rx;CBD'
      || description === 'Medical;Vision;Rx;Mail-order;CBD' || description === 'Medical;Vision;Rx;CBD;Mail-order'

      || description === 'Medical;Rx;CBD;Vision;Mail-order' || description === 'Medical;Rx;CBD;Mail-order;Vision'
      || description === 'Medical;Rx;Vision;CBD;Mail-order' || description === 'Medical;Rx;Vision;Mail-order;CBD'
      || description === 'Medical;Rx;CBD;Vision;Mail-order' || description === 'Medical;Rx;CBD;Mail-order;Vision'

      || description === 'Medical;Mail-order;CBD;Vision;Rx' || description === 'Medical;Mail-order;CBD;Rx;Vision'
      || description === 'Medical;Mail-order;Vision;CBD;Rx' || description === 'Medical;Mail-order;Vision;Rx;CBD'
      || description === 'Medical;Mail-order;Rx;CBD;Vision' || description === 'Medical;Mail-order;Rx;Vision;CBD'

      || description === 'Vision;CBD;Medical;Rx;Mail-order' || description === 'Vision;CBD;Medical;Mail-order;Rx'
      || description === 'Vision;CBD;Rx;Medical;Mail-order' || description === 'Vision;CBD;Rx;Mail-order;Medical'
      || description === 'Vision;CBD;Mail-order;Rx;Medical' || description === 'Vision;CBD;Mail-order;Medical;Rx'

      || description === 'Vision;Medical;CBD;Rx;Mail-order' || description === 'Vision;Medical;CBD;Mail-order;Rx'
      || description === 'Vision;Medical;Mail-order;Rx;CBD' || description === 'Vision;Medical;Mail-order;CBD;Rx'
      || description === 'Vision;Medical;Rx;CBD;Mail-order' || description === 'Vision;Medical;Rx;Mail-order;CBD'

      || description === 'Vision;Rx;CBD;Medical;Mail-order' || description === 'Vision;Rx;CBD;Mail-order;Medical'
      || description === 'Vision;Rx;Mail-order;CBD;Medical' || description === 'Vision;Rx;Mail-order;Medical;CBD'
      || description === 'Vision;Rx;Medical;CBD;Mail-order' || description === 'Vision;Rx;Medical;Mail-order;CBD'

      || description === 'Vision;Mail-order;CBD;Medical;Rx' || description === 'Vision;Mail-order;CBD;Rx;Medical'
      || description === 'Vision;Mail-order;Rx;CBD;Medical' || description === 'Vision;Mail-order;Rx;Medical;CBD'
      || description === 'Vision;Mail-order;Medical;Rx;CBD' || description === 'Vision;Mail-order;Medical;CBD;Rx'


      || description === 'Rx;CBD;Medical;Vision;Mail-order' || description === 'Rx;CBD;Medical;Mail-order;Vision'
      || description === 'Rx;CBD;Mail-order;Medical;Vision' || description === 'Rx;CBD;Mail-order;Vision;Medical'
      || description === 'Rx;CBD;Vision;Medical;Mail-order' || description === 'Rx;CBD;Vision;Mail-order;Medical'

      || description === 'Rx;Medical;CBD;Vision;Mail-order' || description === 'Rx;Medical;CBD;Mail-order;Vision'
      || description === 'Rx;Medical;Vision;CBD;Mail-order' || description === 'Rx;Medical;Vision;Mail-order;CBD'
      || description === 'Rx;Medical;Mail-order;Vision;CBD' || description === 'Rx;Medical;Mail-order;CBD;Vision'

      || description === 'Rx;Vision;CBD;Medical;Mail-order' || description === 'Rx;Vision;CBD;Mail-order;Dental'
      || description === 'Rx;Vision;Mail-order;CBD;Medical' || description === 'Rx;Vision;Mail-order;Medical;CBD'
      || description === 'Rx;Vision;Medical;Mail-order;CBD' || description === 'Rx;Vision;Medical;CBD;Mail-order'

      || description === 'Rx;Mail-order;CBD;Medical;Vision' || description === 'Rx;Mail-order;CBD;Vision;Medical'
      || description === 'Rx;Mail-order;Medical;CBD;Vision' || description === 'Rx;Mail-order;Medical;Vision;CBD'
      || description === 'Rx;Mail-order;Vision;CBD;Medical' || description === 'Rx;Mail-order;Vision;Medical;CBD'


      || description === 'Mail-order;CBD;Medical;Vision;Rx' || description === 'Mail-order;CBD;Dental;Rx;Medical'
      || description === 'Mail-order;CBD;Vision;Medical;Rx' || description === 'Mail-order;CBD;Vision;Rx;Medical'
      || description === 'Mail-order;CBD;Rx;Vision;Medical' || description === 'Mail-order;CBD;Rx;Medical;Vision'

      || description === 'Mail-order;Medical;CBD;Vision;Rx' || description === 'Mail-order;Medical;CBD;Rx;Vision'
      || description === 'Mail-order;Medical;Vision;CBD;Rx' || description === 'Mail-order;Medical;Vision;Rx;CBD'
      || description === 'Mail-order;Medical;Rx;Vision;CBD' || description === 'Mail-order;Medical;Rx;CBD;Vision'

      || description === 'Mail-order;Vision;CBD;Medical;Rx' || description === 'Mail-order;Vision;CBD;Rx;Medical'
      || description === 'Mail-order;Vision;Medical;CBD;Rx' || description === 'Mail-order;Vision;Medical;Rx;CBD'
      || description === 'Mail-order;Vision;Rx;CBD;Medical' || description === 'Mail-order;Vision;Rx;Medical;CBD'

      || description === 'Mail-order;Rx;CBD;Medical;Vision' || description === 'Mail-order;Rx;CBD;Vision;Medical'
      || description === 'Mail-order;Rx;Medical;CBD;Vision' || description === 'Mail-order;Rx;Medical;Vision;CBD'
      || description === 'Mail-order;Rx;Vision;CBD;Medical' || description === 'Mail-order;Rx;Vision;Medical;CBD'


    )
{



 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>

                           
</View>


                               <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.multiplan.com/nbbi')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/114-stethoscope-1.png')} />
                                <Text style={styles.searchText}>Medical</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Vision')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/112-eye-chart.png')} />
                                <Text style={styles.searchText}>Vision</Text>
                            </TouchableOpacity>
                        </View>

                       



  




                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )


}
else if(description === 'CBD;Medical;Dental;Rx;Mail-order' || description === 'CBD;Medical;Dental;Mail-order;Rx'

      || description === 'CBD;Medical;Mail-order;Dental;Rx' || description === 'CBD;Medical;Mail-order;Rx;Dental'
      || description === 'CBD;Medical;Rx;Mail-order;Dental' || description === 'CBD;Medical;Rx;Dental;Mail-order'

      || description === 'CBD;Dental;Medical;Rx;Mail-order' || description === 'CBD;Dental;Medical;Mail-order;Rx'
      || description === 'CBD;Dental;Rx;Mail-order;Medical' || description === 'CBD;Dental;Rx;Medical;Mail-order'
      || description === 'CBD;Dental;Mail-order;Medical;Rx' || description === 'CBD;Dental;Mail-order;Rx;Medical'

      || description === 'CBD;Rx;Medical;Dental;Mail-order' || description === 'CBD;Rx;Medical;Mail-order;Dental'
      || description === 'CBD;Rx;Mail-order;Medical;Dental' || description === 'CBD;Rx;Mail-order;Dental;Medical'
      || description === 'CBD;Rx;Dental;Mail-order;Medical' || description === 'CBD;Rx;Dental;Medical;Mail-order'

      || description === 'CBD;Mail-order;Medical;Dental;Rx' || description === 'CBD;Mail-order;Medical;Rx;Dental'
      || description === 'CBD;Mail-order;Dental;Medical;Rx' || description === 'CBD;Mail-order;Dental;Rx;Medical'
      || description === 'CBD;Mail-order;Rx;Dental;Medical' || description === 'CBD;Mail-order;Rx;Medical;Dental'

      || description === 'Medical;CBD;Dental;Rx;Mail-order' || description === 'Medical;CBD;Dental;Mail-order;Rx'
      || description === 'Medical;CBD;Mail-order;Dental;Rx' || description === 'Medical;CBD;Mail-order;Rx;Dental'
      || description === 'Medical;CBD;Rx;Mail-order;Dental' || description === 'Medical;CBD;Rx;Dental;Mail-order'

      || description === 'Medical;Dental;CBD;Rx;Mail-order' || description === 'Medical;Dental;CBD;Mail-order;Rx'
      || description === 'Medical;Dental;Mail-order;CBD;Rx' || description === 'Medical;Dental;Mail-order;Rx;CBD'
      || description === 'Medical;Dental;Rx;Mail-order;CBD' || description === 'Medical;Dental;Rx;CBD;Mail-order'

      || description === 'Medical;Rx;CBD;Dental;Mail-order' || description === 'Medical;Rx;CBD;Mail-order;Dental'
      || description === 'Medical;Rx;Dental;CBD;Mail-order' || description === 'Medical;Rx;Dental;Mail-order;CBD'
      || description === 'Medical;Rx;CBD;Dental;Mail-order' || description === 'Medical;Rx;CBD;Mail-order;Dental'

      || description === 'Medical;Mail-order;CBD;Dental;Rx' || description === 'Medical;Mail-order;CBD;Rx;Dental'
      || description === 'Medical;Mail-order;Dental;CBD;Rx' || description === 'Medical;Mail-order;Dental;Rx;CBD'
      || description === 'Medical;Mail-order;Rx;CBD;Dental' || description === 'Medical;Mail-order;Rx;Dental;CBD'

      || description === 'Dental;CBD;Medical;Rx;Mail-order' || description === 'Dental;CBD;Medical;Mail-order;Rx'
      || description === 'Dental;CBD;Rx;Medical;Mail-order' || description === 'Dental;CBD;Rx;Mail-order;Medical'
      || description === 'Dental;CBD;Mail-order;Rx;Medical' || description === 'Dental;CBD;Mail-order;Medical;Rx'

      || description === 'Dental;Medical;CBD;Rx;Mail-order' || description === 'Dental;Medical;CBD;Mail-order;Rx'
      || description === 'Dental;Medical;Mail-order;Rx;CBD' || description === 'Dental;Medical;Mail-order;CBD;Rx'
      || description === 'Dental;Medical;Rx;CBD;Mail-order' || description === 'Dental;Medical;Rx;Mail-order;CBD'

      || description === 'Dental;Rx;CBD;Medical;Mail-order' || description === 'Dental;Rx;CBD;Mail-order;Medical'
      || description === 'Dental;Rx;Mail-order;CBD;Medical' || description === 'Dental;Rx;Mail-order;Medical;CBD'
      || description === 'Dental;Rx;Medical;CBD;Mail-order' || description === 'Dental;Rx;Medical;Mail-order;CBD'

      || description === 'Dental;Mail-order;CBD;Medical;Rx' || description === 'Dental;Mail-order;CBD;Rx;Medical'
      || description === 'Dental;Mail-order;Rx;CBD;Medical' || description === 'Dental;Mail-order;Rx;Medical;CBD'
      || description === 'Dental;Mail-order;Medical;Rx;CBD' || description === 'Dental;Mail-order;Medical;CBD;Rx'


      || description === 'Rx;CBD;Medical;Dental;Mail-order' || description === 'Rx;CBD;Medical;Mail-order;Dental'
      || description === 'Rx;CBD;Mail-order;Medical;Dental' || description === 'Rx;CBD;Mail-order;Dental;Medical'
      || description === 'Rx;CBD;Dental;Medical;Mail-order' || description === 'Rx;CBD;Dental;Mail-order;Medical'

      || description === 'Rx;Medical;CBD;Dental;Mail-order' || description === 'Rx;Medical;CBD;Mail-order;Dental'
      || description === 'Rx;Medical;Dental;CBD;Mail-order' || description === 'Rx;Medical;Dental;Mail-order;CBD'
      || description === 'Rx;Medical;Mail-order;Dental;CBD' || description === 'Rx;Medical;Mail-order;CBD;Dental'

      || description === 'Rx;Dental;CBD;Medical;Mail-order' || description === 'Rx;Dental;CBD;Mail-order;Dental'
      || description === 'Rx;Dental;Mail-order;CBD;Medical' || description === 'Rx;Dental;Mail-order;Medical;CBD'
      || description === 'Rx;Dental;Medical;Mail-order;CBD' || description === 'Rx;Dental;Medical;CBD;Mail-order'

      || description === 'Rx;Mail-order;CBD;Medical;Dental' || description === 'Rx;Mail-order;CBD;Dental;Medical'
      || description === 'Rx;Mail-order;Medical;CBD;Dental' || description === 'Rx;Mail-order;Medical;Dental;CBD'
      || description === 'Rx;Mail-order;Dental;CBD;Medical' || description === 'Rx;Mail-order;Dental;Medical;CBD'


      || description === 'Mail-order;CBD;Medical;Dental;Rx' || description === 'Mail-order;CBD;Dental;Rx;Medical'
      || description === 'Mail-order;CBD;Dental;Medical;Rx' || description === 'Mail-order;CBD;Dental;Rx;Medical'
      || description === 'Mail-order;CBD;Rx;Dental;Medical' || description === 'Mail-order;CBD;Rx;Medical;Dental'

      || description === 'Mail-order;Medical;CBD;Dental;Rx' || description === 'Mail-order;Medical;CBD;Rx;Dental'
      || description === 'Mail-order;Medical;Dental;CBD;Rx' || description === 'Mail-order;Medical;Dental;Rx;CBD'
      || description === 'Mail-order;Medical;Rx;Dental;CBD' || description === 'Mail-order;Medical;Rx;CBD;Dental'

      || description === 'Mail-order;Dental;CBD;Medical;Rx' || description === 'Mail-order;Dental;CBD;Rx;Medical'
      || description === 'Mail-order;Dental;Medical;CBD;Rx' || description === 'Mail-order;Dental;Medical;Rx;CBD'
      || description === 'Mail-order;Dental;Rx;CBD;Medical' || description === 'Mail-order;Dental;Rx;Medical;CBD'

      || description === 'Mail-order;Rx;CBD;Medical;Dental' || description === 'Mail-order;Rx;CBD;Dental;Medical'
      || description === 'Mail-order;Rx;Medical;CBD;Dental' || description === 'Mail-order;Rx;Medical;Dental;CBD'
      || description === 'Mail-order;Rx;Dental;CBD;Medical' || description === 'Mail-order;Rx;Dental;Medical;CBD'

 )
{


 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>

                            
</View>


                               <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.multiplan.com/nbbi')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/114-stethoscope-1.png')} />
                                <Text style={styles.searchText}>Medical</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Dental')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/106-tooth.png')} />
                                <Text style={styles.searchText}>Dental</Text>
                            </TouchableOpacity>
                        </View>

                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )



}
else if(
        
        description === 'CBD;Medical;Pet;Rx;Mail-order' || description === 'CBD;Medical;Pet;Mail-order;Rx'

      || description === 'CBD;Medical;Mail-order;Pet;Rx' || description === 'CBD;Medical;Mail-order;Rx;Pet'
      || description === 'CBD;Medical;Rx;Mail-order;Pet' || description === 'CBD;Medical;Rx;Pet;Mail-order'

      || description === 'CBD;Pet;Medical;Rx;Mail-order' || description === 'CBD;Pet;Medical;Mail-order;Rx'
      || description === 'CBD;Pet;Rx;Mail-order;Medical' || description === 'CBD;Pet;Rx;Medical;Mail-order'
      || description === 'CBD;Pet;Mail-order;Medical;Rx' || description === 'CBD;Pet;Mail-order;Rx;Medical'

      || description === 'CBD;Rx;Medical;Pet;Mail-order' || description === 'CBD;Rx;Medical;Mail-order;Pet'
      || description === 'CBD;Rx;Mail-order;Medical;Pet' || description === 'CBD;Rx;Mail-order;Pet;Medical'
      || description === 'CBD;Rx;Pet;Mail-order;Medical' || description === 'CBD;Rx;Pet;Medical;Mail-order'

      || description === 'CBD;Mail-order;Medical;Pet;Rx' || description === 'CBD;Mail-order;Medical;Rx;Pet'
      || description === 'CBD;Mail-order;Pet;Medical;Rx' || description === 'CBD;Mail-order;Pet;Rx;Medical'
      || description === 'CBD;Mail-order;Rx;Pet;Medical' || description === 'CBD;Mail-order;Rx;Medical;Pet'

      || description === 'Medical;CBD;Pet;Rx;Mail-order' || description === 'Medical;CBD;Pet;Mail-order;Rx'
      || description === 'Medical;CBD;Mail-order;Pet;Rx' || description === 'Medical;CBD;Mail-order;Rx;Pet'
      || description === 'Medical;CBD;Rx;Mail-order;Pet' || description === 'Medical;CBD;Rx;Pet;Mail-order'

      || description === 'Medical;Pet;CBD;Rx;Mail-order' || description === 'Medical;Pet;CBD;Mail-order;Rx'
      || description === 'Medical;Pet;Mail-order;CBD;Rx' || description === 'Medical;Pet;Mail-order;Rx;CBD'
      || description === 'Medical;Pet;Rx;Mail-order;CBD' || description === 'Medical;Pet;Rx;CBD;Mail-order'

      || description === 'Medical;Rx;CBD;Pet;Mail-order' || description === 'Medical;Rx;CBD;Mail-order;Pet'
      || description === 'Medical;Rx;Pet;CBD;Mail-order' || description === 'Medical;Rx;Pet;Mail-order;CBD'
      || description === 'Medical;Rx;CBD;Pet;Mail-order' || description === 'Medical;Rx;CBD;Mail-order;Pet'

      || description === 'Medical;Mail-order;CBD;Pet;Rx' || description === 'Medical;Mail-order;CBD;Rx;Pet'
      || description === 'Medical;Mail-order;Pet;CBD;Rx' || description === 'Medical;Mail-order;Pet;Rx;CBD'
      || description === 'Medical;Mail-order;Rx;CBD;Pet' || description === 'Medical;Mail-order;Rx;Pet;CBD'

      || description === 'Pet;CBD;Medical;Rx;Mail-order' || description === 'Pet;CBD;Medical;Mail-order;Rx'
      || description === 'Pet;CBD;Rx;Medical;Mail-order' || description === 'Pet;CBD;Rx;Mail-order;Medical'
      || description === 'Pet;CBD;Mail-order;Rx;Medical' || description === 'Pet;CBD;Mail-order;Medical;Rx'

      || description === 'Pet;Medical;CBD;Rx;Mail-order' || description === 'Pet;Medical;CBD;Mail-order;Rx'
      || description === 'Pet;Medical;Mail-order;Rx;CBD' || description === 'Pet;Medical;Mail-order;CBD;Rx'
      || description === 'Pet;Medical;Rx;CBD;Mail-order' || description === 'Pet;Medical;Rx;Mail-order;CBD'

      || description === 'Pet;Rx;CBD;Medical;Mail-order' || description === 'Pet;Rx;CBD;Mail-order;Medical'
      || description === 'Pet;Rx;Mail-order;CBD;Medical' || description === 'Pet;Rx;Mail-order;Medical;CBD'
      || description === 'Pet;Rx;Medical;CBD;Mail-order' || description === 'Pet;Rx;Medical;Mail-order;CBD'

      || description === 'Pet;Mail-order;CBD;Medical;Rx' || description === 'Pet;Mail-order;CBD;Rx;Medical'
      || description === 'Pet;Mail-order;Rx;CBD;Medical' || description === 'Pet;Mail-order;Rx;Medical;CBD'
      || description === 'Pet;Mail-order;Medical;Rx;CBD' || description === 'Pet;Mail-order;Medical;CBD;Rx'


      || description === 'Rx;CBD;Medical;Pet;Mail-order' || description === 'Rx;CBD;Medical;Mail-order;Pet'
      || description === 'Rx;CBD;Mail-order;Medical;Pet' || description === 'Rx;CBD;Mail-order;Pet;Medical'
      || description === 'Rx;CBD;Pet;Medical;Mail-order' || description === 'Rx;CBD;Pet;Mail-order;Medical'

      || description === 'Rx;Medical;CBD;Pet;Mail-order' || description === 'Rx;Medical;CBD;Mail-order;Pet'
      || description === 'Rx;Medical;Pet;CBD;Mail-order' || description === 'Rx;Medical;Pet;Mail-order;CBD'
      || description === 'Rx;Medical;Mail-order;Pet;CBD' || description === 'Rx;Medical;Mail-order;CBD;Pet'

      || description === 'Rx;Pet;CBD;Medical;Mail-order' || description === 'Rx;Pet;CBD;Mail-order;Medical'
      || description === 'Rx;Pet;Mail-order;CBD;Vision' || description === 'Rx;Pet;Mail-order;Vision;CBD'
      || description === 'Rx;Pet;Medical;Mail-order;CBD' || description === 'Rx;Pet;Medical;CBD;Mail-order'

      || description === 'Rx;Mail-order;CBD;Medical;Pet' || description === 'Rx;Mail-order;CBD;Pet;Medical'
      || description === 'Rx;Mail-order;Medical;CBD;Pet' || description === 'Rx;Mail-order;Medical;Pet;CBD'
      || description === 'Rx;Mail-order;Pet;CBD;Medical' || description === 'Rx;Mail-order;Pet;Medical;CBD'


      || description === 'Mail-order;CBD;Medical;Pet;Rx' || description === 'Mail-order;CBD;Medical;Rx;Pet'
      || description === 'Mail-order;CBD;Pet;Medical;Rx' || description === 'Mail-order;CBD;Pet;Rx;Medical'
      || description === 'Mail-order;CBD;Rx;Pet;Medical' || description === 'Mail-order;CBD;Rx;Medical;Pet'

      || description === 'Mail-order;Medical;CBD;Pet;Rx' || description === 'Mail-order;Medical;CBD;Rx;Pet'
      || description === 'Mail-order;Medical;Pet;CBD;Rx' || description === 'Mail-order;Medical;Pet;Rx;CBD'
      || description === 'Mail-order;Medical;Rx;Pet;CBD' || description === 'Mail-order;Medical;Rx;CBD;Pet'

      || description === 'Mail-order;Pet;CBD;Medical;Rx' || description === 'Mail-order;Pet;CBD;Rx;Medical'
      || description === 'Mail-order;Pet;Medical;CBD;Rx' || description === 'Mail-order;Pet;Medical;Rx;CBD'
      || description === 'Mail-order;Pet;Rx;CBD;Medical' || description === 'Mail-order;Pet;Rx;Medical;CBD'

      || description === 'Mail-order;Rx;CBD;Medical;Pet' || description === 'Mail-order;Rx;CBD;Pet;Medical'
      || description === 'Mail-order;Rx;Medical;CBD;Pet' || description === 'Mail-order;Rx;Medical;Pet;CBD'
      || description === 'Mail-order;Rx;Pet;CBD;Medical' || description === 'Mail-order;Rx;Pet;Medical;CBD'


        )
{



 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>

                            
</View>


                               <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.multiplan.com/nbbi')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/114-stethoscope-1.png')} />
                                <Text style={styles.searchText}>Medical</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.petassure.com/networkvetsearch?showDetails=true')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/veterinary.png')} />
                                <Text style={styles.searchText}>Veterinary</Text>
                            </TouchableOpacity>
                        </View>

                        




                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )


}
else if( 
    description === 'CBD;Pet;Vision;Rx;Mail-order' || description === 'CBD;Pet;Vision;Mail-order,Rx'

    || description === 'CBD;Vision;Mail-order;Pet;Rx' || description === 'CBD;Vision;Mail-order;Rx;Pet'
      || description === 'CBD;Vision;Rx;Mail-order;Pet' || description === 'CBD;Vision;Rx;Pet;Mail-order'

      || description === 'CBD;Pet;Vision;Rx;Mail-order' || description === 'CBD;Pet;Vision;Mail-order;Rx'
      || description === 'CBD;Pet;Rx;Mail-order;Vision' || description === 'CBD;Pet;Rx;Vision;Mail-order'
      || description === 'CBD;Pet;Mail-order;Vision;Rx' || description === 'CBD;Pet;Mail-order;Rx;Vision'

      || description === 'CBD;Rx;Vision;Pet;Mail-order' || description === 'CBD;Rx;Vision;Mail-order;Pet'
      || description === 'CBD;Rx;Mail-order;Vision;Pet' || description === 'CBD;Rx;Mail-order;Pet;Vision'
      || description === 'CBD;Rx;Pet;Mail-order;Vision' || description === 'CBD;Rx;Pet;Vision;Mail-order'

      || description === 'CBD;Mail-order;Vision;Pet;Rx' || description === 'CBD;Mail-order;Vision;Rx;Pet'
      || description === 'CBD;Mail-order;Pet;Vision;Rx' || description === 'CBD;Mail-order;Pet;Rx;Vision'
      || description === 'CBD;Mail-order;Rx;Pet;Vision' || description === 'CBD;Mail-order;Rx;Vision;Pet'

      || description === 'Vision;CBD;Pet;Rx;Mail-order' || description === 'Vision;CBD;Pet;Mail-order;Rx'
      || description === 'Vision;CBD;Mail-order;Pet;Rx' || description === 'Vision;CBD;Mail-order;Rx;Pet'
      || description === 'Vision;CBD;Rx;Mail-order;Pet' || description === 'Vision;CBD;Rx;Pet;Mail-order'

      || description === 'Vision;Pet;CBD;Rx;Mail-order' || description === 'Vision;Pet;CBD;Mail-order;Rx'
      || description === 'Vision;Pet;Mail-order;CBD;Rx' || description === 'Vision;Pet;Mail-order;Rx;CBD'
      || description === 'Vision;Pet;Rx;Mail-order;CBD' || description === 'Vision;Pet;Rx;CBD;Mail-order'

      || description === 'Vision;Rx;CBD;Pet;Mail-order' || description === 'Vision;Rx;CBD;Mail-order;Pet'
      || description === 'Vision;Rx;Pet;CBD;Mail-order' || description === 'Vision;Rx;Pet;Mail-order;CBD'
      || description === 'Vision;Rx;CBD;Pet;Mail-order' || description === 'Vision;Rx;CBD;Mail-order;Pet'

      || description === 'Vision;Mail-order;CBD;Pet;Rx' || description === 'Vision;Mail-order;CBD;Rx;Pet'
      || description === 'Vision;Mail-order;Pet;CBD;Rx' || description === 'Vision;Mail-order;Pet;Rx;CBD'
      || description === 'Vision;Mail-order;Rx;CBD;Pet' || description === 'Vision;Mail-order;Rx;Pet;CBD'

      || description === 'Pet;CBD;Vision;Rx;Mail-order' || description === 'Pet;CBD;Vision;Mail-order;Rx'
      || description === 'Pet;CBD;Rx;Vision;Mail-order' || description === 'Pet;CBD;Rx;Mail-order;Vision'
      || description === 'Pet;CBD;Mail-order;Rx;Vision' || description === 'Pet;CBD;Mail-order;Vision;Rx'

      || description === 'Pet;Vision;CBD;Rx;Mail-order' || description === 'Pet;Vision;CBD;Mail-order;Rx'
      || description === 'Pet;Vision;Mail-order;Rx;CBD' || description === 'Pet;Vision;Mail-order;CBD;Rx'
      || description === 'Pet;Vision;Rx;CBD;Mail-order' || description === 'Pet;Vision;Rx;Mail-order;CBD'

      || description === 'Pet;Rx;CBD;Vision;Mail-order' || description === 'Pet;Rx;CBD;Mail-order;Vision'
      || description === 'Pet;Rx;Mail-order;CBD;Vision' || description === 'Pet;Rx;Mail-order;Vision;CBD'
      || description === 'Pet;Rx;Vision;CBD;Mail-order' || description === 'Pet;Rx;Vision;Mail-order;CBD'

      || description === 'Pet;Mail-order;CBD;Vision;Rx' || description === 'Pet;Mail-order;CBD;Rx;Vision'
      || description === 'Pet;Mail-order;Rx;CBD;Vision' || description === 'Pet;Mail-order;Rx;Vision;CBD'
      || description === 'Pet;Mail-order;Vision;Rx;CBD' || description === 'Pet;Mail-order;Vision;CBD;Rx'


      || description === 'Rx;CBD;Vision;Pet;Mail-order' || description === 'Rx;CBD;Vision;Mail-order;Pet'
      || description === 'Rx;CBD;Mail-order;Vision;Pet' || description === 'Rx;CBD;Mail-order;Pet;Vision'
      || description === 'Rx;CBD;Pet;Vision;Mail-order' || description === 'Rx;CBD;Pet;Mail-order;Vision'

      || description === 'Rx;Vision;CBD;Pet;Mail-order' || description === 'Rx;Vision;CBD;Mail-order;Pet'
      || description === 'Rx;Vision;Pet;CBD;Mail-order' || description === 'Rx;Vision;Pet;Mail-order;CBD'
      || description === 'Rx;Vision;Mail-order;Pet;CBD' || description === 'Rx;Vision;Mail-order;CBD;Pet'

      || description === 'Rx;Pet;CBD;Vision;Mail-order' || description === 'Rx;Pet;CBD;Mail-order;Vision'
      || description === 'Rx;Pet;Mail-order;CBD;Vision' || description === 'Rx;Pet;Mail-order;Vision;CBD'
      || description === 'Rx;Pet;Vision;Mail-order;CBD' || description === 'Rx;Pet;Vision;CBD;Mail-order'

      || description === 'Rx;Mail-order;CBD;Vision;Pet' || description === 'Rx;Mail-order;CBD;Pet;Vision'
      || description === 'Rx;Mail-order;Vision;CBD;Pet' || description === 'Rx;Mail-order;Vision;Pet;CBD'
      || description === 'Rx;Mail-order;Pet;CBD;Vision' || description === 'Rx;Mail-order;Pet;Vision;CBD'


      || description === 'Mail-order;CBD;Vision;Pet;Rx' || description === 'Mail-order;CBD;Vision;Rx;Pet'
      || description === 'Mail-order;CBD;Pet;Vision;Rx' || description === 'Mail-order;CBD;Pet;Rx;Vision'
      || description === 'Mail-order;CBD;Rx;Pet;Vision' || description === 'Mail-order;CBD;Rx;Vision;Pet'

      || description === 'Mail-order;Vision;CBD;Pet;Rx' || description === 'Mail-order;Vision;CBD;Rx;Pet'
      || description === 'Mail-order;Vision;Pet;CBD;Rx' || description === 'Mail-order;Vision;Pet;Rx;CBD'
      || description === 'Mail-order;Vision;Rx;Pet;CBD' || description === 'Mail-order;Vision;Rx;CBD;Pet'

      || description === 'Mail-order;Pet;CBD;Vision;Rx' || description === 'Mail-order;Pet;CBD;Rx;Vision'
      || description === 'Mail-order;Pet;Vision;CBD;Rx' || description === 'Mail-order;Pet;Vision;Rx;CBD'
      || description === 'Mail-order;Pet;Rx;CBD;Vision' || description === 'Mail-order;Pet;Rx;Vision;CBD'

      || description === 'Mail-order;Rx;CBD;Vision;Pet' || description === 'Mail-order;Rx;CBD;Pet;Vision'
      || description === 'Mail-order;Rx;Vision;CBD;Pet' || description === 'Mail-order;Rx;Vision;Pet;CBD'
      || description === 'Mail-order;Rx;Pet;CBD;Vision' || description === 'Mail-order;Rx;Pet;Vision;CBD'

    )
{



 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>

                            
</View>


                               <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Vision')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/112-eye-chart.png')} />
                                <Text style={styles.searchText}>Vision</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.petassure.com/networkvetsearch?showDetails=true')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/veterinary.png')} />
                                <Text style={styles.searchText}>Veterinary</Text>
                            </TouchableOpacity>


                        </View>

                       



 




                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )

}
else if(description === 'CBD;Medical;Dental;Vision;Pet' || description === 'CBD;Medical;Dental;Pet;Vision'

      || description === 'CBD;Medical;Pet;Dental;Vision' || description === 'CBD;Medical;Pet;Vision;Dental'
      || description === 'CBD;Medical;Vision;Pet;Dental' || description === 'CBD;Medical;Vision;Dental;Pet'

      || description === 'CBD;Dental;Medical;Vision;Pet' || description === 'CBD;Dental;Medical;Pet;Vision'
      || description === 'CBD;Dental;Vision;Pet;Medical' || description === 'CBD;Dental;Vision;Medical;Pet'
      || description === 'CBD;Dental;Pet;Medical;Vision' || description === 'CBD;Dental;Pet;Vision;Medical'

      || description === 'CBD;Vision;Medical;Dental;Pet' || description === 'CBD;Vision;Medical;Pet;Dental'
      || description === 'CBD;Vision;Pet;Medical;Dental' || description === 'CBD;Vision;Pet;Dental;Medical'
      || description === 'CBD;Vision;Dental;Pet;Medical' || description === 'CBD;Vision;Dental;Medical;Pet'

      || description === 'CBD;Pet;Medical;Dental;Vision' || description === 'CBD;Pet;Medical;Vision;Dental'
      || description === 'CBD;Pet;Dental;Medical;Vision' || description === 'CBD;Pet;Dental;Vision;Medical'
      || description === 'CBD;Pet;Vision;Dental;Medical' || description === 'CBD;Pet;Vision;Medical;Dental'

      || description === 'Medical;CBD;Dental;Vision;Pet' || description === 'Medical;CBD;Dental;Pet;Vision'
      || description === 'Medical;CBD;Pet;Dental;Vision' || description === 'Medical;CBD;Pet;Vision;Dental'
      || description === 'Medical;CBD;Vision;Pet;Dental' || description === 'Medical;CBD;Vision;Dental;Pet'

      || description === 'Medical;Dental;CBD;Vision;Pet' || description === 'Medical;Dental;CBD;Pet;Vision'
      || description === 'Medical;Dental;Pet;CBD;Vision' || description === 'Medical;Dental;Pet;Vision;CBD'
      || description === 'Medical;Dental;Vision;Pet;CBD' || description === 'Medical;Dental;Vision;CBD;Pet'

      || description === 'Medical;Vision;CBD;Dental;Pet' || description === 'Medical;Vision;CBD;Pet;Dental'
      || description === 'Medical;Vision;Dental;CBD;Pet' || description === 'Medical;Vision;Dental;Pet;CBD'
      || description === 'Medical;Vision;CBD;Dental;Pet' || description === 'Medical;Vision;CBD;Pet;Dental'

      || description === 'Medical;Pet;CBD;Dental;Vision' || description === 'Medical;Pet;CBD;Vision;Dental'
      || description === 'Medical;Pet;Dental;CBD;Vision' || description === 'Medical;Pet;Dental;Vision;CBD'
      || description === 'Medical;Pet;Vision;CBD;Dental' || description === 'Medical;Pet;Vision;Dental;CBD'

      || description === 'Dental;CBD;Medical;Vision;Pet' || description === 'Dental;CBD;Medical;Pet;Vision'
      || description === 'Dental;CBD;Vision;Medical;Pet' || description === 'Dental;CBD;Vision;Pet;Medical'
      || description === 'Dental;CBD;Pet;Vision;Medical' || description === 'Dental;CBD;Pet;Medical;Vision'

      || description === 'Dental;Medical;CBD;Vision;Pet' || description === 'Dental;Medical;CBD;Pet;Vision'
      || description === 'Dental;Medical;Pet;Vision;CBD' || description === 'Dental;Medical;Pet;CBD;Vision'
      || description === 'Dental;Medical;Vision;CBD;Pet' || description === 'Dental;Medical;Vision;Pet;CBD'

      || description === 'Dental;Vision;CBD;Medical;Pet' || description === 'Dental;Vision;CBD;Pet;Medical'
      || description === 'Dental;Vision;Pet;CBD;Medical' || description === 'Dental;Vision;Pet;Medical;CBD'
      || description === 'Dental;Vision;Medical;CBD;Pet' || description === 'Dental;Vision;Medical;Pet;CBD'

      || description === 'Dental;Pet;CBD;Medical;Vision' || description === 'Dental;Pet;CBD;Vision;Medical'
      || description === 'Dental;Pet;Vision;CBD;Medical' || description === 'Dental;Pet;Vision;Medical;CBD'
      || description === 'Dental;Pet;Medical;Vision;CBD' || description === 'Dental;Pet;Medical;CBD;Vision'


      || description === 'Vision;CBD;Medical;Dental;Pet' || description === 'Vision;CBD;Medical;Pet;Dental'
      || description === 'Vision;CBD;Pet;Medical;Dental' || description === 'Vision;CBD;Pet;Dental;Medical'
      || description === 'Vision;CBD;Dental;Medical;Pet' || description === 'Vision;CBD;Dental;Pet;Medical'

      || description === 'Vision;Medical;CBD;Dental;Pet' || description === 'Vision;Medical;CBD;Pet;Dental'
      || description === 'Vision;Medical;Dental;CBD;Pet' || description === 'Vision;Medical;Dental;Pet;CBD'
      || description === 'Vision;Medical;Pet;Dental;CBD' || description === 'Vision;Medical;Pet;CBD;Dental'

      || description === 'Vision;Dental;CBD;Medical;Pet' || description === 'Vision;Dental;CBD;Pet;Dental'
      || description === 'Vision;Dental;Pet;CBD;Medical' || description === 'Vision;Dental;Pet;Medical;CBD'
      || description === 'Vision;Dental;Medical;Pet;CBD' || description === 'Vision;Dental;Medical;CBD;Pet'

      || description === 'Vision;Pet;CBD;Medical;Dental' || description === 'Vision;Pet;CBD;Dental;Medical'
      || description === 'Vision;Pet;Medical;CBD;Dental' || description === 'Vision;Pet;Medical;Dental;CBD'
      || description === 'Vision;Pet;Dental;CBD;Medical' || description === 'Vision;Pet;Dental;Medical;CBD'


      || description === 'Pet;CBD;Medical;Dental;Vision' || description === 'Pet;CBD;Dental;Vision;Medical'
      || description === 'Pet;CBD;Dental;Medical;Vision' || description === 'Pet;CBD;Dental;Vision;Medical'
      || description === 'Pet;CBD;Vision;Dental;Medical' || description === 'Pet;CBD;Vision;Medical;Dental'

      || description === 'Pet;Medical;CBD;Dental;Vision' || description === 'Pet;Medical;CBD;Vision;Dental'
      || description === 'Pet;Medical;Dental;CBD;Vision' || description === 'Pet;Medical;Dental;Vision;CBD'
      || description === 'Pet;Medical;Vision;Dental;CBD' || description === 'Pet;Medical;Vision;CBD;Dental'

      || description === 'Pet;Dental;CBD;Medical;Vision' || description === 'Pet;Dental;CBD;Vision;Medical'
      || description === 'Pet;Dental;Medical;CBD;Vision' || description === 'Pet;Dental;Medical;Vision;CBD'
      || description === 'Pet;Dental;Vision;CBD;Medical' || description === 'Pet;Dental;Vision;Medical;CBD'

      || description === 'Pet;Vision;CBD;Medical;Dental' || description === 'Pet;Vision;CBD;Dental;Medical'
      || description === 'Pet;Vision;Medical;CBD;Dental' || description === 'Pet;Vision;Medical;Dental;CBD'
      || description === 'Pet;Vision;Dental;CBD;Medical' || description === 'Pet;Vision;Dental;Medical;CBD'

 )
{


 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>

                            
</View>


                               <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.multiplan.com/nbbi')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/114-stethoscope-1.png')} />
                                <Text style={styles.searchText}>Medical</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Dental')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/106-tooth.png')} />
                                <Text style={styles.searchText}>Dental</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                           

                             <TouchableOpacity style={styles.searchContainer} onPress={() => this.props.navigation.navigate('Vision')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/112-eye-chart.png')} />
                                <Text style={styles.searchText}>Vision</Text>
                            </TouchableOpacity>

                             <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.petassure.com/networkvetsearch?showDetails=true')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/veterinary.png')} />
                                <Text style={styles.searchText}>Veterinary</Text>
                            </TouchableOpacity>
                        </View>

                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )



}
else if(description === '')
{


 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                         <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/ndn')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                                <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchRowContainer}>
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                                <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                            </TouchableOpacity>

                            
</View>


                              




                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )


}
else 
{
    
  const  d = this.props.userState.agent ? (`"${this?.props?.userState?.agent.DESCRIPTION}"`): "";
  let replace = d?.replace("CBD ","");
  const words = replace?.split(',');
  const first = words[0]
  const firsturl = first?.slice(5);
  
  const second = words[1]
   const secondurl = second?.slice(3);

   const third = words[2]
   const thirds = third?.slice(3);
   const thirdurl = (`https://${thirds}`)
 
   const fourth = words[3]
   const replacefourt = fourth?.replace(/"/g,"");
   const replacefour = replacefourt?.replace("}","");
 
   const fourtht = replacefour?.slice(3);
   const fourthurl = (`https://${fourtht}`)


 

 return (




            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginHorizontal: 20 }}>Find a discount provider</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 20, marginHorizontal: 20 }}>or service to save money</Text>
                        

                        

                        <View style={styles.searchRowContainer}>
                           {this.state.condition === true ? 
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL(fourthurl)}>
                            <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                            <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                        </TouchableOpacity>:
                         <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.medaffordglobal.com/ndn')}>
                         <Image style={styles.searchIcon} source={require('../assets/flaticon/130-pills.png')} />
                         <Text style={styles.searchText}>Mail-Order Pharmacy</Text>
                     </TouchableOpacity>}

                            
</View>
<View style={styles.searchRowContainer}>
                            {this.state.condition === true ? 
                            <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL(thirdurl)}>
                            <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                            <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                        </TouchableOpacity>:
                        <TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.ndnlookup.com')}>
                        <Image style={styles.searchIcon} source={require('../assets/flaticon/111-pharmaceutical.png')} />
                        <Text style={styles.searchText}>Walk-in Pharmacy</Text>
                    </TouchableOpacity>
                        }
                        </View>
                        <View style={styles.searchRowContainer}>
<TouchableOpacity style={styles.searchContainer} onPress={() => Linking.openURL('https://www.cbdafford.com/'+this.props.userState.agent.CODE2)}>
                                <Image style={styles.searchIcon} source={require('../assets/flaticon/cbd.png')} />
                                <Text style={styles.searchText}>CBD Products</Text>
                            </TouchableOpacity>
                             </View>


                              




                       
                    </ScrollView>
                </View>
                <View style={styles.notInsuranceTextContainer}>
                    <Text style={styles.notInsuranceText}>THIS IS NOT INSURANCE</Text>
                </View>
            </View>
        )


}










           
        }


      
    }
}

const mapStateToProps = (state) => {
    return {
        
        userState: state.user,
    }
}

SearchScreen.propTypes = {

    userState: PropTypes.object.isRequired,
   
}
function matchDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    }
}

export default connect(mapStateToProps,matchDispatchToProps)(SearchScreen)
