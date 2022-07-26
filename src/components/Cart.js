import React, { useEffect, useContext } from 'react';
import { AppContext } from '../AppContext';
import { Link } from 'react-router-dom';

const Cart = () => {
	const [ cart, setCart, total ] = useContext(AppContext);

	

	useEffect(
		() => {
			console.log(cart)
		},
		[ cart ]
	);


	const deleteBook = (e) => {
		const id = Number(e.target.id);
		const newCart = cart.filter((cartBook) => cartBook.id !== id)
		setCart(newCart);
	};

	return (
		<div>
			{cart.map((cartBook, i) => {
				return (
					<div key={i}>
						<p>{cartBook.title}</p>
						<p>Quantity:</p>
						<button id={cartBook.id} onClick={deleteBook}>
							Remove
						</button>
					</div>
				);
			})}
			<div>{total === 0 ? 'Cart Empty' : total.toFixed(2)}</div>
			<Link to="/checkout">
				<button>Checkout</button>
			</Link>
		</div>
	);
};

export default Cart;
