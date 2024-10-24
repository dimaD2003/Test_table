import './App.css';
import TopFilter from './components/TopFilter';
import MainTable from './components/MainTable';
import BottomFilter from './components/BottomFilter';

function App() {


  const data = [
    { keyword: "кресло", position: 15.5, clicks: 14500, CRT: "20.01%",impressions:14500, spros:14500 },
    { keyword: "кресло-компьютерное", position: 15.5, clicks: 14500, CRT: "20.01%",impressions:14500, spros:14500 },
    { keyword: "кресло кожанное", position: 15.5, clicks: 14500, CRT: "20.01%",impressions:14500, spros:14500 },
    
  ];


  return (
    <div className="App">
      <div className='sidebar'></div>
      <div className='top_menu'></div>
        <TopFilter></TopFilter>
        <MainTable data={data}></MainTable>
        <BottomFilter></BottomFilter>
    </div>
  );
}

export default App;
