import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
// Top business headlines in the US right now


const NewsBoard = () => {
  const [articles, setArticle] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b4586abf951440dc81cab70c58e7981b`;
    fetch(url).then((response) => response.json()).then((data) => setArticle(data.articles));
  }, []);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
