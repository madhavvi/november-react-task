import React, { useContext } from 'react';
import { UserContext } from '../../Utils/UserContext';

function User() {
    const { user } = useContext(UserContext);

    return (
        <div style={{ margin: '0 auto', padding: 30}}>
            <div className="">
                <label>User email:</label>
                <span style={{ padding: '0 10px'}}>{user && user.user && user.user.username}</span>
            </div>
        </div>
    )
};

export default User;