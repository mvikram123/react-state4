import React, { useState } from "react";



const Child=({cartItems,addItem,removeItem})=>{

   
    const[itemPrice,setItemPrice]=useState("")

    return(

        <div className="child">
            <h3>Child Component</h3>
            <ul>
             {cartItems.map((item,index) => (
               <li key={item.id}>
       
              <span id="itemName">{item.name} - </span> 
              {/* <span>{index+1} - </span> */}
              <span id="itemPrice">${item.price}</span>
            {/* <button onClick={() => removeItem(item.id)}>Remove</button> */}
            <button onClick={()=>removeItem(item.id)}>Remove</button>
         </li>

 ))}
 </ul>
            

  

 </div>
    )
}

export default Child;