import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Nav from './components/Nav';
import Shop from './pages/Shop';
import Footer from './components/Footer';
import BookPage from './pages/BookPage';
import Checkout from './pages/Checkout';
import { Provider } from './AppContext';

function App() {
	return (
		<main className="container">
			<Provider>
			<Nav /> 
			
			<Routes>
				<Route path="/" exact element={<Homepage />} />
				<Route path="/home" element={<Homepage />} />

				<Route exact path="/shop" element={<Shop />} />
				<Route path="/shop/:id" element={<BookPage />} /> 
				<Route path="/checkout" element={<Checkout />} />
			</Routes>
			<Footer /> 
			</Provider>
		</main>
	);
}

export default App;
