import React, { useEffect, useState } from 'react';
import Chart from '../components/Chart'
import OverviewCard from '../components/OverviewCard';


const SearchTicker = () => {

  const [tickerInput, setTickerInput] = useState('IBM');
  
  const submitTicker = (e) => {
    e.preventDefault();
  }

  // fetch data
  const [timeSeries, setTimeSeries] = useState(null);

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

    setYearlyHigh(overview['52WeekHigh']);

    setYearlyLow(overview['52WeekLow']);
    
    setMovingAverage(overview['200DayMovingAverage']);
    
    setBeta(overview['Beta']);
    
    setDividend(parseFloat(overview['DividendYield']) * 100);

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

    // put dates in array
    let dates = Object.keys(series[seriesKey]);
    let prices = [];
    let chartDataArray = []; // add two togetgher to create data for chart
        
    // get values, then get entires of the values
    let tempValues = Object.values(series[seriesKey]); // first step prices
    let tempEntires = Object.entries(tempValues); // second step prices
        
    // get final price and push element to prices array
    tempEntires.forEach(element => prices.push( Object.values(element[1])[3] )); // third step prices
    
    // loop over dates and prices array and add to chartDataArray
    for(let i=tempEntires.length-1; i >= 0; i--) {
      let tempObj = { date: dates[i], value: prices[i] };
      chartDataArray.push(tempObj);
    }
    setTimeSeries(chartDataArray);

    let priceInNum = [];

    prices.forEach(str => {
      priceInNum.push(parseFloat(str));
    });
    
    setHighestPrice(Math.max(...priceInNum));
    setLowestPrice(Math.min(...priceInNum));
  }

  useEffect(()=>{
    getTicker('IBM', 'TIME_SERIES_MONTHLY');
    getOverview();
  }, [])

  if (timeSeries === null) {
    return <p style={{color:'whitesmoke'}} >Loading ...</p>
  }

  return (
    <div style={Root}>
      <div>
        <form onSubmit={submitTicker}>
          <input style= {TickerInput} type="text" value={tickerInput} onChange={(e) => setTickerInput(e.target.value)}/>
        </form>
        <button style={TimeButton} onClick={() => getTicker('IBM', 'TIME_SERIES_DAILY')}>1D</button>
        <button style={TimeButton} onClick={() => getTicker('IBM', 'TIME_SERIES_WEEKLY')}>1W</button>
        <button style={TimeButton} onClick={() => getTicker('IBM', 'TIME_SERIES_MONTHLY')}>1M</button>
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

const TickerInput = {
  backgroundColor: '#635FA3',
  color: 'whitesmoke',
  border: 'none',
  borderRadius: '2px'
};

const TimeButton = {
  backgroundColor: '#635FA3',
  color: 'whitesmoke',
  border: 'none',
  borderRadius: '2px',
  marginRight:'0.3vw',
};

const OverviewContainer = {

}


// const AppCSS = {
//   display: 'flex',
// };

export default SearchTicker