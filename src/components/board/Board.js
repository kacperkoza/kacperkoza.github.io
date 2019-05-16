import React from 'react';
import { Card } from 'material-ui/Card';

export default class Board extends React.Component {

    render() {
        return (
            <Card className="board" style={{ maxWidth: '500px' }}>
                Tu będzie tablica
            </Card>
        );
    }
}

