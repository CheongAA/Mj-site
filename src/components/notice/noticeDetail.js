import React, { Component } from 'react';
import axios from 'axios';


export default class NoticeDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            contents: '',
            date: '',
            userid: '',
            comments: []
        };

    }

    componentDidMount() {
        axios.get('http://localhost:5000/notices/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    title: response.data.title,
                    contents: response.data.contents,
                    date: response.data.date.substring(0, 10),
                    userid: response.data.userid,
                    comments: response.data.comments
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center">{this.state.title}</h3>
                <p className="text-right">{this.state.userid}</p>
                <p className="text-right">{this.state.date}</p>
                <hr />
                <p className="">{this.state.contents}</p>
                <hr />
                <p>{this.state.comments ? this.state.comments : ''}</p>
            </div>
        )
    }
}