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
import { AddStoreActions } from './../../../common/store/actions/AddStoreActions';

class AddStore extends Component {
    onNameChange(text) {
        this.props.nameChange(text);
    }
    onLocationChange(text) {
        this.props.locationChange(text);
    }
    pressButton() {
        const { storeName, location } = this.props;
        this.props.addStore({ storeName, location });
    }
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item>
                            <Input
                                placeholder="Store Name"
                                onChangeText={this.onNameChange.bind(this)}
                                value={this.props.storeName}
                            />
                        </Item>
                        <Item last>
                            <Input
                                placeholder="Add Location"
                                onChangeText={this.onLocationChange.bind(this)}
                                value={this.props.location}
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
const styles = {
    buttonStyle: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#C62828'
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStore);
