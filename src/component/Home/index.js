/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../Redux/store/users";
import { removeUsers } from "../../Redux/store/users";
import swal from "sweetalert";

export default function Home() {
  const users = useSelector((state) => state.users);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(fetchUsers());
  }, []);

  const removeHandler = (_id) => {
    swal({
      title: "are you sure ?",
      icone: "warning",
      buttons: ["no", "yes"],
    }).then((result) => {
      if (result) dispath(removeUsers(_id));
      swal({
        title: "کاربر مورد نظر با موفقیت حذف شد",
        icon: "success",
        button: "اوکی",
      });
    });
  };

  return (
    <div>
      <h1>show data of all users</h1>
      {users.map((user) => {
        return <h5 key={user.id}>{user.firstname}</h5>;
      })}
      <button onClick={removeHandler}> remove users</button>
    </div>
  );
}
