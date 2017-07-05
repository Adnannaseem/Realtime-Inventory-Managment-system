import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import { connect } from 'react-redux';
import { AddStoreActions } from './../../../common/store/actions/AddStoreActions';

class AddStore extends Component {
    onNameChange(event) {
        this.props.nameChange(event.target.value);
    }
    onLocationChange(event) {
        this.props.locationChange(event.target.value);
    }
    pressButton() {
        const { storeName, location } = this.props;
        this.props.addStore({ storeName, location });
    }
    render() {
        return (
            <div>
                <TextField
                    hintText="Store Name"
                    value={this.props.storeName}
                    onChange={this.onNameChange.bind(this)}
                /><br />
                <TextField
                    hintText="Add Location"
                    value={this.props.location}
                    onChange={this.onLocationChange.bind(this)}
                /><br />
                <RaisedButton
                    label="Save"
                    onClick={this.pressButton.bind(this)}
                />
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        storeName: state.AddStoreReducer.storeName,
        location: state.AddStoreReducer.location
    };
}
function mapDispatchToProps(dispatch) {
    return {
        nameChange: (text) => dispatch(AddStoreActions.nameChange(text)),
        locationChange: (text) => dispatch(AddStoreActions.locationChange(text)),
        addStore: (credentials) => dispatch(AddStoreActions.addStore(credentials))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStore);
