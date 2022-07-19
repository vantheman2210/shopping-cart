import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Books = () => {
	const [ books, setBooks ] = useState([]);

	useEffect(() => {
		fetchBooks();
	}, []);

	const fetchBooks = async () => {
		const data = await fetch('https://www.googleapis.com/books/v1/volumes?q=subject:motivation&maxResults=20');

		const response = await data.json();
		setBooks(response.items);

		console.log(response);
	}; 

  const price = () => { 
    return ((Math.random() * 29.99 ) + 1.99).toFixed(2);
  }

	const onClick = (e) => { 
		console.log(books[e.target.id]['id'])
		console.log(books[e.target.id]);
	}

	return (
		<div className="book-container">
			{books.map((book, i) => {
				return (
					<div>
					<Link to={book.volumeInfo.industryIdentifiers[0].identifier}>
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
              <p>{`${price()}$`}</p>
						</div> 
						</div>
						</Link> 
						<Link to="/cart">
						<button id={i} onClick={onClick}>Add to Cart</button> 
						</Link>
						</div> 
				);
			})}
		</div>
	);
};

export default Books;
