import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({ chartData, highestPrice, lowestPrice }) => {


  return(
    <div style={{width:'60vw', height:'75vh'}}>
    <ResponsiveContainer width='100%' height='100%'>
    <AreaChart
      // width={1000}
      // height={600} // was 750
      data={chartData}
      margin={{
        top: 10,
        right: 30,
        left: 15,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="10 10" />
      <XAxis dataKey="date" tick={{ fill: 'whitesmoke' }} /> {/* tick={false} interval={} */}
      <YAxis tick={{ fill: 'whitesmoke' }} domain={[ Math.round((lowestPrice * 0.75) * 100) / 100, Math.round((highestPrice * 1.03) * 100)/100 ]}/>
      <Tooltip />
      <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />  {/*#8884d8 #8884d8*/}
    </AreaChart>
    </ResponsiveContainer>
    </div>
  );
} 





export default Chart