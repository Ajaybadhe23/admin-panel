import React from 'react'
import CustomDatePicker from '../../../components/datepicker'
import DropDown from '../../../components/select'
import {
    TextField,
    InputLabel,
    Grid,
    Box
} from '@material-ui/core';

function Filter({ search, handleSearchChange }) {
    const branches = ['Thane', 'Navi Mumbai', 'Mumbai', 'Kurla', 'Vile Parle', 'Lower Parel', 'Andheri', 'Byculla'];
    const types = ['Full', 'Short'];
    const statuses = ['Pending', 'Approved', 'Rejected'];

    return (
        <>
            <Grid item xs={9}>
                <Grid container spacing={3}>

                    <Grid item xs={12} sm={2}>
                        <Box>
                            <CustomDatePicker
                                value={search.from}
                                setValue={(e) => handleSearchChange('from', e)}
                                label="from"
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Box>
                            <CustomDatePicker
                                value={search.to}
                                setValue={(e) => handleSearchChange('to', e)}
                                label="to"
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <InputLabel>Branch</InputLabel>
                        <DropDown options={branches} value={search.branch} name="branch" handleSearchChange={handleSearchChange} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <InputLabel>Type</InputLabel>
                        <DropDown options={types} value={search.type} name="type" handleSearchChange={handleSearchChange} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <InputLabel>Status</InputLabel>
                        <DropDown options={statuses} value={search.status} name="status" handleSearchChange={handleSearchChange} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={3}>
                <Box style={{ display: "flex", justifyContent: "end " }}>
                    <TextField
                        label="ID"
                        value={search.id}
                        onChange={(e) => handleSearchChange('id', e.target.value)}
                    />

                </Box>
            </Grid></>
    )
}

export default Filter