import { Button } from "antd";
import { Component } from "react";

export default class ColumnChart extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstpath : "",
            secondpath : "",
        }
        // console.log("123")
        // console.log(this.state.firstpath, this.state.secondpath)
        this.initEcharts()
    }


    componentWillReceiveProps(nextProps){
        console.log("refresh")
        this.setState({
            firstpath : nextProps.firstpath,
            secondpath : nextProps.secondpath
        })
        console.log(this.state.firstpath)
        console.log(this.state.secondpath)
    }

    test(){
        console.log("enter")
        console.log(document.querySelector(".bar1"))
        console.log("exit")
    }

    initEcharts () {
        // 新建一个promise对象
        let newPromise = new Promise((resolve) => {
            resolve()
        })
        //然后异步执行echarts的初始化函数
        newPromise.then(() => {
            //  此dom为echarts图标展示dom
            console.log("start to enit")
            this.colchart();
        })
    }

    colchart (){
        var echarts = require('echarts')
        var myChart = echarts.init(document.querySelector('.bar1'));
        var option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                // Use axis to trigger tooltip
                type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
              }
            },
            legend: {},
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type: 'value'
            },
            yAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            series: [
              {
                name: 'Direct',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [320, 302, 301, 334, 390, 330, 320]
              },
              {
                name: 'Mail Ad',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
              },
              {
                name: 'Affiliate Ad',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
              },
              {
                name: 'Video Ad',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [150, 212, 201, 154, 190, 330, 410]
              },
              {
                name: 'Search Engine',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [820, 832, 901, 934, 1290, 1330, 1320]
              }
            ]
          };
          //配置项给实例对象
          myChart.setOption(option);
          //
          window.addEventListener("resize", function(){
            myChart.resize();
        });
    }




    render(){
        return(
            <div className="bar1" style={{padding: 24, minHeight:360}}>
            {/* <Button onClick={this.test.bind(this)}>初始</Button>
            <div className="bar1">{this.state.secondpath}</div> */}
            </div>
        )
    }

    
}


// export default class PieChart extends Component{
    
    
    
//     render(){
//         <div class="bar2">123</div>
//     }
// }
