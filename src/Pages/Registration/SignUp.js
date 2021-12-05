import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Row, Col, Form, Input, Button } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { FormValidationWrap, VerticalFormStyleWrap } from './SignUpStyle';
import { Cards } from '../../components/Card/Cards'
import { signWithGoogle, auth } from '../../utility/firebase'
import { setCurrentUser } from './SignupAction'
import { useDispatch } from "react-redux";

const SignUp = ({ currentUser }) => {
    let history = useNavigate();
    const [inputFields, SetField] = useState({
        email: '',
        password: ''
    })
    const validateMessages = {

    };
    //const LoginUser =useSelector((state)=>state.UserReducer)
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
       
      //  history("/Landing");
    }
    const InputChange = (e) => {
        SetField({ [e.target.name]: [e.target.value] })
    }
    //history("/Landing");
    /* const [loginUser, SetCurrentUser] = useState('')
     useEffect(() => {
         auth.onAuthStateChanged(async userAuth => {           
             if (userAuth) {               
                 SetCurrentUser({
                     name: userAuth._delegate.displayName,
                     emailname: userAuth._delegate.email,
                     uid: userAuth._delegate.uid
                 })
                 history("/Landing");
             }
         })
 
     }, []);*/

    const [form] = Form.useForm();
    return (
        <Row gutter={25}>

            <Col lg={9} xs={24} offset={7}>
                <FormValidationWrap>
                    <VerticalFormStyleWrap>
                        <Cards title="LOGIN">
                            <Form name="login" layout="vertical" form={form} validateMessages={validateMessages}>
                                <Form.Item name="email"
                                    label="Email Address"
                                    rules={[{ required: true, message: 'Email required!' }]}
                                >
                                    <Input
                                        prefix={<FeatherIcon icon="mail" size={6} />}
                                        placeholder="Enter Email"
                                        onChange={InputChange} />
                                </Form.Item>
                                <Form.Item name="password" label="Password"
                                    rules={[{ required: true, message: 'Password required!' }]}
                                >
                                    <Input.Password
                                        prefix={<FeatherIcon icon="lock" size={6}
                                            onChange={InputChange} />} />
                                </Form.Item>
                                <div className="sDash_form-action">
                                    <Button className="btn-signin" type="primary" size="large" htmlType="submit" onClick={handleSubmit}>
                                        Sign In
                                    </Button>
                                    { /* <Button className="btn-signin" type="primary" size="large" onClick={signWithGoogle}>
                                        Sign In With Google
                                    </Button>
                                    <Button className="btn-signin" type="primary" size="large" onClick={() => auth.signOut()}>
                                        Sign Out from Google
                                    </Button>*/}


                                </div>
                            </Form>
                        </Cards>
                    </VerticalFormStyleWrap>
                </FormValidationWrap>
            </Col>
        </Row>
    )

}
export default SignUp;