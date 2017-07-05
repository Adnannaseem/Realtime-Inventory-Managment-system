import React, { Component } from 'react';
import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Button,
    Text,
} from 'native-base';
import { connect } from 'react-redux';
import { AddProductActions } from './../../../common/store/actions/AddProductActions';

class AddProduct extends Component {
    onNameChange(text) {
        this.props.nameChange(text);
    }
    onManufacturerChange(text) {
        this.props.manufacturerChange(text);
    }
    onDescriptionChange(text) {
        this.props.descriptionChange(text);
    }
    pressButton() {
        const { productName, manufacturer, description } = this.props;
        this.props.addProduct({ productName, manufacturer, description });
    }
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item>
                            <Input
                                placeholder="Product Name"
                                onChangeText={this.onNameChange.bind(this)}
                                value={this.props.productName}
                            />
                        </Item>
                        <Item>
                            <Input
                                placeholder="Manufacturer"
                                onChangeText={this.onManufacturerChange.bind(this)}
                                value={this.props.manufacturer}
                            />
                        </Item>
                        <Item last>
                            <Input
                                placeholder="Description"
                                onChangeText={this.onDescriptionChange.bind(this)}
                                value={this.props.description}
                            />
                        </Item>
                        <Content >
                            <Button
                                block style={styles.buttonStyle}
                                onPress={this.pressButton.bind(this)}
                            >
                                <Text>Save</Text>
                            </Button>
                        </Content>
                    </Form>

                </Content>
            </Container>
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
const styles = {
    buttonStyle: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#C62828'
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
