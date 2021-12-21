import React from "react";
import { timeSlots } from "../data";
// import { useState} from 'react'

const ReportTable = ({reports}) => {
    // const  createTableFooter = (reports)=>{
 
    //     for (let h = 1; h < 16 ; h++) {
    //       let tdTotalStoresPerHour = 0;
    //       for (let s = 0; s < reports.length-1; s++) {
    //         tdTotalStoresPerHour+=reports[s][h];
    //       }
    //       reports[reports.length -1].push(tdTotalStoresPerHour);      
    //   }
      
    //   reports[reports.length-1].splice(0,0,"Totals")
    //   return reports

    // }
    // let reportss = createTableFooter(reports)
    // console.log(reports);
  return (
    <table>
      <thead>
        <tr>
          <th>Location</th>
          {timeSlots.map((hour, idx) => (
            <th key={idx}>{hour}</th>
          ))}
          <th>Totals</th>
        </tr>
      </thead>
      <tbody>
        {reports.map((avgCookie, idx) => {

          return <tr key={idx}>
            {avgCookie.map((cookie, i) => {
             return <td key={i}>{cookie}</td>
            })}

          </tr>
        })}
      </tbody>
      <tfoot>
        <tr>
          <th>Totals</th>
        </tr>
      </tfoot>
    </table>
  );
};

export default ReportTable;
