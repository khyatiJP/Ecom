import React from "react";
import { Row, Col, Form, Input, Button } from 'antd';
import FeatherIcon from 'feather-icons-react';
import {FormValidationWrap, VerticalFormStyleWrap } from './SignUpStyle';
import { Cards } from '../../components/Card/Cards'

export const SignUp = () => {

    const validateMessages = {
       
      };
      
      const [form] = Form.useForm();
    return (
        <Row gutter={25}>
           
            <Col lg={9} xs={24} offset={7}>
            <FormValidationWrap>
                    <VerticalFormStyleWrap>
                        <Cards title="LOGIN">
                            <Form name="login" layout="vertical" form={form}  validateMessages={validateMessages}> 
                                <Form.Item name="email" 
                                label="Email Address"
                                rules={[{ required: true, message: 'Email required!' }]}
                                >
                                    <Input prefix={<FeatherIcon icon="mail" size={6} />} placeholder="Enter Email" />
                                </Form.Item>
                                <Form.Item name="password" label="Password"
                                  rules={[{ required: true, message: 'Password required!' }]}
                                >
                                    <Input.Password prefix={<FeatherIcon icon="lock" size={6} />} />
                                </Form.Item>
                                <div className="sDash_form-action">
                                    <Button className="btn-signin" type="primary" size="large" htmlType="submit">
                                        Save
                                    </Button>
                                    <Button className="btn-signin"  type="light" size="large">
                                        Cancel
                                    </Button>

                                </div>
                            </Form>
                        </Cards>
                    </VerticalFormStyleWrap>
                </FormValidationWrap>
            </Col>
        </Row>
    )
}