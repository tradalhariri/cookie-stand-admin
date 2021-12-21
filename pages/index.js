import Head from "next/head";
import { useState } from "react";

const App = () => {
  const [cookie, setCookie] = useState();
  const eventHandler = (e) => {
    e.preventDefault();
    const cookieStand = {
      location: e.target.location.value,
      minCustomers: e.target.min_customers.value,
      maxCustomers: e.target.max_customers.value,
      avgCookies: e.target.avg_cookies.value,
    }
    setCookie(cookieStand);
  };
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-between bg-[#15B981] py-4 items-center">
        <h1 className="text-4xl mx-1">Cookie Stand Admin</h1>
      </header>
      <main className="">
        <div className="flex flex-col items-center justify-center flex-1 w-full text-center  py-5 ">
          <div className = "flex w-2/3 bg-[#6FE6B7] my-5 rounded-lg">
      
      <form className="w-full px-5 mt-10"  onSubmit={eventHandler}>
      <h2 className = "w-full h-10 mb-5 text-3xl font-bold text-gray-700 ml-50 "> Create Cookie Stand </h2>      

      <div className="flex w-full mb-5 md:justify-center md:items-center">
          <label className="block pr-4 mt-5 mb-1 font-bold text-gray-700" for="location">
              Location
          </label>
          <div className="md:w-full">
          <input className="w-full px-4 py-2 mt-5 bg-white focus:bg-gray-100" id="location" type="text"/>
          </div>
      </div>


      <div className="flex mb-6 ml-5 ">

          <div className="w-full px-1 mb-6 md:w-1/4">
              <label className="block mb-2 text-sm font-bold tracking-wide text-gray-700 " for="min_customers">
              Minimum Customers per Hour
              </label>
              <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border appearance-none focus:outline-none focus:bg-white" id="min_customers" type="number"/>
          </div>

          <div className="w-full px-1 mb-6 md:w-1/4">
              <label className="block mb-2 text-sm font-bold tracking-wide text-gray-700 " for="max_customers">
              Maximum Customers per Hour                </label>
              <input className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="max_customers" type="number"/>
          </div>

          <div className="w-full px-1 mb-6 md:w-1/4">
              <label className="block mb-2 text-sm font-bold tracking-wide text-gray-700 " for="avg_cookies">
              Average Cookies per Sale
              </label>
              <input className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="avg_cookies" type="number" step="0.1"/>
          </div>

          <div className="w-full px-1 mb-6 md:w-1/4">
              <button  className = "block w-full px-4 py-6 mt-3 text-3xl text-gray-700 bg-[#15B981]">
              Create
              </button>
          </div>

      </div>
                  
      </form>

</div>

          {cookie &&
          <div >
            <h5 className = "text-2xl text-gray-500">Report Table Coming Soon...</h5>
            <br />
            <p className = "mb-5 text-2xl text-gray-500">{ '{' + '"location":' + '"' + cookie.location + '"' + ',"minCustomers":' + cookie.minCustomers + ',"maxCustomers":' + cookie.maxCustomers + ',"avgCookies":' + cookie.avgCookies + '}'}</p>
          </div>}
        </div>


      </main>

      <footer className="flex justify-between bg-[#15B981] py-4 items-center">
        <a href="career" className="m-2">
          {" "}
          &copy; 2021
        </a>
      </footer>
    </>
  );
};
export default App;
