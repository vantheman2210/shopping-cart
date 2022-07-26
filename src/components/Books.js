import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';
const Books = () => {
	const [ books, setBooks ] = useState([]);
	const [ cart, setCart ] = useContext(AppContext);

	useEffect(() => {
		fetchBooks();
		
	}, []);

	useEffect(() => { 
		console.log(books)
	}, [books])

	const fetchBooks = async () => {
		const data = await fetch('data.json');

		const response = await data.json();
		setBooks(response);
	};

	const onClick = (e) => {
		const bookId = parseInt(e.target.id) + 1;
		console.log(bookId)
		const bookDuplicate = cart.find((book) => {
			if (book.id === bookId) {
				book.quantity += 1;
				return true;
			}
			return false;
		});

		if (!bookDuplicate) {
			setCart([...cart, books[e.target.id]]);
		}
	};

	return (
		<div className="book-container">
			{books.map((book, i) => {
				return (
					<div key={book.id}>
						<Link to={book.bookId}>
							<div className="book">
								<img className="bookCover" src={''} alt="book cover" />
								<div className="bookInfo">
									<p>{book.title}</p>
									<p>by {book.author}</p>
									<p>Publisher: {book.publisher}</p>
									<p className="price">{`${book.price}$`}</p>
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

/**
 

<img
									className="bookCover"
									src={
										book === undefined ? (
											''
										) : (
											`${book}`
										)
									}
									alt="book cover"
								/>
 */

/*
									const onClick = (e) => {
		console.log(e.target);
		console.log(books.id)
		setCart([...cart, books[e.target.id]])
}
								*/
