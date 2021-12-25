import React, {Component} from 'react';
import { Form, Input, Button, message} from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import axios from 'axios';


class Register extends Component {
    state = {
        username: '',
        password: '',
        email:'',
        pwdrepeated:false
    }
    
    repeatPwd = (rule, value) => {
        if (value && value !== this.state.password) {
            this.setState({
                pwdrepeated:true,
            })
            return Promise.reject('两次密码不一致')
        }
        else{
            this.setState({
                pwdrepeated:false,
            })
            return Promise.resolve()
        }
        
    }

    //存储密码
    handlePassword = e => {
        this.setState({password: e.target.value})
    }
    handleSubmit = () =>{
        //验证数据的完整性,然后返回给后端发送http请求,把内容post给后端存库
        //存完之后跳转到登录页面
        const {username, password, email,pwdrepeated} = this.state
        const reg1 = /[0-9A-Za-z]{6,12}$/
        const reg2 = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
        const reg3 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
        //判断提交数据格式的合法性
        if (username === '' || password === '' || email === '' || !reg1.test(username) || !reg2.test(email) ||
            !reg3.test(password) || pwdrepeated  ){
                console.log(username,password,email,pwdrepeated)
                return message.error("数据格式非法")
            }
            axios.post('http://192.168.43.4:8080/api/auth/signup', {
                username: this.state.username,
                password: this.state.password,
                email:this.state.email
            })
                .then(function (response) {
                    console.log(response)
                    const data = response.data
                    const result = data.message
                    if (result === 'User registered successfully!'){
                        alert('注册成功')
                        //注册成功返回登陆界面
                        window.location.href = '/login'
                    }
                    else{
                        message.warning('注册错误，请联系管理员', 3);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
    }
    handleEmail = e=>{
        this.setState({email: e.target.value})
    }
    handleUsername= e =>{
        this.setState({username: e.target.value})
    }
    render () {
        return (
            <div className='myForm'>
                <img src='./image/registerPicture.jpg' className='leftPicture' alt='leftPicture'/>
                <div className='right'>
                    <h4 className='title'>用户注册</h4>
                    <hr className='line'/>
                    <Form
                        className="trueForm"
                        initialValues={{
                            remember: true,
                        }}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入您的用户名',
                                    trigger: 'blur'
                                },
                                {
                                    min: 6,
                                    max: 12,
                                    message: '用户名长度应为6-12个字符',
                                    trigger: 'blur'
                                }
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" onChange={this.handleUsername}/>
                        </Form.Item>

                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入您的邮箱地址',
                                    trigger: 'blur'
                                },
                                {
                                    pattern:/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
                                    message:'请输入正确的邮箱格式'
                                }
                            ]}
                        >
                            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="邮箱" onChange={this.handleEmail}/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入您的密码',
                                },
                                {
                                    min: 6,
                                    max: 24,
                                    message: '密码长度应为8-16个字符',
                                    trigger: 'blur'
                                },
                                {
                                    pattern:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/,
                                    message: '密码应包含数字和字母'
                                }
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="密码"
                                onChange={this.handlePassword}
                            />
                        </Form.Item>

                        <Form.Item
                            name="password2"
                            rules={[
                                {
                                    required: true,
                                    message: '请再次确认密码',
                                },
                                {
                                    validator: this.repeatPwd
                                }
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="确认密码"
                                onChange={e => this.verifyPwd = e.target.value}
                            />
                        </Form.Item>
                        <Form.Item id='buttons'>
                            <div className='myBtn'>
                                <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleSubmit}>
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

export default Register;