import { useFormik } from "formik"
import * as Yup from 'yup'

function Studentformyup() {
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
      <h1>Studentform with YUP</h1>
      <form onSubmit={formik.handleSubmit}>
        <input className={formik.touched.firstname && formik.errors.firstname && 'border border-4 border-danger'} 
        type="text" name="firstname" placeholder="First Name" onBlur={formik.handleBlur} onChange={formik.handleChange}/><br/>
        <div>{formik.touched.firstname && formik.errors.firstname}</div>
        <input type="text" name="lastname" placeholder="Last Name" onBlur={formik.handleBlur} onChange={formik.handleChange}/><br/>
        <div>{formik.touched.lastname && formik.errors.lastname}</div>
        <input type="date" name="dob" placeholder="Date of Birth" onChange={formik.handleChange}/><br/>
        Gender:
        <input type='radio' name="gender" onChange={formik.handleChange} value="male"></input>:Male
        <input type='radio' name="gender" onChange={formik.handleChange} value="female"></input>:Female
        <input type='radio' name="gender" onChange={formik.handleChange} value="other"></input>:Others<br/>
        <button type="submit">Add Student</button>
      </form>
    </div>
  )
}
export default Studentformyup