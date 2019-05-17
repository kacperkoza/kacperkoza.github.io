import React from 'react';
import { Card } from 'material-ui/Card';
import { findAll } from "../../api/user-api";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { getList } from "../../api/task-api";
import { List } from "@material-ui/core";
import { ListItem } from "material-ui";
import Task from "../task/task";

const Sorts = [
    {
        text: 'Newest first',
        value: 'CREATED_DESC'
    },
    {
        text: 'Oldest first',
        value: 'CREATED_ASC'
    },
    {
        text: 'Last modified',
        value: 'LAST_MODIFIED_DESC'
    },
    {
        text: 'Oldest modified',
        value: 'LAST_MODIFIED_ASC'
    }
];

const AssignedUserFilter = [
    {
        text: 'All users',
        value: null
    },
    {
        text: 'Unassigned',
        value: 'UNASSIGNED'
    }
];

const StatusFilter = [
    {
        text: 'All',
        value: null
    },
    {
        text: 'To do',
        value: 'TODO'
    },
    {
        text: 'In progress',
        value: 'IN_PROGRESS'
    },
    {
        text: 'Done',
        value: 'DONE'
    },
];

class TaskList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sort: Sorts[0].value,
            taskStatusFilter: StatusFilter[0].value,
            assignedUserIdFilter: AssignedUserFilter[0].value,
            taskCreatorFilter: AssignedUserFilter[0].value,
            users: [],
            tasks: [],
        }
    }

    componentDidMount() {
        this.updateUsers();
        this.updateList();
    }

    updateList() {
        const { sort, taskStatusFilter, assignedUserIdFilter, taskCreatorFilter} = this.state;
        getList(sort, assignedUserIdFilter, taskCreatorFilter, taskStatusFilter)
            .then(data => data.json())
            .then(body => {
                console.log('got tasks = ' + JSON.stringify(body));
                this.setState({
                    tasks: body.tasks,
                    currentCount: body.currentCount,
                    totalAvailable: body.totalAvailable
                })
            })
    }

    updateUsers() {
        findAll()
            .then(data => data.json())
            .then(body => {
                    console.log('got users = ' + JSON.stringify(body));
                    this.setState({
                        users: body.users
                    });
                }
            );
    }

    changeSort = value => {
        console.log(`New filter = ${value}`);
        this.setState({ sort: value });
        this.updateList();
    };

    assignedUserIdFilter = value => {
        console.log(`New assigned user = ${value}`);
        this.setState({ assignedUserIdFilter: value });
        this.updateList();
    };

    taskStatusFilter = value => {
        console.log(`New task status filter = ${value}`);
        this.setState({ taskStatusFilter: value });
        this.updateList();
    };

    taskCreatorFilter = value => {
        console.log(`New task status filter = ${value}`);
        this.setState({ taskCreatorFilter: value });
        this.updateList();
    };

    render() {
        console.log(this.state);
        const { sort, assignedUserIdFilter, taskStatusFilter, taskCreatorFilter, users, tasks } = this.state;
        const usersFilter = users.map(user => {
            return {
                text: `${user.name} ${user.surname}`, value: user.email, key: user.email
            }
        });
        const assignedFilter = [...AssignedUserFilter, ...usersFilter];
        const taskCreatorFilters = [AssignedUserFilter[0], ...usersFilter];
        return (
            <div>
                <Card className="task-sort" style={{ maxWidth: '500px' }}>
                    <FormControl style={{ width: '45%', margin: '8px' }}>
                        <InputLabel htmlFor="age-simple">Sorting</InputLabel>
                        <Select
                            value={sort}
                            onChange={event => this.changeSort(event.target.value)}>
                            {Sorts.map(sort =>
                                <MenuItem key={sort.value} value={sort.value}>{sort.text}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <FormControl style={{ width: '45%', margin: '8px' }}>
                        <InputLabel>Task status</InputLabel>
                        <Select
                            value={taskStatusFilter}
                            onChange={event => this.taskStatusFilter(event.target.value)}>
                            {StatusFilter.map(userFilter =>
                                <MenuItem key={userFilter.value}
                                          value={userFilter.value}>{userFilter.text}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <FormControl style={{ width: '45%', margin: '8px' }}>
                        <InputLabel>Assigned user</InputLabel>
                        <Select
                            value={assignedUserIdFilter}
                            onChange={event => this.assignedUserIdFilter(event.target.value)}>
                            {assignedFilter.map(userFilter =>
                                <MenuItem key={userFilter.value}
                                          value={userFilter.value}>{userFilter.text}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <FormControl style={{ width: '45%', margin: '8px' }}>
                        <InputLabel>Task creator</InputLabel>
                        <Select
                            value={taskCreatorFilter}
                            onChange={event => this.taskCreatorFilter(event.target.value)}>
                            {taskCreatorFilters.map(taskCreator =>
                                <MenuItem key={taskCreator.value}
                                          value={taskCreator.value}>{taskCreator.text}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </Card>
                <Card className="task-list" style={{ maxWidth: '500px' }}>
                    <List>
                        {tasks.map(task => <ListItem key={task.taskId}><Task task={task}/></ListItem>)}
                    </List>
                </Card>
            </div>

        );
    }
}

export default TaskList;
