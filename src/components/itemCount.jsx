import React from 'react'
import { CartContext } from "../context/cartContext"
import { useContext, useState } from "react"

const ItemCount = ( prop ) => {
    const buttonAddStyle = "text-stone-50 rounded-xl bg-red-600 p-3 m-2" ;
    const numberInputStyle ="block";
    const [Cantidad, setCantidad] = useState();
    const { addToCart } = useContext(CartContext);
  
  return (
    <div>
        <input type="number" className={numberInputStyle} onChange={(e)=>{setCantidad(e.target.value)}} min={1} max={prop.item.stock}></input>
        <button className={buttonAddStyle} onClick={()=>{ addToCart(prop.item,Cantidad); prop.eventHandler();}}> Agregar al carro</button>
    </div>
  )
}
export default ItemCount;