import moment from 'moment'
import * as contants from '../utils/constants'

const initialData = {
    products: [],
    checkout_data: {},
    navigateTo: null,
}

const freePrescriptionProduct = {
    amount: '0.00',
    benefitid: '',
    benefitlabel: '',
    bhold: '0',
    description: 'Use this card every time you visit a pharmacy. This card can be used over and over again to save you money. Accepted at over 80% of the pharmacies nationally\nNo medications are excluded.  You can use it even if you have insurance\nInstant use of card. Just bring it to the pharmacy and save',
    dtcancelled: '',
    dteffective: moment().endOf('year').format('YYYY-MM-DD'),
    dtholdcreated: '',
    holdreason: '',
    label: 'Discount Prescription Drug Card',
    pdid: '12152',
    periodid: '1',
    periodlabel: 'Monthly',
    reasonforcancel: '',
    rxId: '950 191 000',
    rxBin: '610709',
    rxGrp: 'USAT260',
}

const freeMedAffordProduct = {
    amount: '0.00',
    benefitid: '',
    benefitlabel: '',
    bhold: '0',
    description: 'Save up to 80% on your brand-name medications through our international mail order program. Ordering your discount brand-name medications is convenient, easy, and secure.',
    dtcancelled: '',
    dteffective: moment().endOf('year').format('YYYY-MM-DD'),
    dtholdcreated: '',
    holdreason: '',
    label: 'Brand-Name Mail-Order',
    pdid: '20222',
    periodid: '1',
    periodlabel: 'Monthly',
    reasonforcancel: '',
    rxId: '950 191 000',
    rxBin: '610709',
    rxGrp: 'USM5312',
}

