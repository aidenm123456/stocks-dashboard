import SearchTicker from './pages/SearchTicker';
import MarketNews from './pages/MarketNews';
import EconomicIndicators from './pages/EconomicIndicators';
import { HashRouter, Routes, Route } from 'react-router-dom'
import SideBar from './components/SideBar';


function App() {
  return (
    <div style={AppCSS} className="App">

      <SideBar />

      <HashRouter>
        <Routes>
          <Route path="/stocks-dashboard/" element={ <SearchTicker /> }/>
          <Route path="/stocks-dashboard/marketnews" element={ <MarketNews /> }/>
          <Route path="/stocks-dashboard/economicindicators" element={ <EconomicIndicators /> }/>
        </Routes>
      </HashRouter>
    </div>
  );
}

const AppCSS = {
  backgroundColor: '#2A2953',
  display: 'flex',
};

export default App;
