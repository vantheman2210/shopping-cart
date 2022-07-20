import React from "react"; 
import "../styles/Shop.css"
import Books from "../components/Books";
import { Provider } from "../AppContext";

const Shop = () => { 

  return ( 
    
    <div> 
      <h1>This is shop</h1> 
      <Provider>
      <Books/> 
      </Provider>
    </div> 
    
  )
};
export default Shop;