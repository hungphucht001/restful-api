import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Button } from '@mui/material';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const DialogCustom = ({ openDialog, onCloseDialog, label }) => {
    return (
        <Dialog
            open={openDialog}
            TransitionComponent={Transition}
            keepMounted
            onClose={onCloseDialog}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Notification"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {label}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={onCloseDialog}>Cancel</Button>
                <Button variant="contained" color="error" onClick={onCloseDialog}>Delete</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DialogCustom
