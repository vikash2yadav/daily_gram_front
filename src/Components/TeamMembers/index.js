import React from "react";
import { Link } from "react-router-dom";
import './index.css'
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const TeamMembers = (props) => {

  return (
    <>
      <div className="productCart" to={""}>
        <img src={'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'} alt="" height="300" width="500" />
        <p className="font-semibold">John Adam</p>
        <div className="text-sm mb-5 text-blue-500 font-semibold"> Founder </div>
        <span className="text-sm mb-5"> I am founder of this company. i am ready for new things.</span>
        <div className="flex justify-center items-center ">
          {/* <Link><XIcon className='hover:text-red-400' style={styles.socialIcons} /></Link> */}
          <Link><FacebookIcon className='hover:text-red-400' style={styles.socialIcons} /></Link>
          <Link> <InstagramIcon className='hover:text-red-400' style={styles.socialIcons} /></Link>

        </div>
      </div>

    </>
  );
};

let styles = {
  socialIcons: {
    fontSize: '15px',
    marginLeft: '10px'
  },
}
export default TeamMembers;
