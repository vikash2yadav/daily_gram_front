import React from 'react'
import ButtonC from '../../Components/ButtonC' 
import { Link } from 'react-router-dom'

const Header2 = () => {
  return (
    <>
    <header style={{backgroundColor: "#222"}} className="text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
          <h1 className='font-bold text-xl'>Daily gram</h1>
             
                <div className="flex justify-end items-end">
                  
                    <nav className="ml-80">
                        <ul className="flex space-x-10">
                            <li><a href="#" className="hover:text-gray-500">Home</a></li>
                            <li><a href="#" className="hover:text-gray-500">About</a></li>
                            <li><a href="#" className="hover:text-gray-500">Services</a></li>
                            <li><a href="#" className="hover:text-gray-500">Contact</a></li>
                        </ul>
                    </nav>
                </div>
              
                <div>
                    <Link to="/" style={{ border: "1px solid blue", borderRadius: '20px' }} className="text-blue-700 hover:bg-blue-500 hover:text-white px-4 py-1.5 rounded-md">Sign Up</Link>
                <Link to="/signin" style={{ border: "1px solid blue", borderRadius: '20px' }} className="bg-blue-500 hover:bg-white hover:text-blue-700 text-white px-4 py-1.5 rounded-md mx-2">Sign In</Link>
                </div>
            </div>
        </header>
    </>
  )
}


const styles = {
    bg: {
        // backgroundColor: '#444',
      boxShadow: '0 8px 6px -6px gray',
      WebkitBoxShadow: '0 8px 6px -6px gray',
      borderBottom: '0.5px solid gray',
    }
  }

  
export default Header2