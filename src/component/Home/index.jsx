/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";
import Header from "../Hearder";

export default function Home() {
  return (
    <>
    <Header/>
    <div className="d-flex justify-content-around mt-4">
      <Link className="btn btn-primary fs-1" to="/users"> users</Link>
      <Link className="btn btn-primary fs-1" to="/courses"> courses</Link>
    </div>
    </>
  );
}
