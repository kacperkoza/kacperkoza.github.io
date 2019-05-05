import React from 'react';
import { CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            validate: false
        };
        this.passwordErrorMessage = '';
    }

    isFormValid = () => {
        this.setState({
            validate: true
        });
        this.passwordErrorMessage = '';
        if (this.state.password.length < 6) {
            this.passwordErrorMessage = 'Hasło jest zbyt krótkie';
            return false;
        }
        return true;
    };

    submitForm = e => {
        e.preventDefault();
        if (this.isFormValid()) this.props.onLoginSubmit(this.state);
    };

    render() {
        const { isFetching } = this.props;
        return (
            <div>
                <CardTitle
                    title={
                        <span>
                            Logowanie {isFetching && <CircularProgress size={30} />}
                        </span>
                    }
                    style={{ paddingBottom: '0' }}
                />

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
                            hintText="Wpisz swoje hasło"
                            floatingLabelText="Hasło"
                            type="password"
                            fullWidth
                            errorText={
                                this.state.validate && this.passwordErrorMessage
                            }
                            onChange={e =>
                                this.setState({
                                    password: e.target.value
                                })}
                            required
                        />
                        <RaisedButton
                            label="Zaloguj się"
                            primary={true}
                            style={{ marginTop: '10px' }}
                            type="submit"
                            fullWidth
                            disabled={isFetching}
                        />
                    </form>
                </CardText>
            </div>
        );
    }
}

export default Login;
