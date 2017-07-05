
import firebase from './../../config';

export class AuthActions {

    static emailChange(text) {
        return {
            type: 'EMAIL_CHANGE',
            payload: text
        };
    }
    static passwordChange(text) {
        return {
            type: 'PASSWORD_CHANGE',
            payload: text
        };
    }
    static loginUser(credentials) {
        return (dispatch) => {
            dispatch({ type: 'LOGIN_USER' });
            firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
                .then(user => dispatch(AuthActions.loginUserSuccess(user)))
                .catch(() => dispatch(AuthActions.loginUserFail()));
        };
    }
    static loginUserFail() {
        return {
             type: 'LOGIN_USER_FAIL' 
        };
    }

    static loginUserSuccess(user) {
        return {
            type: 'LOGIN_USER_SUCCESS',
            payload: user
        };
        // Actions.main();
    }

}
