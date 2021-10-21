import React from 'react'

import './Keypad.css'

function Keypad(props) { // we make function using keypad keyword
	            
	const keys = [ // we make the keys using array and store it in the keys variable
	  {
		keyCode: 55,
		label: "7",
	  },
	  {
		keyCode: 56,
		label: "8",
	  },
	  {
		keyCode: 57,
		label: "9",
	  },
	  {
		keyCode: 52,
		label: "4",
	  },
	  {
		keyCode: 53,
		label: "5",
	  },
	  {
		keyCode: 54,
		label: "6",
	  },
	  {
		keyCode: 49,
		label: "1",
	  },
	  {
		keyCode: 50,
		label: "2",
	  },
	  {
		keyCode: 51,
		label: "3",
	  },
	  {
		keyCode: 48,
		label: "0",
	  },
	  {
		keyCode: 190,
		label: ".",
	  },
	  {
		keyCode: 13,
		label: "=",
	  },
	];

	const symbols = [ // we make symbols, set labels and keycode for it and give it a value and they all are in the array form
		{
		  label: "⌫",
		  keyCode: 8,
		  value: "backspace",
		},
		{
		  label: "÷",
		  keyCode: 111,
		  value: "/",
		},
		{
		  label: "×",
		  keyCode: 56,
		  value: "*",
		},
		{
		  label: "﹣",
		  keyCode: 109,
		  value: "-",
		},
		{
		  label: "+",
		  keyCode: 107,
		  value: "+",
		},
	  ];

	  return( // we make div using keypad class and it includes the other div keypad_keys and keypad_symbols
		  <div className="keypad">
			  <div className="keypad_keys">
					{
						keys.map((item,index)=><p 
						onClick={()=>props.handleKeyPress(item.keyCode, item.label)} 
						key={index}>{item.label}</p>) // we show the keys to the users using the map function
					}
			  </div>
			  <div className="keypad_symbols">
					{
						symbols.map((item,index)=><p 
						onClick={()=>props.handleKeyPress(item.keyCode, item.value)} 
						key={index}>{item.label}</p>) // we show symbols to the users using the map function
					}
			  </div>
		  </div>
	  )
}

export default Keypad;
