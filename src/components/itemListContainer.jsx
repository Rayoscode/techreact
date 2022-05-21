import Itemlist from "./itemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";


const ItemListContainer = () =>{

    const [Productos, setProductos] = useState([]);
    const [cargado, setCargado] = useState(true)
    const {typeId} = useParams();


    useEffect(() => {
        setCargado(true);
        const storage = getFirestore();
        const colection = COLLECTIONID;
        const ProductosDoc = doc(storage,'CategoriasTipo',colection);
        getDoc(ProductosDoc).then((res)=>{
            const data = res.data();
            if(typeId==="informaticos"){
                    setProductos(data.Productos.filter( prod => prod.categoria === "informaticos"));
                } else if (typeId==="electronicos") {
                    setProductos(data.Productos.filter( prod => prod.categoria === "electronicos"));
                } else{
                    setProductos(data.Productos); // Temporalmente se muestra en el inicio una lista con todos los productos
                }
                setCargado(false);
        })
        // .then((dataBlob)=>{ console.log(dataBlob)})
        // setTimeout(()=>{
        //     getProductos.then((response)=>{setCargado(true);response.json()
        //     .then((data)=>{
                
        //     })})
        // },2000);
        },[typeId]);
    



    return (
        <>
        {
            cargado ? 
            (<>
                <p className="bg-zinc-100 w-1/2 p-2 m-3 rounded-2xl"> Cargando...</p>
            </>)
            :
            (<> 
                <div className="bg-zinc-100 container p-2 m-3 rounded-2xl"> 
                    <h2 className="m-1 p-2 text-2xl">Lista de productos {typeId}</h2>
                    <Itemlist data={Productos} type={typeId}/>

                </div>
            </>)

        }
        </>
        
    )

}

export default ItemListContainer;