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

	return (
		<div className='cart-list'>
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
			<div>{total === 0 ? 'Cart Empty' : total.toFixed(2)}</div>
			<Link to="/checkout">
				<button>Checkout</button>
			</Link>
		</div>
	);
};

export default Cart;
