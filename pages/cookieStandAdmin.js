import React from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import ReportTable from "./reportTable";
import CreateForm from "./createForm";
import axios from 'axios';
import { useState,useEffect} from 'react'

const baseUrl ='https://backend-drf.herokuapp.com/';
const creatCookieStandUrl = baseUrl+'api/v1/cookie_stands/';

const Cookiestandadmin = (props) => {
    const [reports,setReports] = useState([])
    const fromFormTOCookiestandadmin = (avgCookies)=>{  
        //setReports([...reports,avgCookies])     
    }
  
    const config={
        headers: {"Authorization" : `Bearer ${props.token}`}
    }
useEffect(() => {
  const fetchData = async () => {
    const result = await axios.get(
      creatCookieStandUrl, config    );
    const results = result.data.map( (store,idx) =>{
      return store.hourly_sales
    })
    console.log(results);
    setReports([...reports,...results.slice(9)]);
  };

  fetchData();
}, []);
  // const s = await axios.get(creatCookieStandUrl, config);
  // setResults(s.data);
  // console.log(s.data)

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
          <CreateForm fromFormTOCookiestandadmin={fromFormTOCookiestandadmin} token ={props.token}/>
          </div>
          <ReportTable reports = {reports}/>
         
        </div> 

      </main>
      <Footer locationsNum = {reports.length}/>
    </>
  );
};

export default Cookiestandadmin;
