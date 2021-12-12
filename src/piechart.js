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
        var option = {
            legend: {
                orient: 'horizontal',
                top: '10%',
                type: 'scroll',
                backgroundColor: '#ccf'
            },
            dataset: [
              {
                // 这个 dataset 的 index 是 `0`。
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
                // id: 'a'
              },
              {
                // 这个 dataset 的 index 是 `1`。
                // 这个 `transform` 配置，表示，此 dataset 的数据，来自于此 transform 的结果。
                transform: {
                  type: 'filter',
                  config: { dimension: 'Year', value: 2011 }
                }
                // 我们还可以设置这些可选的属性： `fromDatasetIndex` 或 `fromDatasetId`。
                // 这些属性，指定了，transform 的输入，来自于哪个 dataset。例如，
                // `fromDatasetIndex: 0` 表示输入来自于 index 为 `0` 的 dataset 。又例如，
                // `fromDatasetId: 'a'` 表示输入来自于 `id: 'a'` 的 dataset。
                // 当这些属性都不指定时，默认认为，输入来自于 index 为 `0` 的 dataset 。
              },
              {
                // 这个 dataset 的 index 是 `2`。
                // 同样，这里因为 `fromDatasetIndex` 和 `fromDatasetId` 都没有被指定，
                // 那么输入默认来自于 index 为 `0` 的 dataset 。
                transform: {
                  // 这个类型为 "filter" 的 transform 能够遍历并筛选出满足条件的数据项。
                  type: 'filter',
                  // 每个 transform 如果需要有配置参数的话，都须配置在 `config` 里。
                  // 在这个 "filter" transform 中，`config` 用于指定筛选条件。
                  // 下面这个筛选条件是：选出维度（ dimension ）'Year' 中值为 2012 的所有
                  // 数据项。
                  config: { dimension: 'Year', value: 2012 }
                }
              },
              {
                // 这个 dataset 的 index 是 `3`。
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
                // 这个饼图系列，引用了 index 为 `1` 的 dataset 。也就是，引用了上述
                // 2011 年那个 "filter" transform 的结果。
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
