
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"


import React from 'react'
import moment from "moment";

function CustomDatePicker({
    className,
    value,
    setValue,
    label
}) {
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
                className={className}
                value={moment(value)}
                sx={{ width: "90%" }}
                onChange={(value) => setValue(new Date(value))}
                format="DD-MM-YYYY"
                label={label}
            />
        </LocalizationProvider>
    )
}

export default CustomDatePicker
