import firebase from './../../config';

export class AddProductActions {
    static nameChange(text) {
        return {
            type: 'PRODUCT_NAME_CHANGE',
            payload: text
        };
    }
    static manufacturerChange(text) {
        return {
            type: 'MANUFACTURER_CHANGE',
            payload: text
        };
    }
    static descriptionChange(text) {
        return {
            type: 'DESCRIPTION_CHANGE',
            payload: text
        };
    }
    static addProduct(credentials) {
        return (dispatch) => {
            dispatch({ type: 'ADD_PRODUCT' });
            firebase.database().ref('/').child(`products`).push(credentials)
            .then(() => dispatch(AddProductActions.addProductSuccessfull()))
            .catch((error) => dispatch(AddProductActions.addProductFails(error)));
        };
    }
    static addProductSuccessfull() {
        return {
            type: 'ADD_PRODUCT_SUCCESSFULL'
        };
    }
    static addProductFails() {
        return {
            type: 'ADD_PRODUCT_FAILS'
        };
    }

}
