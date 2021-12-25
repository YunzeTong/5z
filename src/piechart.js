import { Button } from "antd";
import { Component } from "react";

export default class PieChart extends Component{
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
        // console.log("refresh")
        this.setState({
            firstpath : nextProps.firstpath,
            secondpath : nextProps.secondpath
        })
        // console.log(this.state.firstpath)
        // console.log(this.state.secondpath)
        this.initEcharts()
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
            // console.log("start to enit")
            this.piechart();
        })
    }




    render(){
        return(
            <div className="pie1" style={{padding: 24, minHeight:360}}>
            {/* <Button onClick={this.test.bind(this)}>初始</Button>
            <div className="bar1">{this.state.secondpath}</div> */}
            </div>
        )
    }

    
    piechart(){
        var echarts = require('echarts')
        var myChart = echarts.init(document.querySelector('.pie1'), "light");
        myChart.clear();
        var fp = this.props.firstpath
        var sp = this.props.secondpath

        // if (fp == "" || fp == "卫生"){
        //     if (sp == "" || sp == "社会卫生总支出"){

        //     } else {

        //     }
        // } else if (fp == "能源") {
        //     if (sp == "能源工业投资"){

        //     } else if (sp == "石油消费总量"){

        //     } else {

        //     }
        // } else if (fp == "资源") {

        // } else {

        // }

        var option = {
            legend: {
                orient: 'horizontal',
                top: '10%',
                type: 'scroll',
                backgroundColor: '#ccf'
            },
            dataset: [
              {
                source: [
                  ['Product', 'Sales', 'Price', 'Year'],
                  ['Cake', 123, 32, 2011],
                  ['Cereal', 231, 14, 2011],
                  ['Tofu', 235, 5, 2011],
                  ['Dumpling', 341, 25, 2011],
                  ['Biscuit', 122, 29, 2011],
                  ['Cake', 143, 30, 2012],
                  ['Cereal', 201, 19, 2012],
                  ['Tofu', 255, 7, 2012],
                  ['Dumpling', 241, 27, 2012],
                  ['Biscuit', 102, 34, 2012],
                  ['Cake', 153, 28, 2013],
                  ['Cereal', 181, 21, 2013],
                  ['Tofu', 395, 4, 2013],
                  ['Dumpling', 281, 31, 2013],
                  ['Biscuit', 92, 39, 2013],
                  ['Cake', 223, 29, 2014],
                  ['Cereal', 211, 17, 2014],
                  ['Tofu', 345, 3, 2014],
                  ['Dumpling', 211, 35, 2014],
                  ['Biscuit', 72, 24, 2014]
                ]
              },
              {
                transform: {
                  type: 'filter',
                  config: { dimension: 'Year', value: 2011 }
                }
              },
              {
                transform: {
                  type: 'filter',
                  config: { dimension: 'Year', value: 2012 }
                }
              },
              {
                transform: {
                  type: 'filter',
                  config: { dimension: 'Year', value: 2013 }
                }
              }
            ],
            series: [
              {
                type: 'pie',
                radius: 50,
                center: ['25%', '50%'],
                datasetIndex: 1
              },
              {
                type: 'pie',
                radius: 50,
                center: ['50%', '50%'],
                datasetIndex: 2
              },
              {
                type: 'pie',
                radius: 50,
                center: ['75%', '50%'],
                datasetIndex: 3
              }
            ]
          };
    
          myChart.setOption(option);
          //
          window.addEventListener("resize", function(){
            myChart.resize();
        });
    };
    

}


// export default class PieChart extends Component{
    
    
    
//     render(){
//         <div class="bar2">123</div>
//     }
// }
