import React, { useState, createContext, useEffect } from 'react';

export const AppContext = createContext();

export const Provider = (props) => {
	const [ cart, setCart ] = useState([]);
	const [ total, setTotal ] = useState(0);

	useEffect(
		() => {
			totalPrice();
			quantityUpdate();
		},
		[ cart ]
	);

	useEffect(
		() => {
			console.log(total);
		},
		[ total ]
	);

	const manageQuantity = (e) => {
		const value = e.target.value;
		const cartBook = cart[e.target.id];
		value === '-' ? (cartBook.quantity -= 1) : (cartBook.quantity += 1);
		setCart([ ...cart ]);
	};

	const quantityUpdate = () => {
		const updatedCart = cart.filter((book) => book.quantity >= 1);
		cart.find((book) => {
			if (book.quantity < 1) {
				setCart(updatedCart);
			}
			return false;
		});
	};

	const totalPrice = () => {
		const price = cart.map((book) => book.price);
		const quantity = cart.map((book) => book.quantity);
		const totalPrice = price.reduce((prev, curr, i) => prev + curr * quantity[i], 0);
		setTotal(totalPrice);
	};

	return <AppContext.Provider value={[ cart, setCart, total, manageQuantity ]}>{props.children}</AppContext.Provider>;
};
