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
                    <div className="form-group text-center">
                        <input type="submit" value="Login" className="btn btn-primary" onSubmit={this.onSubmit} />
                    </div>
                </form>
            );
        } else {
            return (
                <div>
                    <h3>환영합니다.</h3>
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
        axios.post('http://localhost:5000/users/login', user)
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
                {this.checkLogin()}
            </div>
        )
    }
}