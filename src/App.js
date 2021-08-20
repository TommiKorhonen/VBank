import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import ScrollToTop from './components/ScrollToTop';
import Navbar from "./components/Navbar"
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpen])
  return (
    <>
    <Router >
      <ScrollToTop />
      <Navbar toggle={toggle} isOpen={isOpen}/>
      <Header />
      <Main/>
      <Footer/>
      
    </Router>
    </>
  );
}

export default App;
