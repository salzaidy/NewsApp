import React, {useState} from 'react';
import './App.css';
import Service from './http';
import List from './News/List';
import View from './News/View';


const services = new Service();

function App() {
  const [newsList, setNewsList] = useState([]);
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    setLoading(true);
    services.get('top-headlines?country=in').then(result => {
      setLoading(false);
      const {articles = []} = result;
      setNewsList([...articles]);
    });
  }, []);

  const handleCloseView = React.useCallback(() => {
    setNews();
  }, []);

  const handleNews = React.useCallback((news) => {
    setNews(news)
  }, []);

  return (
    <div className="App">
      {!news && <List data={newsList} onNews={handleNews} loading={loading} />}
      {news && <View news={news} onClose={handleCloseView}/>}
    </div>
  );
}

export default App;
