import React from 'react';
import "./App.css";

import"../node_modules/bootstrap/dist/css/bootstrap.css";

import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Content from "./component/pages/Content";
import Feedback from "./component/pages/Feedback";
import Camera from './component/pages/Camera';

import Navbar from "./component/layout/Navbar";

//import Footer from "./component/pages/Footer";

import {BrowserRouter as Router, Route, Switch }from 'react-router-dom';
 
function App() {
  return (
    <Router>
    <div className="App">
       <Navbar/>
       <Switch>
         <Route exact path ="/" component={Home}/>
         <Route exact path ="/about" component={About}/>
         <Route exact path ="/contact" component={Contact}/>
         <Route exact path ="/content" component={Content}/>
         <Route exact path ="/feedback" component={Feedback}/>
         <Route exact path ="/Camera" component={Camera}/>
         </Switch> 
         
  
            
    </div>
   
    </Router>
   





 

    
  
);
}

export default App;
