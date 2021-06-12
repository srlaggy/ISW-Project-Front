// HEADER
import "../css/Header.css";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
//link generales
import Home from "./Home";

import {useSelector} from "react-redux";

// BODY

function Header(props){
    /*const userType = useSelector((store) => store.authReducer.userType);    //tipo de usuario*/

    return(
        <div>
            {/*Alumno*/}
            { /*usertype == 1 &&*/
                <ul>
                    <li className="active"><a href="./Home"><HomeRoundedIcon/></a></li>
                    <li><a href="./Home"><AccountCircleIcon/></a></li>
                    <li className="logout-icon"><a href="./Home"><ExitToAppIcon/></a></li>
                </ul>
            }
            {/*Profesor*/}
            { /*usertype == 2 &&
                <ul>
                    <li className="active"><a href="./Home"><HomeRoundedIcon/></a></li>
                    <li><a href="./Home">Perfil</a></li>
                    <li as={Link} to="/google"><span>Grupos</span></li>
                    <li className="logout-icon"><span><ExitToAppIcon/></span></li>
                </ul>
            */}
            {/*Funcionario FabLab*/}
            { /*usertype == 3 &&
                <ul>
                    <li className="active"><a href="./Home"><HomeRoundedIcon/></a></li>
                    <li><a href="./Home">Perfil</a></li>
                    <li><a href="./Home">Modificar rol</a></li>
                    <li className="logout-icon"><a href="./Home"><ExitToAppIcon/></a></li>
                </ul>
            */}
            {/*Direccion*/}
            { /*usertype == 4 &&
                <ul>
                    <li className="active"><a href="./Home"><HomeRoundedIcon/></a></li>
                    <li><a href="./Home">Perfil</a></li>
                    <li className="logout-icon"><a href="./Home"><ExitToAppIcon/></a></li>
                </ul>
            */}
            {/*Externo*/}
            { /*usertype == 4 &&
                <ul>
                    <li className="active"><a href="./Home"><HomeRoundedIcon/></a></li>
                    <li><a href="./Home">Perfil</a></li>
                    <li className="logout-icon"><a href="./Home"><ExitToAppIcon/></a></li>
                </ul>
            */}
        </div>
    );
} 

export default Header;