 import {React,useRef } from "react";
 import "rsuite/dist/rsuite.min.css"; 
 import './TopFilter.css'
 import { Search, Download, TableCellsSplit } from 'lucide-react';
 import { DateRangePicker } from "rsuite"; 
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDownload } from '@fortawesome/free-solid-svg-icons';
 import { useState } from "react";

 export default function TopFilter() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [dateRange, setDateRange] = useState('01.10.2024 - 01.11.2024');
  const [range, setRange] = useState({
    from: new Date(2024, 9, 1),
    to: new Date(2024, 10, 1)
  });

  const pickerStyle =  
  {  
     
  };

  const resetFilters = () => {
    setSearchKeyword('');
  };
    return (
    
    <div className="search-panel">

      <div div className="search-panel__container">
        <div className="left_search">
        <div className="search-input-container">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            className="search-input"
            placeholder="Начните вводить слово"
          />
        </div>

            <p className="date-input"> <DateRangePicker style={pickerStyle} /> </p>
           
           


       
        <button className="icon-button">
          <Download size={20} />
        </button>
         </div>

         {/* правая часть */}
      <div className="right_search">

        <button 
          className="reset-button"
          onClick={resetFilters}
        >
          Сбросить сортировку
        </button>

        <button className="icon-button">
        <TableCellsSplit /> <p style={{marginLeft:'10px'}}>Настройки </p>
        </button>
      </div>
      </div>
      
      </div>
  )
}






// const TopFilter = ()=>{
//     const [searchKeyword, setSearchKeyword] = useState('');
//     const [startDate, setStartDate] = useState(new Date('2024-10-01'));
//     const [endDate, setEndDate] = useState(new Date('2024-11-01'));

//     const handleSearchChange = (e) => {
//         setSearchKeyword(e.target.value);
//       };

//       const resetFilters = () => {
//         setSearchKeyword('');
//         setStartDate(new Date('2024-10-01'));
//         setEndDate(new Date('2024-11-01'));
//       };

//     return <div className="container">
//         <input type="text" 
//             placeholder="Начните вводить слово"
//             value={searchKeyword}
//             onChange={handleSearchChange}/>

//         <DatePicker
//             selected={startDate}
//             onChange={(date) => setStartDate(date)}
//             selectsStart
//             startDate={startDate}
//             endDate={endDate}
//       />
        
//         <DatePicker
//             selected={endDate}
//             onChange={(date) => setEndDate(date)}
//             selectsEnd
//             startDate={startDate}
//             endDate={endDate}
//       />

//     <button className="export-button">
//         <FontAwesomeIcon icon={faDownload} />
//       </button>

//       <button onClick={resetFilters}>Сбросить фильтры</button>

//       <button className="settings-button">
//         <i className="fa fa-cog"></i> Настройки
//       </button>
//     </div>
// }

// export default TopFilter;

