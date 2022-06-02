import React, { useEffect,useState } from 'react'
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { ElementosCategorias } from './elementosCategorias';
const CategoriesList = ({category}) => {


  const listStyle = "ulHija";

  const [ListaCategorias, setListaCategorias] = useState([]);
  const [Load, setLoad] = useState(true)
  useEffect(()=>{
        const storage = getFirestore();
        const colection = "EVRwTtlrk1teSYqYaFTj";
        const ProductosDoc = doc(storage,'CategoriasTipo',colection);
        getDoc(ProductosDoc).then((res)=>{
            const data = res.data();
            setListaCategorias(data);
            setLoad(false);
          })
  },[])

  return (
    <ul className={listStyle}>

    { 
      Load? 
      (<></>)
      :
      (
        <ElementosCategorias category={category} arrayCat={ListaCategorias} ></ElementosCategorias>
      )


    }

    </ul>
  )
}

export default CategoriesList