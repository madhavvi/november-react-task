import React from 'react';
import { Button, Grid, Link, Tab, Tabs } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import User from './User';
import Profile from './Profile';
import './Account.css';


function Account() {
    const history = useHistory();
    const [value, setValue] = React.useState('/account/user');

    const onClick = (label: any) => {
        // history.push(label);    // this is to redirect to user or profile page but that will not show the tabs
    };

    return (
        <>
            <Grid item container lg={12} md={12} sm={12} className="account-container">
                <Grid item>
                    <h2>Account page</h2>
                    <Grid item container lg={12} md={12} sm={12}>
                        <Grid item style={{ margin: '0 auto'}}>
                            <Tabs
                                value={value}
                                onChange={(e, v) => {
                                    setValue(v);
                                }}
                            >                      
                                <Tab label="User" value="/account/user" onClick={() => onClick("/account/user")} />
                                <Tab label="Profile" value="/account/profile" onClick={() => onClick("/account/profile")} />
                            </Tabs>
                        </Grid>
                        <Grid item container lg={12} md={12} sm={12} style={{ margin: '0 auto', padding: 30}}>
                            {value === "/account/user" && <User />}
                            {value === "/account/profile" && <Profile />}
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Button 
                            variant="contained"
                            size="small" 
                            color="default"
                        >
                            <Link onClick={() => history.push('/')}>
                                Back
                            </Link>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
};

export default Account;