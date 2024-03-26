import React from 'react'
import TextInput from '../../../../Components/TextInput'
import ButtonC from '../../../../Components/ButtonC'
import FormTitle from '../../../../Components/FormTitle'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { signInInitialValues, signInSchema } from '../Schema'
import { signInApi } from '../../../../Apis/users'
import SnackBar from '../../../../Components/SnackBar'

const Form = (props) => {

    const formik = useFormik({
        initialValues: signInInitialValues,
        validationSchema: signInSchema,
        onSubmit: async (values) => {
            let data = await signInApi(values);
            alert(data.data.message)
        },
    })

    return (
        <>
            <div className='bg-blue-100 w-full p-10 shadow-xl rounded-lg' style={props.style}>

                <FormTitle className='flex justify-center font-bold text-black-700 text-xl mb-5'
                    label="Sign in" />
                <form onSubmit={formik.handleSubmit}>
                    <div className='w-full mb-2 grid md:gap-5 grid-cols-1 md:grid-cols-1' >
                        <div> <TextInput placeholder="Email" variant="standard"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email} />
                            {formik.errors.email && formik.touched.email ? (
                                <div className='text-red-600 text-xs'>{formik.errors.email}</div>
                            ) : null}
                        </div>

                        <div><TextInput placeholder="Password" variant="standard"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password} />
                            {formik.errors.password && formik.touched.password ? (
                                <div className='text-red-600 text-xs'>{formik.errors.password}</div>
                            ) : null}
                        </div>
                    </div>

                    <div>
                        <Link to="/forgot_password" className='text-xs font-semibold text-blue-700'>Forgot password ?</Link>
                    </div>
                    <div className='flex justify-center mt-3'>
                        <ButtonC variant="contained" style={{ width: "100%", borderRadius: "20px" }} type="submit" label="Log In" />
                    </div>

                    <div className='flex justify-center align-center mt-5 mb-3'>
                        <ButtonC variant="outlined" style={{ width: "100%", borderRadius: "20px" }} label="Log in with google" />
                    </div>

                    <div className='flex justify-center align-center mt-8'>
                        <p className='text-xs'>Create new </p> <Link className='mx-1 text-xs text-blue-700 font-bold' to="/">Sign Up</Link>
                    </div>
                </form>
            </div>
        </>
    )
}


export default Form