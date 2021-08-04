import React, { useContext } from 'react';
import { Button, Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../Utils/UserContext';

function User() {
    const history = useHistory();
    const { user } = useContext(UserContext);

    return (
        <div>
            <div className="align-vertical-center">
                <label>User email:</label>
                <span>{user && user.user && user.user.username}</span>
                <Button 
                    variant="contained"
                    size="small" 
                    color="default"
                >
                    <Link onClick={() => history.goBack()}>
                        Back
                    </Link>
                </Button>
            </div>
        </div>
    )
};

export default User;