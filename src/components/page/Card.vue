<!--Card.vue-->
<template>
    <div class="card-wrapper"
         :style="{ left: `${xCoord}px`, top: `${yCoord}px`, transform: `scale(${scale})`}">
        <p style="position: absolute;font-size: 20px">啦啦啦啦啦啦</p>
        <img src="../../assets/image.jpg">
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
    data() {
        return {
            // scale: ''
        };
    },
    // components: {},
    // directives: {},
    // filters: {},
    // model: {},
    // props: [],
    computed: {
        // scale() {
        //     const clientWidth = document.documentElement.clientWidth;
        //     return clientWidth / 1920;
        // },
        xCoord() {
            return this.coord[0] * this.scale;
        },
        yCoord() {
            return this.coord[1] * this.scale;
        },
        style() {
            if (this.coord.length) {
                return { marginTop: `${this.xCoord}px`, marginLeft: `${this.yCoord}`, transform: `scale${this.scale}` };
            } else {
                return {};
            }
        }
    }
};
</script>

<style lang="less"
       scoped>
.card-wrapper {
    width: 440px;
    height: 240px;
    position: absolute;
    box-sizing: border-box;
    transform-origin: 0 0;

    img {
        width: 100%;
        height: 100%;
    }
}
</style>
