import React from "react";
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  Button,
  Card,
  List,
  Drawer,
  InputNumber,
  Tag,
  Form,
  Divider,
  Col,
  Row,
  Statistic,
  Progress,
  Modal,
  Input
} from "antd";
import {HashRouter, Link, Route, BrowserRouter as Router,Redirect} from 'react-router-dom'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
// import energy from './components/energy';
// import "./App.css"
import Administrator from './Administrator';
import Add_source from './Add_source';
import Delete from './Delete';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class AdminMain extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  //退出登录
  exit = () => {

    //
    window.location.href = '/login'
  }

  render() {
    const { collapsed } = this.state;
    return (
      

      <Layout style={{ minHeight: '100vh' }}>

        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo"></div>
          <Router>
          <Menu theme="light" mode="inline">
            {/* <Menu.Item key="1" icon={<PieChartOutlined />}>
              产业汇总
            </Menu.Item> */}
            <Menu.Item key="1" icon={<UserOutlined />}>
              管理员
            </Menu.Item>
          </Menu>
          </Router>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background"  >
            <Menu theme="ligth" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1"><Link to="/admininfo/Administrator"> 主界面</Link></Menu.Item>
              <Menu.Item key="2"><Link to ="/admininfo/Add_source">增加数据集</Link></Menu.Item>
              <Menu.Item key="3"><Link to ="/admininfo/Delete">删除数据集</Link></Menu.Item>
              <Menu.Item key="4" onClick={this.exit.bind(this)} danger>退出登录</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item href="/admininfo/Administrator">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/admininfo/Add_source">增加数据集</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 500 ,textAlign: 'center' }}>
            <Route path='/admininfo/Administrator' exact component={Administrator}/>
            <Route path='/admininfo/Add_source' component={Add_source}/>
            <Route path='/admininfo/Delete' component={Delete}/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>5z Industrial Map ©2021 Created by 软工管G15</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default AdminMain;
