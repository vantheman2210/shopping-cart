import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';
const Books = () => {
	const [ books, setBooks ] = useState([]);
	const [ cart, setCart ] = useContext(AppContext);

	useEffect(() => {
		fetchBooks();
	}, []);

	useEffect(() => {}, [ books ]);

	const fetchBooks = async () => {
		const data = await fetch('data.json');

		const response = await data.json();
		setBooks(response);
	};

	const onClick = (e) => {
		const bookId = parseInt(e.target.id) + 1;

		const bookDuplicate = cart.find((book) => {
			if (book.id === bookId) {
				book.quantity += 1;
				setCart([ ...cart ]);
				return true;
			}
			return false;
		});

		if (!bookDuplicate) {
			books[e.target.id].quantity = 1;
			setCart([ ...cart, books[e.target.id] ]);
		}
	};

	return (
		<div className="book-container">
			{books.map((book, i) => {
				return (
					<div key={book.id} className="bookCard">
						<Link to={book.isbn.toString()}>
							<div className="book">
								<img
									className="bookCover"
									src={`https://covers.openlibrary.org/b/isbn/${book.isbn}.jpg`}
									alt="book cover"
								/>
								<div className="bookInfo">
								<p>{book.title}</p>
								<p>by {book.author}</p>
								
								<p className="price">{`$${book.price.toFixed(2)}`}</p>
							</div>
							</div>
						</Link>
						<button className="addToCart" id={i} onClick={onClick}>
							ADD TO CART
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
											`https://covers.openlibrary.org/b/isbn/9780385472579.jpg`
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
