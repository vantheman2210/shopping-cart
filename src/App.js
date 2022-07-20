import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Nav from './components/Nav';
import Shop from './pages/Shop';
import Footer from './components/Footer';
import BookPage from './pages/BookPage';

function App() {
	return (
		<main className="container">
			<Nav />
			<Routes>
				<Route path="/" exact element={<Homepage />} />
				<Route path="/home" element={<Homepage />} />

				<Route exact path="/shop" element={<Shop />} />
				<Route path="/shop/:id" element={<BookPage />} />
			</Routes>
			<Footer />
		</main>
	);
}

export default App;
