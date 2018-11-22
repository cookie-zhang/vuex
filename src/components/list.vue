<template>
    <div>
        这是列表页list<br/>
        <router-link to='/'> 这是首页home</router-link><br/>
        <router-link to='/detail'> 详情页</router-link><br/>
        <ul>
            <li v-for="item in List" v-bind:key="item.id">{{item.item}}</li>
        </ul>
        <div>{{Number}}</div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'list',
    data(){
        return{}
    },
    computed:{
        ...mapGetters('listData',['List','Number'])
    },
    methods:{
        ...mapActions('listData',['getListData'])
    },
    mounted(){
        debugger;
        this.getListData();
    }
}
</script>
<style>

</style>

