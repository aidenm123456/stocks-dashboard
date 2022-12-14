import SearchTicker from './pages/SearchTicker';
import MarketNews from './pages/MarketNews';
import EconomicIndicators from './pages/EconomicIndicators';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SideBar from './components/SideBar';


function App() {
  return (
    <div style={AppCSS} className="App">

      <SideBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <SearchTicker /> }/>
          <Route path="/marketnews" element={ <MarketNews /> }/>
          <Route path="/economicindicators" element={ <EconomicIndicators /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const AppCSS = {
  backgroundColor: '#2A2953',
  display: 'flex',
};

export default App;
