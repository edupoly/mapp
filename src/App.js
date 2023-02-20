import logo from './logo.svg';
import './App.css';
import Studentform from './Studentform';
import Employeeform from './Employeeform';
import Studentformyup from './Studentformyup';
import StudentformFieldProps from './StudentformGetFieldProps';
import StudentFormik from './StudentformFormik';
import StudentField from './StudentformField';

function App() {
  return (
    <div className='border border-2 p-2 border-danger'>
      <StudentField></StudentField>
      <br></br>
      <StudentFormik></StudentFormik>
      <br/>
      <StudentformFieldProps></StudentformFieldProps>
      <br/>
      <Studentformyup></Studentformyup>
      <br/>
      <Employeeform></Employeeform>
      <hr></hr>
      <Studentform></Studentform>

    </div>
  );
}

export default App;
