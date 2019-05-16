import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Landing from '../landing/landing.js'
import Dashboard from '../dashboard/dashboard.js'

const mapStateToProps = ({ user }) => {
    return {
        isAuth: user.isAuth,
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

class Router extends Component {
    componentDidMount() {
        // this.props.checkUserAuth();
    }

    render() {
        const isCheckingAuth = !this.props.isAuth;
        const { isAuth } = this.props;
        console.log("is auth = " + isAuth);
        return (
            <HashRouter>
                {!isAuth
                    ? <Route path="/" component={Landing}/>
                    : <div className="authRoutes">
                        <Route exact path="dashboard" component={Dashboard}/>
                    </div>
                }
            </HashRouter>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);
