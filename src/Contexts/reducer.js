export const useState = {
    total : 0,
    amount: 0,
    products: [],
}

const CartReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                products: action.payload
            }
        case 'remove':
            return {
                ...state,
                products: action.payload
            }
        case 'update_quantity':
            return {
                ...state,
                products: action.payload
            }
        case "update_price":
            return {
                ...state,
                total: action.payload
            }
        default: throw new Error('Cannot match case in reducer')
    }
}

export default CartReducer;