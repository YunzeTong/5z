import React from "react";
import 'antd/dist/antd.css';
import {
    Button
} from "antd";
class Administrator extends React.Component {
    render() {
        return (
            <div>
                <p  style={{fontSize:20, marginTop:100}}>欢迎登录管理员界面，你可以进行以下操作</p>
            <div >
                <Button  style={{height:40 ,width:300 ,textAlign: 'center',marginTop:100}} type="success"mx="10px"  size="large" >增加产业数据</Button>
            </div>
            <div>
                <Button  style={{height:40 ,width:300 ,textAlign: 'center',marginTop:50}} type="success" mx="10px" size="large" >删除产业数据</Button>
            </div>
            </div>
        )
    }
}
export default Administrator;