

const ItemDetail = ({item}) => {


    return( 
    <div className=" p-2 m-3 rounded-2xl">
        <img src={item.imagen} alt={item.modelo} className="inline-block"/>
        <div className="inline-block">
            <p> {item.modelo}</p>
            <p> {item.marca}</p>
            <p> {item.precio}</p>
            <p> Disponible: {item.stock}</p>
            <button> Agregar al carro</button>
        </div>
        
    </div>
    );
}

export default ItemDetail;