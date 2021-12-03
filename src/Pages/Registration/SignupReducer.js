const INITIAL_STATE={
currentUser :null
}

const UserReducer =(state=INITIAL_STATE,action)=>{
    console.log(action.payload);
    switch (action.type) {
        case "SET_CURRENT_USER":
            return{
               
               ...state,
               currentUser :action.payload
            }           
        default:
          return  state;
    }

}

export default UserReducer;