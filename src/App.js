import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/global.css'

import Navbar from './components/navbar';
import Footer from './components/footer';

import Home from './components/home';
import CreateUser from './components/create-user';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar id="top" />
        <br />
        <Route path="/" exact component={Home} />
        {/* <Route path="/list" exact component={} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} /> */}
        <Route path="/user" component={CreateUser} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
