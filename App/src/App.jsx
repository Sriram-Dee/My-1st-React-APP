import './App.css'
import CustComp1 from './Components/CustComponent'
function App() {

  return (
    <>
      <h1>Welcome to my 1st React App</h1>
      <CustComp1 /> 

      {/* We should use JavaScript expression within {} */}
      {console.log( "Hello" )}
    </>
  )
}

export default App
