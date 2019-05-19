import React from 'react';
import { Card } from 'material-ui/Card';
import { fetchAllUsers } from "../../api/user-api";

class Board extends React.Component {



    render() {
        return (
            <Card className="board" style={{ maxWidth: '500px' }}>
                <div>
                    Tu bedzie tablica
                </div>
            </Card>
        );
    }
}

export default Board;

