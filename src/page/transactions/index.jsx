import React, { useState } from 'react';
import {
    Button,
    Grid,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { initialData } from '../../constants';
import Form from './components/form';
import TableList from './components/table';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
    tableContainer: {
        marginBottom: theme.spacing(2),
    },
}));


const Transaction = () => {
    const classes = useStyles();
    const [error, setError] = useState('')
    const [data, setData] = useState(initialData);
    const [filterData, setFilterData] = useState(initialData)
    const [search, setSearch] = useState({
        id: '',
        from: null,
        to: null,
        branch: '',
        type: '',
        status: '',
    });
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const handleSearchChange = (field, value) => {
        const data = { ...search, [field]: value }
        setSearch(data);
        filterHandler(data)
    };

    // filter Handler
    const filterHandler = (payload) => {
        if (payload.to && payload.from) {
            if (payload.to < payload.from) {
                setError("Please enter valid Start and end Date")
                return
            }
        }

        let filterArray = data;
        if (payload.id) {
            filterArray = filterArray.filter((e) => e.id.toString().includes(payload.id))
        }
        if (payload.branch) {
            filterArray = filterArray.filter((e) => e.branch === payload.branch)
        }
        if (payload.type) {
            filterArray = filterArray.filter((e) => e.type === payload.type)
        }
        if (payload.status) {
            filterArray = filterArray.filter((e) => e.status === payload.status)
        }
        if (payload.to) {
            filterArray = filterArray.filter((e) => new Date(e.to) <= payload.to)
        }
        if (payload.from) {
            filterArray = filterArray.filter((e) => new Date(e.date) >= payload.from)
        }
        setFilterData(filterArray)
        setError('')
    }

    // delete handler
    const handleDeleteRow = (rowId) => {
        setOpenDeleteDialog(true);
        setSelectedRow(rowId);
    };
    const handleConfirmDelete = () => {
        const updatedData = data.filter((row) => row.id !== selectedRow)
        const UpdatedFilterdData = filterData.filter((row) => row.id !== selectedRow)
        setData(updatedData);
        setFilterData(UpdatedFilterdData);
        setOpenDeleteDialog(false);
    };
    const handleCancelDelete = () => {
        setOpenDeleteDialog(false);
        setSelectedRow(null);
    };

    // 
    return (
        <div className={classes.root}>
            <div style={{ marginBottom: 20 }} >Total ({data.length}) </div>
            <Grid container spacing={2}>
                {/* Search filters */}
                <Form search={search} handleSearchChange={handleSearchChange} />
                {error}

                {/* table */}
                <Grid item xs={12} className={classes.tableContainer}>
                    <TableList filterData={filterData} handleDeleteRow={handleDeleteRow} />
                </Grid>
            </Grid>

            {/* Delete confirmation dialog */}
            <Dialog open={openDeleteDialog} onClose={handleCancelDelete}>
                <DialogTitle>Delete</DialogTitle>
                <DialogContent>
                    <Typography>Are you sure you want to delete this Record?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelDelete} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmDelete} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Transaction;

