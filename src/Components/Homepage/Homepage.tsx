/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Button, Grid, Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './Homepage.css';
import { useContext } from 'react';
import { UserContext } from '../../Utils/UserContext';
import AccountSelector from '../Account/AccountSelector';
import { useState } from 'react';
import { useEffect } from 'react';
import { selectUserState } from '../../redux/login/loginSelector';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface StateFromProps {
    usersData: ReturnType<typeof selectUserState>;
 }

interface DispatchFromProps { }

type Props = StateFromProps & DispatchFromProps;

const Homepage: React.FC<Props> = ({
    usersData,
}) => {
    const history = useHistory();
    const { user, setUser } = useContext(UserContext);
    const [openModal, setOpenModal] = useState(false);
    const [ currentuser, setCurrentuser] = useState('');

    const closeModal = () => {
        setOpenModal(!openModal);
    }

    useEffect(() => {
        let crtuser = localStorage.getItem('profile'); 
        setCurrentuser(crtuser as string);
    }, []);
    
    useEffect(() => {
        setOpenModal(true);
        setUser(usersData.user);
        localStorage.setItem('email', usersData?.user?.user?.username); 
    }, [usersData])

    return (
        <>
            <Grid item container lg={12} md={12} sm={12} className="homepage-container">
                <Grid item>
                    {!(user?.user?.username) && !currentuser ? (
                        <>
                            <h2>Welcome to our portal</h2>
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
                            <h2>Welcome back {currentuser}</h2>
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
            {(user?.profiles?.length > 1) && openModal && !currentuser && (
                <AccountSelector open closeModal={closeModal} setCurrentuser={setCurrentuser} />
            )}
        </>
    )
};

function mapStateToProps(state: any): StateFromProps {
    return {
        usersData: selectUserState(state)
    };
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchFromProps => ({
});
  
export default connect<StateFromProps, DispatchFromProps>(
    mapStateToProps,
    mapDispatchToProps,
)(React.memo(Homepage));
  