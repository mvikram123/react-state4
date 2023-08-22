import React,{useState} from "react";

import Child from "./Child";




const Parent=()=>{
    let[cartItems,setCartItems]=useState([])
    const[itemName,setItemName]=useState("")
    const[itemPrice,setItemPrice]=useState("")
    // let[itemPrice,setItemPrice]=useState("")


    const addItemClick=()=>{

        if (itemName && itemPrice) {
           addItem(itemName, itemPrice);
           setItemName('');
           setItemPrice('');
            }
   }


    const addItem=(itemName,itemPrice)=>{
       
        const newItem={
            id:Date.now(),
            name:itemName,
            price:parseFloat(itemPrice)
        
    };
    setCartItems(prevCartItems=>[...prevCartItems,newItem]);
}

    const removeItem=(itemId)=>{
        const filteredItems = cartItems.filter(item=>item.id!=itemId)
        //console.log(itemId);
        //console.log(item.Id);
        

        setCartItems(filteredItems)


    }


    return (

        <div className="parent">
            <h2>Parent Component</h2>
            <input
    type="text"
    placeholder="Item Name"
   value={itemName}
    onChange={e => setItemName(e.target.value)}
   />
 <input
     type="number"
     placeholder="Item Price"
     value={itemPrice}
     onChange={e => setItemPrice(e.target.value)}
 />
       <button onClick={addItemClick}>Add Item</button>

           
            

            <Child cartItems={cartItems} addItem={addItem} removeItem={removeItem} />
            
        </div>
    )
}

export default Parent;