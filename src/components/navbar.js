import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <header className="blog-header py-3">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="col-4 text-center justify-content-start">
                            <Link to="/" className="blog-header-logo text-dark">명지대학교 <br />융합소프트웨어학부</Link>
                        </div>
                        <div className="col-4 d-flex justify-content-end align-items-center">
                            <Link to="/user" className="btn btn-sm btn-outline-secondary">Sign in</Link>
                        </div>
                    </div>
                </header>

                <div className="nav-scroller py-1 mb-2">
                    <nav className="nav d-flex justify-content-between">
                        <Link to="/" className="p-2 text-muted">홈</Link>
                        <Link to="/" className="p-2 text-muted">소개</Link>
                        <Link to="/" className="p-2 text-muted">공지사항</Link>
                        <Link to="/" className="p-2 text-muted">Q&amp;A</Link>
                        <Link to="/" className="p-2 text-muted">공모전</Link>
                        <Link to="/" className="p-2 text-muted">스터디</Link>
                        <Link to="/" className="p-2 text-muted">취업상담</Link>
                        <Link to="/create" className="p-2 text-muted">자유게시판</Link>
                        <Link to="/" className="p-2 text-muted">장터</Link>
                    </nav>
                </div>
            </div>
        );
    }
}