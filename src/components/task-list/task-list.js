import React from 'react';
import { Card } from 'material-ui/Card';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { List } from "@material-ui/core";
import { ListItem } from "material-ui";
import Task from "../task/task";

class TaskList extends React.Component {

    constructor(props) {
        super(props);
        props.getList();
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    getUserFilters() {
        return this.props.users.map(({email, name, surname}) => ({ value: email, text: `${name} ${surname}`}));
    }

    render() {
        const tasks = this.props.list;
        const users = this.getUserFilters();
        const assigedUserFilter = [...AssignedUserFilter, ...users];
        const creatorUserFilter = [AssignedUserFilter[0], ...users];
        const { sort, assignedUserId, creatorUserId, status } = this.props.taskOptions;
        const { changeSort, changeStatus, changeAssignedUserId, changeCreatorUserId }  = this.props;
        return (
            <div>
                <Card className="task-sort" style={{ maxWidth: '500px' }}>
                    <FormControl style={{ width: '45%', margin: '8px' }}>
                        <InputLabel htmlFor="age-simple">Sorting</InputLabel>
                        <Select
                            value={sort}
                            onChange={event => changeSort(event.target.value)}>
                            {Sorts.map(sort =>
                                <MenuItem key={sort.value} value={sort.value}>{sort.text}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <FormControl style={{ width: '45%', margin: '8px' }}>
                        <InputLabel>Task status</InputLabel>
                        <Select
                            value={status}
                            onChange={event => changeStatus(event.target.value)}>
                            {StatusFilter.map(userFilter =>
                                <MenuItem key={userFilter.value}
                                          value={userFilter.value}>{userFilter.text}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <FormControl style={{ width: '45%', margin: '8px' }}>
                        <InputLabel>Assigned user</InputLabel>
                        <Select
                            value={assignedUserId}
                            onChange={event => changeAssignedUserId(event.target.value)}>
                            {assigedUserFilter.map(userFilter =>
                                <MenuItem key={userFilter.value}
                                          value={userFilter.value}>{userFilter.text}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <FormControl style={{ width: '45%', margin: '8px' }}>
                        <InputLabel>Task creator</InputLabel>
                        <Select
                            value={creatorUserId}
                            onChange={event => changeCreatorUserId(event.target.value)}>
                            {creatorUserFilter.map(taskCreator =>
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

export const Sorts = [
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

export const AssignedUserFilter = [
    {
        text: 'All users',
        value: 'ALL'
    },
    {
        text: 'Unassigned',
        value: 'UNASSIGNED'
    }
];

export const StatusFilter = [
    {
        text: 'All',
        value: 'ALL'
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
