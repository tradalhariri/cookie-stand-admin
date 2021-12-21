import React from "react";
import { useState} from 'react'
const CreateForm = ({fromFormTOCookiestandadmin}) => {
    const eventHandler = (e) => {
      e.preventDefault();
      const cookieStand = {
        location: e.target.location.value,
        minCustomers: e.target.min_customers.value,
        maxCustomers: e.target.max_customers.value,
        avgCookies: e.target.avg_cookies.value,
      }
      const calcAvgCookiePerHour = (cookieStand)=>{
          
          const randCustomer = Math.floor(Math.random() * (Math.floor(parseInt(cookieStand.maxCustomers)) - Math.ceil(parseInt( cookieStand.minCustomers)) + 1) + Math.ceil(parseInt( cookieStand.minCustomers)) );
          return Math.floor(randCustomer * parseFloat(cookieStand.avgCookies));
  
      }

      const calcAvgCookies = (cookieStand)=>{
          const avgCookies = [];
          for (let i = 0; i < 14; i++) {
            avgCookies.push(calcAvgCookiePerHour(cookieStand))
          }
          return avgCookies
      }
     const avgCookies = calcAvgCookies(cookieStand)
     const rowTotal = avgCookies.reduce((partial_sum, a) => partial_sum + a, 0)
     avgCookies.splice(0,0,cookieStand.location)
     
     avgCookies.push(rowTotal)
      fromFormTOCookiestandadmin(avgCookies)
    };

  return (
    <form className="w-full px-5 mt-10" onSubmit={eventHandler}>
      <h2 className="w-full h-10 mb-5 text-3xl font-bold text-gray-700 ml-50 ">
        {" "}
        Create Cookie Stand{" "}
      </h2>

      <div className="flex w-full mb-5 md:justify-center md:items-center">
        <label
          className="block pr-4 mt-5 mb-1 font-bold text-gray-700"
          for="location"
        >
          Location
        </label>
        <div className="md:w-full">
          <input
            className="w-full px-4 py-2 mt-5 bg-white focus:bg-gray-100"
            id="location"
            type="text"
          />
        </div>
      </div>

      <div className="flex mb-6 ml-5 ">
        <div className="w-full px-1 mb-6 md:w-1/4">
          <label
            className="block mb-2 text-sm font-bold tracking-wide text-gray-700 "
            for="min_customers"
          >
            Minimum Customers per Hour
          </label>
          <input
            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border appearance-none focus:outline-none focus:bg-white"
            id="min_customers"
            type="number"
          />
        </div>

        <div className="w-full px-1 mb-6 md:w-1/4">
          <label
            className="block mb-2 text-sm font-bold tracking-wide text-gray-700 "
            for="max_customers"
          >
            Maximum Customers per Hour{" "}
          </label>
          <input
            className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="max_customers"
            type="number"
          />
        </div>

        <div className="w-full px-1 mb-6 md:w-1/4">
          <label
            className="block mb-2 text-sm font-bold tracking-wide text-gray-700 "
            for="avg_cookies"
          >
            Average Cookies per Sale
          </label>
          <input
            className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="avg_cookies"
            type="number"
            step="0.1"
          />
        </div>

        <div className="w-full px-1 mb-6 md:w-1/4">
          <button className="block w-full px-4 py-6 mt-3 text-3xl text-gray-700 bg-[#15B981]">
            Create
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateForm;
