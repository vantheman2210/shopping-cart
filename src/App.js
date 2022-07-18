import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Nav from './pages/Nav';
import Shop from './pages/Shop';

function App() {
	return (
		<main>
			<Nav />
			<Routes>
				<Route path="/" element={<Navigate to="/" replace />} />
				<Route path="/home" element={<Homepage />} />
				<Route path="/shop" element={<Shop />} />
			</Routes>
		</main>
	);
}

export default App;
