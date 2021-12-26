import { useState } from "react";
import { useAuth } from "../contexts/auth";
export default function CreateForm({ handleNewCookiesStand }) {
  const [minCustomerPerHour, setMinCustomerPerHour] = useState(0);
  const [location, setLocation] = useState("");
  const [maxCustomersPerHour, setMaxCustomerPerHour] = useState(0);
  const [avgCookiesPerSale, setAvgCookiesPerSale] = useState(0);
  const { addRow } = useAuth();
  const handleAddStand = (e) => {
    e.preventDefault();
    handleNewCookiesStand({
      location,
      minCustomerPerHour,
      maxCustomersPerHour,
      avgCookiesPerSale,
    });

    addRow();
  };
  return (
    <form
      onSubmit={handleAddStand}
      className="items-center p-4 m-auto mb-4 bg-[#86EFAC] rounded-lg items-cew-7/12 juestify-center itcontent-center items-cente md:flex md:flex-wrap md:justify-between md:flex-row"
    >
      <div className="flex flex-col mb-4 md:w-1/2">
        <label> Add Location</label>
        <input
          value={location}
          type="text"
          className="flex-grow "
          onChange={(e) => setLocation(e.target.value)}
          required
        />

      </div>
      <div className="flex flex-col mb-4 md:w-1/2">
      <button
          type="submit"
          className="px-3 py-4 bg-green-600 border text-grey-darkest md:ml-2 rounded-xl hover:bg-green-500"
        >
          create
        </button>
      </div>

      <section className="flex flex-row flex-wrap justify-between gap-4 p-4 w-100">
        <div className="flex flex-col justify-center flex-grow p-2 align-middle bg-[#86EFAC] ">
          <label className="m-auto">Minimum Customer per Hour</label>
          <input
            className="pl-2"
            type="number"
            value={minCustomerPerHour}
            onChange={(e) => setMinCustomerPerHour(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center flex-grow p-2 align-middle bg-[#86EFAC]">
          <label className="m-auto">Maximum Customers per Hour</label>
          <input
            className="pl-2"
            value={maxCustomersPerHour}
            onChange={(e) => setMaxCustomerPerHour(e.target.value)}
            type="number"
          />
        </div>
        <div className="flex flex-col justify-center flex-grow p-2 align-middle bg-[#86EFAC]">
          <label className="m-auto">Average Cookies per Sale</label>
          <input
            className="pl-2"
            type="number"
            value={avgCookiesPerSale}
            onChange={(e) => setAvgCookiesPerSale(e.target.value)}
          />
        </div>

      </section>
    </form>
  );
}