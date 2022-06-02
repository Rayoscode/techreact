
const Item = ({ProductoData}) =>{

    const itemDataStyle ="inline-block px-1 text-xl";
    const imgItemStyle="w-80 h-80 block object-scale-down inline-block ";
    const containerStyle="container rounded-xl w-96 h-96 bg-white text-center m-3 shadow-xl ";

    return(
        <>
            <div className={containerStyle}>
                <div className="text-center">
                    <img src={ProductoData.imagen} className={imgItemStyle}></img>
                </div>
                
                <div> 
                    <p className={itemDataStyle}>{ProductoData.producto} </p>
                    <p className={itemDataStyle}>{ProductoData.modelo}</p>
                    <p className={itemDataStyle}>${ProductoData.precio}</p>
                </div>
                
            </div>
        </>
    )
    
}

export default Item ;