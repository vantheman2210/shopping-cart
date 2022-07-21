import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';
const Books = () => {
	const [ books, setBooks ] = useState([]);
	const [ cart, setCart ] = useContext(AppContext);

	useEffect(() => {
		fetchBooks();
	}, []);

	const fetchBooks = async () => {
		const data = await fetch('https://www.googleapis.com/books/v1/volumes?q=subject:motivation&maxResults=20');

		const response = await data.json();
		setBooks(response.items);
	};
	const onClick = (e) => {
		
		console.log(e.target.parentNode)
		setCart([ ...cart, e.target.id ]);
	};

	const price = () => {
		return (Math.random() * 29.99 + 1.99).toFixed(2) + '$';
	};

	return (
		<div className="book-container">
			{books.map((book, i) => {
				return (
					<div key={book.id}>
						<Link to={book.volumeInfo.industryIdentifiers[0].identifier}>
							<div  className="book">
								<img
									className="bookCover"
									src={
										book.volumeInfo.imageLinks === undefined ? (
											''
										) : (
											`${book.volumeInfo.imageLinks.thumbnail}`
										)
									}
									alt="book cover"
								/>
								<div className="bookInfo">
									<p>{book.volumeInfo.title}</p>
									<p>by {book.volumeInfo.authors}</p>
									<p>Publisher: {book.volumeInfo.publisher}</p>
									<p className="price">{price()}</p>
								</div>
							</div>
						</Link>
						<button id={i} onClick={onClick}>
							Add to Cart
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default Books;
