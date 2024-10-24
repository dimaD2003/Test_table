import React from "react";
import { useState } from "react";
import './MainTable.css'

const MainTable = ({data})=>{


return (<div className="container">
    <table >
        <thead>
        <tr>
            <th><input type="checkbox" /> </th>
          <th>Ключевые слова  &#9650;</th>
          <th>Позиция &#9650; </th>
          <th>Клики &#9650; </th>
          <th>CTR  &#9650;</th>
          <th>Показы &#9650; </th>
          <th>Спрос &#9650; </th>
          <th style={{padding:'0 50px', }}>01.10.2024 &#9650; </th>
          <th>02.10.2024 &#9650; </th>
          <th>03.10.2024 &#9650; </th>
          <th>04.10.2024 &#9650; </th>
          <th>05.10.2024 &#9650; </th>
          <th>06.10.2024 &#9650; </th>
          <th>07.10.2024 &#9650; </th>
        </tr>
        </thead>

        <tbody>
        {data.map((row, index) => (
            
          <tr key={index} >
            <td><input type="checkbox" /></td> 
            <td>{row.keyword}</td>
            <td>{row.position}</td>
            <td>{row.clicks}</td>
            <td>{row.CRT}</td>
            <td>{row.spros}</td>
            <td>{row.impressions}</td>
            
            <td style={{background:'#F7F7F7', fontSize:'12px',paddingRight:'100px', paddingLeft:'100px'}}> нет&nbsp;данных
            </td>
            <td className={`cols ${index === 0 ? 'green': index === 1?'red': 'blue'}`}> 
                <div className="date-cell"> 
                    <div className="number"  style={{ marginRight: index === 2 ? '100px' : '70px' }} >
                    {index === 0 ? 16.3: index === 1 ? 46.9 : index===2? 8 : 0}
                    <span className={`sup ${(index === 0 || index === 2 )? 'green' : 'red'}`}>{(index === 2 || index === 0)? <span > &#9650;</span> : <span>&#9660;</span>}9</span>
                    </div>
                <ul className="details">
                    <li>Клики: {row.clicks -7372 }</li>
                    <li>CRT: {row.CRT}</li>
                    <li>Показы{row.impressions - 13355}</li>
                    <li>Спрос: {row.spros - 5787}</li>
                </ul></div></td>

            

                <td className={`cols ${index === 0 ? 'red': index === 1? 'gray': 'green'}`}>  
                    <div className="date-cell">
                    
                    {index === 0? <>  <div className="number"  style={{ marginRight: '70px' }} > 
                        46.9 <span className="sup red">  <span>&#9660;</span>9</span> </div>
                        <ul className="details">
                    <li>Клики: {row.clicks -7372 }</li>
                    <li>CRT: {row.CRT}</li>
                    <li>Показы{row.impressions - 13355}</li>
                    <li>Спрос: {row.spros - 5787}</li>
                </ul>  </> : index ===1? <p style={{fontSize:'12px'}}>Нет данных </p>: 
                
                <> <div className="number"  style={{ marginRight:'70px' }} > 
                        16.3 <span className="sup green">  <span>&#9650;</span>11</span> </div>
                        <ul className="details">
                    <li>Клики: {row.clicks -7372 }</li>
                    <li>CRT: {row.CRT}</li>
                    <li>Показы{row.impressions - 13355}</li>
                    <li>Спрос: {row.spros - 5787}</li>
                </ul></>}
                </div>
                </td>

                <td className={`cols ${index === 0 ? 'green': index === 1?'red': 'blue'}`}> 
                <div className="date-cell"> 
                    <div className="number"  style={{ marginRight: index === 2 ? '100px' : '70px' }} >
                    {index === 0 ? 16.3: index === 1 ? 46.9 : index===2? 8 : 0}
                    <span className={`sup ${(index === 0 || index === 2 )? 'green' : 'red'}`}>{(index === 2 || index === 0)? <span > &#9650;</span> : <span>&#9660;</span>}9</span>
                    </div>
                <ul className="details">
                    <li>Клики: {row.clicks -7372 }</li>
                    <li>CRT: {row.CRT}</li>
                    <li>Показы{row.impressions - 13355}</li>
                    <li>Спрос: {row.spros - 5787}</li>
                </ul></div></td>


                <td className={`cols ${index === 0 ? 'red': index === 1?'green': 'red'}`}> 
                <div className="date-cell"> 
                    <div className="number"  style={{ marginRight: index === 2 ? '100px' : '70px' }} >
                    {index === 0 ? 16.3: index === 1 ? 46.9 : index===2? 8 : 0}
                    <span className={`sup ${(index === 0 || index === 2 )? 'red' : 'green'}`}>{(index === 2 || index === 0)? <span > &#9660;</span> : <span>&#9650;</span>}9</span>
                    </div>
                <ul className="details">
                    <li>Клики: {row.clicks -7372 }</li>
                    <li>CRT: {row.CRT}</li>
                    <li>Показы{row.impressions - 13355}</li>
                    <li>Спрос: {row.spros - 5787}</li>
                </ul></div></td>
                <td className={`cols ${index === 0 ? 'green': index === 1?'red': 'blue'}`}> 
                <div className="date-cell"> 
                    <div className="number"  style={{ marginRight: index === 2 ? '100px' : '70px' }} >
                    {index === 0 ? 16.3: index === 1 ? 46.9 : index===2? 8 : 0}
                    <span className={`sup ${(index === 0 || index === 2 )? 'green' : 'red'}`}>{(index === 2 || index === 0)? <span > &#9650;</span> : <span>&#9660;</span>}9</span>
                    </div>
                <ul className="details">
                    <li>Клики: {row.clicks -7372 }</li>
                    <li>CRT: {row.CRT}</li>
                    <li>Показы{row.impressions - 13355}</li>
                    <li>Спрос: {row.spros - 5787}</li>
                </ul></div></td>


                <td className={`cols ${index === 0 ? 'red': index === 1? 'gray': 'green'}`}>  
                    <div className="date-cell">
                    
                    {index === 0? <>  <div className="number"  style={{ marginRight: '70px' }} > 
                        46.9 <span className="sup red">  <span>&#9660;</span>9</span> </div>
                        <ul className="details">
                    <li>Клики: {row.clicks -7372 }</li>
                    <li>CRT: {row.CRT}</li>
                    <li>Показы{row.impressions - 13355}</li>
                    <li>Спрос: {row.spros - 5787}</li>
                </ul>  </> : index ===1? <p >Нет данных </p>: 
                
                <> <div className="number"  style={{ marginRight:'70px' }} > 
                        16.3 <span className="sup green">  <span>&#9650;</span>11</span> </div>
                        <ul className="details">
                    <li>Клики: {row.clicks -7372 }</li>
                    <li>CRT: {row.CRT}</li>
                    <li>Показы{row.impressions - 13355}</li>
                    <li>Спрос: {row.spros - 5787}</li>
                </ul></>}
                </div>
                </td>
            
                
          </tr>
        ))}
        <tr className="summary-row">
            <td></td>
            <td style={{    paddingRight: '11px;'}}>Всего слов: 300</td>
            <td> 14500</td>
            <td>14500</td>
            <td>20.01%</td>
            <td>14500</td>
            <td>14500</td>
            <td></td>
            <td>
                   <p style={{ float: 'left',marginRight: '21px',marginTop: '7px' }}>Клики <div  style={{color:'black'}}>7128</div></p>
                    <p style={{ float: 'left', marginRight: '21px' ,marginTop: '7px' }}>Показы <div style={{color:'black'}}>1145</div></p>
                    <p style={{ float: 'left' }}>В топ-50 <div style={{color:'black'}}>40</div></p>  </td>
                            
            <td>
            <p style={{ float: 'left',marginRight: '21px' ,marginTop: '7px' }}>Клики <div  style={{color:'black'}}>7128</div></p>
                    <p style={{ float: 'left', marginRight: '21px' }}>Показы <div style={{color:'black'}}>1145</div></p>
                    <p style={{ float: 'left' }}>В топ-50 <div style={{color:'black'}}>40</div></p> </td>
                    <td>
            <p style={{ float: 'left',marginRight: '21px' ,marginTop: '7px' }}>Клики <div  style={{color:'black'}}>7128</div></p>
                    <p style={{ float: 'left', marginRight: '21px' }}>Показы <div style={{color:'black'}}>1145</div></p>
                    <p style={{ float: 'left' }}>В топ-50 <div style={{color:'black'}}>40</div></p> </td>
                    <td>
            <p style={{ float: 'left',marginRight: '21px' ,marginTop: '7px' }}>Клики <div  style={{color:'black'}}>7128</div></p>
                    <p style={{ float: 'left', marginRight: '21px' }}>Показы <div style={{color:'black'}}>1145</div></p>
                    <p style={{ float: 'left' }}>В топ-50 <div style={{color:'black'}}>40</div></p> </td>
                    <td>
            <p style={{ float: 'left',marginRight: '21px' ,marginTop: '7px' }}>Клики <div  style={{color:'black'}}>7128</div></p>
                    <p style={{ float: 'left', marginRight: '21px' }}>Показы <div style={{color:'black'}}>1145</div></p>
                    <p style={{ float: 'left' }}>В топ-50 <div style={{color:'black'}}>40</div></p> </td> <td>
            <p style={{ float: 'left',marginRight: '21px' ,marginTop: '7px' }}>Клики <div  style={{color:'black'}}>7128</div></p>
                    <p style={{ float: 'left', marginRight: '21px' }}>Показы <div style={{color:'black'}}>1145</div></p>
                    <p style={{ float: 'left' }}>В топ-50 <div style={{color:'black'}}>40</div></p> </td>
                    
            
            
         
           
          </tr>
        </tbody>

    </table>

</div>)

}

export default MainTable;