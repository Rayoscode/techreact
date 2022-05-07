
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./itemDetail";

const ItemDetailContainer = () =>{

    const [Producto, setProducto] = useState();
    const [Load, setLoad] = useState(true);
    const {prodId} =  useParams();
    useEffect(() => {
        
        const getProductos = fetch("/data/datosProductos.json");
        setTimeout(()=>{  
            getProductos.then((response)=>{response.json()
            .then((data)=>{
                let prod = data.productos.find((valor)=>{ return valor.id === prodId});
                if(prod === undefined){
                    console.log("Error");
                } else {
                    setProducto(prod);
                    setLoad(false);
                }
                
            })})
        },1500);
    
    }, [Producto]);

    

    return(
        
        <div className="bg-zinc-100 m-10 rounded-2xl">
            { Load ?
            (<div> Cargando....</div>) 
            :
            (<ItemDetail item={Producto} />)}
            
        </div>
    );
}


export default ItemDetailContainer;