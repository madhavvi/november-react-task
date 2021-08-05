import React, { useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
// import axios from 'axios';
// import { login } from '../../Utils/login';
import './Login.css';
import { login } from '../../redux/login/loginActions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { selectUserState } from '../../redux/login/loginSelector';

interface StateFromProps { 
    usersData: ReturnType<typeof selectUserState>;
}

interface DispatchFromProps {
  login: typeof login;
}

interface OwnProps { }

type Props = StateFromProps & DispatchFromProps & OwnProps;

const Login: React.FC<Props> = ({
    login,
    usersData,
}) => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const history = useHistory();

    function validate(email: string) {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }

    const validateEmail = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (validate(e.target.value)) {
            setUserName(e.target.value);
            setErrorEmail(false);
        } else {
            setErrorEmail(true);
        }
    }

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!errorEmail && username && password) {
            
            login();
            history.push('/');
            
            // another way to fetch data
        //     axios.get(`http://localhost:3001/user`, {
        //         headers: {
        //             username: username, 
        //             password: password
        //         }
        //     })
        //     .then(res => {
        //         setUser(res.data);
        //     })
        //     .catch(err => {
        //         if (err.status === 401) {
                  
        //         }
        //     });
        }
        
    }

    return (
        <>
            <Grid item container lg={12} md={12} sm={12} className="login-container">
                <Grid item lg={12} md={12} sm={12}>
                    <div>
                        <h2 style={{ marginTop: 0}}>User Login</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <Grid item> 
                            <TextField 
                                className="input-box" 
                                type="text" 
                                label="Username" 
                                // onChange={e => setUserName(e.target.value)}
                                error={!!errorEmail}
                                helperText={errorEmail && "Invalid username"}
                                onChange={(e) => validateEmail(e)}
                                autoFocus 
                                required
                            />
                        </Grid>

                        <Grid item> 
                            <TextField 
                                className="input-box" 
                                type="password" 
                                label="Password" 
                                onChange={e => setPassword(e.target.value)} 
                                required
                            />
                        </Grid>
                        <Grid item style={{ padding: '15px 0 0 0'}}>
                            <Button 
                                variant="contained"
                                size="medium" 
                                color="primary"
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


function mapStateToProps(state: any): StateFromProps {
    return {
        usersData: selectUserState(state)
    };
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchFromProps => ({
    login: () => dispatch(login()),
});
  
export default connect<StateFromProps, DispatchFromProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)((Login));
  