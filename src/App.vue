<template>
  <div class="container">
    <van-nav-bar fixed :title="$route.meta.title" left-text="返回" left-arrow @click-left="goBack" v-show="showBack" :placeholder="true" />
   <tabbar ></tabbar>
  </div>
</template>
<script>
import tabbar from './components/tabbar.vue'
export default {
  data() {
    return {
      showBack: false,
    }
  },
  created () {
    this.showBack = this.$route.path !== '/home'&& this.$route.path !== '/category'&& this.$route.path !== '/category/recommend'
    && this.$route.path !== '/category/coffee'&& this.$route.path !== '/category/latte'&& this.$route.path !== '/category/renaice';
  },
  watch: {
    '$route.path' (newVal) {
      this.showBack = newVal !== '/home'&& newVal !== '/category'&&newVal !== '/category/recommend'
      &&newVal !== '/category/coffee'&&newVal !== '/category/latte'&&newVal !== '/category/renaice';
      
    },
    
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
},
  components: {
    tabbar
  }
}
</script>
<style>
  body{
    background-color: #f0f2f5 ;
  }
</style>