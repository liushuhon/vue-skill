<!--ContentPage-->
<template>
    <div ref="topContent"
         :style="{ width: `${width}px`, height: `${height}px`}"
         class="top-content">
        <card v-for="(coord, index) in coordArray"
              :key="index"
              :coord="coord"
              :scale="scale">
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
    transform-origin: 50% 50% 0;
    background-color: #bbbbbb;
}
</style>
