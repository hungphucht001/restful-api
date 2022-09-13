import React, { useState } from 'react';
import { Button, Fab, FormControl, FormHelperText, Input, InputLabel, Paper, TableRow, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import { styled as styledMui } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const StyledTableRow = styledMui(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const StyledTableCell = styledMui(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const ItemStudent = ({ row }) => {
    const [open, setOpen] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email, 'Password: ', password);
    }

    return (
        <StyledTableRow key={row.firstName}>
            <StyledTableCell component="th" scope="row">
                {row.firstName}
            </StyledTableCell>
            <StyledTableCell align="left">{row.lastName}</StyledTableCell>
            <StyledTableCell align="left">{row.email}</StyledTableCell>
            <StyledTableCell spacing={2}>
                <Stack justifyContent="flex-end" direction="row" spacing={2}>
                    <Fab size="medium" color="secondary" aria-label="edit" onClick={handleOpen}>
                        <EditIcon />
                    </Fab>
                    <Fab size="medium" color="error" aria-label="delete" onClick={handleClickOpen}>
                        <DeleteIcon />
                    </Fab>
                </Stack>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <form onSubmit={handleSubmit} >
                            <Stack spacing={1} sx={{ width: '100%' }}>
                                <TextField
                                    label="Outlined"
                                    value={email}
                                    onInput={e => setEmail(e.target.value)}
                                />
                                <TextField
                                    label="Outlined"
                                    value={password}
                                    onInput={e => setPassword(e.target.value)}
                                />
                                {/* <Typography /> */}
                                <Button
                                    variant="contained"
                                    size='large'
                                    type="submit"
                                >
                                    Login
                                </Button>
                            </Stack>
                        </form>
                    </Box>
                </Modal>
                <Dialog
                    open={openDialog}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" onClick={handleCloseDialog}>Cancel</Button>
                        <Button variant="contained" color="error" onClick={handleCloseDialog}>Delete</Button>
                    </DialogActions>
                </Dialog>
            </StyledTableCell>
        </StyledTableRow >
    );
};

export default ItemStudent;