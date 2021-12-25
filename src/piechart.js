import { Col, Row } from "antd";
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
            // <Row>
            //     <Col span={8}>
                <div className="pie1" style={{padding: 0, minHeight:600, minWidth:460}} />
            //     {/* </Col>
            //     <Col span={8}>
            //     <div className="pie2" style={{padding: 24, minHeight:360}} />
            //     </Col>
            //     <Col span={8}>
            //     <div className="pie3" style={{padding: 24, minHeight:360}} />
            //     </Col>
            // </Row> */}
            
        )
    }

    
    piechart(){
        var echarts = require('echarts')
        var myChart = echarts.init(document.querySelector('.pie1'), "dark");
        myChart.clear();
        var fp = this.props.firstpath
        var sp = this.props.secondpath

        if (fp == "" || fp == "卫生"){
            if (sp == "" || sp == "社会卫生总支出"){
                var option = {
                    legend: {
                      top: 'bottom'
                    },
                    toolbox: {
                      show: true,
                      feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: false },
                        restore: { show: true },
                        saveAsImage: { show: true }
                      }
                    },
                    series: [
                      {
                        name: 'Nightingale Chart',
                        type: 'pie',
                        radius: [50, 250],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        itemStyle: {
                          borderRadius: 8
                        },
                        data: [
                          { value: 320, name: '医学研究支出' },
                          { value: 210, name: '老年人医疗' },
                          { value: 310, name: '医药指出' },
                          { value: 410, name: '医保支出' },
                          { value: 760, name: '突发卫生事件' }
                        ]
                      }
                    ]
                  };
            } else {
                var option = {
                    legend: {
                      top: 'bottom'
                    },
                    toolbox: {
                      show: true,
                      feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: false },
                        restore: { show: true },
                        saveAsImage: { show: true }
                      }
                    },
                    series: [
                      {
                        name: 'Nightingale Chart',
                        type: 'pie',
                        radius: [50, 250],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        itemStyle: {
                          borderRadius: 8
                        },
                        data: [
                          { value: 320, name: '华东地区' },
                          { value: 210, name: '东北地区' },
                          { value: 310, name: '中原地区' },
                          { value: 310, name: '港澳台地区' },
                          { value: 155, name: '西部地区' }
                        ]
                      }
                    ]
                  };
            }
        } else if (fp == "能源") {
            if (sp == "能源工业投资"){
                var option = {
                    backgroundColor: '#2c343c',
                    title: {
                      text: '2017年能源工业投资',
                      left: 'center',
                      top: 20,
                      textStyle: {
                        color: '#ccc'
                      }
                    },
                    tooltip: {
                      trigger: 'item'
                    },
                    visualMap: {
                      show: false,
                      min: 25000,
                      max: 70000,
                      inRange: {
                        colorLightness: [0.5, 1]
                      }
                    },
                    series: [
                      {
                        name: 'Access From',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '50%'],
                        data: [
                           { value: 32259.06, name: '能源工业投资(亿元)' },
                          { value: 2648.38, name: '煤炭采选业投资(亿元)' },
                          { value: 2648.93, name: '石油和天然气开采业投资(亿元)' },
                          { value: 2676.77, name: '石油加工及炼焦业投资(亿元)' },
                          { value: 24284.99, name: '电力、蒸汽、热水生产和供应业投资(亿元)' }
                        ].sort(function (a, b) {
                          return a.value - b.value;
                        }),
                        roseType: 'radius',
                        label: {
                          color: 'rgba(255, 255, 255, 0.3)'
                        },
                        labelLine: {
                          lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                          },
                          smooth: 0.2,
                          length: 10,
                          length2: 20
                        },
                        itemStyle: {
                          color: '#c23531',
                          shadowBlur: 200,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: function (idx) {
                          return Math.random() * 200;
                        }
                      }
                    ]
                  };
            } else if (sp == "石油消费总量"){
                option = {
                    backgroundColor: '#2c343c',
                    title: {
                      text: '2017年石油消费总量',
                      left: 'center',
                      top: 20,
                      textStyle: {
                        color: '#ccc'
                      }
                    },
                    tooltip: {
                      trigger: 'item'
                    },
                    visualMap: {
                      show: false,
                      min: 20000,
                      max: 50000,
                      inRange: {
                        colorLightness: [0.5, 1]
                      }
                    },
                    series: [
                      {
                        name: 'Access From',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '50%'],
                        data: [
                         { value: 32259.06, name: '农、林、牧、渔业石油消费总量(万吨)' },
                          { value: 21732.4, name: '工业石油消费总量(万吨)' },
                          { value: 4055.1, name: '建筑业石油消费总量(万吨)' },
                          { value: 22109.6, name: '交通运输、仓储和邮政业石油消费总量(万吨)' },
                          { value: 608.4, name: '批发和零售业、住宿和餐饮业石油消费总量(万吨)' }
                        ].sort(function (a, b) {
                          return a.value - b.value;
                        }),
                        roseType: 'radius',
                        label: {
                          color: 'rgba(255, 255, 255, 0.3)'
                        },
                        labelLine: {
                          lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                          },
                          smooth: 0.2,
                          length: 10,
                          length2: 20
                        },
                        itemStyle: {
                          color: '#c23531',
                          shadowBlur: 200,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: function (idx) {
                          return Math.random() * 200;
                        }
                      }
                    ]
                  };
            } else {
                var option = {
                    backgroundColor: '#2c343c',
                    title: {
                      text: '2019年电力能源总量',
                      left: 'center',
                      top: 20,
                      textStyle: {
                        color: '#ccc'
                      }
                    },
                    tooltip: {
                      trigger: 'item'
                    },
                    visualMap: {
                      show: false,
                      min: 40000,
                      max: 80000,
                      inRange: {
                        colorLightness: [0.5, 1]
                      }
                    },
                    series: [
                      {
                        name: 'Access From',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '50%'],
                        data: [
                         { value: 13044.4, name: '水电生产电力量(亿千瓦小时)' },
                          { value:52201.5, name: '火电生产电力量(亿千瓦小时)' },
                          { value: 3483.5, name: '核电生产电力量(亿千瓦小时)' },
                          { value: 4060.3, name: '交通运输、仓储和邮政业石油消费总量(万吨)' },
                          { value: 48.6, name: '电力进口量(亿千瓦小时)' }
                        ].sort(function (a, b) {
                          return a.value - b.value;
                        }),
                        roseType: 'radius',
                        label: {
                          color: 'rgba(255, 255, 255, 0.3)'
                        },
                        labelLine: {
                          lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                          },
                          smooth: 0.2,
                          length: 10,
                          length2: 20
                        },
                        itemStyle: {
                          color: '#c23531',
                          shadowBlur: 200,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: function (idx) {
                          return Math.random() * 200;
                        }
                      }
                    ]
                  };
            }
        } else if (fp == "资源") {
            if (sp == "国家资源税"){
                var option = {
                    xAxis: {
                      scale: true,
                      min: 2012,
                      max:2020
                    },
                    yAxis: {
                      scale: true,
                      min:900
                    },
                    series: [
                      {
                        type: 'effectScatter',
                        symbolSize: 50,
                        data: [
                          [2013, 1005.65],
                          [2019, 1821.64]
                        ]
                      },
                      {
                        type: 'scatter',
                        // prettier-ignore
                        data: [[2013, 1005.65],
                          [2014, 1083.82],
                          [2015, 1034.94],
                          [2016, 950.83],
                          [2017, 1353.32],
                          [2018, 1629.9],
                          [2019, 1821.64]
                              ]
                      }
                    ]
                  };
            } else {
                var option = {
                    xAxis: {
                      scale: true,
                      min: 2010,
                      max:2021
                    },
                    yAxis: {
                      scale: true,
                      min:23000
                    },
                    series: [
                      {
                        type: 'effectScatter',
                        symbolSize: 50,
                        data: [
                          [2011, 23256.7],
                          [2020, 31605.2]
                        ]
                      },
                      {
                        type: 'scatter',
                        // prettier-ignore
                        data: [[2011, 23256.7],
                          [2012, 29528.8],
                          [2013, 27957.9],
                          [2014, 27266.9],
                          [2015, 27962.6],
                          [2016, 32466.4],
                          [2017, 28761.2],
                          [2018, 27462.5],
                          [2019, 29041.0],
                          [2020, 31605.2]
                              ]
                      }
                    ]
                  };
            }
        } else if (fp == "房地产"){
            var option = {
                xAxis: {
                  min:2012
                },
                yAxis: {
                  min:90000
                },
                series: [
                  {
                    symbolSize: 20,
                    data: [
                      [2013, 118600],
                      [2014, 112782],
                      [2015, 109953],
                      [2016, 105911],
                      [2017, 103190],
                      [2018, 98605],
                      [2019, 98837],
                      [2020, 90825]
                    ],
                    type: 'scatter'
                  }
                ]
              };
        } else {
            if (sp == "住宿和餐饮企业数"){
                var option = {
                    xAxis: {
                      scale: true,
                      min: 2012,
                      max:2020
                    },
                    yAxis: {
                      scale: true,
                      min:42000
                    },
                    series: [
                      {
                        type: 'effectScatter',
                        symbolSize: 50,
                        data: [
                          [2013, 44921],
                          [2019, 54866]
                        ]
                      },
                      {
                        type: 'scatter',
                        // prettier-ignore
                        data: [
                          [2013, 44921],
                          [2014, 42967],
                          [2015, 45160],
                          [2016, 45347],
                          [2017, 45884],
                          [2018, 50627],
                          [2019, 54866]
                              ]
                      }
                    ]
                  };
            } else if (sp =="住宿和餐饮营业额"){
                var option = {
                    xAxis: {
                      scale: true,
                      min: 2010,
                      max:2021
                    },
                    yAxis: {
                      scale: true,
                      min:3000
                    },
                    series: [
                      {
                        type: 'effectScatter',
                        symbolSize: 50,
                        data: [
                          [2011, 3261.89],
                          [2020,3329.74],
                        ]
                      },
                      {
                        type: 'scatter',
                        // prettier-ignore
                        data: [[2011, 3261.89],
                          [2012, 3534.44],
                          [2013, 3527.99],
                          [2014, 3535.2],
                          [2015, 3648.22],
                          [2016, 3811.12],
                          [2017,3963.93],
                          [2018, 4059.7],
                          [2019,4343.61],
                          [2020,3329.74],
                              ]
                      }
                    ]
                  };
            } else {
                var option = {
                    xAxis: {
                      scale: true,
                      min: 2010,
                      max:2019
                    },
                    yAxis: {
                      scale: true,
                      min:9000
                    },
                    series: [
                      {
                        type: 'effectScatter',
                        symbolSize: 50,
                        data: [
                          [2011, 9630.8],
                          [2018, 10283.3]
                        ]
                      },
                      {
                        type: 'scatter',
                        // prettier-ignore
                        data: [[2011, 9630.8],
                          [2012, 10000.76],
                          [2013, 9473.84],
                          [2014, 9570.0],
                          [2015, 9276.65],
                          [2016, 9468.15],
                          [2017, 9590.43],
                          [2018, 10283.3],
                              ]
                      }
                    ]
                  };
            }
        }

    
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
