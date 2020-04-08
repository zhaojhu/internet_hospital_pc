<template>
    <div class="waiting-list-par">
        <div class="waiting-list-top">
            <span>{{waitingPersonInfo.time}}</span>
            <span>{{waitingPersonInfo.type}}</span>
        </div>
        <div class="waiting-list-content">
            <div class="waiting-content-top">
                <img :src="waitingPersonInfo.img" alt="">
                <span>{{waitingPersonInfo.name}}</span>
                <span>{{waitingPersonInfo.age}}</span>
                <span>{{waitingPersonInfo.gender}}</span>
            </div>
            <div class="waiting-content-middle">
                {{waitingPersonInfo.msg}}
            </div>
            <div class="waiting-content-bottom">
                <router-link tag="button" :to="{name:'chat'}">进入聊天室</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },

    methods: {
       
    },

    props:{
        waitingPersonInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>
<style scoped>
    .waiting-list-par{
        width: 396px;
        border: 1px solid #dfe5f6;
        border-radius: 5px;
        box-sizing: border-box;
    }

    .waiting-list-top{
        padding: 12px 20px 13px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #f3f6ff;
        border-bottom: 1px solid #dfe5f6;
        box-sizing: border-box;
    }

    .waiting-list-top>span:first-child{
        font-size: 12px;
        color: #353535;
    }

    .waiting-list-top>span:last-child{
        font-size: 16px;
        color: #5a75f6;
    }

    .waiting-list-content{
        padding: 15px 22px 17px 23px;

    }

    .waiting-content-top{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .waiting-content-top img{
        margin-right: 8px;
        flex-shrink: 0;
    }

    .waiting-content-top>span{
        font-size: 16px;
        color: #353535;
    }

    .waiting-content-top span:nth-child(2){
        margin-right: 15px;
    }

    .waiting-content-top span:nth-child(3){
        margin-right: 14px;
    }

    .waiting-content-middle{
        margin-top: 20px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-size: 14px;
        color: #797979;
    }

    .waiting-content-bottom{
        margin-top: 18px;
    }
    
    .waiting-content-bottom button{
        width: 159px;
        height: 35px;
        border: 0;
        background: #5a75f6;
        border-radius: 35px;
        color: #fff;
        text-align: center;
        line-height: 35px;
        font-size: 16px;
        cursor: pointer;
    }
</style>