import React, { useState } from 'react'

const SearchBar = () => {

  const [tickerInput, setTickerInput] = useState('APPL');

  const submitTicker = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={submitTicker}>
      <input type="text" value={tickerInput} onChange={(e) => setTickerInput(e.target.value)}/>
    </form>
  )
}

export default SearchBar