<template>
    <div id="home">
        <van-row class="header">
            <van-col span="4">
                <p class="t1">下午好</p>
            </van-col>
            <van-col span="6">
                <p class="t2">{{ msg }}</p>
            </van-col>
            <van-col span="14">
                <van-search placeholder="请输入商品名称" shape="round" />
            </van-col>
        </van-row>
        <banner></banner>
        <div class="context">
            <div>
                <p>热卖推荐</p>
            </div>
        </div>
        <van-grid column-num="2" :center="false" class="homelist">
            <van-grid-item class="item" v-for="item in homelist" :key="item.id" :to="{ name: 'goodsinfo', params: { id: item.pid }}">
                <span>hot</span>
                <van-image radius="10" :src="item.smallImg" />
                <p class="zhname">{{ item.name }}</p>
                <p class="enname">{{ item.enname }}</p>
                <p class="pic">￥{{ item.price }}</p>
            </van-grid-item>
        </van-grid>
    </div>
</template>
<script>
import banner from '../components/Banner.vue'
export default {
    data() {
        return {
            msg: 'Allen',
            homelist: []
        }
    },
    methods: {

    },
    created() {
        this.axios({
            method: 'get',
            url: 'http://www.kangliuyong.com:10002/typeProducts',
            params: {
                appkey: 'U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=',
                key: 'isHot',
                value: '1'
            }
        }).then(res => {
            this.homelist = res.data.result
           // console.log(res.data.result);
        })
    },
    components: {
        banner
    }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
}

#home {
    width: 100%;
    padding:0 10px 0 10px;
    box-sizing: border-box;
}

.header .t1 {
    
    color: #646566 ;
}

.header .t2 {
    color: #0C34BA;
}

.header p {
    line-height: 50px;
    font-size: 16px;
    font-weight: bold;
}

.context {
    width: 100%;
    height: 80px;
    position: relative;
}

.context div {
    width: 25%;
    height: 40px;
    background-color: #0C34BA;
    position: absolute;
    top: 20px;
    left: 0;
    border-radius: 0 20px 0 0;
}

.context div p {
    color: white;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
}

.zhname {
    font-size: 16px;
    margin-top: 10px;
}

.enname {
    font-size: 14px;
    color: rgb(145, 139, 139);
    margin-top: 5px;
}

.pic {
    color: #0C34BA;
    font-size: 16px;
    font-weight: bold;
    margin-top: 8px;
}
.homelist .item span{
    position: absolute;
    top: 16.5px;
    left: 15px;
    background-color:#0C34BA ;
    z-index: 99;
    color: white;
    font-size: 12px;
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    border-radius:0 0 5px 5px ;
}
</style>