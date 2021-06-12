import Login from "./routes/Login.js";
import Header from "./routes/Header.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import React from "react";
import {useSelector} from "react-redux";

function App() {
  return(
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
