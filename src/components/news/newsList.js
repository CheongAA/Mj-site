import React from 'react';
import NewsItem from './newsItem';

export default class NewsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }
    componentDidMount() {
        var url = 'https://newsapi.org/v2/top-headlines?country=kr&category=technology&category=science&' +
            'apiKey=4332179028d146efb9e3e82643cf840b';
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    news: data.articles
                })
            }).catch(err => console.log(err))

    }
    render() {
        return (
            <div>
                <div>
                    <h3 className="m-5">오늘의 뉴스</h3>
                    <p className="mx-5 my-2 text-muted">가장 최신의 과학,기술 뉴스를 확인하세요.<br />
                        제목을 클릭하면 해당 기사로 이동합니다.</p>
                </div>
                <hr />
                <div className="list-group m-4">
                    {this.state.news.map((newsitem, i) => {
                        return <NewsItem key={i} news={newsitem} />;
                    })}
                </div>
            </div>
        )
    }
}