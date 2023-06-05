<template>
    <div >
        <router-view />
        <van-tabbar v-show="showBack1" v-model="active" route :placeholder="true" z-index="99">
            <van-tabbar-item to="/home">
                <span>首页</span>
                <template #icon="props">
                    <img :src="props.active ? icon.active : icon.inactive" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item to="/category">
                <span>菜单</span>
                <template #icon="props">
                    <img :src="props.active ? icon.active2 : icon.inactive2" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item to="/shopcart">
                <span>购物袋</span>
                <template #icon="props">
                    <img :src="props.active ? icon.active3 : icon.inactive3" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item to="/user">
                <span>我的</span>
                <template #icon="props">
                    <img :src="props.active ? icon.active4 : icon.inactive4" />
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: 0,
            icon: {
                active: require("../assets/img/home_active.png"),
                inactive: require("../assets/img/home.png"),
                active2: require("../assets/img/menu_active.png"),
                inactive2: require("../assets/img/menu.png"),
                active3: require("../assets/img/shopbag_active.png"),
                inactive3: require("../assets/img/shopbag.png"),
                active4: require("../assets/img/my_active.png"),
                inactive4: require("../assets/img/my.png"),
            },
            showBack1:false
        };
    },
    created(){
        this.showBack1=this.$route.path.substr(0,10)!=='/goodsinfo'
    },
    watch:{
        '$route.path'(newVal1){
      this.showBack1=newVal1.substr(0,10)!=='/goodsinfo'
    }
    }
};
</script>