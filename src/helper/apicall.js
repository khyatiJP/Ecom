import axios  from "axios";
const { REACT_APP_API_BASE } = process.env;
export default axios.create({
        baseURL:REACT_APP_API_BASE,
        headers: {
            "Content-type": "application/json"
        }
    })   