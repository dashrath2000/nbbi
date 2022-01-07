const initialData = {
    shopping_cart: [],
    shop: [],
    checkout_data: {},
}


export default function (state = initialData, action) {
    switch (action.type) {
        case 'GET_PRODUCTS_FULFILLED':
            if (action.payload.error) {
                state = {
                    ...state,
                    error: action.payload.error,
                }
            } else {
                state = {
                    ...state,
                    shop: action.payload,
                }
            }
            break

            

        case 'GET_PRODUCT_RATE_FULFILLED':
            state = {
                ...state,
                product_details: action.payload,
                product_show: true,
            }
            break

        case 'REMOVE_PRODUCT_RATE_FULFILLED':
            state = {
                ...state,
                product_details: {},
                product_show: false,
            }
            break

        case 'ADD_SHOPPING_CART_FULFILLED':
            state = {
                ...state,
                shopping_cart: [...state.shopping_cart, action.payload],
            }
            break

        case 'REMOVE_SHOPPING_CART_FULFILLED':
            state = {
                ...state,
                shopping_cart: state.shopping_cart.filter(item => item.productID !== action.payload),
            }
            break

        case 'EMPTY_SHOPPING_CART_FULFILLED':
            state = {
                ...state,
                shopping_cart: [],
            }
            break

        case 'SET_SHOPPING_NAVIGATE_FULFILLED':
            state = {
                ...state,
                shopping_navigate: action.payload,
            }
            break

        case 'ADD_CHECKOUT_DATA_FULFILLED':
            state = {
                ...state,
                checkout_data: { ...state.checkout_data, ...action.payload },
            }
            break

        case 'PROCESS_ORDER_RESPONSE_FULFILLED':
            state = {
                ...state,
                process_order_response: action.payload,
            }
            break

        default:
            break
    }
    return state;
}
