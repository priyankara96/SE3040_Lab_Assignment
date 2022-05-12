import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./login";
import CreateProfileTrader from "./trader/CreateProfileTrader";
import Items from "./trader/Items";
import ViewCustomer from "./trader/ViewCustomer";
import Promotions from "./trader/Promotions";
import TraderHome from "./trader/TraderHome";
import TraderLogin from "./trader/TraderLogin";

import CreateProfileCustomer from "./customer/CreateProfileCustomer";
import ViewItems from "./customer/ViewItems";
import ViewCart from "./customer/ViewCart";
import ViewWishList from "./customer/ViewWishList";
import Purchase from "./customer/Purchase";
import CustomerHome from "./customer/CustomerHome";
import CustomerLogin from "./customer/CustomerLogin";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/CreateProfileTrader" element={<CreateProfileTrader />} />
        <Route path="/Items" element={<Items />} />
        <Route path="/ViewCustomer" element={<ViewCustomer />} />
        <Route path="/Promotions" element={<Promotions />} />
        <Route path="/TraderHome" element={<TraderHome />} />
        <Route path="/TraderLogin" element={<TraderLogin />} />

        <Route
          path="/CreateProfileCustomer"
          element={<CreateProfileCustomer />}
        />
        <Route path="/ViewItems" element={<ViewItems />} />
        <Route path="/ViewCart" element={<ViewCart />} />
        <Route path="/ViewWishList" element={<ViewWishList />} />
        <Route path="/Purchase" element={<Purchase />} />
        <Route path="/CustomerHome" element={<CustomerHome />} />
        <Route path="/CustomerLogin" element={<CustomerLogin />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
