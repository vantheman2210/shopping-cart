import React, {useState, createContext, useEffect} from "react"; 

export const AppContext = createContext();

export const Provider = (props) => { 
  
	const [cart, setCart] = useState([]);

	useEffect(() => { 
		console.log(cart)
	}, [cart])
 

  

  return (
    <AppContext.Provider value={[cart, setCart]}>
      {props.children}
    </AppContext.Provider>
  )
};