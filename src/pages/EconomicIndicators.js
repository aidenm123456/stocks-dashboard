import React from 'react'
import { useEffect } from 'react';
import IndicatorButton from '../components/IndicatorButton'

const EconomicIndicators = () => {

  const getEcon = async ( apiUrl ) => {
    const data = await fetch(apiUrl); //CS2FWWWNNNJOW6BT
    const econ = await data.json();
    // console.log(econ.data);
    // console.log(Object.values(econ.data[0]));
    // console.log(econ.name);
    // console.log(econ.unit);
    // console.log(econ.interval);

    for(let i = 0; i < econ.data.length; i++) {
      console.log(Object.values(econ.data[i]))
    }

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

      <div>
        
      </div>

    </div>
  )
}

export default EconomicIndicators