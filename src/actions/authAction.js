import { AsyncStorage } from 'react-native'
import { administrationApi, enrollmentApi } from '../utils/api'

export const navigateTo = (data) => {
    return {
        type: 'NAVIGATE_TO',
        payload: new Promise(resolve => {
            resolve(data)
        }),
    }
}

export const getVendors = () => {
    return {
        type: 'GET_VENDORS',
        payload: administrationApi.getVendors(),
    }
}


export const setDefaultProducts = () => {
    return {
        type: 'SET_DEFAULT_PRODUCTS',
        payload: new Promise(resolve => {
            resolve()
        }),
    }
}

export const getProducts = (agentID) => {
    
    return {
        type: 'GET_PRODUCTS',
        payload: administrationApi.getProducts(agentID),
    }
}

export const getAgent = (agentID) => {
    return {
        type: 'GET_AGENT',
        payload: administrationApi.getAgent(agentID),
    }
}

export const getProductRate = (productID, agentID) => {
    return {
        type: 'GET_PRODUCT_RATE',
        payload: administrationApi.getRates(productID, agentID),
    }
}

export const setSelectedProductRate = (productID) => {
    return {
        type: 'SET_SELECTED_PRODUCT_RATE',
        payload: new Promise(resolve => {
            resolve(productID)
        }),
    }
}

export const removeProductRate = () => {
    return {
        type: 'REMOVE_PRODUCT_RATE',
        payload: new Promise(resolve => {
            resolve()
        }),
    }
}

export const setSelectedProduct = (productID) => {
    return {
        type: 'SET_SELECTED_PRODUCT',
        payload: new Promise(resolve => {
            resolve(productID)
        }),
    }
}

export const initialDataLoad = () => {
    return {
        type: 'INITIAL_DATA_LOAD',
        payload: new Promise(resolve => {
            resolve()
        }),
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
        payload: new Promise(resolve => {
            resolve()
        }),
    }
}

export const login = () => {
    return {
        type: 'LOGIN',
        payload: new Promise(resolve => {
            resolve()
        }),
    }
}

export const getUser = (memberid) => {
    return {
        type: 'GET_USER',
        payload: enrollmentApi.getUser(memberid),
    }
}

export const updateUser = (data) => {
    return {
        type: 'UPDATE_USER',
        payload: new Promise(resolve => {
            resolve(data)
        }),
    }
}

export const getGeofencing = () => {
    return {
        type: 'GET_GEOFENCING',
        payload: AsyncStorage.getItem('geofencing'),
    }
}

export const setGeofencing = (data) => {
    return {
        type: 'SET_GEOFENCING',
        payload: new Promise(resolve => {
            resolve(data)
        }),
    }
}

export const getNbbiUpdates = () => {
    return {
        type: 'GET_NBBIUPDATES',
        payload: AsyncStorage.getItem('nbbiupdates'),
    }
}

export const setNbbiUpdates = (data) => {
    return {
        type: 'SET_NBBIUPDATES',
        payload: new Promise(resolve => {
            resolve(data)
        }),
    }
}

export const getCardExp = () => {
    return {
        type: 'GET_CARDEXP',
        payload: AsyncStorage.getItem('cardexp'),
    }
}

export const setCardExp = (data) => {
    return {
        type: 'SET_CARDEXP',
        payload: new Promise(resolve => {
            resolve(data)
        }),
    }
}

export const emptyShoppingCart = () => {
    return {
        type: 'EMPTY_SHOPPING_CART',
        payload: new Promise(resolve => {
            resolve()
        }),
    }
}

export const addShoppingCart = (data) => {
    return {
        type: 'ADD_SHOPPING_CART',
        payload: new Promise(resolve => {
            resolve(data)
        }),
    }
}

export const removeShoppingCart = (productID) => {
    return {
        type: 'REMOVE_SHOPPING_CART',
        payload: new Promise(resolve => {
            resolve(productID)
        }),
    }
}

