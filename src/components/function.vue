<template>
    <div class="function-content" @click="checkDetails">
        <div class="function-content-img">
            <img :src="img" alt="">
        </div>
        <p class="function-content-name" :style={color:colorValue}>{{name}}</p>
        <div class="function-content-details">
            <p>
                <span v-show="number>0" style="color:#ff5050;">{{number}}</span>
                <span :class="number>0?'huise':'qianse'">{{details}}</span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        img:{
            type:String,
            default:require('../assets/images/phone.png')
        },

        name:{
            type:String,
            default:"暂无"
        },

        number:{
            type:Number,
            default:0
        },

        details:{
            type:String,
            default:"暂无问诊患者"
        },

        colorValue:{
            type:String,
            dafault:"#000"
        }
    },
    methods: {
        checkDetails(){
            switch (this.name) {
                case '电话问诊':
                    this.$router.push({name:'healed',params:{id:1}})
                    break;

                case '图文问诊':
                    this.$router.push({name:'healed',params:{id:2}})
                    break;
                    
                default:
                    this.$router.push('myHeal/healed')
                    break;
            }
        }
    },
}
</script>
<style scoped>
    .function-content{
        width: 210px;
        height: 214px;
        box-sizing: border-box;
        border:1px solid #ececec;
        padding: 21px 12px 25px 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
    }

    .function-content-img{
        margin-bottom: 18px;
    }

    .function-content-name{
        margin-bottom: 18px;
    }

    .function-content-details{
        width: 100%;
        border-top: 1px solid #eeeeee;
        padding-top: 21px;
        text-align: center;
        font-size: 16px;
        white-space: nowrap;
    }

    .huise{
        color: #5a5a5a;
    }
    
    .qianse{
        color: #999999;
    }
</style>