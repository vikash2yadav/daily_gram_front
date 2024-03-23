import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = (props) => {
  return (
    <>
    {/* <footer style={styles.footer}>
            <p>© 2024 Daily gram</p>
        </footer> */}
             <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.column}>
                <h3 className='text-sky-300 mb-2'> <CallIcon/> </h3>
                    <p className='text-sm'>(+91) 76986 61812</p>
                </div>
                <div style={styles.column}>
                    <h3 className='text-sky-300 mb-2'><MailIcon/></h3>
                    <p className='text-sm'>vikash9412077@gmail.com</p>
                </div>
                <div style={styles.column}>
                    <h3 className='text-sky-300 mb-2'><LocationOnIcon/></h3>
                    <p className='text-sm'>
                        29, abc complex, near ctm cross road
                    </p>
                </div>
            </div>
            {/* <div style={styles.copyRight}>
                <p> All rights reserved &copy; 2024 Daily gram.</p>
            </div> */}
        </footer>
    </>
  )
}
const styles = {
  // footer: {
  //     backgroundColor: '#333',
  //     color: '#fff',
  //     padding: '20px',
  //     textAlign: 'center'
  // }
  footer: {
    backgroundColor: '#222',
    color: '#fff',
    padding: '50px 0',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
},
container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
},
column: {
    flex: '1',
    margin: '0 20px',
},
linkList: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
},
socialIcons: {
    fontSize: '24px',
    marginTop: '10px',
},
copyRight: {
    marginTop: '20px',
}
};
export default Footer