import React from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import ReportTable from "./reportTable";
import CreateForm from "./createForm";
import { useState} from 'react'
import useResource from "../hooks/useResources";


const Cookiestandadmin = (props) => {
  const { createResource } = useResource();
  const [cookieStnds, setCookieStands] = useState([]);
  const handleNewCookiesStand = ({
    location,
    minCustomerPerHour,
    maxCustomersPerHour,
    avgCookiesPerSale,
  }) => {
    createResource({
      location: location,
      description: "",
      hourly_sales: getRandomArbitrary(minCustomerPerHour,maxCustomersPerHour,avgCookiesPerSale),
      minimum_customers_per_hour: Number(minCustomerPerHour),
      maximum_customers_per_hour: Number(maxCustomersPerHour),
      average_cookies_per_sale: Number(avgCookiesPerSale).toFixed(2),
    });
  };
  function getRandomArbitrary(min, max,avg) {
    const l = []
    for (var i = 0; i <14;i++){
      l.push(Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min) ) * avg)
    }
    return l
}
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Cookie Stand Admin" />
      
      <main className="">
    <div className="flex flex-col items-center justify-center flex-1 w-full py-5 text-center ">
          <div className = "flex w-2/3 my-5  rounded-lg bg-[#86EFAC]">
          <CreateForm handleNewCookiesStand={handleNewCookiesStand} />
          </div>
          <ReportTable cookieStnds={cookieStnds}/>
         
        </div> 

      </main>
      <Footer />
    </>
  );
};

export default Cookiestandadmin;
