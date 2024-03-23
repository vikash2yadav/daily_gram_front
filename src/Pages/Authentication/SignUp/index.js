import React from 'react'
import Form from './Form'
import ImageBox from '../../../Components/ImageBox'
import Footer from '../../../Components/Footer'

const SignUp = (props) => {
  return (
    <>
      <div className='flex justify-center  p-5' style={{backgroundColor: "#fff"}}>
      
          {/* <div className='p-1'> 
         <ImageBox 
         src="https://w7.pngwing.com/pngs/795/904/png-transparent-feature-phone-smartphone-instagram-social-media-marketing-smartphone-gadget-electronics-mobile-phone-thumbnail.png" 
         alt="logo"
         height="500px"
         width="" 
         />
        </div> */}
        <div>
        <Form style={{borderRadius: "5px", maxWith: "300px", height:"auto", border: "1px solid #ccc"}} />
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default SignUp