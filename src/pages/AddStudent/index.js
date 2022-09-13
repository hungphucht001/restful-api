import { Box, Button, Stack, TextField } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { useForm } from "react-hook-form";

const Wrapper = styled.div`
    max-width: 1000px;
    margin: 50px auto;
`
const WrapForm = styled.div`
    padding: 20px;
    margin-top: 20px;
`
const Header = styled.div`
    background-color: #000;
    color: #fff;
    padding: 20px;
`
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 1,
    overflow: 'hidden'
};

function AddStudent() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Wrapper>
            <Box sx={style}>
                <Header>
                    Create Student
                </Header>
                <WrapForm>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={4} sx={{ width: '100%' }}>
                            <TextField label="First Name" {...register("firstName", { required: true })} />
                            <TextField label="Last Name" {...register("lastName", { required: true })} />
                            <TextField label="Email" {...register("email", { required: true })} />
                            <Stack justifyContent="flex-end" direction="row" spacing={2}>
                                <Button
                                    size="large" color="secondary"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    variant="contained"
                                    size='large'
                                    type="submit"
                                >
                                    Create
                                </Button>
                            </Stack>
                        </Stack>
                    </form>
                </WrapForm>
            </Box>
        </Wrapper>
    )
}

export default AddStudent
