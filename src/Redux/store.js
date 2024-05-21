import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './store/Users'

export default configureStore(
    {
        reducer : {
            users : usersReducer,
        }
    }
)