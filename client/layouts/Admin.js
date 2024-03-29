import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

import { useSelector } from 'react-redux'
export default function Admin({ children }) {
  const admin = useSelector((state) => state.admin.currentAdmin);
  if (!admin) {
    return <>
      <p>not authorize</p>
    </>;
  }
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-slate-100">
        {/* <AdminNavbar /> */}
        {/* Header */}
        {/* <HeaderStats /> */}
        <div className="px-4 h-screen md:px-10 mx-auto w-full -m-24">
          {children}
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </>
  );
}
