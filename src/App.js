import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Nav from './pages/Nav';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

function App() {
	return (
		<main>
			<Nav />
			<Routes>
				<Route path="/" exact element={<Homepage />} />
				<Route path="/home" element={<Homepage />} />
				<Route path="/shop" element={<Shop />} /> 
        <Route path="/cart" element={<Cart />} />
			</Routes>
		</main>
	);
}

export default App;
