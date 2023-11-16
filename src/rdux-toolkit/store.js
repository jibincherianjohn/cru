import { configureStore } from "@reduxjs/toolkit";
import userDetail from "./UserdetailSlice";

const store = configureStore({

reducer:{

 user:userDetail,

},


})


export default store