
import './App.css';
import { Directory } from './Components/Directory/directory'
import { Item } from './Components/MenuItem/Item'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//import ShopPage from 'Components/pages/itemlist/itemlist.jsx';


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Directory />} />
        <Route path="MenuItem/*" element={<Item />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
