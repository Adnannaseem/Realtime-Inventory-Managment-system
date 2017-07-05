import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import { connect } from 'react-redux';
import { AddProductActions } from './../../../common/store/actions/AddProductActions';

class AddProduct extends Component {
    onNameChange(event) {
        this.props.nameChange(event.target.value);
    }
    onManufacturerChange(event) {
        this.props.manufacturerChange(event.target.value);
    }
    onDescriptionChange(event) {
        this.props.descriptionChange(event.target.value);
    }
    pressButton() {
        const { productName, manufacturer, description } = this.props;
        this.props.addProduct({ productName, manufacturer, description });
    }
    render() {
        return (
            <div>
                <TextField
                    hintText="Product Name"
                    value={this.props.productName}
                    onChange={this.onNameChange.bind(this)}
                /><br />
                <TextField
                    hintText="Manufacturer"
                    value={this.props.manufacturer}
                    onChange={this.onManufacturerChange.bind(this)}
                /><br />
                <TextField
                    hintText="Description"
                    value={this.props.description}
                    onChange={this.onDescriptionChange.bind(this)}
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
        productName: state.AddProductReducer.productName,
        manufacturer: state.AddProductReducer.manufacturer,
        description: state.AddProductReducer.description
    };
}
function mapDispatchToProps(dispatch) {
    return {
        nameChange: (text) => dispatch(AddProductActions.nameChange(text)),
        manufacturerChange: (text) => dispatch(AddProductActions.manufacturerChange(text)),
        descriptionChange: (text) => dispatch(AddProductActions.descriptionChange(text)),
        addProduct: (credentials) => dispatch(AddProductActions.addProduct(credentials))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
