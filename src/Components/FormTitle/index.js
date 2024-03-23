import React from 'react'

const FormTitle = (props) => {
  return (
    <>
      <div className={props.className}>
        {props.label}
      </div>
    </>
  )
}

export default FormTitle