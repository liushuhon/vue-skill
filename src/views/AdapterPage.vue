<!--AdapterPage-->
<template>
    <div class="adapter-page">
        <div class="menu">导航</div>
        <div class="content-wrapper">
            <div ref="topArea"
                 class="top-area">
                <content-page></content-page>
            </div>
            <div class="bottom-area"></div>
        </div>
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
        return {};
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
    background: #232633;

    .content-wrapper {
        height: calc(100% - 64px);

        .top-area {
            height: calc(2 * (100% / 3));
            width: 100%;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .bottom-area {
            height: calc(100% / 3);
            width: 100%;
            background-color: gainsboro;
        }
    }

    .menu {
        height: 64px;
        color: #ffffff;
        line-height: 64px;
        text-align: left;
    }

}
</style>
