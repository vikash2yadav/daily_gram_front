import React, { useState } from 'react'
import FormTitle from '../../../../Components/FormTitle'
import TextInput from '../../../../Components/TextInput'
import ButtonC from '../../../../Components/ButtonC'
import { useFormik } from 'formik'
import { resetPasswordInitialValues, resetPasswordSchema } from '../Schema'
import { resetPasswordApi } from '../../../../Apis/users'
import { useNavigate, useParams } from 'react-router-dom'
import SnackBar from '../../../../Components/SnackBar'

const Form = (props) => {
    const navigate = useNavigate();
    const params = useParams();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState(null);
    const [status, setStatus] = useState('');

    const formik = useFormik({
        initialValues: resetPasswordInitialValues,
        validationSchema: resetPasswordSchema,
        onSubmit: async (values) => {
            let data = await resetPasswordApi(values, params?.id);
            if(data.status === 200){
                setOpen(true);
                setStatus(true);
                setMessage(data.data.message);
                setTimeout(()=>{
                    navigate('/signin')
                }, 1000)
            }else{
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

                <FormTitle className='flex justify-center font-bold text-black-700 text-xl mb-5'
                    label="Password reset" />

                <form onSubmit={formik.handleSubmit}>
                    <p className='flex justify-center text-xs mb-3 text-blue-700'>Set a new password </p>

                    <div className='w-full mb-5' >
                        <div> <TextInput style={{ width: "100%" }} placeholder="Enter new password" variant="standard"
                            name="new_password"
                            onChange={formik.handleChange}
                            value={formik.values.new_password} />
                            {formik.errors.new_password && formik.touched.new_password ? (
                                <div className='text-red-600 text-xs'>{formik.errors.new_password}</div>
                            ) : null}
                        </div>
                    </div>

                    <div className='w-full mb-5' >
                        <div> <TextInput style={{ width: "100%" }} placeholder="Confirm password" variant="standard"
                            name="confirm_password"
                            onChange={formik.handleChange}
                            value={formik.values.confirm_password} />
                            {formik.errors.confirm_password && formik.touched.confirm_password ? (
                                <div className='text-red-600 text-xs'>{formik.errors.confirm_password}</div>
                            ) : null}
                        </div>
                    </div>

                    <p className='text-xs mb-3'>At least 8 characters including a number and a letter. </p>

                    <div className='flex justify-start mt-5 mb-10'>
                        <ButtonC variant="contained"
                        type="submit" style={{ width: "100%", borderRadius: "20px" }} label="Set password" />
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