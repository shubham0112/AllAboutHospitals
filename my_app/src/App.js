import React from 'react';
import Hospital  from './components/hospital/Hospital';
import Home from './components/Home/Home'
import About from './components/About/About'
import Navbar from './components/Home/Navbar';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
     <Navbar/>
     
     <Route path='/Home'><Home/></Route>
    <Route path='/Hospitals'><Hospital id={209480126}/></Route>
    <Route path='/About'><About/></Route>
     </Router>
    
    </>
  );
}

export default App;
