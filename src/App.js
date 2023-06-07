
import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Heroe} from "./componentes/hero/Heroe";
import {ListH} from "./componentes/lista/ListH";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<div><ListH/></div>}>
                </Route>
                <Route path="/heroe/:claveh"
                       element={<div><Heroe/></div>}/>
            </Routes>
        </Router>);
}

export default App;
