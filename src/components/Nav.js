import React from 'react';
import '../styles/Nav.css';
import Cart from './Cart';
import { Link } from 'react-router-dom';


const Nav = () => {
	
	const onClick = () => {
		document.querySelector('.dropContent').classList.toggle('show');

	};

	return (
		<nav className="nav-bar">
			<div>Bookify</div>
			<ul className="nav-list">
				<Link to="/home" className="home">
					<li>Home</li>
				</Link>
				<Link to="/shop" className="shop">
					<li>Shop</li>
				</Link>
				<div className="dropdown">
					<div className="dropdownBtn" onClick={onClick}>
						CART
					</div>
					<div className="dropContent">
						<Cart />
					</div>
				</div>
			</ul>
		</nav>
	);
};
export default Nav;
