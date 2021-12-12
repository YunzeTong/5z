import React, {Component} from 'react';
import { Form, Input, Button, Radio,message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import axios from 'axios';
import 'antd/dist/antd.css';
import './login.css'

class Login extends Component {
    state={
        username: '',
        password: '',
        usertype:'user',
    }
    //跳转注册界面
    
    handleSubmit=()=>{
        let that = this
        const {username, password} = that.state
        const reg1 = /[0-9A-Za-z]{6,12}$/
        const reg2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
        //判断提交数据格式的合法性
        if (username === '' || password === '' || !reg1.test(username) || !reg2.test(password)) 
             return message.error("数据格式非法")
        else{
            axios.post('http://localhost:8080/login', {
                username: this.state.username,
                password: this.state.password,
                usertype: this.state.usertype
            })
                .then(function (response) {
                    const data = response.data
                    const result = data.status
                    if (result === 'success'){
                        if(this.state.usertype==='user')
                        //this.props.history.push({ pathname: '/index', state: { username: , psw: passw, type:tp } });
                        window.location.href = '/map';
                        if(this.state.usertype==='administrator')
                        window.location.href = '/gindex';
                    }
                    else{
                        message.warning('账号或密码错误', 2)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        
    }
    handlePassword = e =>{
        console.log('password',e.target.value);
        this.setState({
            password:e.target.value,
        })
    }
    handleUsername =e =>{
        console.log('username',e.target.value);
        this.setState({
            username:e.target.value,
        })
    }
    handleUserType = e => {
    console.log('radio checked', e.target.value)
    this.setState({
        usertype:e.target.value
    })
    }
    goRegister = () => {
        window.location.href = '/register'
    }
    render () {
        return (
            <div className='myForm'>
                <img src={'./image/loginPicture.jpg'} alt={'loginPicture'} className='leftPicture'/>
                <div className='right'>
                    <h6 className='title'>用户登录</h6>
                    <hr className='line'/>
                    <Form
                        name="normal_login"
                        className="trueForm" 
                        initialValues={{
                            usertype:this.state.usertype,
                        }
                        }
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入您的用户名',
                                },
                                {
                                    min: 6,
                                    max: 18,
                                    message: '用户名长度应为6-12个字符',
                                }
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" onChange={this.handleUsername}/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入您的密码！',
                                },
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="密码"
                                onChange={this.handlePassword}
                            />
                        </Form.Item>
                        <Form.Item >
                            <Form.Item name="usertype" noStyle >
                                <Radio.Group  onChange={this.handleUserType}>
                                    <Radio value="user">用户</Radio>
                                    <Radio value="administrator">管理员</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Link className="login-form-forgot" to="/forgetPwd" id="forgetPassword">
                                忘记密码？
                            </Link>
                        
                       </Form.Item>
                        <Form.Item id='buttons'>
                            <div className='myBtn'>
                                <Button type="primary" htmlType="submit" className="login-form-button"
                                        onClick = {this.handleSubmit}>
                                    登录
                                </Button>
                                <Button type="primary" className="login-form-button" onClick = {this.goRegister}>
                                    注册
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;