<!--Filter-->
<template>
    <div class="filter-wrapper">
        <div class="main">
        </div>
        <div>lalalalall</div>
        <div>lalalalall</div>
        <div>lalalalall</div>
        <div>lalalalall</div>
    </div>
</template>

<script>
export default {
    name: 'FilterWrapper'
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
.filter-wrapper {
    width: 500px;
    height: 500px;
    margin: 0 auto;
    background: url("../../assets/hc.jpg")  0 / cover fixed;
    color: white;
}

.main {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    background: hsla(0, 0%, 100%, .3);
    color: white;
}

/*.filter-wrapper::before {
    background: url("../../assets/hc.jpg") 0 / cover fixed;
}*/

.main::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 0, 0, .5);
    background: url("../../assets/hc.jpg")  0 / cover fixed;
    filter: blur(20px);
    margin: -30px;
}

</style>
