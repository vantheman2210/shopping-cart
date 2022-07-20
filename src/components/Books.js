import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext'
const Books = () => {
	
const [books, setBooks] = useContext(AppContext);

	const onClick = (e) => { 
		console.log('clicked')
	}

	const price = () => { 
    return ((Math.random() * 29.99 ) + 1.99).toFixed(2) + "$";
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
              <p className='price'>{price()}</p>
						</div> 
						</div>
						</Link> 
						<Link to={`/cart/${i}`} state={book}>
						<button id={i} onClick={onClick}>Add to Cart</button> 
						</Link>
						</div> 
				);
			})}
		</div>
	);
};

export default Books;
