import React from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './css/global.css'

import Navbar from './components/navbar';
import Home from './components/home';
import Introduce from './components/introduce'
import Lists from './components/lists';
import Board from './components/board';
import EditBoard from './components/editBoard';
import Signup from './components/signup';
import Signin from './components/signin';
import Footer from './components/footer';

class App extends React.Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    const { cookies } = props;

    this.state = {
      user: cookies.get('user') || ''
    }

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }


  login(user) {
    const { cookies } = this.props;
    cookies.set('user', user, { path: '/' });

    this.setState({
      user
    })
  }

  logout() {
    const { cookies } = this.props;
    cookies.remove('user');
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
            <Route path="/signup" component={() => <Signup login={this.login} user={this.state.user} />} />
            <Route path="/signin" component={() => <Signin login={this.login} user={this.state.user} />} />
            <Route path="/introduce" component={Introduce} />
            <Route path="/list" component={() => <Lists user={this.state.user} />} />
            <Route path="/write" component={() => <Board user={this.state.user} />} />
            <Route path="/edit/:id" component={EditBoard} />
            <Redirect from="*" to="/" />
          </Switch>
          <Footer />
        </div>
      </Router>

    )
  }
}


export default withCookies(App);