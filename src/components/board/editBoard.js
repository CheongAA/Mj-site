import React, { Component } from 'react';
import axios from 'axios';

export default class EditBoard extends Component {
    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            userid: '',
            title: '',
            description: '',
            date: new Date()
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/boards/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    userid: response.data.userid,
                    title: response.data.title,
                    description: response.data.description,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();

        const board = {
            userid: this.state.userid,
            title: this.state.title,
            description: this.state.description,
            date: this.state.date
        }
        axios.post('http://localhost:5000/boards/update/' + this.props.match.params.id, board)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>자유게시판 글 수정</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>작성자: </label>
                        {this.state.userid}
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
                        <input type="submit" value="수정하기" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
