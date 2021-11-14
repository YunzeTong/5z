import { Component } from "react";

import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import {
//   DesktopOutlined,
//   PieChartOutlined,
//   FileOutlined,
//   TeamOutlined,
  UserOutlined,
  CoffeeOutlined,
  DashboardOutlined,
  FireFilled
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Map extends Component{
    constructor(){
        super()
        this.state = {
            
            cur_first_path: "卫生",
            cur_second_path: "卫生1",
        }

    }
    state = {
        collapsed: false,
      };
    
    onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
    };


    update_path = () =>{
        this.setState({

        })
    }






    render(){
        document.title = "浏览产业地图";
        const { collapsed } = this.state;
        return (
            
        <Layout style={{ minHeight: '100vh' }}>
        <Sider theme="dark" collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" ></div>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key="sub1" icon={<UserOutlined />} title="卫生">
              <Menu.Item key="1">卫生1</Menu.Item>
              <Menu.Item key="2">卫生2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<DashboardOutlined />} title="能源">
              <Menu.Item key="3">能源1</Menu.Item>
              <Menu.Item key="4">能源2</Menu.Item>
              <Menu.Item key="5">能源3</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<FireFilled />} title="资源">
              <Menu.Item key="6">资源1</Menu.Item>
              <Menu.Item key="7">资源2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<CoffeeOutlined />} title="住宿和餐饮">
              <Menu.Item key="8">1</Menu.Item>
              <Menu.Item key="9">2</Menu.Item>
              <Menu.Item key="10">3</Menu.Item>
            </SubMenu>
            
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background">
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">我的账号</Menu.Item>
        <Menu.Item key="2">产业地图预览</Menu.Item>
        <Menu.Item key="3">我的产业地图</Menu.Item>
        <Menu.Item key="4" danger>退出登录</Menu.Item>
      </Menu>
    </Header>
          <Content style={{ margin: '0 16px' }}>
              <br/>
            <Button danger type="primary" block shape="round">上传数据</Button>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Presented By RedCloudRule</Footer>
        </Layout>
      </Layout>
        )
    }
}