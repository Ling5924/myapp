<template>
    <!-- 首页的轮播图 -->
    <div class="home-banner-box">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in bannerList" :key="item.pid" :to="{ name: 'goodsinfo', params: { id: item.pid }}">
                <img style="width: 100%;" :src="item.bannerImg" alt="">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bannerList: [

            ]
        }
    },
    methods: {

    },
    created() {
        this.axios({
            method: 'get',
            url: 'http://www.kangliuyong.com:10002/banner',
            params: { appkey: 'U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=' }
        }).then(result => {
            if (result.data.code == 300) {
                this.bannerList = result.data.result
            }

        })
    }
}
</script>
<style>
.home-banner-box .my-swipe {
    border-radius: 10px;
}
</style>

