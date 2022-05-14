
import Item from "./item"
import { Link } from "react-router-dom";

const Itemlist = (prop) => {

    return (
        <div className="bg-zinc-100 w-1/2 p-2 m-3 rounded-2xl">

            <h2 className="m-1 p-2 text-2xl">Lista de productos {prop.type}</h2>
            {prop.data.map((Producto)=> (<Link to={`/item/${Producto.id}` }> <Item key={Producto.id} ProductoData={Producto}></Item></Link>))} 
        </div>
    )

}

export default Itemlist;