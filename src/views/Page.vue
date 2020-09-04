<!--Page-->
<template>
    <div class="page-wrapper">
        <div class="top-area">
            <div class="top-content"
                 :style="{height: `${height}px`,width: `${width}px`,marginLeft: `${marginLeft}px`, marginTop: `${marginTop}px`}">
                <card v-for="(coord, index) in coordArray"
                      :key="index"
                      :scale="scale"
                      :coord="coord">
                </card>
            </div>
        </div>
        <div class="bottom-area"></div>
    </div>
</template>

<script>
import Card from '../components/page/Card';

export default {
    name: 'Page',
    components: { Card },
    // components: {},
    // directives: {},
    // filters: {},
    // model: {},
    // props: [],
    data() {
        return {
            scale: 1,
            coordArray: [
                [
                    80,
                    90
                ],
                [
                    520,
                    90
                ],
                [
                    960,
                    90
                ],
                [
                    80,
                    330
                ],
                [
                    520,
                    330
                ],
                [
                    960,
                    330
                ],
                [
                    1400,
                    210
                ]
            ]
        };
    },
    computed: {
        height() {
            return 240 * 2 * this.scale + this.coordArray[0][1] * this.scale;
        },
        width() {
            return 440 * 4 * this.scale + this.coordArray[0][0] * this.scale;
        },
        marginLeft() {
            return -this.coordArray[0][0] * this.scale;
        },
        marginTop() {
            return -this.coordArray[0][1] * this.scale;
        }
    },
    watch: {
        scale(val) {
            this.resize();
        }
    },
    mounted() {
        this.resize();
        window.addEventListener('resize', this.resize);
    },
    // created() {},
    // activated() {},
    // beforeDestroy() {},
    // destroyed() {},
    methods: {
        resize() {
            this.$nextTick(() => {
                const clientWidth = document.documentElement.clientWidth;
                this.scale = clientWidth / 1920;
            });
        }
    }
};
</script>

<style lang="less"
       scoped>
.page-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    min-width: 1366px;

    .top-area {
        height: 70%;
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .top-content {
        position: relative;
        overflow: hidden;
    }

    .bottom-area {
        height: 30%;
        width: 100%;
        background-color: gainsboro;
    }
}
</style>
