import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import { useState } from 'react';
import { htmlToText } from 'html-to-text';



function App() {
	const inputRef = useRef(null);
	const [message, setMessage] = useState('');

	const handleChange = event => {
    setMessage(event.clipboardData.getData('text'));
	}
	

	const outputText = htmlToText(message,{
		string: ' ',
	});

	return (
	
		<div className="App">
			<header className="bg-secondary d-flex justify-content-start">
						<h1 className='p-3'>Worktime</h1>
			</header>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-10'>
						<div class="mt-5">
							<div class="form-label mt-2 fw-bolder">Вставить текст сюда</div>
							<textarea ref={inputRef} class="form-control"onPaste={handleChange} id="exampleFormControlTextarea1" rows="5"></textarea>
							<div className="alert alert-secondary mt-5 text-start" >{outputText}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
