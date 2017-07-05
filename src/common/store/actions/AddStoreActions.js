import firebase from './../../config';

export class AddStoreActions {
    static nameChange(text) {
        return {
            type: 'STORE_NAME_CHANGE',
            payload: text
        };
    }
    static locationChange(text) {
        return {
            type: 'LOCATION_CHANGE',
            payload: text
        };
    }
    static addStore(credentials) {
        return (dispatch) => {
            dispatch({ type: 'ADD_STORE' });
            firebase.database().ref('/').child(`stores`).push(credentials)
            .then(() => dispatch(AddStoreActions.addStoreSuccessfull()))
            .catch((error) => dispatch(AddStoreActions.addStoreFails(error)));
        };
    }
    static addStoreSuccessfull() {
        return {
            type: 'ADD_STORE_SUCCESSFULL'
        };
    }
    static addStoreFails() {
        return {
            type: 'ADD_STORE_FAILS'
        };
    }

}
