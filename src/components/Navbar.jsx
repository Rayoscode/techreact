import Cartwidget from "./cartWidget";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import CategoriesList from "./categoriesList";

const liStyle ="p-2 pl-3 pr-3 ml-2 mr-2 cursor-pointer hover:bg-zinc-100 hover:text-zinc-900 rounded-2xl transition-colors";
function Navbar () {

    const [Data, setData] = useState([]);
    const [LoadType, setLoadType] = useState(true);
    useEffect(()=>{
        const getDatos = fetch("/data/datosProductos.json");
        getDatos.then((response)=>{
            response.json()
            .then((datos)=>{
                setData(datos);
                setLoadType(false);
                
            })
        })


    },[])


    return(
    <>
        <nav className="flex flex-row bg-gray-800 text-gray-200 items-center">
            <Link to="/"><Cartwidget/></Link>
            <ul className="flex flex-row gap-3">
                <Link to="/"><li className={liStyle}> Inicio </li></Link>
                {
                LoadType ?
                (<>


                </>)
                :
                (<>
                    {Data.type.map((Dato)=>( <li  key={Dato.id} className={liStyle} > <Link  to={`/productos/${Dato.name}` }><p>{Dato.name} </p>  <CategoriesList categorias={Data.categoryProduct}/> </Link></li>))}
                </>)

                }
                <li className={liStyle}> Contacto  </li>
            </ul>
        </nav>

    </>
    )
}
export default Navbar