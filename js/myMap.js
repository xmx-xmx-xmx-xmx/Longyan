(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".map .chart"));
  // 2. 指定配置和数据
  // 2. 指定配置和数据
  var geoCoordMap = {
    苏维埃政府旧址: [116.379288,25.824825],
	红四军司令部旧址: [116.805322,25.001087],
	杨成武将军像: [116.355521,25.843567],
	翟秋白纪念馆: [116.355271,25.84351],
	福音医院: [116.365626,25.841833],
	职工联合会旧址: [116.36075,25.840135],
	蛟洋文昌阁: [116.743198,25.22778],
	古田会址: [116.83268,25.222559],
	毛泽东才溪乡调查纪念馆: [116.425106,25.25713]
  };

  var XAData = [
    [{ name: "苏维埃政府旧址" }, { name: "红四军司令部旧址", value: 100 }],
    [{ name: "苏维埃政府旧址" }, { name: "杨成武将军像", value: 100 }],
    [{ name: "苏维埃政府旧址" }, { name: "翟秋白纪念馆", value: 100 }],
    [{ name: "苏维埃政府旧址" }, { name: "福音医院", value: 100 }],
    [{ name: "苏维埃政府旧址" }, { name: "职工联合会旧址", value: 100 }],
    [{ name: "苏维埃政府旧址" }, { name: "蛟洋文昌阁", value: 100 }],
    [{ name: "苏维埃政府旧址" }, { name: "古田会址", value: 100 }],
    [{ name: "苏维埃政府旧址" }, { name: "毛泽东才溪乡调查纪念馆", value: 100 }]
  ];

  var XNData = [
    [{ name: "红四军司令部旧址" }, { name: "杨成武将军像", value: 100 }],
    [{ name: "红四军司令部旧址" }, { name: "职工联合会旧址", value: 100 }],
    [{ name: "红四军司令部旧址" }, { name: "蛟洋文昌阁", value: 100 }],
    [{ name: "红四军司令部旧址" }, { name: "古田会址", value: 100 }],
    [{ name: "红四军司令部旧址" }, { name: "毛泽东才溪乡调查纪念馆", value: 100 }]
  ];

  var YCData = [
    [{ name: "杨成武将军像" }, { name: "职工联合会旧址", value: 100 }],
    [{ name: "杨成武将军像" }, { name: "蛟洋文昌阁", value: 100 }],
    [{ name: "杨成武将军像" }, { name: "古田会址", value: 100 }]
  ];

  var planePath =
    "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
  //var planePath = 'arrow';
  var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];

      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord],
          value: dataItem[1].value
        });
      }
    }
    return res;
  };

  var color = ["#fff", "#fff", "#fff"]; //航线的颜色
  var series = [];
  [
    ["西安", XAData],
    ["西宁", XNData],
    ["银川", YCData]
  ].forEach(function(item, i) {
    series.push(
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: "red", //arrow箭头的颜色
          symbolSize: 3
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 0,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 2,
        symbol: ["none", "arrow"],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 1,
            opacity: 0.6,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0] + " Top3",
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          brushType: "stroke"
        },
        label: {
          normal: {
            show: false,
            position: "right",
            formatter: "{b}"
          }
        },
        symbolSize: function(val) {
          return val[2] / 8;
        },
        itemStyle: {
          normal: {
            color: color[i]
          },
          emphasis: {
            areaColor: "#2B91B7"
          }
        },
        data: item[1].map(function(dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
          };
        })
      }
    );
  });
  var option = {
    tooltip: {
      trigger: "item",
      formatter: function(params, ticket, callback) {
        if (params.seriesType == "effectScatter") {
          return  params.data.name;// + "" + params.data.value[2];
        } else if (params.seriesType == "lines") {
          return params.data.fromName + ">" + params.data.toName 
        } else {
          return params.name;
        }
      }
    },

    geo: {
      map: "fujian",
      label: {
        emphasis: {
          show: true,
          color: "#fff"
        }
      },
      roam: true,
      //   放大我们的地图
      zoom: 1,
      itemStyle: {
        normal: {
          areaColor: "rgba(43, 196, 243, 0.42)",
          borderColor: "rgba(43, 196, 243, 1)",
          borderWidth: 1
        },
        emphasis: {
          areaColor: "#2B91B7"
        }
      }
    },
    series: series
  };
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
  
	myChart.on('click', function (params) {
		if(params.seriesType === "effectScatter"){
			console.log(params);
			window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
		}
		
		
	});
})();
