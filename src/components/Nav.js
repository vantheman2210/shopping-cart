import React, { useEffect } from 'react';
import '../styles/Nav.css';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

const Nav = () => {
	const [ cart, setCart, total, manageQuantity, quantity ] = useContext(AppContext);

	const onClick = () => {
		document.querySelector('.dropContent').classList.toggle('show');
	};

	return (
		<nav className="nav-bar">
			<div className="logoContainer">
			<p className="logo">Bookify</p>
			</div>
			<ul className="nav-list">
				<Link to="/home" className="home">
					<li>Home</li>
				</Link>
				<Link to="/shop" className="shop">
					<li>Shop</li>
				</Link>
				<div className="dropdown">
					<div className="dropdownBtn" onClick={onClick}>
						<img rel="icon" type="image/png" src="../shopping-cart.png" alt="cart icon" />
						<span className="badge">{quantity}</span>
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
