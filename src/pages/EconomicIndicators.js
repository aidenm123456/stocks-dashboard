import React from 'react'
import { useEffect } from 'react';
import IndicatorButton from '../components/IndicatorButton'

const EconomicIndicators = () => {

  
  


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