import React, { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";

const BookPage = () => { 
  const isbn = useParams(); 
  const [book, setBook] = useState({});
  useEffect(() => { 
    fetchBooks()
    console.log(isbn)
  }, [])

  const fetchBooks = async () => {
		const data = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${isbn.id}`);

		const response = await data.json();
		
    setBook(response.items[0])
		console.log(response.items[0]);
	}; 
}

export default BookPage;