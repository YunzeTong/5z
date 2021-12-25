import React ,{Component} from "react";
import moment from 'moment';
import 'moment/locale/zh-cn';
import { PageHeader,Descriptions, Radio,Input,DatePicker } from 'antd';
import './PersonalInfo.css'
const { TextArea } = Input;
class PersonalInfor extends Component{
    //从后端获取这些state值
    state={
        name:'',
        username:'user123',
        email:'3190104733@zju.edu.cn',
        sex:'',
        university:'',
        birthday:'',
        interested_Industry:"",
        balance:'0',
        text:'',
        radioValue:1,
    }
    
    render(){
        return(
            <div>
                <PageHeader className="site-page-header" title="个人信息" subTitle="查看个人信息"></PageHeader>
                <Descriptions  bordered column={4}>
                    <Descriptions.Item label="Name" span={2}>{this.state.name}</Descriptions.Item>
                    <Descriptions.Item label="Username" span={2}>{this.state.username}</Descriptions.Item>
                    <Descriptions.Item label="Sex" span={2}>{this.state.sex}</Descriptions.Item>
                    <Descriptions.Item label="Email" span={2}>{this.state.email}</Descriptions.Item>
                    <Descriptions.Item label="Birthday" span={2}>
                    <DatePicker disabled defaultValue={this.state.birthday}/>
                    </Descriptions.Item>
                    <Descriptions.Item label="Graduate Institutions" span={2}>{this.state.university} </Descriptions.Item>
                    <Descriptions.Item label="UserType" span={2}>
                            <Radio.Group  value={this.state.radioValue}>
                                <Radio value={1}>普通用户</Radio>
                                <Radio value={2}>付费用户</Radio>
                            </Radio.Group>
                    </Descriptions.Item>
                    <Descriptions.Item label="AccountBalance" span={2}>{this.state.balance}</Descriptions.Item>
                    <Descriptions.Item label="Interested Industry" span={4}>{this.state.interested_Industry}</Descriptions.Item>
                    <Descriptions.Item label="Personal Profile">
                    <TextArea  rows={10}value={this.state.text} /></Descriptions.Item>
                </Descriptions>
            </div>
            
        )
    }
}
export default  PersonalInfor;