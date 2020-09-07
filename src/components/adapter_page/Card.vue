<!--Card-->
<template>
    <div class="card-wrapper"
         :style="style">
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

    &:hover {
        background-image: url("../../assets/未标题-3.gif");
    }

    img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
}
</style>
