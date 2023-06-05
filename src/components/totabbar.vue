<template>
    <div>
        <van-search shape="round"  placeholder="请输入商品名称" />
        <van-tabbar class="totabbar" v-model="active"  route :fixed="false" :placeholder="true">
            <van-tabbar-item to="/category/recommend">
                <span>推荐</span>
                <template #icon="props">
                    <van-image :src="props.active ? icon.active : icon.inactive"  />
                </template>
            </van-tabbar-item>
            <van-tabbar-item to="/category/latte">
                <span>拿铁</span>
                <template #icon="props">
                    <van-image :src="props.active ? icon.active2 : icon.inactive2" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item to="/category/coffee">
                <span>咖啡</span>
                <template #icon="props">
                    <van-image :src="props.active ? icon.active3 : icon.inactive3" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item to="/category/renaice">
                <span>瑞纳冰</span>
                <template #icon="props">
                    <van-image :src="props.active ? icon.active4 : icon.inactive4" />
                </template>
            </van-tabbar-item>
        </van-tabbar>
        <router-view />
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: 0,
            icon: {
                active: require("../assets/img/icons_21.gif"),
                inactive: require("../assets/img/icons_09.gif"),
                active2: require("../assets/img/icons_19.gif"),
                inactive2: require("../assets/img/icons_05.gif"),
                active3: require("../assets/img/icons_18.gif"),
                inactive3: require("../assets/img/icons_03.gif"),
                active4: require("../assets/img/icons_20.gif"),
                inactive4: require("../assets/img/icons_07.gif"),
            },
        };
    },
};
</script>
<style>
    .totabbar img{
        width: 35px;
        height: 35px;
    }
</style>