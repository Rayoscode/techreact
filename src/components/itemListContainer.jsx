import Itemlist from "./itemList";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";



const ItemListContainer = () =>{

    const [Productos, setProductos] = useState([]);
    const [cargado, setCargado] = useState(true)
    const {typeId, categoryId} = useParams();

    useEffect(() => {
        setCargado(true);
        const storage = getFirestore();
        const colection = "pjE54LMIY2LcTa1JIHA2";
        const ProductosDoc = doc(storage,'CategoriasTipo',colection);
        getDoc(ProductosDoc).then((res)=>{
            const data = res.data();
            console.log(categoryId);
            if(typeId !== undefined){
                if(categoryId !== undefined){
                    setProductos(data.Productos.filter( prod => prod.categoriaFilter === categoryId));
                } else {
                    setProductos(data.Productos.filter( prod => prod.categoria === typeId));
                }
            } else {
                setProductos(data.Productos); 
            }
            setCargado(false);
        })
        },[typeId,categoryId]);
    



    return (
        <>
        {
            cargado ? 
            (<>
                <p className="bg-zinc-100 w-1/2 p-2 m-3 rounded-2xl"> Cargando...</p>
            </>)
            :
            (<> 
                <div className="bg-zinc-100 w-100 p-2 m-3 rounded-2xl"> 
                    <h2 className="m-1 p-2 text-2xl">Lista de productos {typeId}</h2>
                    <Itemlist data={Productos} type={typeId}/>

                </div>
            </>)

        }
        </>
        
    )

}

export default ItemListContainer;