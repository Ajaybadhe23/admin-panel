import React, { useState } from 'react'
import { headCells } from '../../../constants'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    TableSortLabel,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';

function TableList({ filterData, orderBy, handleDeleteRow }) {
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortedData = [...filterData].sort((a, b) => {
        if (sortConfig.direction === 'asc') {
            return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
        }
        if (sortConfig.direction === 'desc') {
            return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
        }
        return 0;
    });
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {
                            headCells.map((item) => (
                                <TableCell key={item.id}>
                                    <TableSortLabel
                                        active={orderBy === item.id}
                                        direction={sortConfig.key === item.id ? sortConfig.direction : 'asc'}
                                        onClick={() => handleSort(item.id)}
                                    >
                                        <b>{item.label}</b>
                                    </TableSortLabel>
                                </TableCell>
                            ))
                        }
                        <TableCell>Status</TableCell>
                    </TableRow>

                </TableHead>
                <TableBody>
                    {
                        sortedData.length === 0 ? <p style={{ textAlign: 'center' }}>No Data Found</p> :
                            sortedData.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell><b>{row.id}</b></TableCell>
                                    <TableCell>{moment(row.date).format('DD-MM-yyyy')}</TableCell>
                                    <TableCell>{moment(row.to).format('DD-MM-yyyy')}</TableCell>
                                    <TableCell>{row.branch}</TableCell>
                                    <TableCell>{row.type}</TableCell>
                                    <TableCell>{row.amount}</TableCell>
                                    <TableCell>{row.bank}</TableCell>
                                    <TableCell>{row.requestBy}
                                        <br />
                                        <b>{row.userId}</b>
                                    </TableCell>
                                    {/* Add other table cells based on wireframe */}
                                    <TableCell>
                                        {row.status}
                                        <IconButton onClick={() => handleDeleteRow(row.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableList