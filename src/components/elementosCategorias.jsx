import React from 'react'
import { Link } from 'react-router-dom';
const LiStyle="inline-block p-2 mx-3 cursor-pointer";

export const ElementosCategorias = ({category, arrayCat}) => {
  return (
    <>
    {
        category === "informaticos"?
        arrayCat.CategoriasInformaticos.map((categoria)=>(<li> <Link className={LiStyle} to={`/productos/${category}/${categoria}` }>{categoria}</Link>  </li>))
        :
        arrayCat.CategoriasElectronicos.map((categoria)=>(<li > <Link className={LiStyle}to={`/productos/${category}/${categoria}` }>{categoria}</Link> </li>))
    }
    </>
  )
}
