const INITIAL_VALUE=null;

const LandingReducer=(state=INITIAL_VALUE,action)=>{
switch (action.type) {
    case "GET_CATEGORY_REQUEST":
      return INITIAL_VALUE   
    case "GET_CATEGORY_RESPONSE":
        return action.payload      
    default:
      return INITIAL_VALUE
}

}

export default LandingReducer;