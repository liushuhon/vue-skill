<!--Background-->
<template>
    <div class="background">
        <div class="text">{{text}}</div>
        <div class="circle"></div>
        <div class="rectangle">
            <span>{{text}}</span>
        </div>
        <div class="picture">
            <img src="../../assets/image.jpg">
        </div>
        <div class="box">
            <p>野火烧不尽</p>
            <p>春风吹又生</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Background',
    // components: {},
    // directives: {},
    // filters: {},
    // model: {},
    // props: [],
    // data() {},
    computed: {
        text() {
            return 'tck is edgm\'s jungle';
        }
    }
    // watch: {},
    // mounted() {},
    // created() {},
    // activated() {},
    // beforeDestroy() {},
    // destroyed() {},
    // methods: {},
};
</script>
<style lang="less"
       scoped>
.background {
    width: 100%;
    height: 100%;
    background-image: url("../../assets/image.jpg");
    background-repeat: no-repeat;
    padding: 10px;
    background-color: pink;
    /*background-position: right 10px bottom 10px;*/
    background-position: calc(100% - 20px) calc(100% - 10px);

    .text {
        background-color: #f56c6c;
        line-height: 2;
        font-size: 2em;
        border-radius: .8em;
        padding: 1em;
        box-shadow: 0 0 0 .4em #665555;
        outline: .4em solid #665555;
    }

    .circle {
        background-color: #f56c6c;
        height: 100px;
        width: 200px;
        border-radius: 50% /100% 100% 0 0;
        margin-top: 20px;
    }

    .rectangle {
        width: 200px;
        height: 100px;
        margin-top: 20px;
        font-size: 2em;
        position: relative;
        z-index: 0;

        &::after {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            content: '';
            background-color: #f56c6c;
            transform: skew(-45deg);
            z-index: -1;
        }
    }

    .picture {
        width: 70px;
        transform: rotate(45deg);
        overflow: hidden;
    }

    .picture > img {
        max-width: 100%;
        transform: rotate(-45deg) scale(1.42);
    }

    .box {
        background: linear-gradient(-45deg, transparent 15px, #58a 0);
    }
}
</style>
