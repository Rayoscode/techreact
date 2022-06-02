import React from 'react'

const LiStyle="inline-block p-2 mx-3 cursor-pointer";

export const ElementosCategorias = ({category, arrayCat}) => {
  return (
    <>
    {
        category === "informaticos"?
        arrayCat.CategoriasInformaticos.map((categoria)=>(<li className={LiStyle}> {categoria} </li>))
        :
        arrayCat.CategoriasElectronicos.map((categoria)=>(<li className={LiStyle}> {categoria} </li>))
    }
    </>
  )
}
