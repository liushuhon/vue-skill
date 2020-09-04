<!--AdapterPage-->
<template>
    <div class="adapter-page">
        <div ref="topArea"
             class="top-area">
            <content-page></content-page>
        </div>
        <div class="bottom-area"></div>
    </div>
</template>

<script>
import ContentPage from '../components/adapter_page/ContentPage';

export default {
    name: 'AdapterPage',
    components: { ContentPage },
    // components: {},
    // directives: {},
    // filters: {},
    // model: {},
    // props: [],
    data() {
        return {
        };
    },
    computed: {},
    // watch: {},
    mounted() {
    }
    // created() {},
    // activated() {},
    // beforeDestroy() {},
    // destroyed() {},
    // methods: {},
};
</script>

<style lang="less"
       scoped>
.adapter-page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .top-area {
        height: 70%;
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .bottom-area {
        height: 30%;
        width: 100%;
        background-color: gainsboro;
    }
}
</style>
