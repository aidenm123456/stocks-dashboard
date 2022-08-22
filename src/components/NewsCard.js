import React from 'react'

const NewsCard = ( {title, author, image, url, topic, summary} ) => {

  return (
    <a style={aStyle}href={url} target='_blank' rel="noreferrer">

      <div style={cardDiv}>
        
        <h4 style={hFour} >{title}</h4>
        <img src={image} alt="" style={miniImage} />
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

const hFour = {
};

const miniImage = {
  width: '12vw',
  height: '12vh'
};


export default NewsCard