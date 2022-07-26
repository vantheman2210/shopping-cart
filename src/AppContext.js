import React, { useState, createContext, useEffect } from 'react';

export const AppContext = createContext();

export const Provider = (props) => {
	const [ cart, setCart ] = useState([]);
	const [ total, setTotal ] = useState(0);

	useEffect(
		() => {
			totalPrice();
			quantityUpdate()
		},
		[ cart ]
	);

	useEffect(
		() => {
			console.log(total);
		},
		[ total ]
	); 

		const quantityUpdate = () => { 
			const updatedCart = cart.filter(book => book.quantity >= 1); 
			 cart.find((book) => {
				if (book.quantity <  1) {
					setCart([ ...cart, updatedCart ]);
					return true;
				}
				return false;
			});
		}

	const totalPrice = () => {
		const price = cart.map((book) => book.price);
		const quantity = cart.map((book) => book.quantity);
		const totalPrice = price.reduce((prev, curr, i) => prev + curr * quantity[i], 0);
		setTotal(totalPrice);
	};

	return <AppContext.Provider value={[ cart, setCart, total ]}>{props.children}</AppContext.Provider>;
};
