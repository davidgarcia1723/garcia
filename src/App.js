import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Work from './Components/Work/Work';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router> 
      <head>
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
        </head>
      <div>
        <Navbar />
        <Route exact path ="/" component = {Home} />
        <Route exact path ="/Work" component = {Work} />
        <Route exact path ="/Resume" component = {Resume} />
        <Route exact path ="/Contact" component = {Contact} />
        <Footer />
      </div>
    </Router>
  );
}


export default App;