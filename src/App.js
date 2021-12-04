
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';

import { Layout,Button } from 'antd';
import { Landing } from './pages/Landing/Landing'
import { Item } from './components/MenuItem/Item'
import  SignUp  from './pages/Registration/SignUp'
import './App.css';
import "antd/dist/antd.css";
import logo from './assets/images/logo.png'

const { Header, Content, Footer } = Layout;

function App() {
 
  return (
   
      <BrowserRouter>
        <Layout className="layout">
          <Header >
            <div className="logo" >
              <Link to='/'><img src={logo} style={{ height: '50px' }} alt='' /></Link>
              <Button type="primary" className='HeaderBtn'>
                <Link to='/'>Sign In</Link></Button >
            </div>

          </Header>

          <Content style={{ padding: '30px 50px' }}>
            <Routes>
              <Route path="/" element={<Landing/>} />
              <Route path="/MenuItem/*" element={<Item />} />
              <Route path="/Landing" element={<Landing />} />

            </Routes>

          </Content>
          <Footer style={{ textAlign: 'center' }}></Footer>
        </Layout>
      </BrowserRouter>
  
  );
}

export default App;