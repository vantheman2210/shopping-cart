import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/BookPage.css';

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
			<div className="bookPageContainer">
				<img src={`https://covers.openlibrary.org/b/isbn/${isbn.id}-M.jpg`} alt="Book cover" />
				<p>
					<strong>Author:</strong> {book.volumeInfo.authors[0]}
				</p>
				<p>
					<strong>Publisher:</strong> {book.volumeInfo.publisher}
				</p>
				<p>
					<strong>Pages:</strong> {book.volumeInfo.pageCount}
				</p>
				<div className="description">
					<strong>Description:</strong>
					<p className="description-text">{book.volumeInfo.description}</p>
				</div>
			</div>
		);
	}
};

export default BookPage;
