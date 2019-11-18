import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './css/global.css'

import Navbar from './components/navbar';
import Home from './components/home';
import Introduce from './components/introduce'
import Signup from './components/signup';
import Signin from './components/signin';
import Footer from './components/footer';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }


  login(user) {
    this.setState({
      user
    })
  }

  logout() {
    this.setState({
      user: ''
    })
  }


  render() {
    return (

      <Router>
        <div className="container">
          <Navbar user={this.state.user} logout={this.logout} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/introduce" exact component={Introduce} />
            <Route path="/signup" component={() => <Signup login={this.login} user={this.state.user} />} />
            <Route path="/signin" component={() => <Signin login={this.login} user={this.state.user} />} />
            <Redirect from="*" to="/" />
          </Switch>

          <Footer />
        </div>
      </Router>



    )
  }
}

