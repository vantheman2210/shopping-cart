import React from 'react';
import '../styles/Nav.css';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import { Provider } from '../AppContext';

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
				<div className="dropdown">
					<button className="dropdownBtn">Cart</button>
					<div className="dropContent">
						
						<Cart /> 
						
					</div>
				</div>
			</ul>
		</nav>
	);
};
export default Nav;
