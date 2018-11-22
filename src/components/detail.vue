<template>
    <div>
        这是详情页detail<br/>
        <router-link to='/'> 这是首页home</router-link><br/>
        <router-link to='/list'> 列表页</router-link><br/>
        <ul>
            <li v-for="item in detailList" v-bind:key="item.id">
                {{item.item}}
            </li>
        </ul>
    </div>
</template>
<script>
import { mapGetters, mapActions  } from 'vuex'
export default {
    name: 'detail',
    data(){
        return {}
    },
    computed:{
        ...mapGetters('detailData',['detailList'])
    },
    methods:{
        ...mapActions('detailData',['getDetailListData'])
    },
    mounted(){
        this.getDetailListData();
    }
}
</script>
<style>

</style>
