
import './App.css';
import { Directory } from './Components/Directory/Directory'
import { Item } from './Components/MenuItem/Item'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "antd/dist/antd.css";
import { Link } from 'react-router-dom';
//import ShopPage from 'Components/pages/itemlist/itemlist.jsx';
import { Divider } from 'antd';
import { Layout, Menu, Button } from 'antd';
import logo from './assets/images/logo.png'
const { Header, Content, Footer } = Layout;
function App() {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header>    
        <div className="logo" >    
            <Link to='/'><img src={logo} style={{ height: '50px' }} /></Link>
           <Button  type="primary" className='HeaderBtn'>Sign Up</Button >
         </div>
          
        </Header>
      
        <Content style={{ padding: '30px 50px' }}>   
            <Routes>
              <Route path="/" element={<Directory />} />
              <Route path="MenuItem/*" element={<Item />} />
            </Routes>
         
        </Content>
        <Footer style={{ textAlign: 'center' }}></Footer>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
