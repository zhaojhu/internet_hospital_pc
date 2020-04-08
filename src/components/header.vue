<template>
    <div class="header-myHeal">
        <div v-for="(item,i) in funs" :key="i" @click="sendI(i,item.router)" :class="funsIndex==i?'active':''">
            <img :src="item.img" alt="">
            <img :src="item.imgActive" alt="">
            <span>{{item.name}}</span>
            <i :style="{background:item.color}">{{item.number}}</i>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        funs:{
            type:Array,
            default(){
                return []
            }
        },
        
        funsIndex:{
            type:Number,
            default:0,
        }
    },

    data() {
        return {
            
        }
    },
    
    methods: {
        sendI(i,r){
            this.$emit('i',i)
            this.$router.push(r)
        }
    },
}
</script>
<style scoped>
    .header-myHeal{
        height: 78px !important;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header-myHeal>div{
        width: auto;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .header-myHeal .active{
        color: #5a75f6;
    }

    .header-myHeal>div+div{
        margin-left: 64px;
    }

    .header-myHeal>div>img{
        margin-right: 16px;
    }

    .header-myHeal>div>img:nth-child(2){
        display: none;
    }

    .header-myHeal>div.active>img:nth-child(2){
        display: block;
    }

    .header-myHeal>div.active>img:first-child{
        display: none;
    }
    
    .header-myHeal>div>img+span+i{
        font-style: normal;
        margin-left: 3px;
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 8px;
        font-size: 12px;
        text-align: center;
        line-height: 16px;
        color: #fff;
        transform: translateY(-8px);
    }
</style>