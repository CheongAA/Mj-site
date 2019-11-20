import React from 'react';
class NewsItem extends React.Component {
    render() {
        return (
            <div className="row border">
                <img className="col-5 w-40 h-50 m-3" alt={this.props.news.title} src={this.props.news.urlToImage}></img>
                <div className="col-6">
                    <div className="row my-5">
                        <p onClick={() => window.open(this.props.news.url, "_blank")} className="list-group-item list-group-item-action border-0">
                            {this.props.news.title}
                        </p>
                    </div>
                    <div className="row justify-content-end">
                        <p className="text-muted">{this.props.news.author}</p>
                        <p className="text-muted">{this.props.news.publishedAt.substring(0, 10)}</p>
                    </div>
                </div>
            </div >
        )
    }
}

export default NewsItem;