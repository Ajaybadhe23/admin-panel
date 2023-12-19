import { MenuItem, Select } from '@material-ui/core'
import React from 'react'

function DropDown({ value, handleSearchChange, options = [], name }) {
    return (
        <Select
            style={{ width: "90%" }}
            value={value}
            onChange={(e) => handleSearchChange(name, e.target.value)}
        >
            {options?.map((option) => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
        </Select>
    )
}

export default DropDown