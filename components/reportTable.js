import { timeSlots } from "../data";
import Locations from "./locations"
import useResource from "../hooks/useResources";
export default function ReportTable() {
  const { resources, loading } = useResource();

  let totals = new Array(14).fill(0);
  if (!loading) {
    totals = totals.map((_, idx) =>
      resources
        .map((item,idx) => item.hourly_sales)
        .map((val) => val[idx])
        .reduce((total, item) => total + item, 0)
    );
  }
  return (
    <>
      {!loading ? (
        resources.length ? (
          <table className="w-7/12 m-auto mt-8 table-auto">
            <thead>
              <tr>
                <th className="w-2/12 bg-green-500 border border-none">
                  Location
                </th>
                {timeSlots.map((item, idx) => (
                  <th key={idx} className="bg-green-500 border-none">
                    {item}
                  </th>
                ))}
                <th className="bg-green-500 border-none">Totals</th>
              </tr>
            </thead>
              <Locations />
            
            <tfoot>
              <tr>
                <th className="bg-green-500 border-none">Totals</th>
                {
                  
                totals.map((item, idx) => (
                  <th key={idx} className="bg-green-500 border-none">
                    {item}
                  </th>
                ))}
                <th className="bg-green-500 border-none">
                  {totals.reduce((total, item) => total + item, 0)}
                </th>
              </tr>
            </tfoot>
          </table>
        ) : (
          <h2 className="mt-12 text-3xl text-center">
            No Cookie Stands Available
          </h2>
        )
      ) : (
    null
      )}
    </>
  );
}