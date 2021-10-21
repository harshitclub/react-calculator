import React, { useRef, useEffect } from 'react'

import './Header.css'

function Header(props) { //we make header function in which we control the history, expression, and result
	const resultRef= useRef() // create resultRef and use the useRef function
	useEffect(() => {
		resultRef.current.scrollIntoView() // it is to scroll to the result on the header
		}
	, [])
	return ( 
		<div className='header custom-scroll'>
			<div className="header_history">
				<p></p>
			</div>
			<br /> 
			<div className="header_expression custom-scroll">
				<p>{props.expression}</p>
			</div>
			<p ref={resultRef} className="header_result">{props.result}</p>
		</div>
	)
}

export default Header
