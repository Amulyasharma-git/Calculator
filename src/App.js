import React, {useState} from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleInput = event => {
   setInput(event.target.value);
  }

  const handleButtonClick = (e) => {
    if((input.includes(".") && e.target.innerText === "." ) || 


    (input.includes("+") && e.target.innerText === "+" ) || 


    (input.includes("-") && e.target.innerText === "-") || 


    (input.includes("*") && e.target.innerText === "*")  ||


    (input.includes("/") && e.target.innerText === "/")
    
    ) return

    else{
    setInput(input.concat(e.target.name));
    }
  }

  const handleResultClick = () =>{
    setInput(eval(input));
  }

  const handleClearClick = () =>{
    setInput("");
    }

  const handleDeleteClick = () => {
   setInput(input.slice(0,input.length-1));

  }

  return (
    <>
    <div className="container">
    <input id="text" type="text" value={input} onChange={handleInput}/>
    <div class ="btn">
    <button className="btn-clr" id="clear" onClick={handleClearClick}>AC</button>
    <button className="btn-clr" id="del" onClick={handleDeleteClick}>del</button>
    <button className="btn-clr" onClick={handleButtonClick} name='/'>/</button>
    <button onClick={handleButtonClick} name= '7'>7</button>
    <button onClick={handleButtonClick} name= '8'>8</button>
    <button onClick={handleButtonClick} name= '9'>9</button>
    <button className="btn-clr" onClick={handleButtonClick} name= '*'>*</button>
    <button onClick={handleButtonClick} name= '4'>4</button>
    <button onClick={handleButtonClick} name= '5'>5</button>
    <button onClick={handleButtonClick} name= '6'>6</button>
    <button className="btn-clr" onClick={handleButtonClick} name= '-'>-</button>
    <button onClick={handleButtonClick} name= '1'>1</button>
    <button onClick={handleButtonClick} name= '2'>2</button>
    <button onClick={handleButtonClick} name= '3'>3</button>
    <button className="btn-clr" onClick={handleButtonClick} name= '+'>+</button>
    <button onClick={handleButtonClick} name= '0'>0</button>
    <button onClick={handleButtonClick} name= '.'>.</button>
    <button className="btn-clr" id="result" onClick={handleResultClick}>=</button>
    </div>
    </div>
    </>

  );
}

export default App;
