import React, { Component } from 'react';
import { HashRouter, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Landing from '../landing/landing.js'
import Dashboard from '../dashboard/dashboard.js'

const mapStateToProps = ({ user }) => {
    return {
        isAuth: true,
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
        const { isAuth } = this.props;
        console.log("is auth = " + isAuth);
        return (
            <HashRouter>
                    <div className="authRoutes">
                        <Route path="/" component={Dashboard}/>
                    </div>
            </HashRouter>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);
