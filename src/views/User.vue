<template>
    <div id="user">
        <van-image src="https://img01.yzcdn.cn/vant/cat.jpeg" />
        <div class="userbox">
            <div class="user_img">
                <van-image round :src="img" />
            </div>
            <div class="user_tx">
                <p>Allen</p>
                <p>这家伙很懒什么都留下！！！</p>
            </div>
        </div>
        <div class="user_cell">
            <van-cell title="个人资料" is-link />
            <van-cell title="我的订单" is-link />
            <van-cell title="我的收藏" is-link />
            <van-cell title="地址管理" is-link />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            img:require("../assets/img/下载.png")
        }
    },
    methods: {

    }
}
</script>
<style>
#user {
    position: relative;
}

.userbox {
    position: absolute;
    display: flex;
    top: 200px;
    left: 0;
    width: 100%;
    z-index: 10;
    height: 120px;
    background-color: white;
    opacity: 0.7;
    margin: 0 auto;
    border-radius: 10px;
}
.user_img{
    width: 80px;
    height: 80px;
    margin: 10px;
    border-radius: 80px;
    display: flex;
    flex-direction: row;
    justify-content: center;

}

.user_tx{
    display: flex;
    flex-direction: column;
}
.user_tx p{
    margin: 10px;   
}
.user_tx  :first-child{
    font-size: 20px;
    color: #0C34BA;
}
.user_tx  :last-child{
    font-size: 16px;
    color: rgb(162, 154, 154);
}
.user_cell{
    margin-top: 60px;
}
</style>