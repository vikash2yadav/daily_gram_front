import { Button } from '@mui/material'
import React from 'react'

const ButtonC = (props) => {
  return (
    <>
      <Button
        className={props.className}
        variant={props.variant}
        style={props.style}
        onClick={props.onClick}
        type={props.type}
      >
        {props.label}
      </Button>
    </>
  )
}

export default ButtonC