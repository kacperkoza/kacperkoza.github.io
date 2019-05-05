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
            this.nameErrorMessage = 'Podaj imię';
            return false;
        }
        if (surname.length <= 0) {
            this.surnameErrorMessage = 'Podaj nazwisko'
            return false;
        }

        if (password.length < 6) {
            this.passwordErrorMessage = 'Wprowadzone hasło jest zbyt krótkie';
            return false;
        } else if (password !== passwordRepeated) {
            this.repeatedPasswordErrorMessage = 'Hasła nie są takie same';
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
                            hintText="Wpisz adres e-mail"
                            floatingLabelText="E-mail"
                            type="email"
                            fullWidth
                            required
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                        <TextField
                            hintText="Podaj imię"
                            floatingLabelText="Twoje imię"
                            type="text"
                            required
                            errorText={this.state.validate && this.nameErrorMessage}
                            onChange={e => this.setState({ name: e.target.value })}
                            fullWidth
                        />
                        <TextField
                            hintText="Podaj nazwisko"
                            floatingLabelText="Twoje nazwisko"
                            type="text"
                            required
                            errorText={this.state.validate && this.surnameErrorMessage}
                            onChange={e => this.setState({ surname: e.target.value })}
                            fullWidth
                        />
                        <TextField
                            hintText="Wpisz swoje hasło"
                            floatingLabelText="Hasło"
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
                            hintText="Powtórz swoje hasło"
                            floatingLabelText="Powtórz hasło"
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
                            label="Zarejestruj się"
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
