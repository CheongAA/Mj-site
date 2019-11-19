import React from 'react';
import axios from 'axios';


export default class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userid: this.props.user.userid,
            title: '',
            description: '',
            date: new Date()
        }

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const write = {
            userid: this.state.userid,
            title: this.state.title,
            description: this.state.description,
            date: this.state.date
        }

        axios.post('http://localhost:5000/boards/add', write)
            .then(res => console.log(res.data));

        window.location = '/list';
    }

    checkUser() {
        if (this.props.user !== '') {
            return (
                <input type="submit" value="작성하기" className="btn btn-primary" />
            )
        } else {
            return (
                <input type="submit" value="로그인 후 작성가능" className="btn btn-secondary" disabled />
            )
        }
    }
    render() {
        return (
            <div>
                <h3>자유게시판 글 작성</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>{this.props.user.userid ? '작성자: ' : ''}</label>
                        {this.props.user.userid ? this.props.user.userid : '글을 쓰기 위해선 로그인을 해야합니다.!!!'}
                    </div>
                    <div className="form-group">
                        <label>제목: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>

                    <div className="form-group">
                        {this.checkUser()}
                    </div>
                </form>
            </div>
        )
    }
}