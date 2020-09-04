<!--Card-->
<template>
    <div class="card-wrapper"
         :style="style">
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
            return 440 * this.scale;
        },
        height() {
            return 240 * this.scale;
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

    &:hover {
        .image1 {
            opacity: 0;
        }

        .image2 {
            opacity: 1;
        }
    }

    img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .image2 {
        opacity: 0;
    }
}
</style>
