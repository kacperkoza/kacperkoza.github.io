import React from 'react';
import Typography from "@material-ui/core/Typography";

class Task extends React.Component {

    constructor(props) {
        super(props);
    }

    statusText = status => {
        switch (status) {
            case 'TODO':
                return 'TO DO';
            case 'IN_PROGRESS':
                return 'IN PROGRESS';
            case 'DONE':
                return 'DONE';
        }
    };


    render() {
        console.log('task props ' + JSON.stringify(this.props.task));
        const { task } = this.props;
        return (
            <div style={{width: '100%', display: 'flex'}}>
                <div style={{width: '80%'}}>
                    <Typography
                        style={{ textAlign: 'left' }}
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
                <div style={{width: '20%'}}>
                    <Typography
                        style={{ textAlign: 'right', marginLeft: '8px' }}
                        gutterBottom>
                        {task.priority}
                    </Typography>
                </div>
            </div>

        );
    }
}

export default Task;
