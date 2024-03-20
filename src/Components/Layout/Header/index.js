import React from 'react'
import TextInput from '../../TextInput'

const Header = () => {
  return (
    <>
        <div className='flex justify-center align-center mt-20'>
          <div className='p-5 bg-blue-100 w-100 '>
    <TextInput/>
    <TextInput/>
    <TextInput/>
          </div>
    </div>
    </>
  )
}

export default Header