import React from 'react'

const ImageBox = (props) => {
  return (
    <>
    <img src={props.src} alt={props.alt} height={props.height} width={props.width}/>
    </>
  )
}

export default ImageBox