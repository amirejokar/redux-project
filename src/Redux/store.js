import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './store/Users'
import coursesReducer from './store/courses'
import articlsReducer from './store/articels'

export default configureStore(
    {
        reducer : {
            users : usersReducer,
            courses : coursesReducer,
            articls : articlsReducer
        }
    }
)