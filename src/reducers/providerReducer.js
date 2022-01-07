const initialData = {
    vision_search: [],
    vision_zipcode: '12345',
    vision_radius: '5',
    vision_speciality: '',
    vision_name: '',
    dental_search: [],
    dental_zipcode: '12345',
    dental_radius: '5',
    dental_speciality: '',
    dental_name: '',
    drug_search: [],
    drug_zipcode: '12345',
    drug_radius: '5',
    drug_size: '',
    drug_supply: '',
    drug_pharmacy_search: [],
    drug_size_search: [],
}

export default function (state = initialData, action) {
    let providerList = []
    switch (action.type) {
        case 'SET_ALL_ZIPCODE_FULFILLED':
            state = {
                ...state,
                vision_zipcode: action.payload,
                dental_zipcode: action.payload,
                drug_zipcode: action.payload,
            }
            break

        case 'VISION_ZIPCODE_FULFILLED':
            state = {
                ...state,
                vision_zipcode: action.payload,
            }
            break

        case 'VISION_RADIUS_FULFILLED':
            state = {
                ...state,
                vision_radius: action.payload,
            }
            break

        case 'VISION_SPECIALITY_FULFILLED':
            state = {
                ...state,
                vision_speciality: action.payload,
            }
            break

        case 'VISION_NAME_FULFILLED':
            state = {
                ...state,
                vision_name: action.payload,
            }
            break

        case 'VISION_SEARCH_FULFILLED':
            providerList = []
            if (action.payload.GetPharmacyListResult)
                providerList = action.payload.GetPharmacyListResult
            state = {
                ...state,
                vision_search: providerList,
            }
            break

        case 'DENTAL_ZIPCODE_FULFILLED':
            state = {
                ...state,
                dental_zipcode: action.payload,
            }
            break

        case 'DENTAL_RADIUS_FULFILLED':
            state = {
                ...state,
                dental_radius: action.payload,
            }
            break

        case 'DENTAL_SPECIALITY_FULFILLED':
            state = {
                ...state,
                dental_speciality: action.payload,
            }
            break

        case 'DENTAL_NAME_FULFILLED':
            state = {
                ...state,
                dental_name: action.payload,
            }
            break

        case 'DENTAL_SEARCH_FULFILLED':
            providerList = []
            if (action.payload.GetPharmacyListResult)
                providerList = action.payload.GetPharmacyListResult
            state = {
                ...state,
                dental_search: providerList,
            }
            break

        case 'DRUG_SEARCH_STEP_1_FULFILLED':
            providerList = []
            if (action.payload.FindDrugResult)
                providerList = action.payload.FindDrugResult
            state = {
                ...state,
                drug_search: providerList,
                drug_pharmacy_search: [],
            }
            break

        case 'DRUG_SEARCH_STEP_2_FULFILLED':
            providerList = []
            if (action.payload.GetPackageSizeListResult)
                providerList = action.payload.GetPackageSizeListResult
            state = {
                ...state,
                drug_size_search: providerList,
            }
            break

        case 'DRUG_SEARCH_STEP_3_FULFILLED':
            providerList = []
            if (action.payload.FindPharmacyResult)
                providerList = action.payload.FindPharmacyResult
            state = {
                ...state,
                drug_pharmacy_search: providerList,
            }
            break

        case 'DRUG_SELECTED_FULFILLED':
            state = {
                ...state,
                drug_selected: action.payload,
            }
            break

        case 'DRUG_NAME_FULFILLED':
            state = {
                ...state,
                drug_name: action.payload,
            }
            break

        case 'DRUG_ZIPCODE_FULFILLED':
            state = {
                ...state,
                drug_zipcode: action.payload,
            }
            break

        case 'DRUG_RADIUS_FULFILLED':
            state = {
                ...state,
                drug_radius: action.payload,
            }
            break

        case 'DRUG_SUPPLY_FULFILLED':
            state = {
                ...state,
                drug_supply: action.payload,
                drug_pharmacy_search: [],
            }
            break

        case 'DRUG_SIZE_FULFILLED':
            state = {
                ...state,
                drug_size: action.payload,
                drug_pharmacy_search: [],
            }
            break

        default:
            break
    }
    return state;
}
