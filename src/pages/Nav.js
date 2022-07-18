import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav className='nav-bar'>
      <div>Logo</div>
			<ul>
				<Link to="/home">
					<li>Home</li>
				</Link>
				<Link to="/shop">
					<li>Shop</li>
				</Link> 
        <Link to="/cart">
					<li>Cart</li>
				</Link>
			</ul>
		</nav>
	);
};
export default Nav;
