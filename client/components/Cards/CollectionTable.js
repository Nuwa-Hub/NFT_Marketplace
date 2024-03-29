import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";
import Link from "next/link";

export default function NFTTable({ color }) {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const tableHeader = ["Collection Name", "Owner", "Description", "No of NFTs", "Actions"];
  const nfts = useSelector((state) => state.admin.data?.nfts)
  const collections = useSelector((state) => state.admin.data?.collections)
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true)
    if (collections) {
      setData(collections);
      setLoading(false);
    }
  }, [collections])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-slate-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-slate-700" : "text-white")
                }
              >
                NFTs
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                {tableHeader.map(header => {
                  return (
                    <th key={header}
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-slate-50 text-slate-500 border-slate-100"
                          : "bg-slate-600 text-slate-200 border-slate-500")
                      }
                    >
                      {header}
                    </th>
                  );
                })
                }
              </tr>
            </thead>
            <tbody>
              {data.map((collection) => {
                return <tr key={collection._id}>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <Link href={`/collection/${collection._id}`} >
                      <a>
                        {collection.collectionName}
                      </a>
                    </Link>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {collection.owner}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {collection.description.substring(0, 50) + "..."}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {collection.nfts ? collection.nfts.length : 0}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                    <TableDropdown />
                  </td>
                </tr>
              })}

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
