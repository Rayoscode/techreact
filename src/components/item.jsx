
const Item = ({ProcesadoresData}) =>{

    
    return(
        <p className="m-1 my-2 px-1 pr-2 border-solid border-slate-900 shadow "> 
            <span> {ProcesadoresData.modelo}</span> {ProcesadoresData.marca} 
        </p>
    )
    
}

export default Item ;