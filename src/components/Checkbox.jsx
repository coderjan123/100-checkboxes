import { useState } from 'react'

function Checkbox(){
  let [ischecked, setclicked] = useState(false)
  
  function handleClick() {
    setclicked(!ischecked)
   
  }
  
  return (

    
    <div className="Checkbox" onClick={handleClick} >

      {ischecked && <img src={"image.png"} className="Checkmark" />}
    </div>

  );
};

export default Checkbox;
