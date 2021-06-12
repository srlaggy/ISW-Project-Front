// HEADER
import "../css/Header.css";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
//link generales
import Home from "./Home";

import {useSelector} from "react-redux";

import {
    //principal componente de enrutamiento
    BrowserRouter as Router,
    //switch es el que renderiza el componente que corresponde a la ruta que indiquemos
    Switch,
    Route,
    Link
} from "react-router-dom";

// BODY

function Header(props){
    /*const userType = useSelector((store) => store.authReducer.userType);    //tipo de usuario*/

    return(
        <Router>
            <div>
                {/*Alumno*/}
                { /*usertype == 1 &&*/
                    <ul>
                        <li className="active"><Link to="/"><HomeRoundedIcon/></Link></li>
                        <li><Link to="/"><AccountCircleIcon/></Link></li>
                        <li className="logout-icon"><Link to="/"><ExitToAppIcon/></Link></li>
                    </ul>
                }
                {/*Profesor*/}
                { /*usertype == 2 &&
                    <ul>
                        <li className="active"><Link to="/Home"><HomeRoundedIcon/></Link></li>
                        <li><Link to="/Home">Perfil</Link></li>
                        <li><Link to="/Home">Grupos</Link></li>
                        <li className="logout-icon"><span><ExitToAppIcon/></span></li>
                    </ul>
                */}
                {/*Funcionario FabLab*/}
                { /*usertype == 3 &&
                    <ul>
                        <li className="active"><Link to="/Home"><HomeRoundedIcon/></Link></li>
                        <li><Link to="/Home">Perfil</Link></li>
                        <li><Link to="/Home">Modificar rol</Link></li>
                        <li className="logout-icon"><Link to="/Home"><ExitToAppIcon/></Link></li>
                    </ul>
                */}
                {/*Direccion*/}
                { /*usertype == 4 &&
                    <ul>
                        <li className="active"><Link to="/Home"><HomeRoundedIcon/></Link></li>
                        <li><Link to="/Home">Perfil</Link></li>
                        <li className="logout-icon"><Link to="/Home"><ExitToAppIcon/></Link></li>
                    </ul>
                */}
                {/*Externo*/}
                { /*usertype == 4 &&
                    <ul>
                        <li className="active"><Link to="/Home"><HomeRoundedIcon/></Link></li>
                        <li><Link to="/Home">Perfil</Link></li>
                        <li className="logout-icon"><Link to="/Home"><ExitToAppIcon/></Link></li>
                    </ul>
                */}

                {/* SWITCH */}
                <Switch>
                    {/* Alumno */}
                    {/* Profesor */}
                    {/* Funcionario FabLab */}
                    {/* Direccion */}
                    {/* Externo */}
                    {/* Routes Default */}
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Header;