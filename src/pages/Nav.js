import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav>
			<ul>
				<Link to="/home">
					<li>Home</li>
				</Link>
				<Link to="/shop">
					<li>Shop</li>
				</Link>
			</ul>
		</nav>
	);
};
export default Nav;
