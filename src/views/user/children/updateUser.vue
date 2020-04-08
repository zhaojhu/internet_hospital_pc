<template>
    <div class="update-user-info">
        <div>
            <div>原密码</div>
            <div class="beforInput">
                <input type="password" v-model="oldPassword">
            </div>
        </div>
        <div>
            <div>新密码</div>
            <div class="beforInput">
                <input type="password" v-model="newPassword1">
            </div>
        </div>
        <div>
            <div>确认密码</div>
            <div class="beforInput">
                <input type="password" v-model="newPassword2">
            </div>
        </div>
        <div class="btn-par">
            <div></div>
            <div class="beforInput">
                <button class="update-btn">
                    <span>修改</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            oldPassword:"123456",

            newPassword1:"",

            newPassword2:"",
        }
    },
}
</script>
<style scoped>
    .update-user-info>div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .update-user-info>div+div{
        margin-top: 32px;
    }

    .update-user-info>div>div:first-child{
        width: 82px;
        text-align-last: justify;
    }

    .update-user-info .beforInput{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .update-user-info .beforInput::before{
        content: ':';
        display: block;
        margin-right: 16px;
    }

    .update-user-info input{
        width: 282px;
        height: 37px;
        border: 1px solid #e0e0e0;
        background: #eceef7;
        padding-left: 18px;
        outline: none;
    }

    .update-user-info input:focus{
        background: rgb(245, 245, 245)
    }

    .update-btn{
        width: 282px;
        height: 37px;
        border-radius: 37px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #5a75f6;
        border: 0;
        cursor: pointer;
    }

    .btn-par .beforInput::before{
        content: ' ';
    }
    
    .update-btn span{
        width: 70px;
        display: block;
        text-align-last: justify;
        color: #fff;
    }
</style>