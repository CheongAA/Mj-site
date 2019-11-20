import React from 'react';
import axios from 'axios';

export default class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userid: '',
            password: ''
        }

        this.onChangeUserId = this.onChangeUserId.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

    }

    checkLogin() {
        if (this.props.user === '') {
            return (
                <form onSubmit={this.onSubmit}>
                    <div className="form-group col-4 mx-auto">
                        <label>ID </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.userid}
                            onChange={this.onChangeUserId}
                        />
                    </div>
                    <div className="form-group col-4 mx-auto">
                        <label>Password </label>
                        <input type="password"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </div>
                    <div className="form-group text-center">
                        <input type="submit" value="Login" className="btn btn-primary" onSubmit={this.onSubmit} />
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

    onSubmit(e) {

        e.preventDefault();

        const user = {
            userid: this.state.userid,
            password: this.state.password
        }
        axios.post('https://nameless-citadel-71188.herokuapp.com:5000/users/login', user)
            .then(res => this.props.login(res.data))
            .catch(err => console.log(err));

        this.setState({
            userid: '',
            password: ''
        })

    }

    render() {
        return (
            <div>
                <h3 className="text-center">로그인</h3>
                {this.checkLogin()}
            </div>
        )
    }
}