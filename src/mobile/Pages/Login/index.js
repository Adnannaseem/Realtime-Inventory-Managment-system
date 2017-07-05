import React, { Component } from 'react';
import { 
    Container,
    Content,
    Form, 
    Item, 
    Input, 
    Button, 
    Text, 
    Card, 
    CardItem, Icon, Right
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { AuthActions } from './../../../common/store/actions/AuthActions';

class Login extends Component {
    
    componentWillReceiveProps() {
        setTimeout(() => {
            if (this.props.isLogin) {
                console.log('isRegistered true in signup');
                Actions.dashboard();
            }
        }, 0);
    }
    onEmailChange(text) {
        this.props.emailChange(text);
    }
    onPasswordChange(text) {
        this.props.passwordChange(text);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item>
                            <Input
                             placeholder="Username" 
                             onChangeText={this.onEmailChange.bind(this)}
                             value={this.props.email}
                            />
                        </Item>
                        <Item last>
                            <Input 
                            placeholder="Password" 
                            secureTextEntry
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password} 
                            />
                        </Item>
                        <Content >
                            <Button 
                                block style={styles.buttonStyle} 
                                onPress={this.onButtonPress.bind(this)}
                            >
                                <Text>Log In</Text>
                            </Button>
                            <Button block style={styles.buttonStyle} onPress={() => Actions.dashboard()}>
                                <Text>Sign Up</Text>
                            </Button>
                        </Content>
                    </Form>
                    
                </Content>
                <Content>
                        {/*<Card style={styles.cardStyle}>
                            <CardItem>
                                <Icon active name="logo-google" />
                                <Text>Google</Text>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </CardItem>
                        </Card>*/}
                        <Card style={styles.cardStyle}>
                            <CardItem header>
                                <Text>Or Log In With</Text>
                            </CardItem>
                            <CardItem>
                                <Icon active name="logo-facebook" />
                                <Text>facebook</Text>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </CardItem>
                        </Card>
                    </Content>

            </Container>
       );
    }
}

const mapStateToProps = ({ AuthReducer }) => {
    const { email, password, error, loading, isLogin } = AuthReducer;
    return {
        email,
        password,
        error,
        loading,
        isLogin

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        emailChange: (text) => dispatch(AuthActions.emailChange(text)),
        passwordChange: (text) => dispatch(AuthActions.passwordChange(text)),
        loginUser: (credentials) => dispatch(AuthActions.loginUser(credentials))
    };
};


const styles = {
    buttonStyle: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#C62828'
    },
    cardStyle: {
         
        marginLeft: 20,
        marginRight: 20

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