export default function (state = initialData, action) {
    switch (action.type) {
        case 'NAVIGATE_TO_FULFILLED':
            state = {
                ...state,
                navigateTo: action.payload,
            }
            break;

        case 'GET_USER_FULFILLED':
           
            const productList = []
            productList.push(freePrescriptionProduct, freeMedAffordProduct)
            console.log(" products are  " + JSON.stringify(action.payload));
            action.payload.method.products[0].product.map(product => {

                const benefit = product.productfees[0].productfee.find(x => x.type[0] === 'Product')
                productList.push({
                    pdid: product.pdid[0],
                    label: product.label[0],
                    description: product.description[0],
                    bhold: product.bhold[0],
                    policynumber: product.policynumber[0],
                    dtholdcreated: product.dtholdcreated[0],
                    holdreason: product.holdreason[0],
                    dteffective: product.dteffective[0],
                    dtcancelled: product.dtcancelled[0],
                    reasonforcancel: product.reasonforcancel[0],
                    benefitid: benefit.benefitid[0],
                    benefitlabel: benefit.benefitlabel[0],
                    periodid: benefit.periodid[0],
                    periodlabel: benefit.periodlabel[0],
                    amount: benefit.amount[0],

                })
            })

            state = {
                ...state,
                firstname: action.payload.method.users[0].user[0].firstname[0],
                lastname: action.payload.method.users[0].user[0].lastname[0],
                phone1: action.payload.method.users[0].user[0].phone1[0],
                state: action.payload.method.users[0].user[0].state[0],
                city: action.payload.method.users[0].user[0].city[0],
                memberid: action.payload.method.users[0].user[0].internalid[0] ? action.payload.method.users[0].user[0].internalid[0] : action.payload.method.users[0].user[0].memberid[0],
                corpid: contants.CORP_ID,
                address1: action.payload.method.users[0].user[0].address[0],
                address2: action.payload.method.users[0].user[0].address2[0] ? action.payload.method.users[0].user[0].address2[0] : '',
                brokerid: action.payload.method.users[0].user[0].brokerid[0],
                email: action.payload.method.users[0].user[0].email[0],
                id: action.payload.method.users[0].user[0].userid[0],
                zipcode: action.payload.method.users[0].user[0].zipcode[0],
                dob: action.payload.method.users[0].user[0].dob[0],
                rxGroupNumber: action.payload.method.users[0].user[0].pin[0] ? action.payload.method.users[0].user[0].pin[0] : 'USAT260',
                rxBin: action.payload.method.users[0].user[0].department[0] ? action.payload.method.users[0].user[0].department[0] : '950 191 000',
                mgiGroupNumber: action.payload.method.users[0].user[0].division[0] ? action.payload.method.users[0].user[0].division[0] : 'USM5312',
                products: productList,
                authentication: 'loggedin',
            }
            break;

        case 'SET_DEFAULT_PRODUCTS_FULFILLED':
            state = {
                ...state,
                firstname: '',
                lastname: '',
                memberid: '123123123',
                rxIdNumber: '950 191 000',
                rxGroupNumber: 'USAT260',
                mgiGroupNumber: 'USM5312',
                products: [freePrescriptionProduct, freeMedAffordProduct],
            }
            break;

        case 'GET_PRODUCTS_FULFILLED':
            if (action.payload.error) {
                state = {
                    ...state,
                    error: action.payload.error,
                }
            } else {

                const freeProd1 = action.payload.find(x => x.ID === 12152)
                const freeProd2 = action.payload.find(x => x.ID === 20222)
                const stateProd1 = state.products.find(x => x.pdid === '12152')
                const stateProd2 = state.products.find(x => x.pdid === '20222')
                if (freeProd1) {
                    stateProd1.description = freeProd1.DESCRIPTION
                }
                if (freeProd2) {
                    stateProd2.description = freeProd2.DESCRIPTION
                }
            }
            break

        case 'GET_AGENT_FULFILLED':
            console.log('+++++++++++++++++++++',action.payload)
            state = {
                ...state,
                agent: action.payload,
            }
            break

        case 'GET_USER_REJECTED':
            state = {
                ...state,
                error: action.payload.toString(),
            }
            break;

        case 'UPDATE_USER_FULFILLED':
            state = {
                ...state,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                phone1: action.payload.phone1,
                state: action.payload.state,
                city: action.payload.city,
                address1: action.payload.address1,
                email: action.payload.email,
                zipcode: action.payload.zipcode,
                dob: action.payload.dob,
            }
            break;

        case 'INITIAL_DATA_LOAD_FULFILLED':
            state = {
                ...state,
                initialDataLoad: true,
            }
            break;

        case 'LOGOUT_FULFILLED':
            state = {
                ...state,
                authentication: 'loggedout',
                products: [],
                initialDataLoad: false,
                agent: null
            }
            break;

        case 'LOGIN_FULFILLED':
            state = {
                ...state,
                authentication: 'loggedin',
                initialDataLoad: false,
            }
            break;

        case 'SET_SELECTED_PRODUCT_FULFILLED':
            state = {
                ...state,
                selectedProduct: action.payload,
            }
            break;

        case 'SET_SELECTED_PRODUCT_RATE_FULFILLED':
            state = {
                ...state,
                selectedProductRate: action.payload,
            }
            break;

        case 'GET_GEOFENCING_FULFILLED':
            state = {
                ...state,
                geofencing: (action.payload === 'true'),
            }
            break;

        case 'SET_GEOFENCING_FULFILLED':
            state = {
                ...state,
                geofencing: !!action.payload,
            }
            break;

        case 'GET_NBBIUPDATES_FULFILLED':
            state = {
                ...state,
                nbbiUpdates: (action.payload === 'true'),
            }
            break;

        case 'SET_NBBIUPDATES_FULFILLED':
            state = {
                ...state,
                nbbiUpdates: !!action.payload,
            }
            break;

        case 'GET_CARDEXP_FULFILLED':
            state = {
                ...state,
                cardExp: (action.payload === 'true'),
            }
            break;

        case 'SET_CARDEXP_FULFILLED':
            state = {
                ...state,
                cardExp: !!action.payload,
            }
            break;

        default:
            break;
    }
    return state;
}
