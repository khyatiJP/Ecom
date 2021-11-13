import React from "react";
import { Route, Routes, Link,useLocation} from 'react-router-dom';
import { Directory } from "../Directory/directory";

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
export const Item =()=>{
    let query = useQuery();
    
//  const Result =fetch(`https://pixabay.com/api/?key=23641578-50aa901f76bb38046ae858bc9&q=${props.value}&image_type=photo`)
//   .then(response=>response.json().data.hits);
//   console.log(Result);
return(
    <div>
        <Link to='/'>Back</Link>
        Heelo
        <Routes>
            <Route exact path='/' element={<Directory/>} />
        </Routes>
    </div>
)

}