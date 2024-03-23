import { Autocomplete, TextField } from '@mui/material'
import React from 'react'


const SelectInputC = (props) => {
  return (
    <>
      <Autocomplete
        id="disable-close-on-select"
        disableCloseOnSelect
        options={props.options}
        sx={props.sx}
        renderInput={(params) => <TextField 
          onChange={props.onChange}
          value={props.value}
          placeholder={props.placeholder}
          name={props.name} 
          {...params} label={props.label} variant={props.variant} />}
      />
    </>
  )
}

export default SelectInputC