import React from "react";
import { timeSlots } from "../data";
// import { useState} from 'react'

const ReportTable = ({ reports }) => {

  const calcFooter = ()=>{
    const footer = []
    for (let h = 1; h < 16 ; h++) {
      let tdTotalStoresPerHour = 0;
      for (let s = 0; s < reports.length; s++) {
        tdTotalStoresPerHour+=reports[s][h];
      }
      
      footer.push(tdTotalStoresPerHour);
      
  }
  return footer;
  }
  

  return (
    <div>
    {reports.length == 0 ? <h2>No Cookie Stands Available</h2> :
       <table>
      <thead className="bg-emerald-400">
        <tr>
          <th>Location</th>
          {timeSlots.map((hour, idx) => (
            <th key={idx}>{hour}</th>
          ))}
          <th>Totals</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {reports.map((avgCookie, idx) => {
         
           let color = idx % 2 == 0? "bg-emerald-400": "bg-emerald-300"
          
          return (
            <tr key={idx} className={color}>
              {avgCookie.map((cookie, i) => {
                return <td key={i}  className="border border-gray-600">{cookie}</td>;
              })}
            </tr>
          );
        })}
      </tbody>

       <tfoot>
        <tr>
          <th className="bg-emerald-400">Totals</th>
{
 calcFooter().map((val,idx)=> <th className="bg-emerald-400">{val}</th>)

}
    
        </tr>
      </tfoot> 
    </table>
      }
      </div>
  );
};

export default ReportTable;
