import React from 'react';
import Form from './Form';
import ImageBox from '../../../Components/ImageBox';
import Footer from '../../../Components/Footer';
import Header2 from '../../../Components/Header2';

const SignUp = (props) => {
  return (
    <>
      <Header2 />
      <div  
    //   style={{backgroundColor: "#ffdee9",
    // backgroundImage:"linear-gradient(0deg, #ffdee9, #b5fffc 100%)"}} 
    className='flex justify-center shadow-xl rounded-lg p-10'>
        <div>
          <Form style={{ borderRadius: "5px", maxWidth: "500px", height: "auto" }} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
