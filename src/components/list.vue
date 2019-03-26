<template>
    <div>
        <router-link to='/'> 首页home</router-link><br/>
        这是列表页list<br/>
        <ul>
            <li v-for="item in List" v-bind:key="item.id">{{item.item}}</li>
        </ul>
        <div>计算：</div>
        <div>{{number}}</div>
        <button @click='handleAdd()'>add</button>
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
        ...mapGetters('listData',['List','number'])
    },
    methods:{
        //方法一：  ...mapActions('listData',['getListData','handleAdd']),
        //方法二：
        ...mapActions({
            getListData:"listData/getListData",
            handleAdd:"listData/handleAdd"
        })
    },
    mounted(){
        this.getListData();
    }
}
</script>
<style>
</style>

