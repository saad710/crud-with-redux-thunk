import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";

//   export const fetchUser = (userData) => {
//     return {
//       type: "fetch-userData",
//       payload: userData
//     };
//   };
//   export const addFEUser = () => {
//     return async (dispatch) => {
//       const data = await axios.get( `https://jsonplaceholder.typicode.com/users`,);
//       dispatch(fetchUser(data));
//     };
//   };
  
  
//   export const edit = (user) => {
//     return {
//       type: "EDIT_BE_USER",
//       payload: user
//     };
//   };
  
//   export const removeBEUser = (id) => {
//     return {
//       type: "REMOVE_BE_USER",
//       payload: id
//     };
//   };
  
//   export const addFEEUser = (user) => {
//     return {
//       type: "ADD_FE_USER",
//       payload: user
//     };
//   };

export const fetchRecord = () => {
    return async (dispatch) => {
    //   dispatch(setLodading());
      const data = await axios.get( `https://jsonplaceholder.typicode.com/users`);
      const res = await data.data;
      console.log(res)
      dispatch(setUserState(res));
    };
  };
//   console.log(fetchRecord)

export const setUserState = (userData) => {
    console.log(userData)
    // debugger
    return {
      type: "fetchUserData",
      payload: userData
    };
  };

  // export const deleteUser = (id) => {
  //   // return {
  //   //   type: "REMOVE_FE_USER",
  //   //   payload: id
  //   // };
  //   return (dispatch) => {
  //     axios.delete(`/users/${id}.json`).then(() => {
  //       dispatch(fetchRecord());
  //     });
  //   };
  // };
  export const deleteUser = (id) => {
    return (dispatch) => {
      // axios.delete(`/users/${id}.json`).then(() => {
        dispatch(removeFrontEnd(id));
      // });
    };
  };
  export const removeFrontEnd = (id) => {
    console.log(id)
    return {
      type: "removeUser",
      payload: id
    };
  }