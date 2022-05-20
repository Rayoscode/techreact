import ItemCount from "./itemCount"
import { useState} from "react"
import { Link } from "react-router-dom"


const ItemDetail = ({item}) => {

    const imgStyle= "w-80 h-80 inline-block "
    const modStyle ="text-3xl m-1 p-1 text-slate-900"
    const priceStyle="text-2xl m-1 p-1 text-slate-900"
    // const textStyle ="text-slate-900  m-1 p-1 text-lg"
    const dataContainerStyle =" p-10 m-10 flex flex-col"
    const haystockStyle ="text-stone-50 bg-green-500 text-lg rounded-xl p-1 m-2 text-center mx-10"
    const noHayStockStyle ="text-stone-50 bg-red-500 text-lg rounded-xl p-1 m-2 text-center mx-10"
    const buttonFinishStyle = "text-stone-50 rounded-xl bg-violet-600 p-3 m-2"
    
    function addedEventHandler (){
        setAddedItem(true);
    }

    const [AddedItem, setAddedItem] = useState(false)


    return( 
    <div className=" p-10 m-3 rounded-2xl  items-center justify-evenly flex flex-row">

            <img className={imgStyle} src={item.imagen} alt={item.modelo}/>
            <div className={dataContainerStyle}>
                <h1 className={modStyle}> {item.producto} {item.marca} {item.modelo}</h1>
                <h2 className={ priceStyle}> ${item.precio}</h2>
                <p className={ item.stock !== 0 ?  haystockStyle : noHayStockStyle} > Disponible: {item.stock}</p>
                {
                    AddedItem ?  
                    (<button><Link to="/cart" className={buttonFinishStyle}>Terminar Compra</Link>  </button> )
                    :
                    (<ItemCount item={item} eventHandler={addedEventHandler}/>)
                }
                
            </div>
    </div>
    );
}

export default ItemDetail;