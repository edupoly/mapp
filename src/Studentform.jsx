import { useFormik } from "formik"

function checkValues(values){
  var errors={}
  
  if(!values.firstname){
    errors.firstname="first name required"
  }
  else{
    if(values.firstname.length>=10){
      errors.firstname='first name cannot be more than 10 letters'
    }
    if(values.firstname.length<3){
      errors.firstname='firstname cannot be soo small'
    }
  }

  if(!values.lastname){
    errors.lastname="last name required"
  }
  else{
    if(values.lastname.length>=5){
      errors.lastname='lastname name cannot be more than 5 letters'
    }
    if(values.lastname.length<3){
      errors.lastname='lastname cannot be soo small'
    }
  }

  return errors
}

function Studentform() {
  var formik = useFormik(
    {
      initialValues:{
        firstname:'',
        lastname:'',
        dob:'',
        gender:''
      },
      validate:checkValues,
      onSubmit:(values)=>{
        console.log(values)
      }
    }
  )
  console.log(formik.touched)
  return (
    <div className='border border-2 p-2 border-success'>
      <h1>Studentform</h1>
      <form onSubmit={formik.handleSubmit}>
        <input className={formik.touched.firstname && formik.errors.firstname && 'border border-4 border-danger'} type="text" name="firstname" placeholder="First Name" onBlur={formik.handleBlur} onChange={formik.handleChange}/><br/>
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
export default Studentform