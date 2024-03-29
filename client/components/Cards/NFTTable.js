import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";
import Link from "next/link";

export default function NFTTable({ color }) {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const tableHeader = ["NFT Name", "Collection", "Owner", "Price", "Description", "Actions"];
  const nfts = useSelector((state) => state.admin.data?.nfts)
  const collections = useSelector((state) => state.admin.data?.collections)
  // const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true)
    if (nfts) {
      setData(nfts);
      setLoading(false);
    }
  }, [nfts])

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
              {data.map((nft) => {
                return <tr key={nft._id}>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <Link href={`/nft/${nft._id}`} >
                      <a>
                        {nft.NFTName}
                      </a>
                    </Link>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <Link href={`/collection/${nft.collectionId}`} >
                      <a>
                        {collections.find(collection => collection._id === nft.collectionId)?.collectionName}
                      </a>
                    </Link>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {nft.owner}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {nft.isListed ? nft.price : 'Not Listed'}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {nft.description}
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
