import React from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import ReportTable from "./reportTable";
import CreateForm from "./createForm";
import { useState} from 'react'

const Cookiestandadmin = () => {
    // const [hourlySales,setHourlySales ] = useState({})
    const [reports,setReports] = useState([])
    const fromFormTOCookiestandadmin = (avgCookies)=>{        
        setReports([...reports,avgCookies])
    }
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Cookie Stand Admin" />
      
      <main className="">
    <div className="flex flex-col items-center justify-center flex-1 w-full text-center  py-5 ">
          <div className = "flex w-2/3 bg-[#6FE6B7] my-5 rounded-lg">
          <CreateForm fromFormTOCookiestandadmin={fromFormTOCookiestandadmin}/>
          </div>
          <ReportTable reports = {reports}/>
         
        </div> 

      </main>
      <Footer locationsNum = {reports.length}/>
    </>
  );
};

export default Cookiestandadmin;
