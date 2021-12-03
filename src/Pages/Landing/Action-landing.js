const  fetchCategory = ()=>{
//for thunk()
  /*  return async function (dispatch){
        const category=await CategoryList();
        dispatch(getMainCategory(category));
    }*/

    //for saga   
    return { type: "GET_CATEGORY_REQUEST" }
}

export const getMainCategory = (list) => ({
   
    type: "GET_CATEGORY_RESPONSE",
    payload: list
});


export default fetchCategory;
