import React from 'react';
import moment from 'moment';

function View(props) {
    const {news, onClose} = props;
    return (
        <div>
            <div className="header">
                <div className="header-title">{news.source ? news.source.name: ''}</div>
                <div className="close-button" onClick={onClose}>Close</div>
            </div>
            <div className="content">
                <span className="view-title">{news.title}</span>
                <div className="publish-date">{moment(news.publishedAt).fromNow()}</div>
                <div>
                    <img className="image" src={news.urlToImage} alt="news" />
                </div>
                {news.author && <div className="author"><strong>Authord by: </strong>{news.author}</div>}
                <div className="content-description" dangerouslySetInnerHTML={{__html: news.description}} />
                <div className="content-description" dangerouslySetInnerHTML={{__html: news.content}} />
                <a href={news.url}>Click here for publisher visit</a>
            </div>
        </div>
    )
}

export default View;
