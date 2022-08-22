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
          <p style={pStyle1}>{'By: ' + author}</p>
          <p style={pStyle2}>{topic}</p>
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
  display: 'flex',
};

const lDiv = {
  width: '15vw',
  display: 'flex',
  justifyContent:'center',
  alignItems: 'center'
};

const rDiv = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  paddingLeft: '2vw',
};

const hFour = {
  color:'whitesmoke'
};

const pStyle1 = {
  color: 'whitesmoke'
};

const pStyle2 = {
  // width: '8vw',
  fontSize: '12px',
  fontWeight: 'bold',
  backgroundColor: '#17123B',
  color: 'whitesmoke',
  padding: '7px 10px',
  borderRadius:'40px'
};

const miniImage = {
  width: '15vw',
  height: '18.75vh'
};


export default NewsCard