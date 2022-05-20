
import Item from "./item"
import { Link } from "react-router-dom";

const Itemlist = (prop) => {

    return (
        <div className="flex flex-row flex-wrap">

            
            {prop.data.map((Producto)=> (<Link to={`/item/${Producto.id}` }> <Item key={Producto.id} ProductoData={Producto}></Item></Link>))} 
        </div>
    )

}

export default Itemlist;