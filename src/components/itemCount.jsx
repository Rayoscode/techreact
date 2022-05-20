import React from 'react'
import { CartContext } from "../context/cartContext"
import { useContext, useState } from "react"

const ItemCount = ( prop ) => {
    const buttonAddStyle = "text-stone-50 rounded-xl bg-red-600 p-3 m-2  hover:bg-red-700 transition" ;
    const numberInputStyle ="block p-5";
    const [Cantidad, setCantidad] = useState();
    const { addToCart } = useContext(CartContext);
  
  return (
    <div>
      <div className={numberInputStyle}>
        <label for="cantidad">Cantidad:</label>
        <input type="number" name='cantidad'  onChange={(e)=>{setCantidad(e.target.value)}} min={1} max={prop.item.stock}></input>

      </div>
        <button className={buttonAddStyle} onClick={()=>{ addToCart(prop.item,Cantidad); prop.eventHandler();}}> Agregar al carro</button>
    </div>
  )
}
export default ItemCount;