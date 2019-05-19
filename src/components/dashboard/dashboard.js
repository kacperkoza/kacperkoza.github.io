import React from 'react';
import { Card } from 'material-ui/Card';
import SwipeableViews from 'react-swipeable-views';
import { Tab, Tabs } from "material-ui/Tabs";
import { cyan500, cyan50, cyan900 } from "material-ui/styles/colors";
import TaskList from "../task-list/task-list";
import Board from "../board/Board";
import {
    changeAssignedUserIdFilter,
    changeCreatorUserIdFilter,
    changeSort,
    changeStatusFilter,
    findAllTasks
} from "../../actions/task-actions";
import { connect } from 'react-redux';
import { getAllUsers } from "../../actions/user-actions";
import { List, TableChart } from "@material-ui/icons";


const mapStateToProps = (state) => {
    return {
        ...state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeSort: (sort) => dispatch(changeSort(sort)),
        changeStatus: (status) => dispatch(changeStatusFilter(status)),
        changeAssignedUserId: (userId) => dispatch(changeAssignedUserIdFilter(userId)),
        changeCreatorUserId: (userId) => dispatch(changeCreatorUserIdFilter(userId)),
        fetchAllUsers: () => dispatch(getAllUsers()),
        getList: () => dispatch(findAllTasks())
    };
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
            background: '#636363',
            color: this.shouldApplicateCyanColor(value)
        };
    };

    handleTabChange = value => {
        this.setState({
            tabsIndex: value
        });
    };

    render() {
        const { fetchAllUsers, getList, changeSort, changeStatus, changeAssignedUserId, changeCreatorUserId } = this.props;
        return (
            <Card className="dashboard" style={{ maxWidth: '500px' }}>
                <SwipeableViews
                    index={this.state.tabsIndex}
                    onChangeIndex={this.handleTabChange}>
                    <TaskList
                        {...this.props.tasks}
                        users={this.props.user.list}
                        fetchUsers={fetchAllUsers}
                        getList={getList}
                        changeSort={changeSort}
                        changeStatus={changeStatus}
                        changeAssignedUserId={changeAssignedUserId}
                        changeCreatorUserId={changeCreatorUserId}
                    />
                    <Board/>
                </SwipeableViews>

                <Tabs
                    onChange={this.handleTabChange}
                    value={this.state.tabsIndex}
                    inkBarStyle={{ backgroundColor: cyan500 }}>
                    <Tab
                        style={this.tabStyle(0)}
                        icon={<List />}
                        label="List"
                        value={0}
                    />
                    <Tab
                        style={this.tabStyle(1)}
                        icon={<TableChart/>}
                        label="Board"
                        value={1}
                    />
                </Tabs>
            </Card>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
