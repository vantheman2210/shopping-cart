import React, { useContext, useEffect } from "react"; 
import { useParams } from "react-router-dom";
import { AppContext } from "../AppContext";

const Checkout = () => { 
  const [cart, setCart] = useContext(AppContext);
useEffect(() => { 
  console.log(cart)
})
  return ( 
    <div>
      {cart.map(product => { 
        return ( 
          <div>
            <p>{product}</p>
          </div>
        )
      })}
    </div>
  )
}; 
export default Checkout;