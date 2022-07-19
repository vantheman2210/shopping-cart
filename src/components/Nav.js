import React from 'react';
import '../styles/Nav.css';
import Cart from '../pages/Cart';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav className="nav-bar">
			<div>Bookify</div>
			<ul className="nav-list">
				<Link to="/home">
					<li>Home</li>
				</Link>
				<Link to="/shop">
					<li>Shop</li>
				</Link>
				<Cart />
			</ul>
		</nav>
	);
};
export default Nav;
