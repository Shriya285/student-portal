import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import Classes from "./Login.module.css";
import { Link } from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const NormalLoginForm = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className={Classes.pagecenter}>
      <Form
        form={form}
        onFinish={handleSubmit}
        className="login-form"
      >
        <Form.Item>
          <UserOutlined style={{ fontSize: 60, color: "#006691" }} />
        </Form.Item>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <div className={Classes.lola}>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a className="login-form-forgot" href="#g">
              Forgot password
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: "100%" }}
            >
              Log in
            </Button>
            <div>
              Or <Link to="/register">register now!</Link>
            </div>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NormalLoginForm;
