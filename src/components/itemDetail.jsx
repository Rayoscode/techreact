

const ItemDetail = ({item}) => {

    const imgStyle= "w-80 h-80 inline-block "
    const modStyle ="text-3xl m-1 p-1 text-slate-900"
    const priceStyle="text-2xl m-1 p-1 text-slate-900"
    const textStyle ="text-slate-900  m-1 p-1 text-lg"
    const dataContainerStyle ="inline-block p-10 m-10"
    

    return( 
    <div className=" p-10 m-3 rounded-2xl flex flex-row items-center justify-evenly ">
        <img className={imgStyle} src={item.imagen} alt={item.modelo}/>
        <div className={dataContainerStyle}>
            <h1 className={modStyle}> {item.producto} {item.marca} {item.modelo}</h1>
            <h2 className={priceStyle}> ${item.precio}</h2>
            <p  className={textStyle}> Disponible: {item.stock}</p>
            <button> Agregar al carro</button>
        </div>
        
    </div>
    );
}

export default ItemDetail;