<template>
  <el-container :style="{'height': winHeight +'px'}">
    <el-aside :style="{'height': winHeight +'px'}">
      <el-menu :default-openeds="['1', '2', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-location-outline"></i>起始页面</template>
          <el-menu-item index="2-4-1"><router-link to='home'>欢迎页面</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>舆情报告</template>           
          <el-menu-item index="2-4-1"><router-link to = 'report'>全部舆情</router-link></el-menu-item>
          <el-menu-item index="2-4-1"><router-link to = 'report?id=1'>正面舆情</router-link></el-menu-item>
          <el-menu-item index="2-4-1"><router-link to = 'report?id=2'>负面舆情</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>舆情设置</template>            
            <el-menu-item index="3-1">
              <router-link to='keywords'>舆情关键字设置</router-link>
            </el-menu-item>
            <el-menu-item index="3-2">
              <router-link to='alarm'>舆情报警设置</router-link>
            </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container :style="{'height': winHeight +'px'}">
      <router-view></router-view>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'nav',
    data() {
      return {
        winHeight: document.documentElement.clientHeight - 20,
      }
    },
    mounted() {
      window.onresize=()=>{
        this.winHeight = document.documentElement.clientHeight - 20;
      }
    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  .el-aside {
    width: 200px!important;
    background: #eee;

    a {
      color: #333; 
      display: block;
      text-decoration: none;     
    }
    
    .el-menu {
      background: #eee;
    }  
  }

  .el-container {
    padding:10px;
    width: 100%;   
  }
</style>