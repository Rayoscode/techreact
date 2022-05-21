import Cartwidget from "./cartWidget";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import CategoriesList from "./categoriesList";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const liStyle ="p-2 pl-3 pr-3 ml-2 mr-2 cursor-pointer hover:bg-zinc-100 hover:text-zinc-900 rounded-2xl transition-colors";
function Navbar () {

    const [Data, setData] = useState([]);
    const [LoadType, setLoadType] = useState(true);
    useEffect(()=>{
        const storage = getFirestore();
        const colection = "ufQkOb0s6CTTPjMLoy04";
        const ProductosDoc = doc(storage,'CategoriasTipo',colection);
        getDoc(ProductosDoc).then((res)=>{
            const data = res.data();
            setData(data.Categorias);
            setLoadType(false);
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
                    {Data.map((Dato)=>( <li   className={liStyle} > <Link  to={`/productos/${Dato}` }><p>{Dato} </p>  <CategoriesList categorias={Data.categoryProduct}/> </Link></li>))}
                </>)

                }
                <li className={liStyle}> Contacto  </li>
            </ul>
        </nav>

    </>
    )
}
export default Navbar