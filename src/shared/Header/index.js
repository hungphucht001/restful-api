import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
import { Stack } from '@mui/system';
import styled from 'styled-components'
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate, useLocation } from 'react-router-dom';
import DialogCustom from '../../components/DialogCustom';
const Wrapper = styled.div`
    background-color: #000;
    padding: 20px 50px;
    color: #fff;
    h2{
        padding: 0;
        margin: 0;
    }
`

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Header = () => {

    const navigate = useNavigate()
    const localtion = useLocation()
    const [openDialog, setOpenDialog] = useState(false);
    const handleClickOpen = () => {
        setOpenDialog(true);
    };
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <Wrapper>
            <Stack justifyContent="space-between" direction="row" spacing={2}>
                <h2>Student Management System</h2>
                {
                    localtion.pathname.split("/")[1] !== 'add-student'
                    &&
                    <Stack justifyContent="space-between" direction="row" spacing={2}>
                        <Button
                            startIcon={<DeleteIcon />}
                            onClick={handleClickOpen}
                            variant="contained"
                            color="error"
                            size="large">
                            Delete All
                        </Button>
                        <Button
                            startIcon={<AddIcon />}
                            onClick={() => navigate("/add-student")}
                            variant="contained"
                            size="large">
                            Add Student
                        </Button>
                    </Stack>
                }
                <DialogCustom
                    openDialog={openDialog}
                    onCloseDialog={handleCloseDialog}
                    label={`Delete All Student`} />
            </Stack>
        </Wrapper>
    );
};

export default Header;