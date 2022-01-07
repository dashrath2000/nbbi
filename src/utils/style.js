import { StyleSheet, Platform, StatusBar } from 'react-native';


const headerMarginTop = Platform.OS === 'android' ? 0 : 0

const styles = StyleSheet.create({
    stackNavIcon: {
        width: 20,
        height: 20,
        marginVertical: 20,
        marginRight: 15,
        tintColor: '#0088b6',
    },

    tabNavIcon: {
        width: 25,
        height: 25,
        margin: 20,
    },

    mainContainer: {
        backgroundColor: '#fff',
    },
    textItem:{
        fontFamily:'Consolas',
        color:'blue'
    },

    mainLoginContainer: {
        flex: 1,
        height: undefined,
        width: undefined,
        backgroundColor: '#fff',
        marginTop: headerMarginTop,
        justifyContent: 'space-between',
    },

    contentContainer: {
        padding: 20,
    },

    loginContainer: {
        flex: 9,
        padding: 20,
    },

    loginText: {
        fontSize: 18,
        color: '#345d82',
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 30,
    },

    logoContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    navButtonsBarContainer: {
        marginHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    navButton: {
        color: '#0088b6',
        marginHorizontal: 20,
    },

    navButtonActive: {
        color: 'white',
        marginHorizontal: 20,
    },

    navButtonContainer: {
        flex: 1,
        height: 30,
        overflow: 'hidden',
        padding: 2,
    },

    navButtonActiveContainer: {
        flex: 1,
        height: 30,
        overflow: 'hidden',
        padding: 2,
        borderRadius: 15,
        borderColor: '#0088b6',
        borderWidth: 1,
        backgroundColor: '#0088b6',
    },

    signInButtonContainer: {
        padding: 8,
        marginHorizontal: 15,
        marginTop: 0,
        height: 40,
        overflow: 'hidden',
        borderRadius: 30,
        borderColor: '#00a9dc',
        borderWidth: 1,
        backgroundColor: '#00a9dc',
    },

    registerButtonContainer: {
        padding: 15,
        marginHorizontal: 15,
        marginTop: 10,
        height: 60,
        overflow: 'hidden',
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 1,
    },

    normalButtonContainer: {
        justifyContent: 'center',
        width: 150,
        height: 40,
        overflow: 'hidden',
        borderRadius: 30,
        borderColor: '#00a9dc',
        borderWidth: 1,
        backgroundColor: '#00a9dc',
    },

    signInButton: {
        color: 'white',
        fontWeight: 'bold',
    },

    registerButton: {
        color: 'white',
    },

    skipButton: {
        color: '#7b7b7b',
    },

    normalButton: {
        color: 'white',
    },

    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 5,
    },

    input: {
        flex: 3,
        backgroundColor: '#f6f6f6',
        color: 'blue',
        paddingHorizontal: 10,
    },

    inputText: {
        flex: 3,
        color: '#666666',
        textAlign: 'right',
    },

    inputLabel: {
        flex: 2,
        fontSize: 18,
        color: '#666666',
    },

    inputLabelLogin: {
        flex: 2,
        fontSize: 18,
        color: 'white',
    },

    horizontalLine: {
        justifyContent: 'center',
        borderBottomColor: '#e4e4e4',
        borderBottomWidth: 1,
    },

    error: {
        color: 'red',
        textAlign: 'center',
    },

    searchMainContainer: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },

    searchRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 15,
    },

    searchContainer: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginHorizontal: 10,
    },

    searchIcon: {
        width: 50,
        height: 50,
        margin: 10,
        tintColor: '#19a2d0',
    },

    searchText: {
        fontSize: 16,
        color: '#19a2d0',
        textAlign: 'center',
      

    },

    loadingModal: {
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 30,
        alignItems: 'center',
        borderRadius: 8,
    },

    drugSizeModal: {
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 8,
    },

    socialMediaImages: {
        width: 50,
        height: 50,
        margin: 10,
        borderRadius: 8,
    },

    benefitsContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 15,
        marginHorizontal: 15,
        marginTop: 15,
        borderRadius: 10,
    },

    providersContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
        marginHorizontal: 15,
        marginTop: 15,
        borderRadius: 10,
    },

    productsContainer: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 15,
        marginHorizontal: 15,
        marginTop: 15,
        borderColor: '#e4e4e4',
        borderBottomWidth: 3,
        borderRightWidth: 3,
        borderRadius: 5,
    },

    productModal: {
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 8,
    },

    modalButtonContainer: {
        justifyContent: 'center',
        width: 100,
        height: 30,
        overflow: 'hidden',
        borderRadius: 10,
        borderColor: '#00a9dc',
        borderWidth: 1,
        backgroundColor: '#00a9dc',
    },

    shoppingCartContainer: {
        flex: 9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },

    shoppingCartTotal: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    shoppingCartList: {
        flex: 9,
        backgroundColor: '#f1f1f1',
        padding: 15,
    },

    shoppingCartCheckout: {
        flex: 1,
        backgroundColor: '#007f00',
        justifyContent: 'center',
        alignItems: 'center',

    },

    shoppingCartCheckoutText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    shoppingCartListItem: {
        paddingHorizontal: 20,
        paddingVertical: 5,
    },

    progressContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    progressBigCircle: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: 'grey',
    },

    progressSmallCircle: {
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: 'grey',
    },

    progressLine: {
        width: 40,
        height: 5,
        backgroundColor: 'grey',
    },

    progressActive: {
        backgroundColor: 'black',
    },

    providerSearchContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 15,
    },

    drugsContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
        marginHorizontal: 15,
        marginTop: 15,
        borderRadius: 10,
    },

    notInsuranceTextContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    notInsuranceText: {
        fontSize: 15,
        color: '#888888',
    },

});

export default styles
