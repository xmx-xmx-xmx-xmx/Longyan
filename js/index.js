// 柱状图1模块
(function() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  var option = {
    //color: ["#2f89cf"],
	color: ["#2f89cf", "#ed3f35"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow" 
      },
	  formatter:function(e){
		  return e[0].name+"<br/>"+e[0].seriesName+":"+e[0].data+"亿元<br/>"+e[1].seriesName+":"+e[1].data+"%";
	  }
    },
	legend: {
      right: "10%",
      textStyle: {
        color: "#4c9bfd"
      }
	},
    grid: {
      left: "0%",
      top: "15%",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: ["2008年","2009年","2010年","2011年","2012年","2013年","2014年","2015年","2016年","2017年","2018年","2019年"],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
			textStyle: {
				color: "rgba(255,255,255,.6)",
				fontSize: "12",
			},  
			//interval:0,  
			//rotate:25 
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      },
	  {
		type: "value",
       }
    ],
    series: [
      {
        name: "总收入",
        type: "line",
        barWidth: "35%",
		smooth: true,
        data: [1.70 ,1.94 ,6.50 ,10.10 ,12.70 ,11.35 ,14.40 ,17.05 ,21.92 ,27.68 ,37.41 ,48.98],
      },{
        name: "增长率",
        type: "line",
		yAxisIndex: 1,
        barWidth: "35%",
		smooth: true,
        data: [13.5 ,15.5 ,200.0 ,55.4 ,25.7 ,22.1 ,26.8 ,18.4 ,28.6 ,34.9 ,35.1 ,31.0],
      }
    ]
  };

  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 折线图定制
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line .chart"));

  // 2. 指定配置和数据
  var option = {
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      trigger: "axis",
	  formatter:function(e){
		  return e[0].name+"<br/>"+e[0].seriesName+":"+e[0].data+"亿元<br/>"+e[1].seriesName+":"+e[1].data+"%";
	  }
    },
    legend: {
      right: "10%",
      textStyle: {
        color: "#4c9bfd"
      }
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true,
      borderColor: "#012f4a",
      containLabel: true
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["2008年","2009年","2010年","2011年","2012年","2013年","2014年","2015年","2016年","2017年","2018年","2019年"],
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 去除x坐标轴的颜色
      axisLine: {
        show: false
      }
    },
    yAxis: [{
      type: "value",
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },{
		type: "value",
       }
	],
    series: [
      {
        name: "接待游客数",
        type: "line",
        smooth: true,
        data: [58.7 ,66.9 ,85.0 ,112.6 ,142.0 ,128.4 ,157.8 ,182.9 ,218.6 ,288.97 ,343.23 ,441.23]
      },
	  {
        name: "增长率",
        type: "line",
        smooth: true,
        data: [14.2 ,14.0 ,27.0 ,32.5 ,26.1 ,19.8 ,22.9 ,15.9 ,19.5 ,26.9 ,18.8 ,28.6]
      }
    ]
  };
  // 3. 把配置和数据给实例对象
  myChart.setOption(option);

  // 重新把配置好的新数据给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 饼形图定制
// 折线图定制
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie .chart"));

  option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}:  ({d}%)",
      position: function(p) {
        //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      }
    },
    legend: {
      top: "80%",
      itemWidth: 10,
      itemHeight: 10,
      data: ["18岁以下","18-25岁","26-45岁","45-65岁","65岁以上"],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "年龄分布",
        type: "pie",
        center: ["50%", "42%"],
        radius: ["40%", "60%"],
        color: ["#065aab","#066eab","#0682ab","#0696ab","#06a0ab","#06b4ab","#06c8ab","#06dcab","#06f0ab"],
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value: 20, name: "18岁以下" },
          { value: 23, name: "18-25岁" },
          { value: 17, name: "26-45岁" },
          { value: 21, name: "45-65岁" },
          { value: 19, name: "65岁以上" }
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 学习进度柱状图模块
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));

  var option = {
	color: ["#2f89cf", "#ed3f35"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow" 
      },

    },
	legend: {
      right: "10%",
      textStyle: {
        color: "#4c9bfd"
      }
	},
    grid: {
      left: "0%",
      top: "15%",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: ["2013年","2014年","2015年","2016年"],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
			textStyle: {
				color: "rgba(255,255,255,.6)",
				fontSize: "12",
			},  
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "总人数",
        type: "bar",
        barWidth: "35%",
        data: [1808.4,2180.1,2532.2,3044.5],
      },
	  {
        name: "红旅人数",
        type: "bar",
        barWidth: "35%",
        data: [434.9,550.8,627,768,],
      }
    ]
  };

  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 折线图 优秀作品
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line1 .chart"));

  var option = {
	color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow" 
      },

    },
	legend: {
      right: "10%",
      textStyle: {
        color: "#4c9bfd"
      }
	},
    grid: {
      left: "0%",
      top: "15%",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: ["2013年","2014年","2015年","2016年"],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
			textStyle: {
				color: "rgba(255,255,255,.6)",
				fontSize: "12",
			},  
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "总收入",
        type: "bar",
        barWidth: "35%",
        data: [133.5,165.5,196.2,256.2],
      },
	  {
        name: "红旅收入",
        type: "bar",
        barWidth: "35%",
        data: [21.7,30.1,36.1,46.9],
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 点位分布统计模块
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie1  .chart"));
  // 2. 指定配置项和数据
  var option = {
    legend: {
      top: "80%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // 注意颜色写的位置
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    series: [
      {
        name: "知名度占比",
        type: "pie",
        // 如果radius是百分比则必须加引号
        radius: ["10%", "70%"],
        center: ["50%", "42%"],
        roseType: "radius",
        data: [
          { value: 2.10, name: "苏维埃政府旧址" },
          { value: 8.30, name: "红四军司令部旧址" },
          { value: 1.30, name: "杨成武将军像" },
          { value: 13.40, name: "翟秋白纪念馆" },
          { value: 5.60, name: "福音医院" },
          { value: 6.80, name: "职工联合会旧址" },
          { value: 10.20, name: "蛟洋文昌阁" },
          { value: 40.20, name: "古田会址" },
          { value: 12.10, name: "才溪乡调查纪念馆" }
        ],
        // 修饰饼形图文字相关的样式 label对象
        label: {
          fontSize: 10
        },
        // 修饰引导线样式
        labelLine: {
          // 连接到图形的线长度
          length: 10,
          // 连接到文字的线长度
          length2: 10
        }
      }
    ]
  };

  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();
