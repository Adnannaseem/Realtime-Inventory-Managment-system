const INITIAL_STATE = {
    storeName: '',
    location: '',
    error: '',
    loading: false,
    isAdd: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'STORE_NAME_CHANGE':
            return { ...state, storeName: action.payload };
        case 'LOCATION_CHANGE':
            return { ...state, location: action.payload };
        case 'ADD_STORE':
            return { ...state, loading: true };
        case 'ADD_STORE_SUCCESSFULL':
            return { ...state, loading: false, isAdd: true, location: '', storeName: '' };
        case 'ADD_STORE_FAILS':
            return { ...state, error: 'Store Add Fails' };
        default:
            return state;
    }
};
