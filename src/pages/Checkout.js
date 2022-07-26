import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

const Checkout = () => {
	const [ cart, setCart, total, manageQuantity ] = useContext(AppContext);

	return (
		<div>
			{cart.map((product, i) => {
				return (
					<div key={i}>
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
				);
			})}
			<div>Total: {`${total.toFixed(2)}$`}</div>
		</div>
	);
};
export default Checkout;
