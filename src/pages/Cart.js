import React from 'react';
import '../styles/Cart.css';
import { useParams } from 'react-router-dom';

const Cart = () => {
	const data = useParams();

	return (
		<div className="dropdown">
			<button className="dropdownBtn">Cart</button>
			<div className="dropContent">
				<p>This is cart</p>
			</div>
		</div>
	);
};

export default Cart;
