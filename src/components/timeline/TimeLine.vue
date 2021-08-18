<!--TimeLine-->
<template>
    <div class="time-line">
        <canvas ref="timeline"
                :width="width"
                :height="height"
                style="cursor: pointer;border:1px solid #2b2f33;background-color: #2b2f33;"
                ondragstart="return false;"></canvas>
    </div>
</template>

<script>
import dayjs from 'dayjs';

export default {
    name: 'TimeLine',
    // components: {},
    // directives: {},
    // filters: {},
    // model: {},
    props: {
        width: {
            type: Number,
            default: 1500
        },
        height: {
            type: Number,
            default: 60
        },
        // 有视频的时间段
        timeCell: {
            type: Array,
            default: () => (
                [
                    {
                        'beginTime': new Date().getTime() - 3 * 3600 * 1000,
                        'endTime': new Date().getTime() - 1 * 3600 * 1000,
                        'style': {
                            'background': 'rgba(132, 244, 180, 0.498039)'
                        }
                    },
                    {
                        'beginTime': new Date().getTime() - 6 * 3600 * 1000,
                        'endTime': new Date().getTime() - 4 * 3600 * 1000,
                        'style': {
                            'background': 'rgba(132, 244, 180, 0.498039)'
                        }
                    }
                ]
            )
        },
        // 每个时间间隔的分钟数, 默认60
        minutes_per_step: {
            type: Array,
            default: () => ([60])
        },
        //刻度间最小宽度，单位px
        graduation_step: {
            type: Number,
            default: 10
        },
        //时间轴显示24小时
        // hours_per_ruler: {
        //     type: Number,
        //     default: 24
        // },
        // 开始时间 单位ms
        // start_timestamp: {
        //     type: Number,
        //     default: new Date().getTime() - 24 * 60 * 60 * 1000
        // },
        distance_between_gtitle: {
            type: Number,
            default: 80
        },
        timeRange: {
            type: Array,
            default: () => ([
                1629168189000,
                1629340989000
            ])
        },
        mouseScale: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            canvas: null,
            ctx: null,
            canvasW: 0,
            canvasH: 0,
            //拖动mousedown标记
            g_isMousedown: false,
            //拖动mousemove标记
            g_isMousemove: false,
            //拖动mousedown的位置
            g_mousedownCursor: false,
            //mouseup返回时间
            returnTime: null,
            zoom: 12,
            start_timestamp: 0,
            hours_per_ruler: 12,
            redrawFlag: false,
            clickNum: 0
        };
    },
    watch: {
        returnTime(val) {
            this.$emit('change', val);
        }
    },
    mounted() {
        this.canvas = this.$refs.timeline;
        this.ctx = this.canvas.getContext('2d');
        this.canvasW = this.canvas.width;
        this.canvasH = this.canvas.height;
        this.start_timestamp = new Date().getTime() - this.hours_per_ruler / 2 * 60 * 60 * 1000;
        this.zoom = this.hours_per_ruler;
        this.init(this.start_timestamp, this.timeCell, false);
    },
    methods: {
        /**
         * 初始化
         * @param {*} start_timestamp 最左侧时间
         * @param {*} timeCell 录像段数组
         * @param {*} redrawFlag 是否重绘标记
         */
        init(start_timestamp, timeCell, redrawFlag) {
            this.timeCell = timeCell;
            this.start_timestamp = start_timestamp;
            this.drawCellBg();
            this.add_graduations(start_timestamp);
            this.add_cells(timeCell);
            this.drawLine(0, this.canvasH, this.canvasW, this.canvasH, 'rgb(151, 158, 167)', 1); //底线
            this.drawLine(this.canvasW / 2, 0, this.canvasW / 2, 33, 'rgb(64, 196, 255', 2); //中间播放点时间线
            if (!redrawFlag) {//只有第一次进入才需要添加事件
                this.add_events();
            }
            let currentTime = start_timestamp + (this.hours_per_ruler * 3600 * 1000) / 2;
            this.ctx.fillStyle = 'rgb(64, 196, 255';
            this.ctx.fillText(this.changeTime(currentTime), this.canvasW / 2 - 60, 50);
        },
        /**
         * 绘制添加刻度
         * @param {*} start_timestamp 最左侧时间
         */
        add_graduations(start_timestamp) {
            let px_per_min = this.canvasW / (this.hours_per_ruler * 60); // px/min
            let px_per_ms = this.canvasW / (this.hours_per_ruler * 60 * 60 * 1000); // px/ms
            let px_per_step = this.graduation_step;  // px/格 默认最小值20px
            let min_per_step = px_per_step / px_per_min; // min/格
            for (let i = 0; i < this.minutes_per_step.length; i++) {
                if (min_per_step <= this.minutes_per_step[i]) { //让每格时间在minutes_per_step规定的范围内
                    min_per_step = this.minutes_per_step[i];
                    px_per_step = px_per_min * min_per_step;
                    break;
                }
            }

            let medium_step = 30;
            for (let i = 0; i < this.minutes_per_step.length; i++) {
                if (this.distance_between_gtitle / px_per_min <= this.minutes_per_step[i]) {
                    medium_step = this.minutes_per_step[i];
                    break;
                }
            }

            let num_steps = this.canvasW / px_per_step; //总格数
            let graduation_left;
            let graduation_time;
            let caret_class;
            let lineH;
            let ms_offset = this.ms_to_next_step(start_timestamp, min_per_step * 60 * 1000);//开始的偏移时间 ms
            let px_offset = ms_offset * px_per_ms; //开始的偏移距离 px
            let ms_per_step = px_per_step / px_per_ms; // ms/step
            for (let i = 0; i < num_steps; i++) {
                graduation_left = px_offset + i * px_per_step; // 距离=开始的偏移距离+格数*px/格
                graduation_time = start_timestamp + ms_offset + i * ms_per_step; //时间=左侧开始时间+偏移时间+格数*ms/格
                let date = new Date(graduation_time);
                if (date.getUTCHours() === 0 && date.getUTCMinutes() === 0) {
                    caret_class = 'big';
                    lineH = 25;
                    let big_date = this.graduation_title(date);
                    this.ctx.fillText(big_date, graduation_left - 20, 30);
                    this.ctx.fillStyle = 'rgba(151,158,167,1)';
                } else if (graduation_time / (60 * 1000) % medium_step === 0) {
                    caret_class = 'middle';
                    lineH = 15;
                    let middle_date = this.graduation_title(date);
                    this.ctx.fillText(middle_date, graduation_left - 20, 30);
                    this.ctx.fillStyle = 'rgba(151,158,167,1)';
                } else {
                    lineH = 10;
                }
                // drawLine(graduation_left,0,graduation_left,lineH,"rgba(151,158,167,0.4)",1);
                this.drawLine(graduation_left, 0, graduation_left, lineH, 'rgba(151,158,167,1)', 1);
            }
        },

        /**
         * 绘制线
         * @param {*} beginX
         * @param {*} beginY
         * @param {*} endX
         * @param {*} endY
         * @param {*} color
         * @param {*} width
         */
        drawLine(beginX, beginY, endX, endY, color, width) {
            this.ctx.beginPath();
            this.ctx.moveTo(beginX, beginY);
            this.ctx.lineTo(endX, endY);
            this.ctx.strokeStyle = color;
            this.ctx.lineWidth = width;
            this.ctx.stroke();
        },
        /**
         * 添加录像段
         * @param {*} cells 录像数组
         */
        add_cells(cells) {
            cells.forEach(cell => {
                this.draw_cell(cell);
            });
        },
        /**
         * 绘制录像块
         * @param {*} cell cell包括beginTime ms;endTime ms;style
         */
        draw_cell(cell) {
            let px_per_ms = this.canvasW / (this.hours_per_ruler * 60 * 60 * 1000); // px/ms
            let beginX = (cell.beginTime - this.start_timestamp) * px_per_ms;
            let cell_width = (cell.endTime - cell.beginTime) * px_per_ms;
            this.ctx.fillStyle = cell.style.background;
            this.ctx.fillRect(beginX, 0, cell_width, 15);
        },

        /**
         * 绘制录像块背景
         */
        drawCellBg() {
            this.ctx.fillStyle = 'rgba(69, 72, 76, 0.5)';
            this.ctx.fillRect(0, 0, this.canvasW, 15);
        },
        /**
         * 时间轴事件
         */
        add_events() {
            if (this.canvas.addEventListener) {
                this.mouseScale && this.canvas.addEventListener('mousewheel', this.mousewheelFunc);
                this.canvas.addEventListener('mousedown', this.mousedownFunc);
                this.canvas.addEventListener('mousemove', this.mousemoveFunc);
                this.canvas.addEventListener('mouseup', this.mouseupFunc);
                this.canvas.addEventListener('mouseout', this.mouseoutFunc);
            }
        },

        /**
         * 拖动/点击 mousedown事件
         */
        mousedownFunc(e) {
            this.g_isMousedown = true;
            this.g_mousedownCursor = this.get_cursor_x_position(e);//记住mousedown的位置
        },
        /**
         * 拖动/鼠标hover显示 mousemove事件
         */
        mousemoveFunc(e) {
            let pos_x = this.get_cursor_x_position(e);
            let px_per_ms = this.canvasW / (this.hours_per_ruler * 60 * 60 * 1000); // px/ms
            this.clearCanvas();
            if (this.g_isMousedown) {
                // move
                let diff_x = pos_x - this.g_mousedownCursor;
                this.start_timestamp = this.start_timestamp - Math.round(diff_x / px_per_ms);
                // 如果设置了时间范围,要判断
                if (this.start_timestamp <= this.timeRange[0]) {
                    this.start_timestamp = this.timeRange[0];
                }
                if (this.start_timestamp >= this.timeRange[1] - this.hours_per_ruler * 60 * 60 * 1000) {
                    this.start_timestamp = this.timeRange[1] - this.hours_per_ruler * 60 * 60 * 1000;
                }
                this.init(this.start_timestamp, this.timeCell, true);
                this.g_isMousemove = true;
                this.g_mousedownCursor = pos_x;
            } else {
                //hover
                let time = this.start_timestamp + pos_x / px_per_ms;
                this.init(this.start_timestamp, this.timeCell, true);
                this.drawLine(pos_x, 0, pos_x, 50, 'rgb(194, 202, 215)', 1);
                this.ctx.fillStyle = 'rgb(194, 202, 215)';
                this.ctx.fillText(this.changeTime(time), pos_x - 50, 60);
            }
        },
        /**
         * 拖动/点击 mouseup事件
         */
        mouseupFunc(e) {
            if (this.g_isMousemove) { //拖动 事件
                this.g_isMousemove = false;
                this.g_isMousedown = false;
                this.returnTime = this.start_timestamp + (this.hours_per_ruler * 3600 * 1000) / 2;
            } else { // click 事件
                this.g_isMousedown = false;
                let posx = this.get_cursor_x_position(e); //鼠标距离 px
                let ms_per_px = (this.zoom * 3600 * 1000) / this.canvasW; // ms/px
                let newStartTime = this.start_timestamp + posx * ms_per_px;

                if (this.isOverTimeRange(newStartTime)) {
                    this.$message.error('超出时间范围!');
                    return;
                }
                this.returnTime = this.start_timestamp + posx * ms_per_px;
                this.set_time_to_middle(this.returnTime);
                debugger;
            }
        },
        isOverTimeRange(time) {
            if (!this.timeRange.length) {
                return;
            }
            return time >= this.timeRange[1] || time <= this.timeRange[0];
        },
        /**
         * 鼠标移出隐藏时间 mouseout事件
         * @param {*} e
         */
        mouseoutFunc() {
            this.g_isMousemove = false;
            this.g_isMousedown = false;
            this.clearCanvas();
            this.init(this.start_timestamp, this.timeCell, true);
        },

        /**
         * 滚轮放大缩小，以时间轴中心为准 mousewheel事件
         */
        mousewheelFunc(event) {
            if (event && event.preventDefault) {
                event.preventDefault();
            } else {
                window.event.returnValue = false;
                return false;
            }

            let e = window.event || event;
            let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
            let middle_time = this.start_timestamp + (this.hours_per_ruler * 3600 * 1000) / 2; //ms 记住当前中间的时间
            if (delta < 0) {
                this.zoom = this.zoom + 4;
                if (this.zoom >= 24) {
                    this.zoom = 24;//放大最大24小时
                }
                this.hours_per_ruler = this.zoom;
            } else if (delta > 0) {// 放大
                this.zoom = this.zoom - 4;
                if (this.zoom <= 1) {
                    this.zoom = 1;//缩小最小1小时
                }
                this.hours_per_ruler = this.zoom;
            }

            this.clearCanvas();
            this.start_timestamp = middle_time - (this.hours_per_ruler * 3600 * 1000) / 2; //start_timestamp = 当前中间的时间 - zoom/2
            this.init(this.start_timestamp, this.timeCell, true);
        },

        /**
         * 获取鼠标posx
         * @param {*} e
         */
        get_cursor_x_position(e) {
            return e ? e.offsetX : Window.event.offsetX;
        },
        /**
         * 返回时间轴上刻度的时间
         * @param {*} datetime new Date 格式
         */
        graduation_title(datetime) {
            return dayjs(datetime).format('HH:mm');
        },

        /**
         * 返回 2018-01-01 10:00:00 格式时间
         * @param {*} time
         */
        changeTime(time) {
            if (!time) return;
            return dayjs(time).format('YYYY/MM/DD HH:mm:ss');
        },

        /**
         * 左侧开始时间的偏移，返回单位ms
         * @param {*} timestamp
         * @param {*} step
         */
        ms_to_next_step(timestamp, step) {
            let remainder = timestamp % step;
            return remainder ? step - remainder : 0;
        },
        /**
         * 设置时间，让这个时间点跳到中间红线处
         *  @param {*} time 单位ms
         */
        set_time_to_middle(time) {
            this.clearCanvas();
            this.start_timestamp = time - (this.hours_per_ruler * 60 * 60 * 1000) / 2;
            this.init(this.start_timestamp, this.timeCell, true);
        },
        /**
         * 返回点击或者拖动的时间点
         */
        returnMouseupTime(callback) {
            if (this.returnTime != null) {
                if (callback) {
                    callback(this.returnTime);
                }
            }
        },
        /**
         * 清除canvas 每次重新绘制需要先清除
         */
        clearCanvas() {
            this.ctx.clearRect(0, 0, this.width, this.height);
        }
    }
};
</script>

<style lang="less"
       scoped>
.time-line {
    width: 100%;
    text-align: center;
}
</style>
