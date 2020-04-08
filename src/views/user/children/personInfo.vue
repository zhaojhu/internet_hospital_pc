<template>
    <div class="userInfo-all-par">
        <div class="div-img">
            <div class="userInfo-title">头像</div>
            <div>
                <img src="@/assets/images/userImg.png" alt="">
            </div>
        </div>
        <div>
            <div class="userInfo-title">登录名</div>
            <span>15823920687</span>
        </div>
        <div>
            <div class="userInfo-title">真实姓名</div>
            <span>张晓龙</span>
        </div>
        <div>
            <div class="userInfo-title">行政职称</div>
            <span>主任医师</span>
        </div>
        <div class="div-img">
            <div class="userInfo-title">资格证明</div>
            <div>
                <img src="@/assets/images/userZM.png" alt="">
            </div>
        </div>
        <div>
            <div class="userInfo-title">性别</div>
            <template>
                <el-radio v-model="radio" label="1">男</el-radio>
                <el-radio v-model="radio" label="2">女</el-radio>
            </template>
        </div>
        <div>
            <div class="userInfo-title">执业点</div>
            <p>
                <span>重庆市中医院南桥寺院部</span>    
                <span>骨科</span>    
            </p>
        </div>
        <div class="userInfo-textarea">
            <div class="userInfo-title">擅长</div>
            <el-input type="textarea" placeholder="最多可以输入2000字，您还可以输入2000字" :rows="4" v-model="textarea1" maxlength="2000" show-word-limit></el-input>
        </div>
        <div class="userInfo-textarea">
            <div class="userInfo-title">简介</div>
            <el-input type="textarea" placeholder="最多可以输入2000字，您还可以输入2000字" :rows="4" v-model="textarea2" maxlength="2000" show-word-limit></el-input>
        </div>
        <div class="userInfo-btn">
            <button>
                <span>更新</span>
            </button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            radio: '1',

            textarea1:"",

            textarea2:"",
        }
    },
}
</script>
<style scoped>
    .userInfo-all-par>div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .userInfo-all-par>div+div{
        margin-top: 50px;
    }

    .userInfo-all-par .userInfo-textarea{
        align-items: flex-start;
    }

    .userInfo-all-par .userInfo-textarea /deep/ .el-textarea{
        align-items: flex-start;
    }

    .userInfo-all-par .userInfo-textarea /deep/ textarea{
        border-radius: 0;
    }

    .userInfo-title{
        width: 70px;
        height: 100%;
        text-align-last: justify;
    }

    .userInfo-title+*::before{
        content: ':';
        margin-right: 35px;
        height: 100%;
    }

    .userInfo-title+div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .userInfo-btn button{
        width: 290px;
        height: 46px;
        border-radius: 23px;
        background: #5a75f6;
        border: 0;
        display: flex;
        justify-content: center;
        cursor: pointer;
    }
    
    .userInfo-btn span{
        display: block;
        width: 70px;
        text-align-last: justify;
        color: #fff;
    }
</style>