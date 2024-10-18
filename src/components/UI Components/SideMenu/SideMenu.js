import React, { Component } from "react";
import { Layout, Menu } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  CalendarOutlined,
  BookOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons'; // Import specific icons
import Classes from "../../../index.module.css";
import { Link } from "react-router-dom";

class SideMenu extends Component {
  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { Sider } = Layout;
    return (
      <Sider
        trigger={null}
        theme="light"
        collapsible
        collapsed={this.state.collapsed}
      >
        {this.state.collapsed ? (
          <MenuUnfoldOutlined
            className="trigger"
            onClick={this.toggle}
            style={{
              fontSize: 25,
              marginTop: 25,
              textAlign: "center",
              width: "100%",
            }}
          />
        ) : (
          <MenuFoldOutlined
            className="trigger"
            onClick={this.toggle}
            style={{
              fontSize: 25,
              marginTop: 25,
              textAlign: "right",
              width: "100%",
            }}
          />
        )}
        <Menu
          theme="light"
          mode="inline"
          className={Classes.sideNav}
          defaultSelectedKeys={[this.props.menuSelect]}
        >
          <Menu.Item key="1">
            <Link to="/me">
              <UserOutlined />
              <span>Dashboard</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/attendance">
              <CalendarOutlined />
              <span>Attendance</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/assignments">
              <BookOutlined />
              <span>Assignments</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <SettingOutlined />
            <span>Settings</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/login">
              <LogoutOutlined />
              <span>Logout</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SideMenu;
