import { useState } from 'react';
import './App.css';
import Checkbox from './components/Checkbox.jsx';

function App() {


  const [boxes, setboxes] = useState(100);
  function updateValues(value){
    setboxes(value)
   document.title = `${value} checkboxen`;
  }
  
  return (
    

    <div>
       
      <form onSubmit={(e) => e.preventDefault()} >
        <input defaultValue={boxes}  onChange={(e) => updateValues(e.target.value)}  className='Input' />
         
        
      </form>
    <div className="Checkbox-holder">
      {Array.from({ length: boxes }).map((_, index) => (
        <Checkbox key={index} />
      ))}
    </div>


    </div>
  );
}

export default App;