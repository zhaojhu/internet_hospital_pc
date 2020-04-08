<template>
    <div class="heal-list-par">
        <div class="heal-person-info">
            <img :src="personInfo.img" alt="">
            <div class="heal-info">
                <p>
                    <span>{{personInfo.name}}</span>
                    <span>{{personInfo.age}}</span>
                    <span>{{personInfo.gender}}</span>
                </p>
                <span>{{personInfo.type}}</span>
            </div>
        </div>
        <div class="heal-person-msg">
            {{personInfo.msg}}
        </div>
        <div class="heal-person-check">
            <button @click="check(personInfo.id)">查看处方</button>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        personInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },

    methods: {
        check(){
            this.$router.push({name:"checkPrescription"})
        }
    },
}
</script>
<style scoped>
    .heal-list-par{
        width: 100%;
        height: 95px;
        background: #fafbfd;
        box-sizing: border-box;
        border: 1px solid #e4edff;
        display: flex;
    }

    .heal-list-par>div:first-child{
        border-left: 5px solid #fafbfd;
    }

    .heal-list-par>div+div{
        border-left: 1px solid #e4edff;
    }

    .heal-person-info{
        width: 210px;
        padding: 20px 16px 20px 11px; 
        box-sizing: border-box;
        display: flex;
    }

    .heal-person-info img{
        margin-right: 12px;
        flex-shrink: 0;
    }

    .heal-info{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .heal-info span{
        font-size: 16px;
        color: #9f9f9f;
    }

    .heal-info p{
        margin: 4px 0;
    }

    .heal-info p span{
        color: #353535;
    }

    .heal-info p span+span{
        margin-left: 10px;
    }

    .heal-person-msg{
        width: 495px;
        padding: 28px 24px 26px 15px;
        box-sizing: border-box;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-size: 14px;
    }

    .heal-person-check{
        width: 128px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .heal-person-check button{
        width: 75px;
        height: 29px;
        background: #39bef9;
        color: #fff;
        line-height: 29px;
        text-align: center;
        border: 0;
        border-radius: 3px;
        font-size: 14px;
        cursor: pointer;
        outline: none;
    }

    .heal-list-par:hover{
        border-color: #aab6ef;
    }

    .heal-list-par:hover>div+div{
        border-color: #aab6ef;
    }

    .heal-list-par:hover>div:first-child{
        border-left: 5px solid #5a75f6;
    }
</style>