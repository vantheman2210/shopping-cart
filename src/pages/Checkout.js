import React, { useContext, useEffect } from 'react';
import { AppContext } from '../AppContext';
import  '../styles/Checkout.css'
import { useParams } from 'react-router-dom';

const Checkout = () => {
	const [ cart, setCart, total, manageQuantity ] = useContext(AppContext);
	const data = useParams();

	useEffect(() => { 
		console.log(cart);
	}, [data])
	return (
		<div className="checkoutContainer">
			
			{cart.map((product, i) => {
				return (
					<main className="checkoutMain">
					<img
							className="checkoutCover"
							src={`https://covers.openlibrary.org/b/isbn/${product.isbn}-M.jpg`}
							alt="book cover"
						/>
					<div key={i} className="checkoutInfo">
						<p>{product.title}</p>
						<p>
							Quantity:
							<span>
								<button id={i} onClick={manageQuantity} value="-">
									-
								</button>
							</span>
							{product.quantity}
							<span>
								<button id={i} onClick={manageQuantity} value="+">
									+
								</button>
							</span>
						</p>
						<p>{`${product.price}$`}</p>
					</div>
					</main>
				);
			})}
			<div className="checkoutTotal">Total: {`${total.toFixed(2)}$`}</div>
		</div>
	);
};
export default Checkout;
