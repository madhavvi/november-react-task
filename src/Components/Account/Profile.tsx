import React, { useContext } from 'react';
import { ProfileContext } from '../../Utils/UserContext';

function Profile() {
    const { profile } = useContext(ProfileContext);

    return (
        <div style={{ margin: '0 auto', padding: 30}}>
            <div >
                <label>Profile name:</label>
                <span style={{ padding: '0 10px'}}>{profile && profile.name}</span>
            </div>
        </div>
    )
};

export default Profile;