export const setShoppingNavigate = (data) => {
    return {
        type: 'SET_SHOPPING_NAVIGATE',
        payload: new Promise(resolve => {
            resolve(data)
        }),
    }
}

export const addCheckoutData = (data) => {
    return {
        type: 'ADD_CHECKOUT_DATA',
        payload: new Promise(resolve => {
            resolve(data)
        }),
    }
}

export const processOrderResponse = (data) => {
    return {
        type: 'PROCESS_ORDER_RESPONSE',
        payload: new Promise(resolve => {
            resolve(data)
        }),
    }
}

export const setAllZipcode = (data) => {
    return {
        type: 'SET_ALL_ZIPCODE',
        payload: new Promise(resolve => {
            resolve(data)
        }),
    }
}

export const visionSearch = (data) => {
    return {
        type: 'VISION_SEARCH',
        payload: administrationApi.providerSearch(data),
    }
}

export const visionZipcode = (data) => {
    return {
        type: 'VISION_ZIPCODE',
        payload: new Promise(resolve => {
            resolve(data)
        }),
    }
}

export const visionRadius = (data) => {
    return {
        type: 'VISION_RADIUS',
        payload: new Promise(resolve => {
            resolve(data)
        }),
    }
}

export const visionSpeciality = (data) => {
    return {
        type: 'VISION_SPECIALITY',
        payload: new Promise(resolve => {
            resolve(data)
        }),
    }
}

export const visionName = (data) => {
    return {
        type: 'VISION_NAME',
        payload: new Promise(resolve => {
            resolve(data)
        }),
    }
}

export const dentalSearch = (data) => {
    return {
        type: 'DENTAL_SEARCH',
        payload: administrationApi.providerSearch(data),
    }
}

export const dentalZipcode = (data) => {
    return {
        type: 'DENTAL_ZIPCODE',
        payload: new Promise(resolve => {
            resolve(data)
        }),
    }
}

export const dentalRadius = (data) => {
    return {
        type: 'DENTAL_RADIUS',
        payload: new Promise(resolve => {
            resolve(data)
        }),
    }
}

export const dentalSpeciality = (data) => {
    return {
        type: 'DENTAL_SPECIALITY',
        payload: new Promise(resolve => {
            resolve(data)
        }),
    }
}

export const dentalName = (data) => {
    return {
        type: 'DENTAL_NAME',
        payload: new Promise(resolve => {
            resolve(data)
        }),
    }
}

export const drugSearchStep1 = (data) => {
    return {
        type: 'DRUG_SEARCH_STEP_1',
        payload: administrationApi.drugSearchStep1(data),
    }
}

export const drugSearchStep2 = (data) => {
    return {
        type: 'DRUG_SEARCH_STEP_2',
        payload: administrationApi.drugSearchStep2(data),
    }
}

export const drugSearchStep3 = (data) => {
    return {
        type: 'DRUG_SEARCH_STEP_3',
        payload: administrationApi.drugSearchStep3(data),
    }
}

export const drugSelected = (data) => {
    return {
        type: 'DRUG_SELECTED',
        payload: new Promise(resolve => {
            resolve(data)
        }),
    }
}

export const drugName = (data) => {
    return {
        type: 'DRUG_NAME',
        payload: new Promise(resolve => {
            resolve(data)
        }),
    }
}

export const drugZipcode = (data) => {
    return {
        type: 'DRUG_ZIPCODE',
        payload: new Promise(resolve => {
            resolve(data)
        }),
    }
}

export const drugRadius = (data) => {
    return {
        type: 'DRUG_RADIUS',
        payload: new Promise(resolve => {
            resolve(data)
        }),
    }
}

export const drugSupply = (data) => {
    return {
        type: 'DRUG_SUPPLY',
        payload: new Promise(resolve => {
            resolve(data)
        }),
    }
}

export const drugSize= (data) => {
    return {
        type: 'DRUG_SIZE',
        payload: new Promise(resolve => {
            resolve(data)
        }),
    }
}