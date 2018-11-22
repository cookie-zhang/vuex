<template>
  <div class="hello">
    这是首页计算页面<br/>
    {{compute}}
    <button @click="add">+</button>
    <button @click="mui">-</button>
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
    ...mapGetters('compute',['compute'])
  },
  methods:{
      ...mapActions('compute',['addComp']),
    add(){
        this.$store.dispatch("addComp")
    },
    mui(){

    }
  },
  mounted(){
    this.addComp();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
