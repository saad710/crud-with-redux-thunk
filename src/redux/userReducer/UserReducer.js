const INIT_STATE = {
    userData: []
}

const userDataReducer = (state =INIT_STATE ,action) => {
    //  console.log(state)
     switch(action.type){
                case 'fetchUserData':
                    const userRecord = action.payload;
                    console.log(userRecord)
                    return {
                        ...state,
                        userData: userRecord ,
                    };
                case "removeUser":
                    // const userId = action.payload;
                    return {
                        userData: state.userData.filter((user) => {
                        return user.id !== action.payload;
                        })
                    };
                case 'addUser': 
                    console.log(action.payload)
                    return {
                        userData: [action.payload, ...state.userData]
                    }
                case "updateUser":
                    const userDetail = action.payload;
                    console.log(userDetail)
                    const updateDetail = state.userData?.map((user) => {
                        // console.log(action.payload.id)
                        if (user.id === userDetail.id) {
                        return userDetail;
                        } else {
                        return user;
                        }
                    });
                    console.log(updateDetail)
                    return { userData: updateDetail };
        
                    default: 
                    return state;
            }
 }
 export default userDataReducer;