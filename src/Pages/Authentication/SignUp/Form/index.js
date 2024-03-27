import React, { useState } from 'react'
import TextInput from '../../../../Components/TextInput'
import ButtonC from '../../../../Components/ButtonC'
import SelectInputC from '../../../../Components/SelectInputC'
import { Link, useNavigate } from 'react-router-dom'
import FormTitle from '../../../../Components/FormTitle'
import { useFormik } from 'formik'
import { signUpInitialValues, signUpSchema } from '../Schema/index'
import CheckBox from '../../../../Components/CheckBox'
import {signUpApi} from '../../../../Apis/users';
import SnackBar from '../../../../Components/SnackBar'

const Form = (props) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState(null);
    const [status, setStatus] = useState('');

    const genderOptions = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
    ]

    const formik = useFormik({
        initialValues: signUpInitialValues,
        validationSchema: signUpSchema,
        onSubmit: async (values) => {
           let data = await signUpApi(values);
           if (data.status === 200) {
            setOpen(true);
            setStatus(true);
            setMessage(data.data.message);
            setTimeout(()=>{
                navigate('signin');
            }, 1000)
        } else {
            setOpen(true);
            setStatus(false);
            setMessage(data.data.message)
        }
        },
    })

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    return (
        <>
            <div className='bg-blue-100 w-full p-10 shadow-xl rounded-lg' style={props.style}>

                <FormTitle
                    className='flex justify-center font-bold text-black-700 text-xl mb-3'
                    label="Sign Up" />
                <p className='text-xs mb-5'>Please fill in this form to create an account </p>
                <form onSubmit={formik.handleSubmit}>

                    <div className='w-full mb-5 grid md:gap-10 grid-cols-1 md:grid-cols-2' >
                        <div> <TextInput placeholder="Enter first Name" variant="standard"
                            name="first_name"
                            onChange={formik.handleChange}
                            value={formik.values.first_name} />
                            {formik.errors.first_name && formik.touched.first_name ? (
                                <div className='text-red-600 text-xs'>{formik.errors.first_name}</div>
                            ) : null}</div>

                        <div><TextInput placeholder="Enter last Name" variant="standard"
                            onChange={formik.handleChange}
                            name="last_name"
                            value={formik.values.last_name} />
                            {formik.errors.last_name && formik.touched.last_name ? (
                                <div className='text-red-600 text-xs'>{formik.errors.last_name}</div>
                            ) : null}
                        </div>
                    </div>

                    <div className='w-full mb-5'>
                        <div><TextInput placeholder="Enter email" variant="standard"
                            style={{ width: '100%' }}
                            onChange={formik.handleChange}
                            name="email"
                            value={formik.values.email} />
                            {formik.errors.email && formik.touched.email ? (
                                <div className='text-red-600 text-xs'>{formik.errors.email}</div>
                            ) : null}
                        </div>

                    </div>

                    <div className='w-full mb-5  grid md:gap-10 grid-cols-1 md:grid-cols-2'>
                        <div><TextInput placeholder="Enter username" variant="standard"
                            onChange={formik.handleChange}
                            name="username"
                            style={{ width: '100%' }}
                            value={formik.values.username} />
                            {formik.errors.username && formik.touched.username ? (
                                <div className='text-red-600 text-xs'>{formik.errors.username}</div>
                            ) : null}
                        </div>

                        <div>
                            <input type="date" placeholder="BOD" 
                            onChange={formik.handleChange}
                            name="birth_date"
                            className='bg-blue-100'
                            style={{ width: '100%'}}
                            value={formik.values.birth_date} />
                            {formik.errors.birth_date && formik.touched.birth_date ? (
                                <div className='text-red-600 text-xs'>{formik.errors.birth_date}</div>
                            ) : null}

                        </div>
                    </div>
                    <div className='w-full mb-5 grid md:gap-10 grid-cols-1 md:grid-cols-2'>
                        <div><TextInput placeholder="Enter password" variant="standard"
                            onChange={formik.handleChange}
                            name="password"
                            value={formik.values.password} />
                            {formik.errors.password && formik.touched.password ? (
                                <div className='text-red-600 text-xs'>{formik.errors.password}</div>
                            ) : null}
                        </div>
                        <div>
                            <TextInput placeholder="Enter confirm Password" variant="standard"
                                onChange={formik.handleChange}
                                name="confirm_password"
                                value={formik.values.confirm_password} />
                            {formik.errors.confirm_password && formik.touched.confirm_password ? (
                                <div className='text-red-600 text-xs'>{formik.errors.confirm_password}</div>
                            ) : null}
                        </div>
                    </div>

                    <div className='w-full mb-5 grid md:gap-10 grid-cols-1 md:grid-cols-2'>
                        <div>
                            <TextInput placeholder="Enter phone" variant="standard"
                                onChange={formik.handleChange}
                                name="contact_no"
                                value={formik.values.contact_no} />
                            {formik.errors.contact_no && formik.touched.contact_no ? (
                                <div className='text-red-600 text-xs'>{formik.errors.contact_no}</div>
                            ) : null}
                        </div>

                        <div>
                            <SelectInputC options={genderOptions} sx={{}} variant="standard" placeholder="Enter gender"
                                onChange={formik.handleChange}
                                name="gender"
                                value={formik.values.gender} />
                            {formik.errors.gender && formik.touched.gender ? (
                                <div className='text-red-600 text-xs'>{formik.errors.gender}</div>
                            ) : null}
                        </div>
                    </div>

                    <div className='w-full mb-1 flex justify-start align-center'>
                        <p className='text-xs font-semibold'>
                            <CheckBox name="terms" onChange={formik.handleChange}
                                value={formik.values.terms} />
                            I accept the <Link className='text-blue-700'> Terms of Use </Link> & <Link className='text-blue-700'>Privacy Policy</Link></p>

                    </div>

                    <div className='flex justify-center mt-5'>
                        <ButtonC variant="contained" label="Register Now" type="submit" />
                    </div>
                </form>
            </div>

            {status ? (
             <SnackBar handleClose={handleClose} variant="filled" severity="success" sx={{ width: '100%' }} open={open} message={message} />
           ) : 
           (
            <SnackBar handleClose={handleClose} variant="filled" severity="error" sx={{ width: '100%' }} open={open} message={message} />
           )
           }

        </>
    )

}


export default Form