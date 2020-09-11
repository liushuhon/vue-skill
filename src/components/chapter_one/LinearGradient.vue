<!--LinearGradient-->
<template>
    <div class="LinearGradient">
        <div class="horizontal-line"></div>
        <div class="vertical-line"></div>
        <div class="oblique-line"></div>
        <div class="repeat-line"></div>
        <div class="close-color-line"></div>
        <div class="close-color-line2">sss</div>
        <div class="grid-wrapper">
            <div class="demo1"></div>
            <div class="demo2"></div>
            <div class="demo3"></div>
            <div class="demo4"></div>
            <div class="demo5"></div>
        </div>
        <div class="random-demo"></div>

        <div class="shape-demo">
            <div class="demo1">
                you are my sunshine
            </div>
            <div class="shape-demo2">

                you are my sunshine
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LinearGradient'
};
</script>

<style lang="less"
       scoped>
.box {
    height: 100px;
    width: 100%;
}


.shape-demo {
    .box();

    .demo1 {
        background: linear-gradient(-135deg, transparent 15px, #5588aa 0) top right, linear-gradient(45deg, transparent 15px, #5588aa 0) bottom left, linear-gradient(135deg, transparent 15px, #5588aa 0) top left, linear-gradient(-45deg, transparent 15px, #5588aa 0) bottom right;
        background-size: 50% 50%;
        background-repeat: no-repeat;
        .box();
    }

    .shape-demo2 {
        transform: perspective(.5em) rotateX(5deg);
        .box();
    }
}
.random-demo {
    background: hsla(20%, 40%, 90%);
    background-image: linear-gradient(90deg, #ffbb33 11px, transparent 0),
    linear-gradient(90deg, #aabb44 23px, transparent 0),
    linear-gradient(90deg, #665555 41px, transparent 0);
    background-size: 41px 100%, 61px 100%, 83px 100%;
    background-repeat: repeat;
    .box();
}

.grid-wrapper {
    margin-top: 20px;
    display: flex;
    flex-direction: column-reverse;
    overflow: auto;

    .demo1 {
        background-image: linear-gradient(90deg, rgba(200, 0, 0, .5) 50%, transparent 0),
        linear-gradient(rgba(200, 0, 0, .5) 50%, transparent 0);
        background-size: 40px 40px;
        .box();
    }

    .demo2 {
        background: #5588aa;
        background-image: linear-gradient(white 1px, transparent 0), linear-gradient(90deg, white 1px, transparent 0);
        background-size: 40px 40px;
        .box();
    }

    .demo3 {
        background: #665555;
        background-image: radial-gradient(tan 30%, transparent 0);
        background-size: 30px 30px;
        .box();
    }

    .demo4 {
        background: #665555;
        background-image: radial-gradient(tan 30%, transparent 0), radial-gradient(tan 30%, transparent 0);
        background-size: 30px 30px;
        background-position: 0 0, 15px 15px;
        .box();

    }

    .demo5 {
        background: #eeeeee url('data:image/svg+xml,');
    }
}



.shape-demo {
    .box();

    .demo1 {
        background: linear-gradient(-135deg, transparent 15px, #5588aa 0) top right, linear-gradient(45deg, transparent 15px, #5588aa 0) bottom left, linear-gradient(135deg, transparent 15px, #5588aa 0) top left, linear-gradient(-45deg, transparent 15px, #5588aa 0) bottom right;
        background-size: 50% 50%;
        background-repeat: no-repeat;
        .box();
    }

    .demo2 {
        .box();
        transform: perspective(.5em) rotateX(5deg);
    }
}
.LinearGradient {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;

    .horizontal-line {
        background: linear-gradient(#ffbb33 33.3%, #5588aa 0, #5588aa 66.6%, #f56c6c 0);
        background-size: 100% 30px;
        .box();
    }

    .vertical-line {
        background: linear-gradient(to right, #ffbb33 33.3%, #5588aa 0, #5588aa 66.6%, #f56c6c 0);
        background-size: 30px 100%;
        .box();
    }

    .oblique-line {
        background: linear-gradient(45deg, #ffbb33 25%, #5588aa 0, #5588aa 50%, #ffbb33 0, #ffbb33 75%, #5588aa 0);
        background-size: 42.42px 42.42px;
        .box();
    }

    .repeat-line {
        background: repeating-linear-gradient(60deg, #ffbb33, #5588aa 30px);
        .box();
    }

    .close-color-line {
        background: repeating-linear-gradient(30deg, #7799bb, #7799bb 15px, #5588aa 0, #5588aa 30px);
        .box();
    }

    /*更灵活的同色系条纹*/

    .close-color-line2 {
        background: #5588aa;
        background-image: repeating-linear-gradient(30deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .1) 15px, transparent 0, transparent 30px);
        .box();
    }

}

</style>
