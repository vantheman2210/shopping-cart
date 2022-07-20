import React, {useState, createContext, useEffect} from "react"; 

export const AppContext = createContext();

export const Provider = (props) => { 
  const [ books, setBooks ] = useState([]);

	useEffect(() => {
		fetchBooks();

	}, []);;

	const fetchBooks = async () => {
		const data = await fetch('https://www.googleapis.com/books/v1/volumes?q=subject:motivation&maxResults=20');

		const response = await data.json();
		setBooks(response.items);

	}; 

  

  return (
    <AppContext.Provider value={[books, setBooks]}>
      {props.children}
    </AppContext.Provider>
  )
};