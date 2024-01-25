import './App.css';
import CustComp1 from './Components/CustComponent';
import { Student } from './Components/Students';

function App() {

  return (
    <>
      <h1>Welcome to my 1st React App</h1>
      <CustComp1 /> 

      {/* We should use JavaScript expression within {} */}
      {console.log( "Hello" )}
      <Student name="Sriram" age={24} course="Front-End" working = {true} />
      <Student name="Sanjay" age={24} course="Html/Css" working = {false} />
      <Student name="Pradeep" age={21} course="Python" working = {false} />
      {/* In prpos me must enter the integer and boolen values within a {} */}
    </>
  )
}

export default App
