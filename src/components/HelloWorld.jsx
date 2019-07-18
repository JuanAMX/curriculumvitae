import React,{ useState} from 'react';

const HelloWorld=()=>{
    const[active, setActive]=useState(true);
    const handleClick=()=>{
        setActive(!active);
    }

return(

    <div> 
        <button onClick={handleClick}> Ocultar </button> 
        {
        active &&
        <h1> hola mundo </h1>
         }



    </div>
);


}
export default HelloWorld;