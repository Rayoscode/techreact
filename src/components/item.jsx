
const Item = ({ProductoData}) =>{

    const itemDataStyle ="";
    const imgItemStyle="w-80 h-80 block";

    return(
        <>
            <div className="container rounded-xl w-96 h-96 ">
                <img src={ProductoData.imagen} className={imgItemStyle}></img>
                <div> 
                    <p className={itemDataStyle}>{ProductoData.producto} </p>
                    <p className={itemDataStyle}>{ProductoData.modelo}</p>
                    <p className={itemDataStyle}>{ProductoData.precio}</p>
                </div>
                
            </div>
        </>
    )
    
}

export default Item ;