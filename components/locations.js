import { useAuth } from "../contexts/auth";
import useResource from "../hooks/useResources";
import { useEffect, useState } from "react";
export default function Locations() {
  const { resources, loading, deleteResource } = useResource();
  const { newRow, resetNewRow } = useAuth();
  const [res, setRes] = useState(resources);

  useEffect(() => {
    resetNewRow();
    setRes(resources);
  }, [resources]);

  const handleDelete = (id) => {
    setRes(res.filter((item) => item.id != id));
    deleteResource(id);
  };

  return (
    <>
      {!loading ? (
        res.length ? (
          res.map((item, index) => {
            return (
              <>
              <tbody>
              <tr key={index}>
                <th
                  className={`bg-green-500 justify-between border p-1 flex flex-row border-black ${
                    index % 2 ? "bg-green-300" : "bg-green-400"
                  }`}
                >
                  {item.location}
                  <img
                    className="cursor-pointer "
                    onClick={() => handleDelete(item.id)}
                    width="30"
                    height="30"
                    src="https://icons.iconarchive.com/icons/papirus-team/papirus-status/256/user-trash-full-icon.png"
                  />
                </th>
                {item.hourly_sales.map((hour, idx) => (
                  <td
                    key={idx}
                    className={`border border-black text-center	 ${
                      index % 2 ? "bg-green-300" : "bg-green-400"
                    }`}
                  >
                    {hour}
                  </td>
                ))}
                <th
                  className={`bg-green-500 border border-black ${
                    index % 2 ? "bg-green-300" : "bg-green-400"
                  }`}
                >
                  {item.hourly_sales.reduce((total, item) => total + item, 0)}
                </th>
              </tr>
              </tbody>
              
              </>
            );
          })
        ) : (
      null
        )
      ) : (
null      )}
      {newRow ? (
null
      ) : null}
    </>
  );
}