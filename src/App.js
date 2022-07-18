import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Nav from './components/Nav';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Footer from './components/Footer';

function App() {
	return (
		<main className='container'>
			<Nav />
			<Routes>
				<Route path="/" exact element={<Homepage />} />
				<Route path="/home" element={<Homepage />} />
				<Route path="/shop" element={<Shop />} /> 
        <Route path="/cart" element={<Cart />} />
			</Routes>
      <Footer/>
		</main>
	);
}

export default App;
