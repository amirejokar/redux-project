/* eslint-disable import/no-anonymous-default-export */
import React from "react";
// import Home from "./component/Home";
import Users from "./component/Users";
import Courses from "./component/Courses";
// import Home from "./component/Home/Home";
import ButtonBaseDemo from "./component/Home/Home";
export default [
    { path: "/", element: <ButtonBaseDemo /> },
    { path: "/users", element: <Users /> },
    { path: "/courses", element: <Courses /> },
];
