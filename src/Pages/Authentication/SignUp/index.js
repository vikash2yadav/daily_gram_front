import React from 'react';
import Form from './Form';
import ImageBox from '../../../Components/ImageBox';
import Footer from '../../../Components/Footer';
import Header2 from '../../../Components/Header2';

const SignUp = (props) => {
  return (
    <>
      <Header2 />
      <div style={styles.bg} className='flex justify-center shadow-xl rounded-lg p-10'>
        {/* 
        <div className='p-1'>
          <ImageBox
            src="https://w7.pngwing.com/pngs/795/904/png-transparent-feature-phone-smartphone-instagram-social-media-marketing-smartphone-gadget-electronics-mobile-phone-thumbnail.png"
            alt="logo"
            height="500px"
            width=""
          />
        </div> */}
        <div>
          <Form style={{ borderRadius: "5px", maxWidth: "500px", height: "auto" }} />
        </div>
      </div>
      <Footer />
    </>
  );
}

const styles = {
  bg: {
    boxShadow: '0 8px 6px -6px gray',
    WebkitBoxShadow: '0 8px 6px -6px gray',
    borderBottom: '0.5px solid gray',
  }
}

export default SignUp;
