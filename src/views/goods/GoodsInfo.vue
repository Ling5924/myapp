<template>
    <div>
        <van-image :src="homelist.large_img" />
        <div class="goods_cont">
            <div class="goods_head">
                <div>
                    <p class="goods_head_tx1">{{ homelist.name }}</p>
                    <p class="goods_head_tx2">{{ homelist.enname }}</p>
                </div>
                <div style="display: flex;align-items: center;">
                    <p class="goods_head_tx3">￥{{ homelist.price }}</p>
                </div>
            </div>
            <div class="goods_btn">
                <p>{{ homelist.tem_desc }}</p>
                <button v-for="item in temlist">{{ item }}</button>
            </div>
            <div class="goods_btn">
                <p>{{ homelist.sugar_desc }}</p>
                <button v-for="item in sugarlist">{{ item }}</button>
            </div>
            <div class="goods_stepper ">
                <p>选择数量</p>
                <van-stepper v-model="value" theme="round" button-size="22" />
            </div>
            <div class="goods_footer">
                <h3>商品描述</h3>
                <p>
                    1.{{ (homelist.desc || '').split("。")[0] }}
                </p>
                <p>
                    2.{{ (homelist.desc || '').split("。")[1] }}
                </p>
                <p>
                    3.{{ (homelist.desc || '').split("。")[2] }}
                </p>
            </div>
        </div>
        <van-goods-action>
            <van-goods-action-icon icon="bag" text="购物袋" />
            <van-goods-action-icon icon="like"  text="已收藏" />
            <van-goods-action-button color="#6a91ec" type="warning" text="加入购物袋" />
            <van-goods-action-button color="#0c34ba" type="danger" text="立即购买" />
        </van-goods-action>
    </div>
</template>
<script>
export default {
    props: ['id'],
    data() {
        return {
            homelist: {},
            sugarlist: {},
            temlist: {},
            value: ''
        }
    },
    created() {
        this.getGoodsInfo()
    },
    methods: {
        getGoodsInfo() {
            let params = { appkey: 'U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=', pid: this.id }
          //  window.console.log(this.id)
            this.axios({
                method: 'get',
                url: 'http://www.kangliuyong.com:10002/productDetail',
                params: params
            }).then(res => {
                this.homelist = res.data.result[0]
              //  console.log(res.data.result[0]);
                this.sugarlist = this.homelist.sugar.split("/");
                this.temlist = this.homelist.tem.split("/");
            })
        }
    }

}
</script>
<style>
.goods_cont {
    width: 95%;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    top: 300px;
    left: 2.5%;
}

.goods_cont button {
    width: 60px;
    height: 25px;
    border-radius: 25px;
    border: none;
    background-color: rgb(233, 233, 231);
    margin-right: 10px;
}

.goods_head {
    display: flex;
    justify-content: space-between;
    padding: 20px;
}

.goods_head_tx1 {
    font-size: 18px;
    font-weight: bolder;
    color: #646566;
}

.goods_head_tx2 {
    font-size: 12px;
    color: #8c8e91;
}

.goods_head_tx3 {
    font-size: 16px;
    color: #0C34BA;
    font-weight: bold;
}

.goods_btn {
    display: flex;
    padding-left: 20px;
    margin-bottom: 10px;
    font-size: 12px;
}

.goods_btn p {
    font-size: 14px;
    margin-right: 40px;
    width: 40px;
}

.goods_stepper {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin: 0 20px 0 20px;
    padding: 20px 0 20px 0;
}

.goods_stepper p {
    font-size: 14px;
}

.goods_footer {
    margin: 20px;
}

.goods_footer p {
    margin-top: 10px;
    font-size: 12px;
    color: rgb(143, 141, 141);
}
.goods_btn :nth-child(2){
    background-color: #0C34BA;
    color: white;
}
</style>

