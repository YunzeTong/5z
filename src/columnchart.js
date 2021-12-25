import { Button } from "antd";
import { Component } from "react";

export default class ColumnChart extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstpath : this.props.firstpath,
            secondpath : this.props.secondpath,
        }
        this.initEcharts()
    }



    componentWillReceiveProps(nextProps){
        console.log("refresh")
        this.setState({
            firstpath : nextProps.firstpath,
            secondpath : nextProps.secondpath
        })
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
            this.colchart();
        })
    }

    colchart (){
        console.log("in func",this.props)
        var echarts = require('echarts')
        var myChart = echarts.init(document.querySelector('.bar1'));
        myChart.clear();
        var fp = this.props.firstpath
        var sp = this.props.secondpath

        if (fp == "" || fp == "卫生"){
            if (sp == "" || sp == "社会卫生总支出"){
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
                      data: ['2003', '2006', '2009', '2012', '2015', '2017', '2018']
                    },
                    series: [
                      {
                        name: '医学研究支出',
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
                        name: '老年人医疗',
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
                        name: '医药支出',
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
                        name: '医保支出',
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
                        name: '突发疾病支出',
                        type: 'bar',
                        stack: 'total',
                        label: {
                          show: true
                        },
                        emphasis: {
                          focus: 'series'
                        },
                        data: [600, 132, 101, 124, 235, 260, 1060]
                      }
                    ]
                  };
            } else {
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
                      data: ['2009', '2010', '2011', '2012', '2013', '2014', '2015']
                    },
                    series: [
                      {
                        name: '华东地区',
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
                        name: '东北地区',
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
                        name: '中原地区',
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
                        name: '港澳台地区',
                        type: 'bar',
                        stack: 'total',
                        label: {
                          show: true
                        },
                        emphasis: {
                          focus: 'series'
                        },
                        data: [250, 212, 201, 204, 210, 230, 310]
                      },
                      {
                        name: '西部地区',
                        type: 'bar',
                        stack: 'total',
                        label: {
                          show: true
                        },
                        emphasis: {
                          focus: 'series'
                        },
                        data: [120, 132, 101, 124, 160, 145, 105]
                      }
                    ]
                  };
            }
        } else if (fp == "能源") {
            if (sp == "能源工业投资"){
                var option = {
                    tooltip: {
                      trigger: 'axis',
                      axisPointer: {
                        type: 'cross',
                        label: {
                          backgroundColor: '#6a7985'
                        }
                      }
                    },
                    legend: {
                      data: ['能源工业投资(亿元)', '煤炭采选业投资(亿元)', '石油和天然气开采业投资(亿元)', '石油加工及炼焦业投资(亿元)', '电力、蒸汽、热水生产和供应业投资(亿元)']
                    },
                    toolbox: {
                      feature: {
                        saveAsImage: {}
                      }
                    },
                    grid: {
                      left: '3%',
                      right: '4%',
                      bottom: '3%',
                      containLabel: true
                    },
                    xAxis: [
                      {
                        type: 'category',
                        boundaryGap: false,
                        data: ['2017年', '2016年', '2015年', '2014年', '2013年', '2012年', '2011年'].reverse()
                      }
                    ],
                    yAxis: [
                      {
                        type: 'value'
                      }
                    ],
                    series: [
                      {
                        name: '能源工业投资(亿元)',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                          focus: 'series'
                        },
                        data: [32259.06, 32837.36, 32562.13, 31514.89, 29008.91, 25499.8, 23045.59].reverse()
                      },
                      {
                        name: '煤炭采选业投资(亿元)',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                          focus: 'series'
                        },
                        data: [2648.38, 3037.68, 4006.66, 4684.47, 5212.57, 5370.24, 4907.26].reverse()
                      },
                      {
                        name: '石油和天然气开采业投资(亿元)',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                          focus: 'series'
                        },
                        data: [2648.93, 2330.97, 3424.93, 3947.87, 3820.61, 3076.51, 3021.96].reverse()
                      },
                      {
                        name: '电力、蒸汽、热水生产和供应业投资(亿元)',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                          focus: 'series'
                        },
                        data: [24284.99, 24772.48, 22591.9, 19674.07, 16936.6, 14552.6, 12847.89].reverse()
                      },
                      {
                        name: '石油加工及炼焦业投资(亿元)',
                        type: 'line',
                        stack: 'Total',
                        label: {
                          show: true,
                          position: 'top'
                        },
                        areaStyle: {},
                        emphasis: {
                          focus: 'series'
                        },
                        data: [2676.77, 2696.23, 2538.65, 3208.49, 3039.13, 2500.45, 2268.48].reverse()
                      }
                    ]
                  };
            } else if (sp == "石油消费总量"){
                var option = {
  
                    tooltip: {
                      trigger: 'axis',
                      axisPointer: {
                        type: 'cross',
                        label: {
                          backgroundColor: '#6a7985'
                        }
                      }
                    },
                    legend: {
                      data: ['农、林、牧、渔业石油消费总量(万吨)', '工业石油消费总量(万吨)', '建筑业石油消费总量(万吨)', '交通运输、仓储和邮政业石油消费总量(万吨)', '批发和零售业、住宿和餐饮业石油消费总量(万吨)']
                    },
                    toolbox: {
                      feature: {
                        saveAsImage: {}
                      }
                    },
                    grid: {
                      left: '3%',
                      right: '4%',
                      bottom: '3%',
                      containLabel: true
                    },
                    xAxis: [
                      {
                        type: 'category',
                        boundaryGap: false,
                        data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019']
                      }
                    ],
                    yAxis: [
                      {
                        type: 'value'
                      }
                    ],
                    series: [
                      {
                        name: '农、林、牧、渔业石油消费总量(万吨)',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                          focus: 'series'
                        },
                        data: [1382.5, 1466.3, 1537.9, 1650.3, 1717.7, 1733.4, 1730.3, 1786.4, 1724.9, 1748.2]
                      },
                      {
                        name: '工业石油消费总量(万吨)',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                          focus: 'series'
                        },
                        data: [2483.1, 2521.8, 2740.7, 3090.6, 3205.3, 3384.3, 3599.1, 3803.5, 3935.7, 4055.1]
                      },
                      {
                        name: '建筑业石油消费总量(万吨)',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                          focus: 'series'
                        },
                        data: [2483.1, 2521.8, 2740.7, 3090.6, 3205.3, 3384.3, 3599.1, 3803.5, 3935.7, 4055.1]
                      },
                      {
                        name: '交通运输、仓储和邮政业石油消费总量(万吨)',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                          focus: 'series'
                        },
                        data: [15079.3, 16021.0, 17863.6, 18967.6, 19558.5, 20663.1, 21146.1, 22075.8, 22738.6, 22109.6]
                      },
                      {
                        name: '批发和零售业、住宿和餐饮业石油消费总量(万吨)',
                        type: 'line',
                        stack: 'Total',
                        label: {
                          show: true,
                          position: 'top'
                        },
                        areaStyle: {},
                        emphasis: {
                          focus: 'series'
                        },
                        data: [481.0, 500.0, 542.4, 565.4, 563.2, 615.7, 584.9, 601.1, 599.0, 608.4,]
                      }
                    ]
                  };
            } else {
                option = {
                    tooltip: {
                      trigger: 'axis',
                      axisPointer: {
                        type: 'cross',
                        label: {
                          backgroundColor: '#6a7985'
                        }
                      }
                    },
                    legend: {
                      data: ['水电生产电力量(亿千瓦小时)', '火电生产电力量(亿千瓦小时)', '核电生产电力量(亿千瓦小时)', '石油加工及炼焦业投资(亿元)', '电力进口量(亿千瓦小时)'].reverse()
                    },
                    toolbox: {
                      feature: {
                        saveAsImage: {}
                      }
                    },
                    grid: {
                      left: '3%',
                      right: '4%',
                      bottom: '3%',
                      containLabel: true
                    },
                    xAxis: [
                      {
                        type: 'category',
                        boundaryGap: false,
                        data: ['2019年', '2018年','2017年', '2016年', '2015年', '2014年', '2013年'].reverse()
                      }
                    ],
                    yAxis: [
                      {
                        type: 'value'
                      }
                    ],
                    series: [
                      {
                        name: '水电生产电力量(亿千瓦小时)',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                          focus: 'series'
                        },
                        data: [13044.4, 12317.9, 11978.7, 11840.5, 11302.7, 10728.8, 9202.9].reverse()
                      },
                      {
                        name: '火电生产电力量(亿千瓦小时)',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                          focus: 'series'
                        },
                        data: [52201.5, 50963.2, 47546, 44370.7, 42841.9, 44001.1, 42470.1].reverse()
                      },
                      {
                        name: '核电生产电力量(亿千瓦小时)',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                          focus: 'series'
                        },
                        data: [3483.5, 2330.97, 2480.7,2132.9, 1707.9,1325.4, 1116.1].reverse()
                      },
                      {
                        name: '风电生产电力量(亿千瓦小时)',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                          focus: 'series'
                        },
                        data: [4060.3, 3659.7, 2972.3, 2370.7, 1857.7, 1599.8, 1412].reverse()
                      },
                      {
                        name: '电力进口量(亿千瓦小时)',
                        type: 'line',
                        stack: 'Total',
                        label: {
                          show: true,
                          position: 'top'
                        },
                        areaStyle: {},
                        emphasis: {
                          focus: 'series'
                        },
                        data: [48.6, 56.9, 64.2, 61.9, 62.1, 67.5, 74.4].reverse()
                      }
                    ]
                  };
            }
        } else if (fp == "资源") {
            if (sp == "国家资源税"){
                var option = {
                    xAxis: {
                      type: 'category',
                      data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019']
                    },
                    yAxis: {
                      type: 'value'
                    },
                    series: [
                      {
                        data: [1005.65, 1083.82, 1034.94, 950.83, 1353.32, 1629.9, 1821.64],
                        type: 'line',
                        smooth: true
                      }
                    ]
                  };
            } else {
                var option = {
                    xAxis: {
                      type: 'category',
                      data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017','2018','2019']
                    },
                    yAxis: {
                      type: 'value'
                    },
                    series: [
                      {
                        data: [23256.7, 29528.8, 27957.9, 27266.9, 27962.6, 32466.4, 28761.2,27462.5,29041.0,31605.2],
                        type: 'line',
                        smooth: true
                      }
                    ]
                  };
            }
        } else if (fp == "房地产") {
            var option = {
                xAxis: {
                  type: 'category',
                  data: ['2013', '2014', '2015', '2016', '2017','2018','2019','2020']
                },
                yAxis: {
                  type: 'value'
                },
                series: [
                  {
                    data: [118600, 112782, 109953, 105911, 103190, 98605, 98837, 90825].reverse(),
                    type: 'bar'
                  }
                ]
              };
        } else {
            if (sp == "住宿和餐饮企业数"){
                var option = {
                    xAxis: {
                      type: 'category',
                      data: ['2019', '2018', '2017', '2016', '2015', '2014', '2013']
                    },
                    yAxis: {
                      type: 'value'
                    },
                    series: [
                      {
                        data: [54866, 50627,	45884	,45347,	45160,	43967,	44921	],
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                          color: 'rgba(180, 180, 180, 0.2)'
                        }
                      }
                    ]
                  };
            } else if (sp =="住宿和餐饮营业面积"){
                var option = {
                    xAxis: {
                      type: 'category',
                      data: ['2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年']
                    },
                    yAxis: {
                      type: 'value'
                    },
                    series: [
                      {
                        data: [9630.8, 10000.76, 9473.84, 9570.0, 9276.65, 9468.15, 9590.43, 10283.3],
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                          color: 'rgba(180, 180, 180, 0.2)'
                        }
                      }
                    ]
                  };
            } else {
                var option = {
                    xAxis: {
                      type: 'category',
                      data: ['2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年','2019年','2020年']
                    },
                    yAxis: {
                      type: 'value'
                    },
                    series: [
                      {
                        data: [3261.89, 3534.44, 3527.99, 3535.2, 3648.22, 3811.12, 3963.93, 4059.7, 4343.61, 3329.74],
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                          color: 'rgba(180, 180, 180, 0.2)'
                        }
                      }
                    ]
                  };
            }
        }

        
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
