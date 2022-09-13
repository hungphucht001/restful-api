import React from 'react';
import { styled as styledMui } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import ItemStudent from '../../components/Students/ItemStudent';

const StyledTableCell = styledMui(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));



function createData(firstName, lastName, email, action) {
    return { firstName, lastName, email, action };
}

const rows = [
    createData('Frozen yoghurt21', 159, 6.0, 24),
    createData('Frozen yoghurt31qư2', 159, 6.0, 24),
    createData('Frozen yoghurt3qư1e22', 159, 6.0, 24),
    createData('Frozen yoghurt31dqwce22', 159, 6.0, 24),
    createData('Frozen yoghurt31f1qd2', 159, 6.0, 24),
    createData('Frozen yoghurt32qưdz1', 159, 6.0, 24),
];

const Wrapper = styled.div`
    max-width: 1000px;
    margin: 50px auto;
`

const StudentManagement = () => {
    return (
        <Wrapper>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Student First Name</StyledTableCell>
                            <StyledTableCell align="left">Student Last Name</StyledTableCell>
                            <StyledTableCell align="left">Student Email</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <ItemStudent row={row} key={index} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Wrapper >
    );
};

export default StudentManagement;