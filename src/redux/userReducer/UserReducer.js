const INIT_STATE = {
    userData: []
}

const userDataReducer = (state =INIT_STATE ,action) => {
     console.log(state)
     switch(action.type){
                case 'fetchUserData':
                    const userRecord = action.payload;
                    return {
                        ...state,
                        userData: userRecord ,
                    };
                // case 'add-userData': 
                //     return {
                //         users: [action.payload, ...state.userData]
                //     }
                // case 'edit-userData' : 
                // const userDetail = action.payload;
                // const updateDetail = state.userData.map((user) => {
                //     if (user.id === userDetail.id) {
                //     return userDetail;
                //     } else {
                //     return user;
                //     }
                // });
                //     return {
                //         users: updateDetail
                //     }
                // case 'remove-userData' : 
                // return {
                //     users: state.userData.filter((user) => {
                //       return user.id !== action.payload;
                //     })
                //   };

                    default: 
                    return state;
            }
 }
 export default userDataReducer;