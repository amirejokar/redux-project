/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses, removeCourse } from "../../Redux/store/courses";
import swal from "sweetalert";

export default function Courses() {
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  const removeHandler = (_id) => {
    swal({
      title: "are you sure ? ",
      icone: "warning",
      buttons: ["no", "yes"],
    }).then((result) => {
      if (result) {
        dispatch(removeCourse(_id));
      }
      swal({
        title: "course removed successfully",
        icon: "success",
      });
    });
  };

  return (
    <div>
      <h1 className="text-center">all courses</h1>
      {courses.map((course) => {
        return (
          <div className="d-flex my-3" key={course._id}>
            <h5>{course.title}</h5>
            <button onClick={removeHandler}>remove this </button>
          </div>
        );
      })}
    </div>
  );
}
