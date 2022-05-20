import React, { useContext } from 'react'
import {ReactComponent  as Cross} from '../cross.svg'
import { CartContext } from '../context/cartContext';
const textDataStyle = "inline-block text-2xl m-1 p-1 text-zinc-100 ";
const imgCartStyle ="w-80 h-80 inline-block";
const containerItemCartStyle ="container m-2 mx-3 p-2";
const iconCrossStyle ="w-5 h-5 text-zinc-100 inline-block cursor-pointer";


export const CartItem = ( Prop) => {
    const {deleteFromCart} = useContext(CartContext);
    console.log(Prop.Producto.Item.id)
  return (
    <div className={containerItemCartStyle}>
        <img className={imgCartStyle} src={Prop.Producto.Item.imagen}></img>
        <p className={textDataStyle}>{Prop.Producto.Item.producto}</p>
        <p className={textDataStyle}>{Prop.Producto.Item.marca}</p>
        <p className={textDataStyle}> {Prop.Producto.Item.modelo}</p>
        <p className={textDataStyle}> {Prop.Producto.Cantidad}</p>
        <p className={textDataStyle}>${Prop.Producto.Item.precio*Prop.Producto.Cantidad} </p>
        <Cross className={iconCrossStyle} onClick={()=> {deleteFromCart(Prop.Producto.Item.id)}}></Cross>
    </div>
  )
}
