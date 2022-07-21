import React, {useState, useEffect, useContext} from "react";
import { AppContext } from "../AppContext";
import { Link } from "react-router-dom";

const Cart = () => { 
  const [cart, setCart] = useContext(AppContext)

  useEffect(() => { 
    console.log(cart) 
    
  }, [cart])

  return ( 
    <div> 
      {cart.map(product => { 
        return ( 
          <p>{product}</p>
        )
      })}
      <Link to="/checkout">
      <button>Checkout</button> 
      </Link>
    </div>
  )
}; 

export default Cart;