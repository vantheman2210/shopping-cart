import React, { useContext, useEffect } from 'react';
import { AppContext } from '../AppContext';

const Checkout = () => {
	const [ cart, setCart, total ] = useContext(AppContext);
	useEffect(() => {
		console.log(cart);
	}, []);
	return (
		<div>
			{cart.map((product, i) => {
				return (
					<div key={i}>
						<p>{product.title}</p>
						<p>{`${product.price}$`}</p>
					</div>
				);
			})}
			<div>Total: {`${total}$`}</div>
		</div>
	);
};
export default Checkout;
