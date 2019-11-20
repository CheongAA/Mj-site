import React from 'react';
import axios from 'axios';


export default class Notice extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userid: this.props.user.userid,
            title: '',
            contents: '',
            date: new Date()
        }

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeContents = this.onChangeContents.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeContents(e) {
        this.setState({
            contents: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const notice = {
            userid: this.state.userid,
            title: this.state.title,
            contents: this.state.contents,
            date: this.state.date
        }

        axios.post('/notices/add', notice)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        window.location = '/notice';
    }

    checkUser() {
        if (this.props.user.userid === 'admin') {
            return (
                <input type="submit" value="작성하기" className="btn btn-primary" />
            )
        }
    }
    render() {
        return (
            <div>
                <h3>공지사항 작성</h3>
                <form onSubmit={this.onSubmit}>
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
                        <label>내용: </label>
                        <textarea rows="10" type="text"
                            required
                            className="form-control"
                            value={this.state.contents}
                            onChange={this.onChangeContents}
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