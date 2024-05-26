/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Users from "./component/Users";
import Courses from "./component/Courses";
import Home from "./component/Home"
export default [
    { path: "/", element: <Home /> },
    { path: "/users", element: <Users /> },
    { path: "/courses", element: <Courses /> },
];
