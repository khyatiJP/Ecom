
import './App.css';
import { Directory } from './Components/Directory/directory'
import { Routes, Route } from 'react-router-dom';
//import ShopPage from 'Components/pages/itemlist/itemlist.jsx';


function App() {
  return (
   <Routes>
    <Route exact path='/' component={Directory} />  
  </Routes>

  );
}
export default App;
