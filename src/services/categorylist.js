import axios from 'axios'
function Service() {
    var list = async () => {
      
        return await axios.get("http://localhost:3006/sections").then((response) => {
            console.log(response.data)
            return response.data
        });
    }

    return list;
}

const CategoryList =Service();
export default CategoryList;