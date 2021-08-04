import React from 'react';
import { Button, Grid, Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './Homepage.css';
import { useContext } from 'react';
import { UserContext } from '../../Utils/UserContext';
import AccountSelector from '../Account/AccountSelector';
import { useState } from 'react';
import { useEffect } from 'react';

function Homepage() {
    const history = useHistory();
    const { user } = useContext(UserContext);
    const [openModal, setOpenModal] = useState(false);
    const [ currentuser, setCurrentuser] = useState();
    let userData = user && user.user;

    const closeModal = () => {
        setOpenModal(!openModal);
    }
    
    useEffect(()=>{
        setOpenModal(true);
    }, [user])

    return (
        <>
            <Grid item container lg={12} md={12} sm={12} className="homepage-container">
                <Grid item>
                    {!(userData && userData.username) ? (
                        <>
                            <p>Welcome to our portal</p>
                            <Button 
                                variant="contained"
                                size="small" 
                                color="default"
                            >
                                <Link onClick={() => history.push('/login')}>
                                    Please go to Login
                                </Link>
                            </Button>
                        </>
                    ) : (
                        <>
                            <p>Welcome back {currentuser}</p>
                            <Button 
                                variant="contained"
                                size="small" 
                                color="default"
                            >
                                <Link onClick={() => history.push('/account')}>
                                    My Account
                                </Link>
                            </Button>
                        </>
                    )}
                </Grid>
            </Grid>
            {/* To select user profiles */}
            {(user && user.profiles.length > 1) && openModal && !currentuser && (
                <AccountSelector open closeModal={closeModal} setCurrentuser={setCurrentuser} />
            )}
        </>
    )
};

export default React.memo(Homepage);