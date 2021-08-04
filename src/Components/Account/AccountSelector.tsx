import React, { useContext } from 'react';
import {
    Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem, ListItemText, makeStyles
} from '@material-ui/core';
import { ProfileContext, UserContext } from '../../Utils/UserContext';
import { deepPurple } from '@material-ui/core/colors';

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

function AccountSelector (props: any){
    const classes = useStyles();
    const { user } = useContext(UserContext);
    const { setProfile } = useContext(ProfileContext);
    const profiles = user && user.profiles;

    return (
        <>
            <Dialog open={props.open} fullWidth maxWidth="sm" className="dialog-container">
                <DialogTitle >
                    <span className={classes.dialogTitle}>
                        Select Account
                    </span>
                </DialogTitle>
                <DialogContent style={{ padding: '0' }}>
                    <List>
                        {profiles.map(obj => (
                            <ListItem key={obj.id} className={classes.listItem} onClick={() => {
                                props.setCurrentuser(obj.name);
                                props.closeModal();
                                setProfile(obj);
                            }}>
                                <Avatar className={classes.purple}>{obj.name.substring(0, 1)}</Avatar>
                                <ListItemText primary={obj.name} />
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
                <DialogActions style={{ padding: '24px 24px' }}>
                    <Button size="small" color="primary" onClick={props.closeModal} className="confirm-btn">
                        CLOSE
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default AccountSelector;