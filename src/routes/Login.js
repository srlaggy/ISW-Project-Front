import "../css/Login.css"

function Login(props){
    return(
        <div class="loginBox">
            <div class="loginLeft">

            </div>
            <div class="loginRight">
                <h1>Inicio de sesión</h1>
                <form class="loginForm">
                    <input type="text" name="" placeholder="Usuario" />
                    <input type="password" name="" placeholder="Contraseña" />
                    <input type="submit" name="" placeholder="Iniciar sesión" />
                </form>
            </div>
        </div>
    );
}

export default Login;