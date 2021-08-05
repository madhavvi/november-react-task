import React, { useContext } from 'react';
import {
    Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem, ListItemText, makeStyles
} from '@material-ui/core';
import { ProfileContext } from '../../Utils/UserContext';
import { deepPurple } from '@material-ui/core/colors';
import { selectUserState } from '../../redux/login/loginSelector';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Profile } from '../../Utils/models';

const useStyles = makeStyles((theme) => ({
    dialogTitle: {
        fontSize: '1.7rem !important'
    },
    listItem: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
        borderBottom: '1px solid #80808066',
        padding: 15,
        cursor: 'pointer'
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
}));


interface StateFromProps {
    usersData: ReturnType<typeof selectUserState>;
 }

interface DispatchFromProps { } 

interface OwnProps {
    open: boolean;
    closeModal: () => void;
    setCurrentuser: any;
 }

type Props = StateFromProps & DispatchFromProps & OwnProps;

const AccountSelector: React.FC<Props> = ({
    usersData,
    open,
    closeModal,
    setCurrentuser,
}) => {

// function AccountSelector (props: any){
    const classes = useStyles();
    const { profile, setProfile } = useContext(ProfileContext);
    const profiles = usersData && usersData.user && usersData.user.profiles;

    const closemodal = () => {
        if (profile) {
            closeModal();
        } else {
            alert('Select account');
        }
    }

    return (
        <>
            <Dialog open={open} fullWidth maxWidth="sm">
                <DialogTitle >
                    <span className={classes.dialogTitle}>
                        Select Account
                    </span>
                </DialogTitle>
                <DialogContent style={{ padding: '0' }}>
                    <List>
                        {profiles.map((obj: Profile) => (
                            <ListItem key={obj.id} className={classes.listItem} onClick={() => {
                                setCurrentuser(obj?.name);
                                localStorage.setItem('profile', obj?.name);
                                closeModal();
                                setProfile(obj);
                            }}>
                                <Avatar className={classes.purple}>{obj.name.substring(0, 1)}</Avatar>
                                <ListItemText primary={obj.name} />
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
                <DialogActions style={{ padding: '24px 24px' }}>
                    <Button size="small" color="primary" onClick={closemodal} className="confirm-btn">
                        CLOSE
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}


function mapStateToProps(state: any): StateFromProps {
    return {
        usersData: selectUserState(state)
    };
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchFromProps => ({
});
  
export default connect<StateFromProps, DispatchFromProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)((AccountSelector));
  