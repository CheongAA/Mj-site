import React from 'react';
import axios from 'axios';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userid: '',
            password: '',
            name: '',
            email: '',
            studentnum: ''
        }

        this.checkLogin = this.checkLogin.bind(this);

        this.onChangeUserId = this.onChangeUserId.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeStudentnum = this.onChangeStudentnum.bind(this);

        this.onSubmit = this.onSubmit.bind(this);


    }


    checkLogin() {
        if (this.props.user === '') {
            return (
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
                        <label>Student Number : </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.studentnum}
                            onChange={this.onChangeStudentnum}
                        />
                    </div>
                    <div className="form-group text-center">
                        <input type="submit" value="확인" className="btn btn-primary" onSubmit={this.onSubmit} />
                    </div>
                </form>
            );
        } else {
            return (
                <div className="m-5">
                    <h3 className="text-center">환영합니다.</h3>
                    <p className="text-center">사이트를 즐겨보세요.</p>
                </div>
            );
        }
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
        axios.post('https://nameless-citadel-71188.herokuapp.com:5000/users/add', user)
            .then(res => this.props.login(user))
            .catch(err => console.log(err));

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
                {this.checkLogin()}
            </div>
        )
    }
}