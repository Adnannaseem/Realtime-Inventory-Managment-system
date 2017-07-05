import React, { Component, PropTypes } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import { connect } from 'react-redux';
import { AuthActions } from './../../../common/store/actions/AuthActions';

class Login extends Component {
    componentWillReceiveProps() {
        setTimeout(() => {
            if (this.props.isLogin) {
                console.log('isRegistered true in signup');
                this.context.router.push('/dashboard');
            }
        }, 0);
    }
    onEmailChange(event) {
        this.props.emailChange(event.target.value);
    }
    onPasswordChange(event) {
        this.props.passwordChange(event.target.value);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }
    render() {
        return (
            <div>
                <TextField
                    hintText="email"
                    value={this.props.email}
                    onChange={this.onEmailChange.bind(this)}
                /><br />
                <TextField
                    hintText="Password"
                    type='password'
                    value={this.props.password}
                    onChange={this.onPasswordChange.bind(this)}
                /><br />
                <div>
                    <RaisedButton
                        label="Login"
                        onClick={this.onButtonPress.bind(this)}
                    />
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    // const { email, password, error, loading } = auth;
    return {
        email: state.AuthReducer.email,
        password: state.AuthReducer.password,
        error: state.AuthReducer.error,
        loading: state.AuthReducer.loading,
        isLogin: state.AuthReducer.isLogin
    };
}
function mapDispatchToProps(dispatch) {
    return {
        emailChange: (text) => dispatch(AuthActions.emailChange(text)),
        passwordChange: (text) => dispatch(AuthActions.passwordChange(text)),
        loginUser: (credentials) => dispatch(AuthActions.loginUser(credentials))
    };
}
Login.contextTypes = {
    router: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
