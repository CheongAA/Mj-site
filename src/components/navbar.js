import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css'
import logo from '../images/3-4.gif';

export default class Navbar extends Component {
    constructor(props) {
        super(props);


        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.logout();
        window.location = "/";
    }

    checkUser() {
        if (this.props.user === '') {
            return (
                <div className="col-4 d-flex justify-content-end align-items-center">
                    <Link to="/signup" className="btn btn-sm btn-outline-secondary m-2">Sign Up</Link>
                    <Link to="/signin" className="btn btn-sm btn-outline-secondary">Sign in</Link>
                </div>
            )
        } else {
            return (
                <div className="col-4 d-flex justify-content-end align-items-center">
                    <button className="btn btn-sm btn-outline-secondary" onClick={this.logout}>Logout</button>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <header className="blog-header py-3">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="col-3 text-center justify-content-start">
                            <Link to="/"><img src={logo} alt="logo" className="w-100"></img></Link>
                        </div>
                        {this.checkUser()}
                    </div>
                </header>

                <div className="nav-scroller py-1 mb-2">
                    <nav className="nav d-flex justify-content-between">
                        <Link to="/" className="p-2 text-muted">홈</Link>
                        <Link to="/introduce" className="p-2 text-muted">소개</Link>
                        <Link to="/" className="p-2 text-muted">학과소식</Link>
                        <Link to="/notice" className="p-2 text-muted">공지사항</Link>
                        <Link to="/" className="p-2 text-muted">Q&amp;A</Link>
                        <Link to="/board" className="p-2 text-muted">자유게시판</Link>
                        <Link to="/" className="p-2 text-muted">공모전</Link>
                        <Link to="/" className="p-2 text-muted">스터디</Link>
                        <Link to="/" className="p-2 text-muted">취업</Link>
                        <Link to="/" className="p-2 text-muted">장터</Link>
                    </nav>
                    <hr />
                </div>
            </div>
        );
    }
}