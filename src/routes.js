/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Users from "./component/Users";
import Courses from "./component/Courses";
export default [
    { path: "/", element: <Users /> },
    { path: "/users", element: <Users /> },
    { path: "/courses", element: <Courses /> },
];