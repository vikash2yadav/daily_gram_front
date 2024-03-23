import { Button } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 0.5,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

const FileUploader = (props) => {
  return (
    <>
    <Button
    style={props.style}
  component="label"
  role={undefined}
  variant={props.variant}
  tartIcon={<CloudUploadIcon />}
>
  {props.label}
  <VisuallyHiddenInput type="file" />
</Button>
    </>
  )
}

export default FileUploader