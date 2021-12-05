import apirequest from './../helper/apicall'
function Service() {
    var list = async () => {
      
        return apirequest.get("sections").then((response) => {           
            return response.data
        });
    }
    return list;
}

const CategoryList =Service();
export default CategoryList;