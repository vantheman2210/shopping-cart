import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookPage = () => {
	const isbn = useParams();
	const [ book, setBook ] = useState({});

	useEffect(() => {
		fetchBooks();
	}, []);

	const fetchBooks = async () => {
		const data = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${isbn.id}`);

		const response = await data.json();

		setBook(response.items[0]);
	};

	if (book.volumeInfo !== undefined) {
		return (
			<div>
				<img src={`https://covers.openlibrary.org/b/isbn/${isbn.id}-M.jpg`} alt="Book cover" />
				<p>Author: {book.volumeInfo.authors[0]}</p>
				<p>Pages: {book.volumeInfo.pageCount}</p>
				<div>
					Description:
					<p>{book.volumeInfo.description}</p>
				</div>
			</div>
		);
	}
};

export default BookPage;
