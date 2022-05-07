
const Item = ({ProductoData}) =>{

    
    return(
        <p className="m-1 my-2 px-1 pr-2 border-solid border-slate-900 shadow "> 
            <span>{ProductoData.producto} {ProductoData.modelo}</span> {ProductoData.marca} 
        </p>
    )
    
}

export default Item ;