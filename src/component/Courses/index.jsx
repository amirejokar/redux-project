/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourses } from '../../Redux/store/courses'

export default function Courses() {
  const courses = useSelector((state) => state.courses)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchCourses())
  },[])
  return (
    <div>index</div>
  )
}
