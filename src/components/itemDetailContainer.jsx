
import { doc,getDoc, getFirestore } from "firebase/firestore";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./itemDetail";

const ItemDetailContainer = () =>{

    const [Producto, setProducto] = useState();
    const [Load, setLoad] = useState(true);
    const {prodId} =  useParams();
    useEffect(() => {
        
            const storage = getFirestore();
            const colection = "pjE54LMIY2LcTa1JIHA2";
            const ProductosDoc = doc(storage,"CategoriasTipo",colection);
            getDoc(ProductosDoc).then((res)=>{
                const data = res.data();
                console.log(data);
                let prod = data.Productos.find((valor)=>{ return valor.id === prodId});
                if(prod === undefined){
                    console.log("Error");
                } else {
                    setProducto(prod);
                    setLoad(false);
                }
                
            })
        },[])    
    
    

    

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