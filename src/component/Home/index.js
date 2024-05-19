/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from '../../Redux/store/users'
import { removeUsers } from '../../Redux/store/users';

export default function Home() {
  const users = useSelector((state) => state.users)
  const dispath = useDispatch()

  useEffect(() => {
    dispath(fetchUsers());
  }, []);

  // const removeHandler = (_id) => {
  //   swal
  // }

  return (
    <div>
      <h1>show data of all users</h1>
    </div>
  )
}
