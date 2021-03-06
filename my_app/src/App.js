import React from 'react';
import Hospital  from './components/hospital/Hospital';
import Home from './components/Home/Home'
import About from './components/About/About'
import Navbar from './components/Home/Navbar';
import SignUp from './components/signup/SignUp';
import AddReview from './components/add_review/AddReview';
import {BrowserRouter as Router,Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      
      <Route path='/Home' exact><Home/></Route>
      {/* <Route path='/Hospitals'><Hospital id={209480126}/></Route> */}
      <Route path='/About'><About/></Route>
      <Route path='/SignUp'><SignUp/></Route>
      <Route path='/AddReview'><AddReview/></Route>
      <Route path='/Hospital' component={Hospital}/>
      {/* <Route path='/Hospital/:id' children={<Hospital/>}></Route> */}
    </Router>
    
    </>
  );
}

export default App;
