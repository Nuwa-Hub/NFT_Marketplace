import React from "react";

// components

import CardAdminProfile from "components/Cards/CardAdminProfile";


// layout for page

import Admin from "layouts/Admin.js";

export default function Dashboard() {
    return (
        <>
            <CardAdminProfile />
        </>
    );
}

Dashboard.layout = Admin;
