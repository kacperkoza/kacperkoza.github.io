import React from 'react';
import { Card } from 'material-ui/Card';

export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className="task-list" style={{ maxWidth: '500px' }}>
                Tu będzie lista
            </Card>
        );
    }
}
