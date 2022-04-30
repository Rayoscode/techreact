import { useEffect, useState } from "react";
import {Procesadores as ProcesadoresData} from "../data/procesadoresData"
import Item from "./item"

const Itemlist= () => {
const [proc, setProc] = useState([]);
const [cargado, setCargado] = useState(true)
    useEffect(() => {
        const getProcesadores = new Promise ((resolve,reject) => {
            setTimeout( () => { resolve(ProcesadoresData)
                                setCargado(false)},1500) ;
                            })
        getProcesadores.then( (result) => {
            setProc(result);
        });
    
    }, []);
    
    if(cargado){
        return(<p className="bg-zinc-100 w-1/2 p-2 m-3 rounded-2xl"> Cargando...</p>);
        
    } else {
        return(
            
        <div className="bg-zinc-100 w-1/2 p-2 m-3 rounded-2xl">
            <h2 className="m-1 p-2 text-2xl ">Lista de Procesadores</h2>
            {proc.map( Procesador => <Item key={Procesador.id} ProcesadoresData={Procesador} />)}
        </div>);
    }
    
}

export default Itemlist;