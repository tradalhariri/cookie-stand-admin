import React from "react";
import { timeSlots } from "../data";
// import { useState} from 'react'

const ReportTable = ({ reports }) => {
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
          <th>Totals</th>
        </tr>
      </tfoot>
    </table>
  );
};

export default ReportTable;
