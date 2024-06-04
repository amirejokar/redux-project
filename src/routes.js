/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Users from "./component/Users";
import Courses from "./component/Courses";
import Infos from "./component/Info";
import Articles from "./component/Articles";
export default [
    { path: "/", element: <Users /> },
    { path: "/users", element: <Users /> },
    { path: "/infos", element: <Infos /> },
    { path: "/courses", element: <Courses /> },
    { path: "/articles", element: <Articles /> },
];