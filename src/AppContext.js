import React, { useState, createContext, useEffect } from 'react';

export const AppContext = createContext();

export const Provider = (props) => {
	const [ cart, setCart ] = useState([]);
	const [ total, setTotal ] = useState(0);

	useEffect(
		() => {
			totalPrice();
		},
		[ cart ]
	);

	useEffect(
		() => {
			console.log(total);
		},
		[ total ]
	);

	const totalPrice = () => {
		const price = cart.map((book) => book.price);
		const totalPrice = price.reduce((prev, curr) => prev + curr, 0);
		setTotal(totalPrice);
	};

	return <AppContext.Provider value={[ cart, setCart, total ]}>{props.children}</AppContext.Provider>;
};
