import React, { useEffect, useState } from 'react'
import NewsCard from '../components/NewsCard';

const MarketNews = () => {

  const [newsItems, setNewsItems] = useState(null);

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
      
      let tempObj = { title: news.feed[i].title.slice(0,95), image: news.feed[i].banner_image, url: news.feed[i].url, topic: news.feed[i].topics[0].topic, author: tempAuthor, summary: news.feed[i].summary }
      tempArray.push(tempObj);
    }
    setNewsItems(tempArray);
  }

  useEffect(() => {
    getNews();
    console.log('call use effect once')
  }, [])

  // time to render stuff
  
  if(newsItems == null) {
    return <p style={{color:'whitesmoke'}} >Loading ...</p>
  }

  return (
    <div style={flexDiv} >
      <h1 style={h1Style} >Today's Trending Market News</h1>
      <div style={gridDiv} >
        {newsItems.map((item) => {
          return(
            <div>
              <NewsCard title={item.title} author={item.author} image={item.image} url={item.url} topic={item.topic} />
            </div>
          )
        })}
        
      </div>
    </div>
  )
}

const flexDiv = {
  width: '84vw',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center'
}

const h1Style = {
  color: 'whitesmoke'
}

const gridDiv = {
  display: 'grid',
  gridTemplateColumns: '60vw',
  // gridTemplateRows: '275px',
  rowGap: '15px'
}
// {newsItems[0].author}
export default MarketNews