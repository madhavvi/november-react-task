import React, { useState, useContext } from 'react';
import { Button, Grid, Input } from '@material-ui/core';
import { useHistory, withRouter } from 'react-router-dom';
// import axios from 'axios';
import { login } from '../../Utils/login';
import { UserContext } from '../../Utils/UserContext';


function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    // const [userData, setUserData] = useState();
    const history = useHistory();
    const { setUser } = useContext(UserContext);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // axios.get(`http://localhost:3001/user`, {
        //     headers: {
        //         username: username, 
        //         password: password
        //     }
        // })
        // .then(res => {
        //     console.log('res : ', res.data.profiles);
        //     setUserData(res.data.profiles);
        //     // history.push('/');
        // })
        // .catch(err => {
        //     console.log('Login error: ', err);
        //     if (err.status === 401) {
              
        //     }
        // });
        
        const response = await login();
        console.log('response : ', response);
        setUser(response.user);
        history.push('/');
    }

    return (
        <>
            <Grid item container lg={12} md={12} sm={12}>
                <Grid item lg={12} md={12} sm={12}>
                    <form onSubmit={handleSubmit}>
                        <Grid item > 
                            <label>
                                <p>Username</p>
                                <Input type="text" name="username" autoFocus onChange={e => setUserName(e.target.value)} />
                            </label>
                        </Grid>

                        <Grid item > 
                            <label>
                                <p>Password</p>
                                <Input type="password" name="password" onChange={e => setPassword(e.target.value)} />
                            </label>
                        </Grid>
                        <Grid item >
                        <Button 
                                variant="contained"
                                size="small" 
                                color="default"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </>
    )
};

export default withRouter(Login);