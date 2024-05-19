import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./store/users";

export default configureStore(
    {
        reducer : {
            users : usersReducer,
        }
    }
)