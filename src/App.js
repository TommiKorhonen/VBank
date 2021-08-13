import React, {useState} from 'react';
import {HashRouter as Router, Switch, Route} from "react-router-dom"
import ScrollToTop from './components/ScrollToTop';
import Navbar from "./components/Navbar"
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <Router >
      <ScrollToTop />
      <Navbar toggle={toggle}/>
      
    </Router>
    </>
  );
}

export default App;
