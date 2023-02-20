import { useFormik } from "formik"
import * as Yup from 'yup'

function StudentformFieldProps() {
  var formik = useFormik(
    {
      initialValues:{
        firstname:'',
        lastname:'',
        dob:'',
        gender:''
      },
      validationSchema:Yup.object({
        firstname:Yup.string().max(8,"first name cannot be more than 8 letters").min(4,'first name cannot be less than 4 letters').required('First name required'),
        lastname:Yup.string().max(5,"last name cannot be more than 8 letters").min(4,'last name cannot be less than 3 letters').required('Last name required')
      }),
      // validate:checkValues,
      onSubmit:(values)=>{
        console.log(values)
      }
    }
  )
  console.log(formik.touched)
  return (
    <div className='border border-2 p-2 border-success'>
      <h1>Studentform with getFieldProps...</h1>
      <form onSubmit={formik.handleSubmit}>
        <input type="text" placeholder="First Name" {...formik.getFieldProps('firstname')}/><br/>
        <div>{formik.touched.firstname && formik.errors.firstname}</div>
        <input type="text" placeholder="Last Name" {...formik.getFieldProps('lastname')}/><br/>
        <div>{formik.touched.lastname && formik.errors.lastname}</div>
        <input type="date" {...formik.getFieldProps('dob')} placeholder="Date of Birth"/><br/>
        Gender:
        <input type='radio' {...formik.getFieldProps('gender')} value="male"></input>:Male
        <input type='radio' {...formik.getFieldProps('gender')} value="female"></input>:Female
        <input type='radio' {...formik.getFieldProps('gender')} value="other"></input>:Others<br/>
        <button type="submit">Add Student</button>
      </form>
    </div>
  )
}
export default StudentformFieldProps