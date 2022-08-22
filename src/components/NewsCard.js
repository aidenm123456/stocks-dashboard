import React from 'react'

const NewsCard = ( {title, author, image, url, topic, summary} ) => {

  return (
    <a style={aStyle}href={url} target='_blank' rel="noreferrer">

      <div style={cardDiv}>

        <div style={lDiv}>
          <img src={image} alt="" style={miniImage} />
        </div>
        
        <div style={rDiv}>
          <h4 style={hFour} >{title}</h4>
          <p>{author}</p>
          <p>{topic}</p>
        </div>
        
        


      </div>
    </a>
  )
}

const aStyle =  {
  textDecoration: 'none'

};

const cardDiv = {
  backgroundColor: '#635FA3',
  display: 'flex'
};

const lDiv = {
  width: '15vw',
  display: 'flex',
  justifyContent:'center',
  alignItems: 'center'
};

const rDiv = {};

const hFour = {
};

const miniImage = {
  width: '15vw',
  height: '15vh'
};


export default NewsCard