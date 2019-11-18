import React from 'react';
import axios from 'axios';

export default class CreateUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userid: '',
            password: '',
            name: '',
            email: '',
            studentnum: ''
        }

        this.onChangeUserId = this.onChangeUserId.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeStudentnum = this.onChangeStudentnum.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

    }

    onChangeUserId(e) {
        this.setState({
            userid: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangeStudentnum(e) {
        this.setState({
            studentnum: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            userid: this.state.userid,
            password: this.state.password,
            name: this.state.name,
            email: this.state.email,
            studentnum: this.state.studentnum
        }

        console.log(user)
        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        this.setState({
            userid: '',
            password: '',
            name: '',
            email: '',
            studentnum: ''
        })
    }

    render() {
        return (
            <div>
                <h3 className="text-center">회원가입</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>ID: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.userid}
                            onChange={this.onChangeUserId}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </div>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Studenr Number : </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.studentnum}
                            onChange={this.onChangeStudentnum}
                        />
                    </div>
                    <div className="form-group text-center">
                        <input type="submit" value="확인" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}