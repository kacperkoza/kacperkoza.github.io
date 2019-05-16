import React, { Component } from 'react';
import { CardText, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Register extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            email: '',
            name: '',
            surname: '',
            password: '',
            passwordRepeated: '',
            validate: false
        };
        this.nameErrorMessage = '';
        this.surnameErrorMessage = '';
        this.passwordErrorMessage = '';
    }

    isFormValid = () => {
        this.setState({
            validate: true
        });
        this.nameErrorMessage = '';
        this.surnameErrorMessage = '';
        this.passwordErrorMessage = '';

        const { name, surname, password, passwordRepeated} = this.state;

        if (name.length  <= 0) {
            this.nameErrorMessage = 'Your name';
            return false;
        }
        if (surname.length <= 0) {
            this.surnameErrorMessage = 'Your surname';
            return false;
        }

        if (password.length < 6) {
            this.passwordErrorMessage = 'Your password must have at least 6 characters';
            return false;
        } else if (password !== passwordRepeated) {
            this.repeatedPasswordErrorMessage = 'The passwords are not the same';
            return false;
        }
        return true;
    };

    submitForm = e => {
        e.preventDefault();
        if (this.isFormValid()) {
            this.props.onRegisterSubmit(this.state);
        }
    };

    render() {
        const { isFetching } = this.props;
        return (
            <div>
                <CardTitle title={"Rejestracja"}/>

                <CardText style={{ display: 'flex', flexDirection: 'column' }}>
                    <form onSubmit={e => this.submitForm(e)}>
                        <TextField
                            hintText="Your e-mail address"
                            floatingLabelText="E-mail"
                            type="email"
                            fullWidth
                            required
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                        <TextField
                            hintText="Your name"
                            floatingLabelText="Your name"
                            type="text"
                            required
                            errorText={this.state.validate && this.nameErrorMessage}
                            onChange={e => this.setState({ name: e.target.value })}
                            fullWidth
                        />
                        <TextField
                            hintText="Your surname"
                            floatingLabelText="Your surname"
                            type="text"
                            required
                            errorText={this.state.validate && this.surnameErrorMessage}
                            onChange={e => this.setState({ surname: e.target.value })}
                            fullWidth
                        />
                        <TextField
                            hintText="Your password"
                            floatingLabelText="Your password"
                            type="password"
                            fullWidth
                            errorText={this.state.validate && this.passwordErrorMessage}
                            onChange={e =>
                                this.setState({
                                    password: e.target.value
                                })}
                            required
                        />
                        <TextField
                            hintText="Repeat password"
                            floatingLabelText="Repeat password"
                            type="password"
                            fullWidth
                            errorText={
                                this.state.validate &&
                                this.repeatedPasswordErrorMessage
                            }
                            onChange={e =>
                                this.setState({
                                    passwordRepeated: e.target.value
                                })}
                            required
                        />
                        <RaisedButton
                            label="Register"
                            primary={true}
                            style={{ marginTop: '10px' }}
                            type="submit"
                            disabled={isFetching}
                            fullWidth
                        />
                    </form>
                </CardText>
            </div>
        );
    }

}

export default Register;
