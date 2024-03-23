import * as Yup from 'yup';


export const signInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

export const signInInitialValues = {
  email: '',
  password: '',
}