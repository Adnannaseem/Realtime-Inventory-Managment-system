const INITIAL_STATE = {
    productName: '',
    manufacturer: '',
    description: '',
    error: '',
    loading: false,
    isAdd: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PRODUCT_NAME_CHANGE':
            return { ...state, productName: action.payload };
        case 'MANUFACTURER_CHANGE':
            return { ...state, manufacturer: action.payload };
        case 'DESCRIPTION_CHANGE':
            return { ...state, description: action.payload };
        case 'ADD_PRODUCT':
            return { ...state, loading: true };
        case 'ADD_PRODUCT_SUCCESSFULL':
            return { ...state, loading: false, isAdd: true, description: '', manufacturer: '', productName: '' };
        case 'ADD_PRODUCT_FAILS':
            return { ...state, error: 'Product Add Fails' };
        default:
            return state;
    }
};
