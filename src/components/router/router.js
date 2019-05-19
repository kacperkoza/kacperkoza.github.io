import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from '../dashboard/dashboard.js'
import NewTask from "../task/new-task";

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
