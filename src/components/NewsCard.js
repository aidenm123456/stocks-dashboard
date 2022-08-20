import React from 'react'

const NewsCard = ( {title, author, image, url, topic} ) => {

  return (
    <a style={aStyle}href={url} target='_blank' rel="noreferrer">

      <div style={cardDiv}>
        
        <h4>{title}</h4>
        <img src={image} alt="" />
        <p>{author}</p>
        <p>{topic}</p>


      </div>
    </a>
  )
}

const aStyle =  {
  textDecoration: 'none'
};

const cardDiv = {
  backgroundColor: '#635FA3'
};

const hFour = {};


export default NewsCard