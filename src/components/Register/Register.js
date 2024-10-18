import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Select } from "antd";
import { UserOutlined } from '@ant-design/icons';
import Classes from "../Login/Login.module.css"; // Adjust the path as necessary
import { Link } from "react-router-dom";

const { Option } = Select;

class Register extends Component {
  state = {
    confirmDirty: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = (e) => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form; // This is still valid in class components

    return (
      <div className={Classes.pagecenter}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="E-mail">
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Password" hasFeedback>
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "Please input your password!",
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password />)}
          </Form.Item>
          <Form.Item label="Confirm Password" hasFeedback>
            {getFieldDecorator("confirm", {
              rules: [
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
          </Form.Item>
          <Form.Item label="Username">
            {getFieldDecorator("username", {
              rules: [
                {
                  required: true,
                  message: "Please input your username!",
                  whitespace: true,
                },
              ],
            })(<Input prefix={<UserOutlined />} />)}
          </Form.Item>
          <Form.Item label="Phone Number">
            {getFieldDecorator("phone", {
              rules: [
                { required: true, message: "Please input your phone number!" },
              ],
            })(<Input addonBefore={<Select style={{ width: 70 }}><Option value="91">+91</Option></Select>} style={{ width: "100%" }} />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("agreement", {
              valuePropName: "checked",
            })(
              <Checkbox>
                I have read the <a href="#g">agreement</a>
              </Checkbox>
            )}
          </Form.Item>
          <Form.Item>
            <Link to="/me">
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

// No need for WrappedRegistrationForm
export default Register;
