<!--VedioTest-->
<template>
    <div class="video-wrapper">
        <!--视频组件-->
        <div class="video-body">
            <video-component ref="video"
                             :device-id="11"
                             service-ip="10.88.1.80"
                             :service-port="30886"
                             :show-log="true"
                             :timeout="0.1"
                             @changePlayState="playStatusEvent">
            </video-component>
            <!--播放失败-->
            <div v-if="!playStatus"
                 class="play-failed">
                <div class="failed-content">
                    <img src="../assets/image/fail.png"
                         alt=""
                         class="failed-img">
                    <span class="failed-text">播放失败</span>
                </div>
            </div>
            <!--loading-->
            <div v-if="videoLoading"
                 v-segma-loading="videoLoading"
                 :segma-loading-background="bgColor"
                 class="videos-loading">
            </div>
        </div>
    </div>
</template>

<script>
import { VideoComponent, playErrors, playStatus } from '@segma/video-component';

export default {
    name: 'TestDemo',
    components: { VideoComponent },
    data() {
        return {
            //播放状态
            playStatus: true,
            //视频加载中
            videoLoading: true,
            bgColor: '#ffffff'
        };
    },
    methods: {
        //播放状态
        playStatusEvent(status, errorState) {
            let errorStatusArr = [playStatus.ERROR];
            let loadingStatusArr = [
                playStatus.INITIALIZED,
                playStatus.LOADING
            ];
            this.videoLoading = loadingStatusArr.includes(status);
            this.playStatus = !errorStatusArr.includes(status);
        }
    }
};
</script>

<style lang="less"
       scoped>

.video-body {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    background: rgba(245, 246, 250, 1);
    justify-content: center;
    align-items: center;

    .base-video-wrapper {
        width: 100%;
        height: 100%;
    }

    //视频加载中
    .videos-loading {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
    }

    .play-failed {
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #ffffff;
        user-select: none;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        font-size: 24px;
        color: #aaafb5;


        .failed-content {
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
            transform: scale(0.6);
            flex-direction: column;

        }

        .failed-img {
            margin-bottom: 10px;
        }
    }
}
</style>
