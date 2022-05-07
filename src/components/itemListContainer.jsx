import Itemlist from "./itemList";
import { useEffect, useState } from "react";



const ItemListContainer = (prop) =>{

    const cartStyle = "bg-gradient-to-r from-sky-500 to-indigo-500 p-4 m-2 text-center text-slate-100 font-medium rounded-xl";
    const [Productos, setProductos] = useState([]);
    const [cargado, setCargado] = useState(true)



    useEffect(() => {
        const getProductos = fetch("data/datosProductos.json");
            getProductos.then((response)=>{response.json()
            .then((data)=>{
                setTimeout(()=>{ 
                if(prop.type==="informaticos"){
                    setProductos(data.productos.filter( prod => prod.categoria === "informaticos"));
                } else if (prop.type==="electronicos") {
                    setProductos(data.productos.filter( prod => prod.categoria === "electronicos"));
                } else{
                    setProductos(data.productos); // Temporalmente se muestra en el inicio una lista con todos los productos
                }
                
                setCargado(false);
            },1500)})})
        }
    
    , [Productos]);



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
                
                <Itemlist data={Productos} type={prop.type}/>
            </>)

        }
        </>
        
    )

}

export default ItemListContainer;