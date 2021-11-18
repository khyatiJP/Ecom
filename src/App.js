
import './App.css';
import { Landing } from './Pages/Landing/Landing'
import { Item } from './Components/MenuItem/Item'
import { SignUp } from './Pages/Registration/SignUp'

import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import "antd/dist/antd.css";
//import ShopPage from 'Components/pages/itemlist/itemlist.jsx';
import { Layout,Button } from 'antd';
import logo from './assets/images/logo.png'
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header>    
        <div className="logo" >    
            <Link to='/'><img src={logo} style={{ height: '50px' }} alt=''/></Link>
           <Button  type="primary" className='HeaderBtn'>
             <Link to='/SignUp'>Login</Link></Button >
         </div>
          
        </Header>
      
        <Content style={{ padding: '30px 50px' }}>   
            <Routes>
              <Route path="//*" element={<Landing />} />
              <Route path="/MenuItem/*" element={<Item />} />
              <Route path="/SignUp" element={<SignUp />} />

            </Routes>
         
        </Content>
        <Footer style={{ textAlign: 'center' }}></Footer>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
