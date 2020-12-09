import React from 'react';
import moment from 'moment';

function List(props) {
    const {data, onNews, loading} = props;
    console.log(data);
    return (
        <div>
            <div className="header">
                <div className="header-title">Indian News</div>
            </div>
            <div className="list-view">
                {loading && <div>Loading... Please wait...</div>}
                {
                    data.map((news, i) => (
                        <div className="news-list-item" key={i} onClick={() => onNews(news)}>
                            <div className="news-image">
                                <img className="image" src={news.urlToImage} alt="news" />
                            </div>
                            <div className="headline">
                                <span className="headline-title">{news.title}</span>
                                <p className="headline-description">{news.description}</p>
                                <div className="publish-date">{moment(news.publishedAt).fromNow()}</div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default List;
