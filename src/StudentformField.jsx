import { Field, Formik, useFormik } from "formik"
import * as Yup from 'yup'

function StudentField() {
  
  return (
    <div className='border border-2 p-2 border-success'>
      <h1>Studentform with Field Element...</h1>
      <Formik 
        initialValues={{
          firstname:'',
          lastname:'',
          dob:'',
          gender:''
        }}
        validationSchema={Yup.object({
          firstname:Yup.string().max(8,"8 letters or less").min(4,'first name cannot be less than 4 letters').required('First name required'),
          lastname:Yup.string().max(5,"last name cannot be more than 8 letters").min(4,'last name cannot be less than 3 letters').required('Last name required')
        })}
        onSubmit={(values)=>{
          console.log(values)
        }}
      >
        {
          (formik)=>{
            return(
            <form onSubmit={formik.handleSubmit}>
              <Field type="text" placeholder="First Name" name="firstname"></Field>
              <div>{formik.touched.firstname && formik.errors.firstname}</div>
              <Field type="text" placeholder="Lastname" name="lastname"></Field>
              <div>{formik.touched.lastname && formik.errors.lastname}</div>
              <Field type="date" placeholder="Date of Birth" name="dob"></Field>
              <br/>
              Gender:
              <Field type='radio' name="gender" value="male"></Field>:Male
              <Field type='radio' name="gender" value="female"></Field>:Female
              <Field type='radio' name="gender" value="other"></Field>:Others
              <br></br>
              <button type="submit">Add Student</button>
            </form>
            )
          }
        }
      </Formik>
      
    </div>
  )
}
export default StudentField