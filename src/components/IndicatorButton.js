import React from 'react'

const IndicatorButton = ({ title, onCall }) => {
  return (
    <button onClick={onCall}>{title}</button>
  )
}

export default IndicatorButton