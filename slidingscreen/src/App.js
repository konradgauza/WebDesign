import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import MenuBar from "./Components/MenuBar";
import Services from "./Components/Services";
import Blog from "./Components/Blog";
import Works from "./Components/Works";


const App = (event) => {
    const [visible, setVisible] = useState(true);
    const [smOpen, setSmOpen] = useState(false);

    const hideSm = (event) => {
        event.target.className === "fab fa-connectdevelop" ? setSmOpen(!smOpen) : setSmOpen(false)
    }

  return (
    <div className='app' onClick={hideSm}>
        <div className={visible? 'div on-top' : 'div on-bottom'}> </div>
        <div className={visible? 'div on-left' : 'div on-right'}> </div>
        <Router>
            <MenuBar visible={visible} setVisible={setVisible} smOpen={smOpen}/>
            <Switch>
                <Route exact path="/">
                    <Home visible={visible} setVisible={setVisible}/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/services">
                    <Services/>
                </Route>
                <Route path="/works">
                    <Works/>
                </Route>
                <Route path="/blog">
                    <Blog/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
};

export default App;
