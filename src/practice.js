import { useState, useEffect } from "react";
const Practice = () => {
    const [name, setName] = useState('Josh')
    
    
    const handleClick = ()=>{
        setName('Gift')
    }

    useEffect(()=>{
        console.log('use effect ran')
    })
    
    return ( 
    <div className="Hom">
        <p>{ name }</p>
  <button onClick={handleClick}>Click me</button>
    </div> 
    );
}
 
export default Practice;