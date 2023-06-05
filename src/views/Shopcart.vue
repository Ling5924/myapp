<template>
    <div id="shopcart">
        <van-image width="100%" fit="contain" :src="img" />
        <van-grid column-num="1" direction="horizontal" class="homelist">
            <van-grid-item class="item" v-for="item in homelist" :key="item.id">
                <van-checkbox v-model="checked" class="check"></van-checkbox>
                <van-image :src="item.smallImg" class="img1" />
                <div class="t3">
                    <p class="zhname">{{ item.name }}</p>
                    <p class="enname">{{ item.enname }}</p>
                    <p class="pic ">￥{{ item.price }}</p>
                </div>
                <van-stepper v-model="value" theme="round" button-size="22" class="t4" />
            </van-grid-item>
        </van-grid>
        <div class="fixedbox">
            <van-radio-group v-model="radio" class="fix_radio">
                <van-radio name="1">全选</van-radio>
            </van-radio-group>
            <div>
                <p>合计：</p>
                <p class="fixtx">￥18.00</p>
                <van-button color="#0C34BA " round >提交订单</van-button>
            </div>

        </div>
    </div>

</template>
<script>
export default {
    data() {
        return {
            checked: '',
            img: require("../assets/img/shopbag_bg.png"),
            homelist: '',
            value: '',
            radio: ''
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
            console.log(res);
        })
    },
}
</script>
<style>
#shopcart {
    margin-bottom: 50px;
}

#shopcart .check {
    width: 10%;
}

#shopcart .img1 {
    width: 20%;
    padding: 10px 10px 10px 0px;
}

#shopcart .t3 {
    width: 45%;
}

#shopcart .t4 {
    width: 25%;
}

.fixedbox {
    position: fixed;
    bottom: 49px;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: white;
    z-index: 99;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.fixedbox div {
    display: flex;
    align-items: center;
    margin-right: 20px;
}
.fix_radio{
    margin-left: 8px;
    font-size: 14px;
}
.fixedbox p{
    font-size: 14px;
}
.fixtx{
    color: #0C34BA ;
    margin-right: 10px;
    font-weight: bold;
}

</style>