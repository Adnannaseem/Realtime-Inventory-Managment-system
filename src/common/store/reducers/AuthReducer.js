
const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false,
    isLogin: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'EMAIL_CHANGE':
            return { ...state, email: action.payload };
        case 'PASSWORD_CHANGE':
            return { ...state, password: action.payload };
        case 'LOGIN_USER_SUCCESS':
            return { ...state, ...INITIAL_STATE, user: action.payload, isLogin: true };
        case 'LOGIN_USER_FAIL':
            return { ...state, error: 'Authentication Failed!', password: '', loading: false };
        case 'LOGIN_USER':
            return { ...state, loading: true, error: '' };
        default:
            return state;
    }
};
