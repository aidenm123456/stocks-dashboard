import React, { useEffect, useState } from 'react'
import NewsCard from '../components/NewsCard';

const MarketNews = () => {

  const [newsItems, setNewsItems] = useState([]);

  const getNews = async () => {
    
    const data = await fetch(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&topics=technology&apikey=demo`); //CS2FWWWNNNJOW6BT
    const news = await data.json();
    console.log(news.feed);
    // setNewsItems(news.feed);
    // console.log(news.feed[0].title);

    let tempArray = [];
    for(let i=0; i < news.feed.length; i++) {

      let tempAuthor = '';
      if (news.feed[i].authors.length === 0) {
        tempAuthor = 'No Author';
      }else{
        tempAuthor = news.feed[i].authors[0];
      }
      
      let tempObj = { title: news.feed[i].title, image: news.feed[i].banner_image, url: news.feed[i].url, topic: news.feed[i].topics[0].topic, author: tempAuthor, summary: news.feed[i].summary }
      tempArray.push(tempObj);
    }
    setNewsItems(tempArray);
  }

  useEffect(() => {
    getNews();
    console.log('call use effect once')
  }, [])

  // time to render stuff
  
  if(newsItems === []) {
    return <p>Loading ...</p>
  }

  return (
    <div>
      {newsItems.map((item) => {
        return(
          <div>
            <NewsCard title={item.title} author={item.author} image={item.image} url={item.url} topic={item.topic} />
          </div>
        )
      })}
      
    </div>
  )
}
// {newsItems[0].author}
export default MarketNews