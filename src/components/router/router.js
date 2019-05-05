import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Landing from '../landing/landing.js'

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
        return (
            (
                !isAuth ?
                    <HashRouter>
                        <Route path="/" component={Landing}/>
                    </HashRouter>
                    : <div className="authRoutes">
                        po zalogowaniu...
                    </div>
            )
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);
