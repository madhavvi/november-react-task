import React, { useContext } from 'react';
import { Button, Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { ProfileContext } from '../../Utils/UserContext';

function Profile() {
    const history = useHistory();
    const { profile } = useContext(ProfileContext);

    return (
        <div>
            <div className="align-vertical-center">
                <label>Profile Name:</label>
                <span>{profile && profile.name}</span>

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

export default Profile;