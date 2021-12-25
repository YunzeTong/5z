import { Component } from "react";

import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import {UserOutlined, CoffeeOutlined} from '@ant-design/icons';
import PersonalInfo from './pages/PersonalInfo/PersonalInfo';
import AlterPersonalInfo from './pages/AlterPersonalInfo/AlterPersonalInfo'
import {Route, Switch, Redirect, Link} from 'react-router-dom';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Myinfo extends Component{
    constructor(){
        super()
        this.state = {
            sec_dir: ""
        }
    }

    state = {
        collapsed: false,
      };  
    onCollapse = collapsed => {
        this.setState({ collapsed });
    };
    //变更选项
    change_dir = (choose) => {
        this.setState({
            sec_dir: choose
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
        document.title = "我的个人账号";
        const { collapsed } = this.state;
        return (
            
        <Layout style={{ minHeight: '100vh' }}>
        <Sider theme="dark" collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" ></div>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key="sub1" icon={<UserOutlined />} title="我的信息">
              <Menu.Item key="1" onClick={()=>this.change_dir("查看个人信息")}>
              <Link to="/myinfo/personalInfo">查看个人信息</Link>
              </Menu.Item>
              <Menu.Item key="2" onClick={()=>this.change_dir("修改个人信息")}>
              <Link to="/myinfo/alterpersonalInfo">修改个人信息</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background">
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" onClick={this.go_myinfo}>我的账号</Menu.Item>
        <Menu.Item key="2" onClick={this.go_map.bind(this)}>产业地图预览</Menu.Item>
        {/* <Menu.Item key="3" onClick={this.go_mymap.bind(this)}>我的产业地图</Menu.Item> */}
        <Menu.Item key="4" danger>退出登录</Menu.Item>
      </Menu>
    </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>我的信息</Breadcrumb.Item>
              <Breadcrumb.Item>{this.state.sec_dir}</Breadcrumb.Item>
            </Breadcrumb>
            <br />
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Switch>
                <Route  path="/myinfo/personalInfo" component={PersonalInfo}/>
                <Route  path="/myinfo/alterpersonalInfo" component={AlterPersonalInfo}/>
                <Redirect to= "/myinfo/personalInfo" />                
              </Switch>
            </div>
            
          </Content>
          <Footer style={{ textAlign: 'center' }}>Presented By 5Z</Footer>
        </Layout>
      </Layout>
        )
    }
}