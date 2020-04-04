import React, { Component } from "react";
import "./App.css";
import { Arianee } from "@arianee/arianeejs";

// router https://gist.github.com/VesperDev/e233115469a6c53bb96443f66385aa22
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// components
import WalletComponent from "./components/wallet/wallet";
import CertificatComponent from "./components/certificat/certificat";

// ant ui
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

class App extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <Router>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <UserOutlined />
                <span> Wallet</span>
                <Link to="/wallet" />
                
              </Menu.Item>
              <Menu.Item key="2">
                <VideoCameraOutlined />
                <span> Certificat </span>
                <Link to="/certificat" />
              </Menu.Item>
              <Menu.Item key="3">
                <UploadOutlined />
                <span>Dashboard</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle
                }
              )}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280
              }}
            >
              <Route exact path="/wallet" component={WalletComponent} />
              <Route exact path="/certificat" component={CertificatComponent} />
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
