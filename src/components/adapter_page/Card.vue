<!--Card-->
<template>
    <div class="card-wrapper"
         :style="style">
        <div :class="['image-content',{ 'rotate': coord[2]}]">
            <div class="text-area"
                 :style="`transform: scale(${scale})`">
                <div class="rate">50m/s</div>
                <div class="point">监控点</div>
                <div class="real-time">实时料流量</div>
                <div class="real-time-number">
                    <div class="number"> 12345.678</div>
                    <div class="text"> t/h</div>
                </div>
            </div>
            <img src="../../assets/bg.png"
                 :style="`transform: scale(${scale})`">
        </div>
        <div class="rate-content"
             :style="{left:`${212 * scale}px`}">
            <div :class="['text', { 'rate-rotate': coord[2]}]">50m/s</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        coord: {
            type: Array,
            default: [
                100,
                50
            ]
        },
        scale: {
            type: Number,
            default: 1
        }
    },
    // data() {},
    computed: {
        style() {
            return { left: `${this.xCoord}px`, top: `${this.yCoord}px`, width: `${this.width}px`, height: `${this.height}px` };
        },
        xCoord() {
            return this.coord[0] * this.scale;
        },
        yCoord() {
            return this.coord[1] * this.scale;
        },
        width() {
            return 425 * this.scale;
        },
        height() {
            return 228 * this.scale;
        }
    }
};
</script>

<style lang="less"
       scoped>
.card-wrapper {
    position: absolute;
    box-sizing: border-box;
    background-image: url("../../assets/2_0000.png");
    background-position-x: center;
    background-position-y: center;
    background-size: 100% 100%;

    .image-content {
        width: 100%;
        height: 100%;
        position: relative;
        transform-origin: 0 0
    }

    .rate-content {
        position: absolute;
        z-index: 20;
        bottom: 10px;
        color: white;
        left: 166px;
        background: #ecbf5a;
        padding: 0 5px;
        transform: translateX(-50%);

        .rate-rotate {
            transform: rotateX(180deg);
        }

    }

    &:hover {
        background-image: url("../../assets/未标题-3.gif");
    }

    img {
        position: absolute;
        left: 5px;
        top: -5px;
        transform-origin: 0 0;
    }

    .rotate {
        transform: rotateX(180deg) translate(0px, -62%);
    }

    .text-area {
        width: 235px;
        height: 142px;
        transform-origin: 0 0;
        position: relative;
        z-index: 10;

        .rate {
            line-height: 20px;
            text-align: right;
            font-size: 19px;
        }

        .point {
            color: #ffffff;
            font-size: 19px;
            line-height: 35px;
        }

        .real-time {
            font-size: 19px;
            color: #ffffff;
            text-align: left;
            padding-left: 60px;
            line-height: 45px;
        }

        .real-time-number {
            color: #ecbf5a;
            display: flex;
            padding-left: 57px;
            font-size: 24px;
            font-weight: bold;
        }
    }
}
</style>
