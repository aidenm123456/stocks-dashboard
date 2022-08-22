import React, { useEffect, useState } from 'react';
import Chart from '../components/Chart'
import OverviewCard from '../components/OverviewCard';


const SearchTicker = () => {

  // let prices = [];
  const [tickerInput, setTickerInput] = useState('IBM');
  
  const submitTicker = (e) => {
    e.preventDefault();
    // getTicker(tickerInput,'TIME_SERIES_MONTHLY');
    
  }

  // fetch data
  const [timeSeries, setTimeSeries] = useState([]);
  // const [] = useState();
  const [highestPrice, setHighestPrice] = useState();
  const [lowestPrice, setLowestPrice] = useState();

  const [yearlyHigh, setYearlyHigh] = useState();
  const [yearlyLow, setYearlyLow] = useState();
  const [movingAverage, setMovingAverage] = useState();
  const [beta, setBeta] = useState();
  const [dividend, setDividend] = useState();
  const [marketCap, setMarketCap] = useState();

  const getOverview = async () => {
    const data = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo`); //CS2FWWWNNNJOW6BT
    const overview = await data.json();
    console.log(overview);

    //52 high
    setYearlyHigh(overview['52WeekHigh']);
    //52 low
    setYearlyLow(overview['52WeekLow']);
    //200daymoving average
    setMovingAverage(overview['200DayMovingAverage']);
    //beta
    setBeta(overview['Beta']);
    //dividend yield
    setDividend(parseFloat(overview['DividendYield']) * 100);
    
    // Marketcap
    setMarketCap(overview['MarketCapitalization']);

  }


  const getTicker = async (ticker, timePeriod) => {

    let seriesKey = '';

    if(timePeriod === 'TIME_SERIES_DAILY') {
      seriesKey = 'Time Series (Daily)';
    }
    else if(timePeriod === 'TIME_SERIES_WEEKLY') {
      seriesKey = 'Weekly Time Series';
    }
    else {
      seriesKey = 'Monthly Time Series';
    }

    const data = await fetch(`https://www.alphavantage.co/query?function=${timePeriod}&symbol=${ticker}&apikey=demo`); //CS2FWWWNNNJOW6BT
    const series = await data.json();
    console.log(series);

    // put dates in array
    let dates = Object.keys(series[seriesKey]);
    let prices = [];
    let chartDataArray = []; // add two togetgher to create data for chart
    // console.log(dates, prices, chartDataArray);
        
    // get values, then get entires of the values
    let tempValues = Object.values(series[seriesKey]); // first step prices
    let tempEntires = Object.entries(tempValues); // second step prices
    // console.log(tempValues, tempEntires);
        
    // get final price and push element to prices array
    tempEntires.forEach(element => prices.push( Object.values(element[1])[3] )); // third step prices
    // console.log(prices)
    
    // loop over dates and prices array and add to chartDataArray
    for(let i=tempEntires.length-1; i >= 0; i--) {
      let tempObj = { date: dates[i], value: prices[i] };
      chartDataArray.push(tempObj);
    }
    console.log(chartDataArray);
    setTimeSeries(chartDataArray);

    let priceInNum = [];

    prices.forEach(str => {
      priceInNum.push(parseFloat(str));
    });
    console.log(priceInNum);
    setHighestPrice(Math.max(...priceInNum));
    setLowestPrice(Math.min(...priceInNum));

    console.log(Math.max(...priceInNum));
    console.log(Math.min(...priceInNum));
    
  }

  useEffect(()=>{
    getTicker('IBM', 'TIME_SERIES_MONTHLY');
    getOverview();
  }, [])

  if (timeSeries === []) {
    return <p>Loading ...</p>
  }

  return (
    <div style={Root}>
      <div>
        <form onSubmit={submitTicker}>
          <input type="text" value={tickerInput} onChange={(e) => setTickerInput(e.target.value)}/>
        </form>
        <button onClick={() => getTicker('IBM', 'TIME_SERIES_DAILY')}>1D</button>
        <button onClick={() => getTicker('IBM', 'TIME_SERIES_WEEKLY')}>1W</button>
        <button onClick={() => getTicker('IBM', 'TIME_SERIES_MONTHLY')}>1M</button>
        <Chart  chartData={timeSeries} highestPrice={highestPrice} lowestPrice={lowestPrice} />
      </div>
      <div style={OverviewContainer}>
        
        <OverviewCard pTagContent={'$' + yearlyHigh} heading='52 Week High'/>
        <OverviewCard pTagContent={'$' + yearlyLow} heading='52 Week Low'/>
        <OverviewCard pTagContent={'$' + movingAverage} heading='200 Day MA'/>
        <OverviewCard pTagContent={beta} heading='Beta'/>
        <OverviewCard pTagContent={dividend + '%'} heading='Dividend Yield'/>
        <OverviewCard pTagContent={'$' + Math.round((marketCap/1000000000)*100)/100 + ' Billion'} heading='Market Capitilization'/>
        
      </div>

    </div>
  )
}

const Root = {
  width: '84vw',
  display: 'flex',
  marginTop: '4%',
  marginLeft: '3%'
};

const OverviewContainer = {

}


// const AppCSS = {
//   display: 'flex',
// };

export default SearchTicker