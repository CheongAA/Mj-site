import React from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './css/global.css'

import Navbar from './components/navbar';

import Home from './components/home';
import Introduce from './components/introduce';
import NewsList from './components/news/newsList';
import NoticeList from './components/notice/noticeList';
import NoticeDetail from './components/notice/noticeDetail';
import AddNotice from './components/notice/addNotice';

import BoardList from './components/board/boardList';
import AddBoard from './components/board/addBoard';
import EditBoard from './components/board/editBoard';

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
            <Route path="/news" component={NewsList} />
            <Route path="/notice" exact component={() => <NoticeList user={this.state.user} />} />
            <Route path="/notice/add" component={() => <AddNotice user={this.state.user} />} />
            <Route path="/notice/:id" component={NoticeDetail} />
            <Route path="/board" component={() => <BoardList user={this.state.user} />} />
            <Route path="/write" component={() => <AddBoard user={this.state.user} />} />
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