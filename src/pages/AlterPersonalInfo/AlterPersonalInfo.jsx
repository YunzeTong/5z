import React ,{Component} from "react";
import 'moment/locale/zh-cn';
import './AlterPersonalInfo.css'
import { PageHeader,Descriptions, Radio,Input ,Form, Button,message,DatePicker } from 'antd';
const { TextArea } = Input;
class AlterPersonalInfor extends Component{
    state={
        name:'',
        username:'tyz123456',
        email:'',
        sex:'',
        university:'',
        birthday:'',
        interested_Industry:"",
        balance:'80',
        text:'',
        sexValue:1,
        usertypeValue:2,
    }
    handleSubmit(){
        message.success(("提交成功"))
    }
    onChange=(date, dateString) =>{
        console.log( dateString);
        this.setState({
            birthday:dateString.toString(),
        })
      }
    render(){
        
        return(
            <div>
                <PageHeader className="site-page-header" title="个人信息" subTitle="修改个人信息"></PageHeader>
                <Form>
                <Descriptions  bordered column={4}>
                    <Descriptions.Item label="Name" span={2}>
                    <Form.Item
                            name="name"
                            rules={[
                                {
                                    required:true,
                                    message:"请输入您的昵称"
                                }
                            ]}>
                        <Input    onChange={this.namechange} />
                    </Form.Item>
                        </Descriptions.Item>
                    <Descriptions.Item label="Username" span={2}>{this.state.username}</Descriptions.Item>
                    <Descriptions.Item label="Sex" span={2}>
                        <Form.Item
                            name="sex"
                            rules={[
                                {
                                    required:true,
                                    message:"请选择您的性别"
                                }
                            ]}>
                            <Radio.Group  >
                                <Radio value={1}>男</Radio>
                                <Radio value={2}>女</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Descriptions.Item>
                    <Descriptions.Item label="Email" span={2}>
                        
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
                    <Input  />
                    </Form.Item>
                   
                    </Descriptions.Item>
                    <Descriptions.Item label="Birthday" span={2}>
                    <Form.Item
                            name="birthday"
                            rules={[
                                {
                                    required:true,
                                    message:"请输入您的生日"
                                }
                            ]}>
                    <DatePicker  onChange={this.onChange}/>
                    </Form.Item>
                    </Descriptions.Item>
                    <Descriptions.Item label="Graduate Institutions" span={2}>
                    <Form.Item
                            name="University"
                            rules={[
                                {
                                    required:true,
                                    message:"请输入您的毕业院校"
                                }
                            ]}>
                    <Input   />
                    </Form.Item>
                    </Descriptions.Item>
                    <Descriptions.Item label="UserType" span={2}>
                            <Radio.Group  value={this.state.usertypeValue}>
                                <Radio value={1}>普通用户</Radio>
                                <Radio value={2}>付费用户</Radio>
                            </Radio.Group>
                    </Descriptions.Item>
                    <Descriptions.Item label="AccountBalance" span={2}>${this.state.balance}</Descriptions.Item>
                    <Descriptions.Item label="Interested Industry" span={4}>
                    <Form.Item
                            name="industry"
                            rules={[
                                {
                                    required:true,
                                    message:"请输入您感兴趣的产业"
                                }
                            ]}>
                        <Input  />
                    </Form.Item>
                    
                    </Descriptions.Item>

                    <Descriptions.Item label="Personal Profile">
                    <Form.Item
                            name="Profile"
                            rules={[
                                {
                                    required:true,
                                    message:"请输入您的个人简介"
                                }
                            ]}>
                    <TextArea rows={4} />
                    </Form.Item>
                    
                    </Descriptions.Item>
                </Descriptions>
                <br/>
                <Button type="primary" htmlType="submit" className="alterinforbut" onClick={this.handleSubmit}>
                提交
                </Button>
                <br/>
                </Form>
            </div>
            
        )
    }
}
export default  AlterPersonalInfor;