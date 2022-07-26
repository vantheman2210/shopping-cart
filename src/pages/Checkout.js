import React, { useContext, useEffect } from 'react';
import { AppContext } from '../AppContext';

const Checkout = () => {
	const [ cart, setCart, total ] = useContext(AppContext);

	useEffect(
		() => {
			console.log(cart);
		},
		[ cart ]
	);

	return (
		<div>
			{cart.map((product, i) => {
				return (
					<div key={i}>
						<p>{product.title}</p>
						<p>Quantity:
							<span>-</span>
							{product.quantity}
							<span>+</span>
							</p>
						<p>{`${product.price}$`}</p>
					</div>
				);
			})}
			<div>Total: {`${total.toFixed(2)}$`}</div>
		</div>
	);
};
export default Checkout;
