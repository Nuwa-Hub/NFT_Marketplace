import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import AdminCollectionCard from "components/Cards/AdminCollectionCard.js";
import AdminNFTCard from "components/Cards/AdminNFTCard.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <AdminNFTCard />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <AdminCollectionCard />
        </div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;
