import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Link } from 'react-router-dom';
import  '../styles/Cart.css'

const Cart = () => {
	const [ cart, setCart, total, manageQuantity ] = useContext(AppContext);

	const deleteBook = (e) => {
		const id = Number(e.target.id);
		const newCart = cart.filter((cartBook) => cartBook.id !== id);
		setCart(newCart);
	};

	const onClick = () => { 
		document.querySelector('.dropContent').classList.toggle('show');
	}

	return (
		<div className='cart-list'>
			<h2>Your Shopping Cart</h2>
			{cart.map((cartBook, i) => {
				return (
					<div key={i}>
						<p>{cartBook.title}</p>
						<p>
							Quantity:
							<span>
								<button id={i} onClick={manageQuantity} value="-">
									-
								</button>
							</span>
							{cartBook.quantity}
							<span>
								<button id={i} onClick={manageQuantity} value="+">
									+
								</button>
							</span>
						</p>
						<button id={cartBook.id} onClick={deleteBook}>
							Remove
						</button>
					</div>
				);
			})}
			<div>Total: {total.toFixed(2)}$</div>
			<Link to="/checkout">
				<button className='checkout'>CHECKOUT</button> 
			</Link> 
			<button onClick={onClick} className="close">CLOSE</button>
		</div>
	);
};

export default Cart;
