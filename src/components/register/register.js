import React from 'react';
import { CardTitle } from 'material-ui/Card';


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phoneNumber: '',
            password: '',
            passwordRepeated: '',
            validate: false
        };
        this.passwordErrorMessage = '';
        this.repeatedPasswordErrorMessage = '';
        this.phoneErrorMessage = '';
    }

    isFormValid = () => {
        this.setState({
            validate: true
        });
        this.passwordErrorMessage = '';
        this.repeatedPasswordErrorMessage = '';
        this.phoneErrorMessage = '';
        const { phoneNumber, password, passwordRepeated } = this.state;

        if (phoneNumber.length !== 9) {
            this.phoneErrorMessage = 'Numer telefonu powinien miec 9 cyfr';
            return false;
        }

        if (password.length <= 6) {
            this.passwordErrorMessage = 'Wprowadzone hasło jest zbyt krótkie';
            return false;
        } else if (password !== passwordRepeated) {
            this.repeatedPasswordErrorMessage = 'Hasła nie są takie same';
            return false;
        }
        return true;
    };


    render() {
        return (
            <div>
                <CardTitle title={"dupa"}/>
            </div>
        );

    }

}

export default Register;
