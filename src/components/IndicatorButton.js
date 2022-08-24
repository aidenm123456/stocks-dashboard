import React from 'react'

const IndicatorButton = ({ title, onCall }) => {
  return (
    <button style={IndicatorStyle} onClick={onCall} >{title}</button>
  )
}

const IndicatorStyle = {
  backgroundColor: '#635FA3',
  color: 'whitesmoke',
  border: 'none',
  borderRadius: '2px',
  paddingTop:'0.3vw',
  paddingBottom:'0.3vw',
  paddingLeft: '0.4vw',
  paddingRight: '0.4vw',
  marginRight:'0.3vw'
};
export default IndicatorButton