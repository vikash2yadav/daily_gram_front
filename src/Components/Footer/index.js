import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useFormik } from 'formik';
import { emailSubscriberInitialValues, emailSubscriberSchema } from './Schema';
import {addEmailSubscriberApi} from '../../Apis/footer'

const Footer = (props) => {

    const formik = useFormik({
        initialValues: emailSubscriberInitialValues,
        validationSchema: emailSubscriberSchema,
        onSubmit: async (values) => {
            let data = await addEmailSubscriberApi(values);
            alert(data.data.message)
        },
    })

    return (
        <>
            <footer style={styles.footer}>
                <div style={styles.firstDiv}>
                    <div style={styles.container}>

                        <div style={styles.column}>
                            <h3 className='text-sky-300 mb-2'> <CallIcon /> </h3>
                            <p className='text-xs'>+91 76986 61812 </p>
                        </div>

                        <div style={styles.column}>
                            <h3 className='text-sky-300 mb-2'> <WhatsAppIcon /> </h3>
                            <p className='text-xs'>+91 76986 61812 </p>
                        </div>

                        <div style={styles.column}>
                            <h3 className='text-sky-300 mb-2'><MailIcon /></h3>
                            <p className='text-xs'>vikash9412077@gmail.com</p>
                        </div>

                        <div style={styles.column}>
                            <h3 className='text-sky-300 mb-2'><LocationOnIcon /></h3>
                            <p className='text-xs'>
                                29, abc complex, near ctm cross road, ahmedabad
                            </p>
                        </div>
                    </div>
                </div>

                <div style={styles.secondDiv}>
                    <div className='flex justify-start' style={styles.secondContainer}>

                        <div style={styles.secondColumns}>
                            <h1 className='text-m mb-5'>About</h1>
                            <ul className='text-xs' style={styles.linkList}>
                                <li className='mb-0.5'> <Link className='hover:text-red-700'> Our story </Link> </li>
                                <li className='mb-0.5'> <Link className='hover:text-red-700'> Awards </Link></li>
                                <li className='mb-0.5'> <Link className='hover:text-red-700'> Our team </Link></li>
                                <li className='mb-0.5'> <Link className='hover:text-red-700'> Carrer </Link></li>
                            </ul>
                        </div>

                        <div style={styles.secondColumns}>
                            <h1 className='text-m mb-5'>Resources</h1>
                            <ul className='text-xs' style={styles.linkList}>
                                <li className='mb-0.5'> <Link className='hover:text-red-700'> Blog </Link> </li>
                                <li className='mb-0.5'> <Link className='hover:text-red-700'> Privacy policy </Link> </li>
                                <li className='mb-0.5'> <Link className='hover:text-red-700'> Terms & conditions </Link> </li>
                            </ul>
                        </div>

                        <div style={styles.secondColumns}>
                            <h1 className='text-m mb-5'>Works</h1>
                            <ul className='text-xs' style={styles.linkList}>
                                <li className='mb-0.5'> <Link className='hover:text-red-700'> Projects</Link> </li>
                                <li className='mb-0.5'> <Link className='hover:text-red-700'> For our society</Link> </li>
                                <li className='mb-0.5'> <Link className='hover:text-red-700'> For us</Link></li>
                            </ul>
                        </div>

                        <div style={styles.secondColumns}>
                            <h1 className='text-m mb-5'>Subscribe</h1>

                            <form onSubmit={formik.handleSubmit}>
                            {formik.errors.email && formik.touched.email ? (
                                <p className='text-red-500 text-xs'>{formik.errors.email}</p>
                            ) : null}   
                            <div className='flex mb-0.5'>
                            
                                <input type="email" 
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email} 
                            placeholder='Email address' className='p-1 text-red-700 ' />
                                <button type="submit" style={styles.subsButton} className='p-1 px-2'>Subscribe</button>
                            </div>
                            </form>

                            <p className='text-xs' style={styles.linkList}> Get notify on this email address</p>

                        </div>
                    </div>

                </div>

                <div className='flex justify-start px-20'>
                    <p className='text-sm w-full' style={styles.linkList}>copyright © 2024 | All rights reserved |
                        <Link className='text-blue-400 hover:text-red-700'> know more.. </Link> </p>
                    <div className='flex justify-end'>
                        <Link><XIcon className='hover:text-red-700' style={styles.socialIcons}/></Link>
                        <Link><FacebookIcon className='hover:text-red-700' style={styles.socialIcons}/></Link>
                       <Link> <InstagramIcon className='hover:text-red-700' style={styles.socialIcons}/></Link>
                    </div>
                </div>

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
    },
    firstDiv: {
        textAlign: 'center',
    },
    secondDiv: {
        color: '#fff',
        padding: '40px 40px ',
        fontFamily: 'Arial, sans-serif',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
    },
    secondContainer: {
        padding: '50px 10px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    secondColumns: {
        flex: '1',
        margin: '0 0px',
    },
    column: {
        flex: '1',
        margin: '0 20px',
    },
    linkList: {
        listStyle: 'none',
        padding: '0',
        margin: '0',
        color: 'rgb(166, 168, 169)'
        ,hover:{
            color: 'red'
        }
    },
    socialIcons: {
        fontSize: '24px',
        marginLeft: '10px'
    },
    subsButton: {
        backgroundColor: 'blue',
        color: 'white',
    }
};
export default Footer