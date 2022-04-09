import React, { useState } from "react";
import Cards from 'react-credit-cards';

import 'react-credit-cards/es/styles-compiled.css';
 
const MyCards = () => {
	const [data, setData] = useState({
		cvc: "",
		expiry: "",
		name: "",
		number: ""
	});
	const handleInputChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};

	return (
		<div className="flex bg-red-200 flex-col w-screen items-center justify-center " id="PaymentForm">
			<Cards
				cvc={data.cvc}
				expiry={data.expiry}
				focus={data.focus}
				name={data.name}
				number={data.number}
			/>
			<form className='flex flex-col items-center justify-center bg-gray-200 w-2/5 mt-5 h-2/3 ' action="">
				
				<input className='bg-gray-100 p-2 w-3/5 mb-5 text-sm text-black font-light'
					type="number"
					name="number"
					placeholder="Card Number"
					onChange={handleInputChange}
				/>
                <input className='bg-gray-100 p-2  w-3/5 mb-5 text-sm text-black font-light'
					type="text"
					name="name"
					placeholder="Your Name"
					onChange={handleInputChange}
				/>
                <div className='bg-red-100 flex'>
                <input className='bg-gray-100 p-2 s w-1/3 mb-5 text-sm text-black font-light'
					type="expiry"
					name="expiry"
					placeholder="Expire Date"
					onChange={handleInputChange}
				/>
                <input className='bg-gray-100 p-2 w-1/3 mb-5 text-sm text-black font-light'
					type="number"
					name="cvc"
					placeholder="CVC"
					onChange={handleInputChange}
				/>
                </div>
                
                <button className='w-full'>Pay</button>
			</form>
		</div>
	);
};

export default MyCards;