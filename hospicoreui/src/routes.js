// import
import React, { Component }  from 'react';
import Dashboard from "./views/Dashboard/Dashboard";
import Tables from "./views/Dashboard/Tables";
import Billing from "./views/Dashboard/Billing";
import RTLPage from "./views/RTL/RTLPage";
import Profile from "./views/Dashboard/Profile";
import SignIn from "./views/Pages/SignIn";
import SignUp from "./views/Pages/SignUp";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "./components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color='inherit' />,
    component: <Dashboard/>,
    layout: "/admin",
    ikey: "1"
  },
  {
    path: "/tables",
    name: "Tables",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color='inherit' />,
    component: <Tables/>,
    layout: "/admin",
    ikey: "2"
  },
  {
    path: "/billing",
    name: "Billing",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color='inherit' />,
    component: <Billing/>,
    layout: "/admin",
    ikey: "3"
  },
  {
    path: "/rtl-support-page",
    name: "RTL",
    rtlName: "آرتيإل",
    icon: <SupportIcon color='inherit' />,
    component: <RTLPage/>,
    layout: "/rtl",
    ikey: "4"
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    ikey: "5",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color='inherit' />,
        secondaryNavbar: true,
        component: <Profile/>,
        layout: "/admin",
        ikey: "6"
      },
      {
        path: "/signin",
        name: "Sign In",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color='inherit' />,
        component: <SignIn/>,
        layout: "/auth",
        ikey: "7"
      },
      {
        path: "/signup",
        name: "Sign Up",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color='inherit' />,
        component: <SignUp/>,
        layout: "/auth",
        ikey: "8"
      },
    ],
  },
];
export default dashRoutes;