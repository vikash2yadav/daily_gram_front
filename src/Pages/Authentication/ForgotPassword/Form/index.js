import React from 'react'
import FormTitle from '../../../../Components/FormTitle'
import TextInput from '../../../../Components/TextInput'
import ButtonC from '../../../../Components/ButtonC'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { checkOtpInitialValues, checkOtpSchema, forgotPasswordInitialValues, forgotPasswordSchema } from '../Schema'
import { checkOtpApi, forgotPasswordApi } from '../../../../Apis/users'

const Form = (props) => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: forgotPasswordInitialValues,
        validationSchema: forgotPasswordSchema,
        onSubmit: async (values) => {
            let data = await forgotPasswordApi(values);
            alert(data.data.message)
        },
    })

    const formik2 = useFormik({
        initialValues: checkOtpInitialValues,
        validationSchema: checkOtpSchema,
        onSubmit: async (values) => {
            let data = await checkOtpApi(values);
            if(data.status === 200){
                alert(data.data.message)
                navigate(`/reset_password/${data.data.data.user_id}`);
            }else{
                alert(data.data.message)
            }
        },
    })

    return (
        <>
            <div className='bg-blue-100 w-full p-10 shadow-xl rounded-lg' style={props.style}>

                <FormTitle className='flex justify-center font-bold text-black-700 text-xl mb-5'
                    label="Forgot password" />

                <form onSubmit={formik.handleSubmit}>
                    <p className='text-xs mb-2 text-blue-700'>Enter your email address to reset password </p>
                    <div className='w-full mb-5' >
                        <div> <TextInput placeholder="Enter email address" variant="standard"
                        style={{width:"100%"}}
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                            {formik.errors.email && formik.touched.email ? (
                                <div className='text-red-600 text-xs'>{formik.errors.email}</div>
                            ) : null}
                        </div>
                    </div>

                    <div className='flex justify-center mt-5 mb-10'>
                        <ButtonC variant="contained" type="submit" style={{ width: "100%", borderRadius: "20px" }} label="Send Otp" />
                    </div>
                </form>

                <form onSubmit={formik2.handleSubmit}>
                    <p className='text-xs mb-2 text-blue-700'>Enter otp which is sent to your email  </p>
                    <div className='w-full mb-5' >
                        <div> <TextInput placeholder="Enter OTP" variant="standard"
                            name="otp"
                            style={{width:"100%"}}
                            onChange={formik2.handleChange}
                            value={formik2.values.otp} />
                            {formik2.errors.otp && formik2.touched.otp ? (
                                <div className='text-red-600 text-xs'>{formik2.errors.otp}</div>
                            ) : null}
                        </div>
                    </div>

                    <div className='flex justify-center mt-5 mb-5'>
                        <ButtonC variant="outlined" type="submit" style={{ width: "100%", borderRadius: "20px" }} label="Check Otp" />
                    </div>
                </form>

            </div>
        </>
    )
}

export default Form