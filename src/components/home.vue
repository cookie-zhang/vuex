<template>
  <div class="hello">
    这是首页home<br/>
    <router-link to='/list'> 列表页</router-link><br/>
    <router-link to='/detail'> 详情页</router-link><br/>
    <ul>
      <li v-for="item in homeList" v-bind:key="item.id">
        {{item.item}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'home',
  data () {
    return {}
  },
  computed:{
    ...mapGetters('homeData', ['homeList'])
  },
  methods:{
    ...mapActions('homeData',['getDetailListData'])
  },
  mounted(){
    this.getDetailListData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
