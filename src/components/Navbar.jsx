import Cartwidget from "./cartWidget";

const liStyle ="p-2 pl-3 pr-3 ml-2 mr-2 cursor-pointer hover:bg-zinc-100 hover:text-zinc-900 rounded-2xl transition-colors";
function Navbar () {
    return(
    <>
        <nav className="flex flex-row bg-gray-800 text-gray-200 items-center">
            <Cartwidget></Cartwidget>
            <ul className="flex flex-row gap-3">
                <li className={liStyle}>Inicio</li>
                <li className={liStyle}>Electronicos</li>
                <li className={liStyle}>Informaticos</li>
                <li className={liStyle}>Contacto</li>
            </ul>
        </nav>
        
    </>
    )
}
export default Navbar