import React from 'react';
import { CardText, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import { getAllUsers } from "../../actions/user-actions";
import { submitNewTask } from "../../actions/task-crud-actions";

const Priority = {
    low: 'LOW',
    medium: 'MEDIUM',
    high: 'HIGH'
};

const mapStateToProps = ({ taskAdd, user }) => {
    return {
        users: user.list,
        isFetching: taskAdd.isFetching
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllUsers: () => dispatch(getAllUsers()),
        onSubmitTask: (body) => dispatch(submitNewTask(body))
    };
};

class NewTask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            priority: Priority.medium,
            assignedUserId: null,
            validate: false
        };
        this.emptyTitle = '';
        this.emptyDescription = '';
    }

    componentDidMount() {
        this.props.fetchAllUsers();
    }

    isFormValid = () => {
        this.setState({
            validate: false
        });
        this.emptyTitle = '';
        if (this.state.title.length === 0) {
            this.emptyTitle = 'Title cannot be empty';
            return false;
        }
        if (this.state.description.length === 0) {
            this.emptyDescription = 'Description cannot be empty';
            return false;
        }
        return true;
    };

    submitForm = e => {
        e.preventDefault();
        if (this.isFormValid()) this.props.onSubmitTask(this.state);
    };

    render() {
        const { isFetching} = this.props;
        return (
            <div>
                <CardTitle
                    title={<span>New task</span>}
                    style={{ paddingBottom: '0' }}
                />
                <CardText style={{ display: 'flex', flexDirection: 'column' }}>
                    <form onSubmit={e => this.submitForm(e)}>
                        <TextField
                            hintText="Title"
                            floatingLabelText="Title"
                            type="text"
                            fullWidth
                            required
                            errorText={
                                this.state.validate && this.emptyTitle
                            }
                            onChange={e => this.setState({ title: e.target.value })}
                        />
                        <TextField
                            hintText="Description"
                            floatingLabelText="Description"
                            type="text"
                            fullWidth
                            multiLine
                            errorText={
                                this.state.validate && this.emptyDescription
                            }
                            onChange={e =>
                                this.setState({
                                    description: e.target.value
                                })}
                            required
                        />
                        <FormControl fullWidth>
                            <InputLabel>Priority</InputLabel>
                            <Select
                                value={this.state.priority}
                                onChange={e => this.setState({ priority: e.target.value })}
                            >
                                <MenuItem value={Priority.low}>Low</MenuItem>
                                <MenuItem value={Priority.medium}>Medium</MenuItem>
                                <MenuItem value={Priority.high}>High</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel>Assigned user</InputLabel>
                            <Select
                                value={this.state.assignedUserId ? this.state.assignedUserId : ''}
                                onChange={e => this.setState({ assignedUserId: e.target.value })}
                            >
                                {this.props.users.map(user => <MenuItem key={user.email} value={user.email}>{user.name} {user.surname}</MenuItem>)}
                            </Select>
                        </FormControl>
                        <RaisedButton
                            label="Add"
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

export default connect(mapStateToProps, mapDispatchToProps)(NewTask);
