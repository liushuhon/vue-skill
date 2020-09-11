<!--01半透明边框-->
<template>
    <div class="box">
        <div class="inner-box"></div>
    </div>
</template>

<script>
export default {
    name: 'Border'
    // components: {},
    // directives: {},
    // filters: {},
    // model: {},
    // props: [],
    // data() {},
    // computed: {},
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
.box {
    width: 100%;
    height: 100%;
    background-color: greenyellow;
    display: flex;
    align-items: center;
    justify-content: center;

    .inner-box {
        width: 50%;
        height: 50%;
        background-color: white;
        border: 10px solid hsla(0, 0%, 100%, .5);
        background-clip: padding-box;
        box-sizing: border-box;
    }
}
</style>
