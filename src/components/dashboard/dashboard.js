import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import SwipeableViews from 'react-swipeable-views';
import { Tab, Tabs } from "material-ui/Tabs";
import { cyan500 } from "material-ui/styles/colors";
import TaskList from "../task-list/task-list";
import Board from "../board/Board";
import { connect } from "react-redux";

const mapStateToProps = ({ user }) => {
    return {
        isFetching: user.isFetching
    };
};

const mapDispatchToProps = dispatch => {
    return { };
};

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabsIndex: 0
        };
    }

    shouldApplicateCyanColor = value => this.state.tabsIndex === value ? cyan500 : '#212121';

    tabStyle = value => {
        return {
            background: '#eee',
            color: this.shouldApplicateCyanColor(value)
        };
    };

    handleTabChange = value => {
        this.setState({
            tabsIndex: value
        });
    };

    render() {
        console.log('render dashboard');
        return (
            <Card className="dashboard" style={{ maxWidth: '500px' }}>
                <SwipeableViews
                    index={this.state.tabsIndex}
                    onChangeIndex={this.handleTabChange}>
                    <TaskList/>
                    <Board/>
                </SwipeableViews>

                <Tabs
                    onChange={this.handleTabChange}
                    value={this.state.tabsIndex}
                    inkBarStyle={{ backgroundColor: cyan500 }}>
                    <Tab
                        style={this.tabStyle(0)}
                        label="Lista"
                        value={0}
                    />
                    <Tab
                        style={this.tabStyle(1)}
                        label="Tablica"
                        value={1}
                    />
                </Tabs>
            </Card>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
