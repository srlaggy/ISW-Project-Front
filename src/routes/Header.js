// HEADER
import "../css/Header.css";
import {Navbar, Nav} from "react-bootstrap";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
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
                <ul>
                    <li class="active" as={Link} to="/"><span><HomeRoundedIcon/></span></li>
                    <li as={Link} to="/google"><span>Perfil</span></li>
                    <li class="logout-icon"><span><ExitToAppIcon/></span></li>
                </ul>
                {/* SWITCH */}
                <Switch>
                    {/* Routes Default */}
                    <Route path="/google">
                        <Home/>
                    </Route>
                    {/* Routes Default */}
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
} 

export default Header;