import React from 'react';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import { Card } from 'material-ui/Card';
import { Tab, Tabs } from 'material-ui/Tabs';
import { cyan500 } from 'material-ui/styles/colors';
import Login from '../login/login.js';
import Register from '../register/register.js';
import { submitLogin, submitRegister } from '../../actions/user-actions';

const mapStateToProps = ({ user }) => {
    return {
        isFetching: user.isFetching
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRegisterSubmit: body => {
            dispatch(submitRegister(body));
        },
        onLoginSubmit: body => {
            dispatch(submitLogin(body));
        }
    };
};

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabsIndex: 0
        };
    }

    handleTabChange = value => {
        this.setState({
            tabsIndex: value
        });
    };

    render() {
        const { onRegisterSubmit, onLoginSubmit, isFetching } = this.props;
        const shouldApplicateCyanColor = value =>
            this.state.tabsIndex === value ? cyan500 : '#212121';
        const tabStyle = value => {
            return {
                background: '#eee',
                color: shouldApplicateCyanColor(value)
            };
        };
        return (
            <Card className="register" style={{ maxWidth: '500px' }}>
                <SwipeableViews
                    index={this.state.tabsIndex}
                    onChangeIndex={this.handleTabChange}
                >
                    <Login onLoginSubmit={onLoginSubmit} isFetching={isFetching}/>
                    <Register onRegisterSubmit={onRegisterSubmit} isFetching={isFetching}/>
                </SwipeableViews>

                <Tabs
                    onChange={this.handleTabChange}
                    value={this.state.tabsIndex}
                    inkBarStyle={{ backgroundColor: cyan500 }}
                >
                    <Tab
                        style={tabStyle(0)}
                        label="Logowanie"
                        value={0}
                    />
                    <Tab
                        style={tabStyle(1)}
                        label="Rejestracja"
                        value={1}
                    />
                </Tabs>
            </Card>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
