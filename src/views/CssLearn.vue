<!--CssLearn-->
<template>
    <div class="css-layout">
        <div class="button">okok</div>
        <div class="button cancel">cancel</div>
        <div class="button ok">okok
        </div>
        <ul>
            <li>11</li>
            <li>11</li>
            <li>11</li>
            <li>11</li>
        </ul>
        <!--<div class="image"></div>-->
    </div>
</template>

<script>
export default {
    name: 'CssLearn'
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
.css-layout {
    margin: 0 auto;
    height: 700px;
    width: 500px;
}

.button {
    padding: .3em .8em;
    border: 1px solid rgba(0, 0, 0, .1);
    background: #5588aa linear-gradient(hsla(0, 0%, 100%, .2), transparent);
    border-radius: .2em;
    color: white;
    box-shadow: 0 .05em .25px rgba(0, 0, 0, .5);
    text-shadow: 0 -.05em .05px rgba(0, 0, 0, .5);
    font-size: 300%;
    line-height: 1.5;

    &.cancel {
        background-color: #cc0000;
    }


    &.ok {
        background-color: #66bb00;
    }
}

.image {
    width: 100%;
    height: 100%;
    background-image: url("../assets/2_0000.png");
    background-repeat: no-repeat;
    background-blend-mode: overlay;
    position: relative;

    &::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: red;
    }
}
ul {
    --accent-color: purple;
}

ol {
    --accent-color: white;
}

li {
    background-color: var(--accent-color);
    margin: 10px;
}
</style>
