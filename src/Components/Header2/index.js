import React from 'react'
import ButtonC from '../../Components/ButtonC' 
import { Link } from 'react-router-dom'

const Header2 = () => {
  return (
    <>
    <header style={{backgroundColor: '#222'}} className="text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
          <h1 className='font-bold text-xl'>Daily gram</h1>
             
                <div className="flex justify-end items-end">
                  
                    <nav className="ml-80">
                        <ul className="flex space-x-10">
                            <li><a href="#" className="hover:text-gray-300">Home</a></li>
                            <li><a href="#" className="hover:text-gray-300">About</a></li>
                            <li><a href="#" className="hover:text-gray-300">Services</a></li>
                            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                        </ul>
                    </nav>
                </div>
              
                <div>
                    <Link to="/" className="bg-white text-blue-700 hover:bg-blue-500 hover:text-white px-4 py-1.5 rounded-md">Sign Up</Link>
                <Link to="/signin" className="bg-blue-500 hover:bg-white hover:text-blue-700 text-white px-4 py-1.5 rounded-md mx-2">Sign In</Link>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header2