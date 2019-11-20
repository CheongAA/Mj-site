import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Notice extends React.Component {
    render() {
        return (
            <tr >
                <td ><Link to={"/notices/" + this.props.notice._id} className="text-dark">{this.props.notice.title}</Link></td>
                <td >{this.props.notice.userid}</td>
                <td >{this.props.notice.date.substring(0, 10)}</td>
            </tr>
        );
    }
}


export default class NoticeList extends Component {
    constructor(props) {
        super(props);

        this.state = { notices: [] };
        this.getNoticeList = this.getNoticeList.bind(this);
    }

    componentDidMount() {
        axios.get(`${process.env.URI}/notices`)
            .then(res => {
                this.setState({ notices: res.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getNoticeList() {
        return this.state.notices.map(notice => {
            return <Notice notice={notice} key={notice._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3 className="m-5">공지사항</h3>
                <table className="table table-hover text-center">
                    <thead className="thead-light">
                        <tr>
                            <th style={{ width: "70%" }}>제목</th>
                            <th >작성자</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getNoticeList()}
                    </tbody>
                </table>
                <div className="row justify-content-end">
                    {this.props.user.userid === 'admin' ? <Link className="btn btn-secondary m-1" to="/notices/add">글쓰기</Link> : ''}
                </div>
                <nav aria-label="Page navigation example ">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <Link className="page-link" to="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </Link>
                        </li>
                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                        <li className="page-item">
                            <Link className="page-link" to="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}