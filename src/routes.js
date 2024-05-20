/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Home from "./component/Home";
import Users from "./component/Users";
import Courses from "./component/Courses";
export default [
    { path: "/", element: <Home /> },
    { path: "/users", element: <Users /> },
    { path: "/courses", element: <Courses /> },
];
