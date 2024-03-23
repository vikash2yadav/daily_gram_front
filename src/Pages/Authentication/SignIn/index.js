import React from 'react'
import ImageBox from '../../../Components/ImageBox'
import Form from '../SignIn/Form'
import Footer from '../../../Components/Footer'

const SignIn = () => {
  return (
    <>
    <div className='flex justify-center mt-10 p-5'>
        {/* <div className='p-1'> 
         <ImageBox
         src="https://w7.pngwing.com/pngs/795/904/png-transparent-feature-phone-smartphone-instagram-social-media-marketing-smartphone-gadget-electronics-mobile-phone-thumbnail.png" 
         alt="logo"
         height="fit-content"
         width="100%" 
         />
        </div> */}
        <div>
        <Form style={{borderRadius: "5px", width: "100%", height:"auto"}}/>
        
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SignIn