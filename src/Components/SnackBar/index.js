import { Snackbar } from '@mui/material'
import React from 'react'

const SnackBar = (props) => {
  return (
    <>
<Snackbar
  open={props.open}
  autoHideDuration={6000}
//   onClose={handleClose}
  message={props.message}
//   action={action}
/>
    </>
  )
}

export default SnackBar