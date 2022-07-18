import React, { useState, useEffect } from 'react';

const Books = () => {
	const [ books, setBooks ] = useState([]);
	const [ image, setImage ] = useState({});
	useEffect(() => {
		fetchBooks();
	}, []);

	const fetchBooks = async () => {
		const data = await fetch('https://www.googleapis.com/books/v1/volumes?q=subject:adventure&maxResults=10');

		const response = await data.json();
		setBooks(response.items);

		console.log(response);
	};

	return (
		<div>
			{books.map((book) => {
				return (
					<div key={book.id}>
						<img
							src={
								book.volumeInfo.imageLinks === undefined ? (
									''
								) : (
									`${book.volumeInfo.imageLinks.thumbnail}`
								)
							}
						/>
						<p>{book.volumeInfo.title}</p>
						<p>by {book.volumeInfo.authors}</p>
						<p>Publisher: {book.volumeInfo.publisher}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Books;
