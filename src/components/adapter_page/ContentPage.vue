<!--ContentPage-->
<template>
    <div ref="topContent"
         :style="{ width: `${width}px`, height: `${height}px`}"
         class="top-content">
        <card v-for="(coord, index) in coordArray"
              :key="index"
              :coord="coord"
              :scale="scale"
              :class="{ 'rotate' : coord[2]}">
        </card>
    </div>
</template>

<script>
import { coordArray } from '../../util/constant';
import Card from './Card';

export default {
    name: 'ContentPage',
    components: { Card },
    data() {
        return {
            scale: 1,
            height: 1920,
            width: 756
        };
    },
    computed: {
        coordArray() {
            return coordArray;
        },
        defaultWidth() {
            return 1920;
        },
        defaultHeight() {
            return 1080 * 0.7;
        }
    },
    mounted() {
        this.resize();
        window.addEventListener('resize', this.resize);
    },
    methods: {
        /**
         * 1920 * 1080 是标准尺寸
         * parentWidth  parentHeight 是当前尺寸
         * - 如果当前宽高比大于标准，则保持高不变，变化宽度
         * - 如果当前宽高比低于标准，则保持宽不变，变化高度
         */
        resize() {
            let parentWidth = this.$refs.topContent.parentNode.offsetWidth;
            let parentHeight = this.$refs.topContent.parentNode.offsetHeight;
            let parentRate = parentWidth / parentHeight;
            if (parentRate > (this.defaultWidth / this.defaultHeight)) {
                this.scale = parentHeight / this.defaultHeight;
                this.height = parentHeight;
                this.width = this.scale * this.defaultWidth;
            } else {
                this.scale = parentWidth / this.defaultWidth;
                this.height = this.scale * this.defaultHeight;
                this.width = parentWidth;
            }
        }
    }
};
</script>

<style lang="less"
       scoped>
.top-content {
    position: relative;

    .rotate {
        transform: rotateX(180deg);
    }
}
</style>
