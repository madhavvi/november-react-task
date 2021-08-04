import React from 'react';
import { Button, Grid, Link, Tab, Tabs } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import User from './User';
import Profile from './Profile';


function Account() {
    const history = useHistory();
    const [value, setValue] = React.useState('/account/user');

    const onClick = (label: any) => {
        // history.push(label);
    };

    return (
        <>
            <Grid item container lg={12} md={12} sm={12}>
                <Grid item>
                    <p>Welcome to our Account page</p>
                
                    <Grid item container lg={12} md={12} sm={12}>
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

                    {value === "/account/user" && <User />}
                    {value === "/account/profile" && <Profile />}


                    {/* <Button 
                        variant="contained"
                        size="small" 
                        color="default"
                    >
                        <Link onClick={() => history.push('/')}>
                            Back
                        </Link>
                    </Button> */}
                </Grid>
            </Grid>
        </>
    )
};

export default Account;