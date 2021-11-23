
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Layout, Button } from 'antd';
import { Provider } from 'react-redux';
import store from './reducer/store';
import { Landing } from './pages/Landing/Landing'
import { Item } from './components/MenuItem/Item'
import { SignUp } from './pages/Registration/SignUp'
import './App.css';
import "antd/dist/antd.css";
import logo from './assets/images/logo.png'
import { auth ,createUserProfile} from './utility/firebase'

import { useEffect, useState } from 'react';

const { Header, Content, Footer } = Layout;
function App() {
 
  const [currentUser, SetCurrentUser] = useState('')
  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      createUserProfile(user)
     // console.log(user);
     // const firestore = firebase.firestore();
     // firestore.collection('User');
     // SetCurrentUser(user);
    })

  }, []);
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout className="layout">
          <Header>
            <div className="logo" >
              <Link to='/'><img src={logo} style={{ height: '50px' }} alt='' /></Link>
              <Button type="primary" className='HeaderBtn'>
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
    </Provider>
  );
}
export default App;
