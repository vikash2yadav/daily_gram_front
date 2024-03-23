import React from 'react'
import { Link } from 'react-router-dom'
import './header.css';

const Header = (props) => {
  return (
    <>
      <div className='h-10 flex justify-end align-center '>
        <div className='px-2 '><Link className='signup'>Sign Up</Link></div>
        <div className='px-2'><Link>Sign In</Link></div>
      </div>

    </>
  )
}

export default Header