
import {ReactComponent  as Logo} from '../logo.svg'
const logosize = {width:'50px',heigh:'50px'}

const logoTextStyle = "inline-block pl-1 pr-1";

const Cartwidget = () =>{
return(
    <div className="flex items-center m-4 cursor-pointer">
            <Logo style={logosize} ></Logo>
            <h1 className={logoTextStyle}>Techverse</h1>
    </div>
);
}

export default Cartwidget;