import React, { useEffect, useState } from 'react';
import Chart from '../components/Chart'


const SearchTicker = () => {

  // let prices = [];
  const [tickerInput, setTickerInput] = useState('NVDA');
  
  const submitTicker = (e) => {
    e.preventDefault();
    // getTicker(tickerInput);
    
  }

  // fetch data
  const [timeSeries, setTimeSeries] = useState();


  const getTicker = async (ticker) => {

    const data = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=BM353M1KOFRBJ0VO`);
    const series = await data.json();
    
    setTimeout(()=> {
    // put dates in array
    let dates = Object.keys(series['Time Series (Daily)']);
    let prices = [];
    let chartDataArray = []; // add two togetgher to create data for chart
    

    // get values, then get entires of the values
    let tempValues = Object.values(series['Time Series (Daily)']); // first step prices
    let tempEntires = Object.entries(tempValues); // second step prices
    
    // get final price and push element to prices array
    tempEntires.forEach(element => prices.push( Object.values(element[1])[3] )); // third step prices
    
    // loop over dates and prices array and add to chartDataArray
    for(let i=tempEntires.length-1; i >= 0; i--) {
      let tempObj = { date: dates[i], value: prices[i] };
      chartDataArray.push(tempObj);
    }
    console.log(chartDataArray);
    setTimeSeries(chartDataArray);
  }, 5000)}

  useEffect(()=>{
    getTicker('NVDA');
  }, [timeSeries])

  return (
    <div>
      <form onSubmit={submitTicker}>
        <input type="text" value={tickerInput} onChange={(e) => setTickerInput(e.target.value)}/>
      </form>
      <Chart chartData={timeSeries} />
    </div>
  )
}

export default SearchTicker