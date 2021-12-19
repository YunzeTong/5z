import React from "react";
import { AudioOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';import {
    Button,
    Card,
    Layout,
    List,
    Select,
    Input
} from "antd";
const {Option}=Select;
const {Search}=Input;
const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
class Delete extends React.Component {
    constructor() {
        super();
        this.state = {
            dataSource: [],
        }
    }
    render() {
        return (
            <div>
            <Select defaultValue="请选择产业类型" style={{ width: 200,marginLeft:600 }}> 
            {/* <div>onChange={handleChange}</div> */}
      <Option value="旅游业">旅游业</Option>
      <Option value="农业">农业</Option>
      <Option value="军事">军事</Option>
      <Option value="核事业">核事业</Option>
    </Select>
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="default"
      suffix={suffix}
      style={{width:350,marginLeft:50}}
    //   onSearch={}
    />
                  <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 5,
                    }}
                    dataSource={this.state.dataSource}
                    renderItem={item => (
                        <List.Item>
                            <Card
                                title={item.picture_id}
                                extra={
                                    <>
                                        <Button size="small" onClick={e => this.show(e, item)}>详情</Button>
                                        <Button size="small" onClick={e => this.delete(e,item)}>删除</Button>
                                    </>
                                }
                            >
                                <p>{"所属产业:" + item.belong}</p>
                            </Card>
                        </List.Item>
                    )}
                />
                </div>
        )
    }
}
export default Delete;