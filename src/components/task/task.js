import React from 'react';
import Typography from "@material-ui/core/Typography";
import {ArrowDownward, ArrowForward, ArrowUpward} from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import { grey500, orange500, red500 } from "material-ui/styles/colors";

class Task extends React.Component {

    getColor(priority) {
        switch (priority) {
            case 'LOW':
                return grey500;
            case 'MEDIUM':
                return orange500;
            case 'HIGH':
                return red500;
        }
    }

    getArrow(priority) {
        switch (priority) {
            case 'LOW':
                return (<ArrowDownward/>);
            case 'MEDIUM':
                return (<ArrowForward/>);
            case 'HIGH':
                return (<ArrowUpward/>);
        }
    }

    render() {
        console.log('task props ' + JSON.stringify(this.props.task));
        const { task } = this.props;
        return (
            <div style={{width: '100%', display: 'flex'}}>
                <div style={{width: '75%'}}>
                    <Typography
                        style={{ textAlign: 'left', 'font-weight': 'bold' }}
                        variant="h7"
                        gutterBottom>
                        {task.title}
                    </Typography>
                    <Typography
                        style={{ textAlign: 'left', marginLeft: '8px' }}
                        gutterBottom>
                        {task.description}
                    </Typography>
                </div>
                <div style={{margin: 'auto'}}>
                    <Grid container direction="row" alignItems="center">
                        <Grid item>
                            {this.getArrow(task.priority)}
                        </Grid>
                        <Grid item>
                            <Typography
                                style={{ marginLeft: '16px', color: this.getColor(task.priority)}}
                            >
                                {task.priority}
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>

        );
    }
}

export default Task;
