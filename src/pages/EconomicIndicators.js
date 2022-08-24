import React from 'react'
import { useEffect, useState } from 'react';
import Chart from '../components/Chart';
import IndicatorButton from '../components/IndicatorButton';
import styled from 'styled-components';

const EconomicIndicators = () => {

  const [chartValues, setChartValues] = useState(null);
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
  
  
  if(chartValues == null) {
    return <p style={{color:'whitesmoke'}} >Loading ...</p>
  }

  return (
    <DivMain>
      
      <DivButton>
        <IndicatorButton title={'Real GDP'} onCall={() => getEcon(`https://www.alphavantage.co/query?function=REAL_GDP&interval=annual&apikey=demo`)}/>
        <IndicatorButton title={'10-Year Treasury Yield'} onCall={() => getEcon(`https://www.alphavantage.co/query?function=TREASURY_YIELD&interval=monthly&maturity=10year&apikey=demo`)}/>
        <IndicatorButton title={'Federal Funds Rate'} onCall={() => getEcon(`https://www.alphavantage.co/query?function=FEDERAL_FUNDS_RATE&interval=monthly&apikey=demo`)}/>
        <IndicatorButton title={'Consumer Price Index'} onCall={() => getEcon(`https://www.alphavantage.co/query?function=CPI&interval=monthly&apikey=demo`)} />
        <IndicatorButton title={'Inflation Rate'} onCall={() => getEcon(`https://www.alphavantage.co/query?function=INFLATION&apikey=demo`)} />
        <IndicatorButton title={'Unemployment rate'} onCall={() => getEcon(`https://www.alphavantage.co/query?function=UNEMPLOYMENT&apikey=demo`)} />
      </DivButton>
      
      <DivHeading>
        <h3 style={{color:'whitesmoke'}}>{chartName}{' in ' + chartUnit}{' (' + chartInterval + ')'}</h3>
      </DivHeading>

      <DivChart>
        <Chart style={{paddingLeft: '50px'}} chartData={chartValues} highestPrice={highestPrice} lowestPrice={lowestPrice} />
      </DivChart>

    </DivMain>
  )
}

const DivMain = styled.div`
  width: 84vw;
`

const DivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  margin-top: 5vh; 
`

const DivHeading = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  margin-top: 5vh; 
`

const DivChart = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  margin-top: 1vh; 
`

export default EconomicIndicators