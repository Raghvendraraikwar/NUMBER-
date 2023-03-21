import React, { useState } from 'react';
import "./App.css";


function App(){

  let  initialState=0
  const [number, setNumber] = useState(initialState);
  const onClickHandler = () =>{
    setNumber(number +1);
    console.log(number);
  };
  

  return (
<div id='class'>
  <h1>GAMES-{number} </h1> 
   <button onClick={onClickHandler}> click me </button>
</div>
  );
}
export default App;