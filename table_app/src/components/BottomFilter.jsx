import React from "react";
import Select from 'react-select';
import './BottomFiletr.css'

const BottomFilter = () => {
  const customStyles = { control: (provided) => ({ 
    ...provided, 
    borderColor:'black',
    width: 100,
    height:40,
    minHeight:25,
    margin:'0 20px 0 0',
    flexDirection:'row',
    flexWrap:'nowrap',
    alignItems:'center'}),



clearIndicator: (provided) => ({
...provided,
color: 'black',
// Add more custom styles here
}),

option: (provided, state) => ({
...provided,
backgroundColor: state.isSelected ? 'blue' : 'white',
color: state.isSelected ? 'white' : 'black',
}),

     };

const myOpt=[50,100,150];
const options = myOpt.map(i => ({
  value: i,
  label: i,
}));
  return (
    <div className="bottom-filter">
      <div className="pagination">
        <button className="page-button">{'<'}</button>
        <span>Страница</span>
        <input type="text" className="page-input" value="1" readOnly />
        <span>из 5</span>
        <button className="page-button">{'>'}</button>
      </div>

      <div className="right-section">
      <Select
            id="ReposSelect"
            options={options}
            styles={customStyles}
        />
      </div>
    </div>


  );
};

export default BottomFilter;
