import React from 'react'

const OverviewCard = ( {pTagContent, heading} ) => {
  return (
    <div style={cardCSS}>
      <h4 style={{margin:0, padding:0, color: 'whitesmoke'}}>{heading}</h4>
      <p style={{margin:0, padding:0, color: 'whitesmoke'}}>{pTagContent}</p>
    </div>
  )
}

const cardCSS = {
  display: 'flex',
  flexDirection:'column',
  justifyContent: 'center',
  alignItems: 'center',
  // border: '1px solid black',
  border: 'none',
  borderRadius: '10px',
  width: '13vw',
  height: '11vh',
  marginLeft: '4vw',
  marginBottom: '3.5vh',
  boxShadow: '-5px 4px 10px #17123B',
  fontSize:'1vw',
  backgroundColor: '#635FA3'
};

export default OverviewCard