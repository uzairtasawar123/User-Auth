import logo from "./logo.svg";
import "./App.css";
import Operation from "./Operation";
import Login from "./Login";
import Nav from "./Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";

function App() {
  return (
    <>
    <Router>
        <Nav/>
     <Routes>
     <Route exact path='/' element={<Login/>}/>
     <Route exact path='/signup' element={<Signup/>}/>
     <Route exact path='/operation' element={<Operation/>}/>
    </Routes>
    </Router>
    </>
    
    

  );
}

export default App;