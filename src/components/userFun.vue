<template>
    <div class="user-function">
        <div class="user-info-par">
            <div class="user-info">
                <div class="user-info-img">
                    <img src="../assets/images/userImg.png" alt="">
                </div>
                <p class="user-name">{{user.name}}</p>
                <p class="user-isBool">
                    <span>{{user.post}}</span>
                    <router-link to="/" v-show="user.isBool">已认证</router-link>
                    <router-link to="/" v-show="!user.isBool">未认证</router-link>
                </p>
                <p class="user-details">
                    <span>{{user.adress}}</span>
                    <span>{{user.type}}</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user:{name:"张晓龙",post:"主任医师",isBool:'true',adress:"重庆市中医院南桥寺院",type:"骨科"}
        }
    },
}
</script>
<style scoped>
    .user-function{
        width: 100%;
        height: auto;
    }

    .user-info-par{
        width: 100%;
        height: auto;
        padding: 30px;
        box-sizing: border-box;
    }

    .user-info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .user-info div{
        margin-bottom: 14px;
    }

    .user-info p{
        user-select: none;
    }

    .user-info p+p{
        margin-top: 10px;
    }

    .user-info-img{
        width: 86px;
        height: 86px;
        border-radius: 50%;
        overflow: hidden;
    }

    .user-name{
        font-size: 22px;
        color: #353535;
    }

    .user-isBool{
        font-size: 16px;
        color: #5a5a5a;
    }

    .user-isBool a{
        color: #6981f7;
    }

    .user-isBool span{
        margin-right: 12px;
    }

    .user-details{
        font-size: 15px;
        color: #5a5a5a;
    }
    
    .user-details span:last-child{
        color: #353535;
        margin-left: 9px;
    }
</style>