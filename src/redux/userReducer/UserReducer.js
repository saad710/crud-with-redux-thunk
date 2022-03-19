const INIT_STATE = {
    userData: []
}
 
 const userDataReducer = (state =INIT_STATE ,action) => {
     console.log(state)
     switch(action.type){
                case 'Get-userData':
                    return {
                        ...state,
                        userData: action.result ,
                    }
                      
                    default: 
                    return state;
            }
 }
 export default userDataReducer;