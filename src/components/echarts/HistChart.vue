<template>
    <div ref="histChart" style="width: 500px; height: 500px;"></div>
</template>

<script>
    import echarts from '../../plugins/echarts';
    import * as ecStat from 'echarts-stat';
    import { girth } from '../../util/constant';

    export default {
        name: 'HistChart',
        data() {
            return {
                myChart: null,
                option: null
            };
        },
        mounted() {
            this.drawChart();
        },
        methods: {
            drawChart() {
                let dom = this.$refs.histChart;
                this.myChart = echarts.init(dom);
                this.option = null;
                let bins = ecStat.histogram(girth);

                let interval;
                let min = Infinity;
                let max = -Infinity;

                let data = echarts.util.map(bins.data, function(item, index) {
                    let x0 = bins.bins[index].x0;
                    let x1 = bins.bins[index].x1;
                    interval = x1 - x0;

                    min = Math.min(min, x0);
                    max = Math.max(max, x1);
                    return [x0, x1, item[1]];
                });

                const renderItem = (params, api) => {
                    let yValue = api.value(2);
                    let start = api.coord([api.value(0), yValue]);
                    let size = api.size([api.value(1) - api.value(0), yValue]);
                    let style = api.style();

                    return {
                        type: 'rect',
                        shape: {
                            x: start[0] + 1,
                            y: start[1],
                            width: size[0] - 2,
                            height: size[1]
                        },
                        style: style
                    };
                };

                this.option = {
                    color: ['rgba(133, 67, 224, 1)'],
                    grid: {
                        top: '8%',
                        left: '3%',
                        right: '3%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'value',
                            splitLine: { show: false },
                            /*改变y轴颜色*/
                            axisLine: {
                                lineStyle: {
                                    color: '#1982ff',
                                    width: 1 //这里是为了突出显示加上的
                                }
                            },
                            axisLabel: {
                                //字体颜色
                                show: true,
                                textStyle: {
                                    color: '#ff0536'
                                }
                            },
                            min: min,
                            max: max,
                            interval: interval
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            splitLine: { show: false },
                            /*改变y轴颜色*/
                            axisLine: {
                                lineStyle: {
                                    color: '#1982ff',
                                    width: 1 //这里是为了突出显示加上的
                                }
                            },
                            axisLabel: {
                                //字体颜色
                                show: true,
                                textStyle: {
                                    color: '#ff0536'
                                }
                            }
                        }
                    ],
                    tooltip: {
                        trigger: 'item',
                        formatter: function(parms) {
                            //
                            let str =
                                '车重范围分布统计' +
                                '</br>' +
                                '车重区间：' +
                                '' +
                                parms.data[0] +
                                '~' +
                                parms.data[1] +
                                't' +
                                '</br>' +
                                parms.data[0] +
                                '~' +
                                parms.data[1] +
                                ':' +
                                parms.data[2] +
                                '辆' +
                                '</br>';
                            return str;
                        }
                    },
                    series: [
                        {
                            name: 'height',
                            type: 'custom',
                            renderItem: renderItem,
                            // label: {
                            //   normal: {
                            //     show: true,
                            //     position: "insideTop"
                            //   }
                            // },
                            encode: {
                                x: [0, 1],
                                y: 2,
                                tooltip: 2,
                                label: 2
                            },
                            data: data
                        }
                    ]
                };
                if (this.option && typeof this.option === 'object') {
                    this.myChart.setOption(this.option, true);
                }
            }
        }
    };
</script>

<style scoped>

</style>