/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Users from "./component/Users";
import Courses from "./component/Courses";
import Infos from "./component/Info";
export default [
    { path: "/", element: <Users /> },
    { path: "/users", element: <Users /> },
    { path: "/infos", element: <Infos /> },
    { path: "/courses", element: <Courses /> },
];