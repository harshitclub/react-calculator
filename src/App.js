import React, { useState } from 'react'; // import react and useState

import Header from './Components/Header/Header' // import header component
import Keypad from './Components/Keypad/Keypad'; // import keypad component

import moonIcon from './assets/moon.png'; // import images from assest
import sunIcon from './assets/sun.png';

import './App.css'; // import main css file

const usedKeycodes = [ // allowed keycodes
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103,
  104, 105, 8, 13, 190, 187, 189, 191, 56, 111, 106, 107, 109,
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; // allowed numbers

const operators = ["-", "+", "*", "/"]; // allowed operators

function App() { 
  const [isDarkMode, setIsDarkMode] = useState(false); // we use useState for setting the dark and light mode
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  // const [history, setHistory] = useState([]);

  const handleKeyPress =(keycode,key)=>{

    if(!keycode) return // keycode not come then return
    if(!usedKeycodes.includes(keycode)) return // return if used keycode not include

    if(numbers.includes(key)){
      if(key===0){
        if(expression.length===0) return // return if user input the 0
      }
      calculateResult(expression + key);
      setExpression(expression+key); // add the input
    } 
    else if(operators.includes(key)){
      if(!expression)return
      const lastChar = expression.slice(-1) // slice it gives last character
      if(operators.includes(lastChar))  // return if last character is operator
      if(lastChar==='.') return // last char "." then return
      setExpression(expression + key); // add the input
    } 
    else if(key === "."){
      if(!expression) return
      const lastChar=expression.slice(-1)
      if(!numbers.includes(lastChar)) return
      setExpression(expression + key);
    }
    else if(keycode === 13){
      if(!expression) return
      calculateResult(expression)

      // const tempHistory = [...history];
      // if(tempHistory.length>20) tempHistory = tempHistory.splice(0,1);
      // tempHistory.push(expression);
      // setHistory(tempHistory);
    } 
    else if(keycode===8){
      if(!expression) return // return if expression null
      // calculateResult(expression.slice(0, -1));
      setExpression(expression.slice(0, -1)) // it adds the first char and delete the last
    }

  };

  const calculateResult=(exp)=>{
      if(!exp) {
        setResult("");
      return;
      }
      const lastChar = exp.slice(-1);
      if(!numbers.includes(lastChar))exp.slice(0,-1)
      const answer=eval(exp).toFixed(2) + '';
      setResult(answer)
  }

  return (
    <div className="app" 

    tabIndex="0" // tabindex 0 is important for taking keyboard input 

    onKeyDown={(event)=>handleKeyPress(event.keycode, event.key)}// we take the keyboard key values using handlekeypress function

    data-theme={isDarkMode ? 'dark' : ''}>

      <div className="app_calculator">
        <div className="app_calculator_navbar">
          <div className="app_calculator_navbar_toggle" onClick={()=>setIsDarkMode(!isDarkMode)}> 

            <div className={`app_calculator_navbar_toggle_circle ${isDarkMode ? "app_calculator_navbar_toggle_circle_active" :''}`}></div>
          </div>

            <img src={isDarkMode ? moonIcon : sunIcon} alt="mode" />

        </div>

        <Header expression={expression} result={result}/>

        <Keypad handleKeyPress={handleKeyPress}/>

      </div>
    </div>
  );
}

export default App;
