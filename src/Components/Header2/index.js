import React from 'react'
import ButtonC from '../../Components/ButtonC' 
import { Link } from 'react-router-dom'

const Header2 = () => {
  return (
    <>
    <header style={{backgroundColor:'#666'}} className="text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
          <h1 className='font-bold text-xl'>Daily gram</h1>
             
                <div className="flex justify-end items-end">
                  
                    <nav className="ml-80">
                        <ul className="flex space-x-10">
                            <li><Link to="" className="hover:text-gray-300">Home</Link></li>
                            <li><Link to="/team" className="hover:text-gray-300">About</Link></li>
                            <li><Link to="" className="hover:text-gray-300">Services</Link></li>
                            <li><Link to="" className="hover:text-gray-300">Cart</Link></li>
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


// const styles = {
//   bg: {

//     boxShadow: '0 8px 6px -6px gray',
//     WebkitBoxShadow: '0 8px 6px -6px gray',
//     borderBottom: '0.5px solid gray',
//   }
// }

export default Header2