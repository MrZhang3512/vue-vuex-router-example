<template>
  <div id="app">
      <el-container class="container">
         <el-header height="56px" class="header">
           <div class="title">
              {{title}}
           </div>
           </el-header>
      <el-container>
        <!-- 左侧导航 -->
         <el-aside width="200px" class="left-aside">
            <el-menu
                :router="true"
                default-active="2"
                class="el-menu-vertical-demo"
                @select="selectHandler">
                
                <el-menu-item index="/">
                  <i class="el-icon-s-home"></i>
                  <span slot="title">Dashboard</span>
                </el-menu-item>
              
                <el-menu-item index="/customer">
                  <i class="el-icon-user-solid"></i>
                  <span slot="title">顾客管理</span>
                </el-menu-item>
                <el-menu-item index="/r">
                  <i class="el-icon-menu"></i>
                  <span slot="title">栏目设置</span>
                </el-menu-item>
                <el-menu-item index="/product">
                  <i class="el-icon-mobile"></i>
                  <span slot="title">产品管理</span>
                </el-menu-item>
                <el-menu-item index="/order">
                  <i class="el-icon-shopping-cart-full"></i>
                  <span slot="title">订单管理</span>
                </el-menu-item>
              </el-menu>
                  </el-aside>
         <!-- /左侧导航 -->
         <!-- 右侧内容 -->
         <el-main>
           <!-- <Customer/> -->
          <!-- 面包屑组件-->
          <div class="b readcrumb">
            <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
            <el-breadcrumb-item>{{current.viewName}}</el-breadcrumb-item>
          </el-breadcrumb>
          </div>
          <!--  /面包屑组件-->
           <!-- 动态组件 -->
           <!-- <component v-bind:is="current.view"></component> -->
           <!-- 路由组件显示区域 -->
           <router-view/>
         </el-main>
         <!-- /右侧内容 -->
      </el-container>
</el-container>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  name: 'app',
  data(){
    return{
      title:"EJ家政服务平台",
  
    }
  },
  methods:{
    ...mapActions('app',['select']),
    ...mapActions('waiter',['findAllwaiters']),

    selectHandler(index){
   
      switch(index){
        case "/":
          this.select("1");
        break;
        case "/customer":
          this.select("2");
        break;
        case "/customer":
          this.select("3");
        break;
        case "/product":
          this.select("4");
        break;
        case "/order":
          this.select("5");
        break;
         
      }
    }
  },
  computed:{
    ...mapState('app',["current"])
  },
  created(){
    this.findAllwaiters();
  }
}
</script>

<style>
.container{
   position: absolute;
   width: 100%;
   top: 0;
   bottom: 0;
}
.container>.header{
  background: teal;
  color: #ffffff;
  line-height: 56px;
}
.container>.title{
  font-size: 18px;
  font-weight:bold; 
}
.container .left-aside{
  border-right: 1px solid #e6e6e6;
}
.breadcrumb{
  margin-bottom: 1em;
}
</style> 
