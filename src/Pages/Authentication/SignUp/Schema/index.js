import * as Yup from 'yup';


export const signUpSchema = Yup.object().shape({
  first_name: Yup.string().min(3, 'should be more than 3 character').max(255, 'less then 255 character').required('Required'),
  last_name: Yup.string().min(3, 'should be more than 3 character').max(255, 'less then 255 character').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  username: Yup.string().min(6, 'should be upto 6 character' ).required('Required'),
  password: Yup.string().min(6, 'should be upto 6 character' ).required('Required'),
  confirm_password: Yup.string().min(6, 'should be same as password' ).required('Required'),
  contact_no: Yup.string().min(10).max(10).required('Required'),
  gender: Yup.string().required('Required'),
  birth_date: Yup.date().required('Required'),
  // terms: Yup.boolean().required('Accept all terms and conditions.')
});

export const signUpInitialValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  username: '',
  contact_no: '',
  gender: '',
  birth_date: '',
  confirm_password: ''
}