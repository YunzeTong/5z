import { Component } from "react";

// import 'echarts/map/js/china'
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
import ColumnChart from "./columnchart"
import PieChart from "./piechart";
import Mapchart from "./mapchart";
import axios from "axios";
import cookie from 'react-cookies'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Map extends Component{
    constructor(){
        super()
        if (cookie.load("flag")) {
             console.log("happen")
            //  cookie.remove("flag")
        } else {
            console.log("no happen")
        }
        this.state = {
            father_dir : "",
            son_dir: "",
            flag: cookie.load("flag"),
        }
    // console.log(cookie.load('token'))
    axios.get(
      'http://192.168.43.4:8080/api/test/user', {
        headers:{
          'Authorization':"Bearer "+cookie.load('token')
        }
            }).then(function(response){
              console.log(response)
            })
        

    }
    state = {
        collapsed: false,
      };
    
    onCollapse = collapsed => {
    // console.log(collapsed);
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
        document.title = "浏览产业地图";
        const { collapsed } = this.state;
        return (
            
        <Layout style={{ minHeight: '100vh' }}>
        <Sider theme="dark" collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" ></div>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
          <SubMenu key="sub1" icon={<UserOutlined />} title="卫生">
              <Menu.Item key="1" onClick={()=>this.change_dir("卫生", "社会卫生总支出")}>社会卫生总支出</Menu.Item>
              <Menu.Item key="2" onClick={()=>this.change_dir("卫生", "医疗卫生机构数")}>医疗卫生机构数</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<DashboardOutlined />} title="能源">
              <Menu.Item key="3" onClick={()=>this.change_dir("能源", "能源工业投资")}>能源工业投资</Menu.Item>
              <Menu.Item key="4" onClick={()=>this.change_dir("能源", "石油消费总量")}>石油消费总量</Menu.Item>
              <Menu.Item key="5" onClick={()=>this.change_dir("能源", "电力能源消费总量")}>电力能源消费总量</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<FireFilled />} title="资源">
              <Menu.Item key="6" onClick={()=>this.change_dir("资源", "国家资源税")}>国家资源税</Menu.Item>
              <Menu.Item key="7" onClick={()=>this.change_dir("资源", "水资源总量")}>水资源总量</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<CoffeeOutlined />} title="住宿和餐饮">
              <Menu.Item key="8" onClick={()=>this.change_dir("住宿和餐饮数", "住宿和餐饮企业数")}>住宿和餐饮企业数</Menu.Item>
              <Menu.Item key="9" onClick={()=>this.change_dir("住宿和餐饮数", "住宿和餐饮营业额")}>住宿和餐饮营业额</Menu.Item>
              <Menu.Item key="10" onClick={()=>this.change_dir("住宿和餐饮数", "住宿和餐饮营业面积")}>住宿和餐饮营业面积</Menu.Item>
            </SubMenu>
            {this.state.flag?<SubMenu key="sub5" icon={<CoffeeOutlined />} title="房地产">
              <Menu.Item key="11" onClick={()=>this.change_dir("房地产", "房地产企业数")}>房地产企业数</Menu.Item>
            </SubMenu>:<></>}
            
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background">
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1" onClick={this.go_myinfo.bind(this)}>我的账号</Menu.Item>
        <Menu.Item key="2" onClick={this.go_map}>产业地图预览</Menu.Item>
        <Menu.Item key="3" onClick={this.go_mymap.bind(this)}>我的产业地图</Menu.Item>
        <Menu.Item key="4" danger>退出登录</Menu.Item>
      </Menu>
    </Header>
          <Content style={{ margin: '0 16px' }}>
              <br/>
            {/* <Button onClick={()=>{this.setState({flag: true})}}  danger type="primary" block shape="round">显示新增数据</Button> */}
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>{this.state.father_dir}</Breadcrumb.Item>
              <Breadcrumb.Item>{this.state.son_dir}</Breadcrumb.Item>
            </Breadcrumb>
            <Mapchart
              firstpath={this.state.father_dir}
              secondpath={this.state.son_dir}> 
            </Mapchart>
              <br />
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <ColumnChart 
              firstpath={this.state.father_dir}
              secondpath={this.state.son_dir}              
              ></ColumnChart>
            </div>
            <br />
            <div className="site-layout-background" style={{ padding: 10, minHeight: 600, minWidth:460 }}>
              {/* <PieChart></PieChart> */}
              <PieChart 
              firstpath={this.state.father_dir}
              secondpath={this.state.son_dir}              
              ></PieChart>
            </div>
            <br/>
            {/* <div className="site-layout-background" style={{ padding: 24, minHeight: 660 }}> */}
              {/* <Mapchart
              firstpath={this.state.father_dir}
              secondpath={this.state.son_dir}> 
              </Mapchart> */}
            {/* </div> */}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Presented By RedCloudRule</Footer>
        </Layout>
      </Layout>
        )
    }
}