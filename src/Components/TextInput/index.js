import React from 'react'
import { TextField } from '@mui/material'

const TextInput = (props) => {
  return (
    <div>
     <TextField id="outlined-basic"
     placeholder={props.placeholder}
     label={props.label}
     variant={props.variant} 
     type={props.type} 
     style={props.style}
     onChange={props.onChange}
     value={props.value}
     name={props.name}
     />
    
    </div>
  )
}

export default TextInput