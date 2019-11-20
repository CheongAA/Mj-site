import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class List extends React.Component {
    checkUser() {
        if (this.props.user.userid === this.props.list.userid) {
            return (
                <td>
                    <a className="btn btn-outline-info btn-sm mr-1" href={"/boards/edit/" + this.props.list._id}>edit</a>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => { this.props.deleteList(this.props.list._id) }}>delete</button>
                </td>
            );
        }
    }
    render() {
        return (
            <tr>
                <td>{this.props.list.title}</td>
                <td>{this.props.list.description}</td>
                <td>{this.props.list.userid}</td>
                <td>{this.props.list.date.substring(0, 10)}</td>
                {this.checkUser()}
            </tr>
        )
    }
}

export default class Lists extends Component {
    constructor(props) {
        super(props);

        this.deleteList = this.deleteList.bind(this)
        this.state = { lists: [] };
    }

    componentDidMount() {
        axios.get(process.env.API_URI + '/boards')
            .then(res => {
                this.setState({ lists: res.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteList(id) {
        axios.delete(process.env.API_URI + '/boards/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            lists: this.state.lists.filter(li => li._id !== id)
        })
    }

    list() {
        return this.state.lists.map(list => {
            return <List list={list} deleteList={this.deleteList} key={list._id} user={this.props.user} />;
        })
    }

    render() {
        return (
            <div>
                <h3 className="m-5">자유게시판</h3>
                <table className="table text-center">
                    <thead className="thead-light">
                        <tr>
                            <th>제목</th>
                            <th>내용</th>
                            <th>작성자</th>
                            <th>작성일</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.list()}
                    </tbody>
                </table>
                <div className="row justify-content-end">
                    <a className="btn btn-secondary m-5 " href="/boards/add">글쓰기</a>
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