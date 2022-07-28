import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = () => {
	const [ cart, setCart, total, manageQuantity ] = useContext(AppContext);

	const deleteBook = (e) => {
		const id = Number(e.target.id);
		const newCart = cart.filter((cartBook) => cartBook.id !== id);
		setCart(newCart);
	};

	const onClick = () => {
		document.querySelector('.dropContent').classList.toggle('show');
	};

	return (
		<div className="cart-list">
			<h2>Your Shopping Cart</h2>
			{cart.map((cartBook, i) => {
				return (
					<div className="cartContainer">
						<img
							className="cartCover"
							src={`https://covers.openlibrary.org/b/isbn/${cartBook.isbn}-S.jpg`}
							alt="book cover"
						/>
						<div key={i}>
							<div className="bookCards">
								<p>
									{cartBook.title}
									<br />
									<p>${cartBook.price.toFixed(2)}</p>
								</p>

								<div className="quantity">
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
								</div>
								<button id={cartBook.id} onClick={deleteBook}>
									Remove
								</button>
							</div>
						</div>
					</div>
				);
			})}
			<p>Total: ${total.toFixed(2)}</p>
			<Link to="/checkout">
				<button className="checkout">CHECKOUT</button>
			</Link>
			<button onClick={onClick} className="close">
				CLOSE
			</button>
		</div>
	);
};

export default Cart;
