import React, { Component } from 'react';
import axios from 'axios';


class List extends React.Component {
    checkUser() {
        if (this.props.user.userid === this.props.list.userid) {
            return (
                <td>
                    <a className="btn btn-secondary m-1" href={"/edit/" + this.props.list._id}>edit</a>
                    <button className="btn btn-danger m-1" onClick={() => { this.props.deleteList(this.props.list._id) }}>delete</button>
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
        axios.get('http://localhost:5000/boards')
            .then(res => {
                this.setState({ lists: res.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteList(id) {
        axios.delete('http://localhost:5000/boards/' + id)
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
                <h3>자유게시판</h3>
                <table className="table">
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
                <div className="row text-right">
                    <a className="btn btn-secondary m-1" href="/write">글쓰기</a>
                </div>
            </div>
        )
    }
}