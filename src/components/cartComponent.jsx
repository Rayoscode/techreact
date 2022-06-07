import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'
import { CartItem } from './cartItem'


export const CartComponent = () => {
  const {Cart} = useContext(CartContext);

  return (
    <div>
      {Cart.length == 0?
      (<>
        <p className='text-3xl text-zinc-100 m-7'>No se encuentra agregado ningun Producto </p>
        <Link to="/"> <button className="text-stone-50 rounded-xl bg-red-600 p-3 m-2  hover:bg-red-700 transition"> Volver al Inicio </button> </Link>
      </>) 
      :
      (<>
      <h1 className='text-3xl text-zinc-100 m-7'> Productos agregados al Carro </h1>
      <div>
        {Cart.map((Producto)=> (<CartItem Producto={Producto} key={Producto.id} /> ) )}
      </div>
      </>)
      
    }

      

    </div>
  )
}
