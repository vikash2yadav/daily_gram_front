import React from 'react'
import Form from './Form'
import ImageBox from '../../../Components/ImageBox'
import Footer from '../../../Components/Footer'
import Header from '../../../Components/Header'
import Header2 from '../../../Components/Header2'

const SignUp = (props) => {
  return (
    <>
      <Header2 />
      <div className='flex justify-center shadow-xl rounded-lg p-10' style={{ backgroundColor: "" }}>

        <div className='p-1'>
          <ImageBox
            src="https://w7.pngwing.com/pngs/795/904/png-transparent-feature-phone-smartphone-instagram-social-media-marketing-smartphone-gadget-electronics-mobile-phone-thumbnail.png"
            alt="logo"
            height="500px"
            width=""
          />
        </div>
        <div>

          <Form style={{ borderRadius: "5px", maxWith: "300px", height: "auto" }} />
        </div>
      </div>
      <Footer />

    </>
  )
}

export default SignUp