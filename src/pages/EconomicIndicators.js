import React from 'react'
import { useEffect, useState } from 'react';
import Chart from '../components/Chart';
import IndicatorButton from '../components/IndicatorButton'

const EconomicIndicators = () => {

  const [chartValues, setChartValues] = useState();
  const [highestPrice, setHighestPrice] = useState();
  const [lowestPrice, setLowestPrice] = useState();

  const [chartName, setChartName] = useState();
  const [chartInterval, setChartInterval] = useState();
  const [chartUnit, setChartUnit] = useState();

  const getEcon = async ( apiUrl ) => {
    const data = await fetch(apiUrl); //CS2FWWWNNNJOW6BT
    const econ = await data.json();
    // console.log(econ.data);
    // console.log(Object.values(econ.data[0]));
    // console.log(econ.name);
    // console.log(econ.unit);
    // console.log(econ.interval);
    setChartName(econ.name);
    setChartInterval(econ.interval);
    setChartUnit(econ.unit);
    let tempArray = [];
    let allPrices = [];

    for(let i = econ.data.length - 1; i >= 0; i--) {
      // console.log(Object.values(econ.data[i]));

      allPrices.push(parseFloat(Object.values(econ.data[i])[1]));
      let tempObj = { date: Object.values(econ.data[i])[0], value: Object.values(econ.data[i])[1] };
      tempArray.push(tempObj);
    }
    console.log(tempArray)
    setChartValues(tempArray);
    console.log(allPrices)

    setHighestPrice(Math.max(...allPrices));
    setLowestPrice(Math.min(...allPrices));
    console.log(Math.max(...allPrices), Math.min(...allPrices))

    // let tempObj = { date: dates[i], value: prices[i] };
  } 

  useEffect(() => {
    getEcon(`https://www.alphavantage.co/query?function=REAL_GDP&interval=annual&apikey=demo`);
    console.log('call use effect once')
  }, [])
  


  return (
    <div style={{width: '84vw'}} >
      
      <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
        <IndicatorButton title={'Real GDP'}/>
        <IndicatorButton title={'10-Year Treasury Yield'}/>
        <IndicatorButton title={'Federal Funds Rate'}/>
        <IndicatorButton title={'Consumer Price Index'}/>
        <IndicatorButton title={'Inflation Rate'}/>
        <IndicatorButton title={'Unemployment rate'}/>
      </div>
      
      <div style={{display: 'flex', justifyContent:'center', alignItems:'center', marginTop: '1vh' }}>
        <h3 style={{color:'whitesmoke'}}>{chartName}{' in ' + chartUnit}{' (' + chartInterval + ')'}</h3>
      </div>

      <div style={{display: 'flex', justifyContent:'center', alignItems:'center', marginTop: '1vh' }}>
        <Chart style={{paddingLeft: '50px'}}chartData={chartValues} highestPrice={highestPrice} lowestPrice={lowestPrice} />  {/* highestPrice={highestPrice} lowestPrice={lowestPrice} */}
      </div>

    </div>
  )
}

export default EconomicIndicators