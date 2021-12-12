import { Component } from "react";

import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import {
    UserOutlined,
    CoffeeOutlined,
    DashboardOutlined,
    FireFilled
} from '@ant-design/icons';
import ColumnChart from "./columnchart";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
    
export default class MyMap extends Component{
    constructor(){
        super()
        this.state = {
            father_dir : "",
            son_dir: ""
        }
    }

    state = {
        collapsed: false,
      };  
    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    change_dir = (father, son) => {
        this.setState({
            father_dir: father,
            son_dir: son
        })
    }
    //跳转三部曲
    go_map = () => {
        window.location.href = '/map'
    }
    go_myinfo = () => {
        window.location.href = '/myinfo'
    }
    go_mymap = () => {
        window.location.href = '/mymap'
    }




    render(){
        document.title = "我的产业地图";
        const { collapsed } = this.state;
        return (
            
        <Layout style={{ minHeight: '100vh' }}>
        <Sider theme="dark" collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" ></div>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key="sub1" icon={<UserOutlined />} title="卫生">
              <Menu.Item key="1" onClick={()=>this.change_dir("卫生", "卫生1")}>卫生1</Menu.Item>
              <Menu.Item key="2" onClick={()=>this.change_dir("卫生", "卫生2")}>卫生2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<DashboardOutlined />} title="能源">
              <Menu.Item key="3" onClick={()=>this.change_dir("能源", "能源1")}>能源1</Menu.Item>
              <Menu.Item key="4" onClick={()=>this.change_dir("能源", "能源2")}>能源2</Menu.Item>
              <Menu.Item key="5" onClick={()=>this.change_dir("能源", "能源3")}>能源3</Menu.Item>
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
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['3']}>
        <Menu.Item key="1" onClick={this.go_myinfo.bind(this)}>我的账号</Menu.Item>
        <Menu.Item key="2" onClick={this.go_map.bind(this)}>产业地图预览</Menu.Item>
        <Menu.Item key="3" onClick={this.go_mymap}>我的产业地图</Menu.Item>
        <Menu.Item key="4" danger>退出登录</Menu.Item>
      </Menu>
    </Header>
          <Content style={{ margin: '0 16px' }}>
              <br/>
            <Button danger type="primary" block shape="round">上传数据</Button>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>{this.state.father_dir}</Breadcrumb.Item>
              <Breadcrumb.Item>{this.state.son_dir}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <ColumnChart 
              firstpath={this.state.father_dir}
              secondpath={this.state.son_dir}              
              ></ColumnChart>
            </div>
            <br />
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              2
            </div>
            <br/>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              3
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Presented By RedCloudRule</Footer>
        </Layout>
      </Layout>
        )
    }
}