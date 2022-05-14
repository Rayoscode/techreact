import Itemlist from "./itemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const ItemListContainer = (prop) =>{

    const cartStyle = "bg-gradient-to-r from-sky-500 to-indigo-500 p-4 m-2 text-center text-slate-100 font-medium rounded-xl";
    const [Productos, setProductos] = useState([]);
    const [cargado, setCargado] = useState(true)
    const {typeId} = useParams();


    useEffect(() => {
        setCargado(true);
        console.log("paso por aca")
        const getProductos = fetch("/data/datosProductos.json");
        setTimeout(()=>{
            getProductos.then((response)=>{setCargado(true);response.json()
            .then((data)=>{
                    
                    console.log(typeId);
                    console.log("paso por aca")
                if(typeId==="informaticos"){
                    setProductos(data.productos.filter( prod => prod.categoria === "informaticos"));
                } else if (typeId==="electronicos") {
                    setProductos(data.productos.filter( prod => prod.categoria === "electronicos"));
                } else{
                    setProductos(data.productos); // Temporalmente se muestra en el inicio una lista con todos los productos
                }
                setCargado(false);
            })})
        },2000);
        },[typeId]);
    



    return (
        <>
        <div className={cartStyle}>
            {prop.greetings}
        </div>
        {
            cargado ? 
            (<>
                <p className="bg-zinc-100 w-1/2 p-2 m-3 rounded-2xl"> Cargando...</p>
            </>)
            :
            (<>
                <Itemlist data={Productos} type={typeId}/>
            </>)

        }
        </>
        
    )

}

export default ItemListContainer;