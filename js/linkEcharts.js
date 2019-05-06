var myChart = require('./echarts').echarts;

function setEcharts() {
	myChart.setOption(option);
};

option = {
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow',
			label: {
				show: true
			}
		}
	},
	toolbox: {
		show: true,
		feature: {
			mark: {
				show: true
			},
			dataView: {
				show: true,
				readOnly: false
			},
			magicType: {
				show: true,
				type: ['line', 'bar']
			},
			restore: {
				show: true
			},
			saveAsImage: {
				show: true
			}
		}
	},
	calculable: true,
	legend: {
		data: ['Growth', '总成绩', 'Budget 2012'],
		itemGap: 5
	},
	grid: {
		top: '12%',
		left: '1%',
		right: '10%',
		containLabel: true
	},
	xAxis: [{
		type: 'category',
		data: stuId
	}],
	yAxis: [{
		type: 'value',
		name: '总成绩',
		// 					axisLabel: {
		// 						formatter: function(a) {
		// 							a = +a;
		// 							return isFinite(a) ?
		// 								echarts.format.addCommas(+a/10) :
		// 								'';
		// 						}
		// 					}
	}],
	dataZoom: [{
			show: true,
			start: 94,
			end: 100
		},
		{
			type: 'inside',
			start: 94,
			end: 100
		},
		{
			show: true,
			yAxisIndex: 0,
			filterMode: 'empty',
			width: 30,
			height: '80%',
			showDataShadow: false,
			left: '93%'
		}
	],
	series: [{
			name: '总成绩',
			type: 'bar',
			data: grade
		},
		// {
		//     name: 'Budget 2012',
		//     type: 'bar',
		//     data: ['1','2','3','4']
		// }
	]
};
