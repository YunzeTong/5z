import React from "react";
import 'antd/dist/antd.css';
import {
    Button,
    Form,
    Input,
} from "antd";
import cookie from "react-cookies";
class  Add_source extends React.Component {

    upload_src = () => {
        cookie.save("flag", true, {path: '/'})
        alert("上传数据成功")
    }


    render() {
        return(
            <div className="form">
                <Form
                    labelCol={{span: 8}}
                    wrapperCol={{span: 10}}
                    layout="horizontal"
                    style={{alignItems: 'center'}}
                    onFinish={this.onSubmit}
                    ref={this.formRef}
                >
                    <Form.Item
                        name="file"
                        label="上传文件名称"
                        rules={[{
                            required: true,
                            message: "请选择文件!"
                        }]}
                    >
                        <Input type="file" accept="*" className="uploader-input"/>
                    </Form.Item>
                    <Form.Item
                        name="name"
                        label="数据集名称"
                        rules={[{
                            required: true,
                            message: "请填写数据集名称!"
                        }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="type"
                        label="所属产业"
                        rules={[{
                            required: true,
                            message: "请填写所属产业!"
                        }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8 }}>
                        <Button onClick={()=>this.upload_src()} type="primary" htmlType="submit">
                            提交
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Add_source;