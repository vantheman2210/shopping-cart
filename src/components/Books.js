import React, { useState, useEffect } from 'react';

const Books = () => {
	const [ books, setBooks ] = useState([]);
	const [ image, setImage ] = useState({});
	useEffect(() => {
		fetchBooks();
	}, []);

	const fetchBooks = async () => {
		const data = await fetch('https://www.googleapis.com/books/v1/volumes?q=subject:motivation&maxResults=10');

		const response = await data.json();
		setBooks(response.items);

		console.log(response);
	};

	return (
		<div className="book-container">
			{books.map((book) => {
				return (
					<div key={book.id} className="book">
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
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Books;
