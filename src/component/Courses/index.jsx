/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourses , remove } from '../../Redux/store/courses'
import swal from 'sweetalert'

export default function Courses() {
  const courses = useSelector((state) => state.courses)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchCourses())
  },[])

  // const removeHandler = (_id) => {
  //   swal({
  //     title: "are you sure ? ",
  //     icone : "warning",
  //     buttons : ["no","yes"],
  //   }).then((result) => {
  //     if(result){

  //     }
  //   })
  // }

  return (
    <div>index</div>
  )
}
