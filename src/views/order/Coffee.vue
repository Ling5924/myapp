<template>
    <div>
        <van-grid column-num="1" direction="horizontal"  class="homelist" >
            <van-grid-item class="item"  v-for="item in homelist" :key="item.id" :to="{ name: 'goodsinfo', params: { id: item.pid }}">
                <van-image :src="item.smallImg" class="img1" />
                <div class="t3">
                    <p class="zhname">{{ item.name }}</p>
                    <p class="enname">{{ item.enname }}</p>
                </div>
                <p class="pic t4">￥{{ item.price }}</p>
            </van-grid-item>
        </van-grid>
    </div>
</template>
<script>
export default {
    data() {
        return {
            homelist: []
        }
    },
    created() {
        this.axios({
            method: 'get',
            url: 'http://www.kangliuyong.com:10002/typeProducts',
            params: {
                appkey: 'U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=',
                key: 'type',
                value: 'coffee'
            }
        }).then(res => {
            this.homelist = res.data.result
           //  console.log(res.data.result);
        })
    }
}
</script>