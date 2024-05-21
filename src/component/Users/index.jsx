/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers , removeUsers } from "../../Redux/store/Users";
import swal from "sweetalert";
export default function Users() {
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
        return (
          <div key={user._id}>
            <h5 >
              {user.firstname}={user._id}
            </h5>
          <button onClick={() => removeHandler(user._id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
}
