<template>
    <div class="reporting-content-par">
        <div class="reporting-content-title">
            <p class="justify-between">
                <span>认证申请</span>
                <span>认证后您将可以使用咨询、对症预约等功能</span>
            </p>
            <div v-show="failsSuccess!=''" class="fail-or-success" :class="failsSuccess==true?'success':'fail'">
                <span v-show="!failsSuccess">未通过审核原因:上传证件不够清晰或不符合要求,请重新上传并提交审核</span>
                <span v-show="failsSuccess">已通过,认证成功!!!</span>
            </div>
            <p class="felx-column-flexStar" style="margin-top: 22px;">
                <span>请您提交真实信息(以下证件一种或多种),我们将对您的信息严格保密</span>
                <span>格式要求:支持.jpg.jepg.bmp.gif.png格式照片,大小不超过2M</span>
            </p>
        </div>
        <div class="reporting-content">
            <div class="justify-flex-start fill-user">
                <span>身份证号：</span>
                <el-input type="text" v-model="text" maxlength="18" show-word-limit ></el-input>
            </div>
            <div>
                <div class="fill-user-info justify-flex-start">
                    <span>身份证正反面照</span>
                    <el-popover
                        placement="bottom-start"
                        width="322"
                        popper-class="el-popover-par"
                        trigger="hover">
                            <img src="@/assets/images/exPersonI.png" alt="">
                            <img src="@/assets/images/exPersonN.png" alt="">
                        <el-button slot="reference">
                            <img src="@/assets/images/problem.png" alt="">
                        </el-button>
                    </el-popover>
                </div>
                <div class="justify-flex-start">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
                        <div v-else class="noUploadImg">
                            <img src="@/assets/images/personI.png" alt="">
                            <p style="margin-top:28px;">点击上传身份证正面照</p>
                        </div>
                    </el-upload>
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
                        <div v-else class="noUploadImg">
                            <img src="@/assets/images/personN.png" alt="">
                            <p style="margin-top:28px;">点击上传身份证反面照</p>
                        </div>
                    </el-upload>
                </div>
            </div>
            <div>
                <div class="fill-user-info justify-flex-start">
                    <span>医师执业照(首页+个人信息页)</span>
                    <el-popover
                        placement="bottom-start"
                        width="322"
                        popper-class="el-popover-par"
                        trigger="hover">
                            <img src="@/assets/images/exPersonI.png" alt="">
                            <img src="@/assets/images/exPersonN.png" alt="">
                        <el-button slot="reference">
                            <img src="@/assets/images/problem.png" alt="">
                        </el-button>
                    </el-popover>
                </div>
                <div>
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl3" :src="imageUrl3" class="avatar">
                        <div v-else class="noUploadImg">
                            <img src="@/assets/images/uploadImg.png" alt="">
                            <p style="margin-top:28px;">请上传证件照</p>
                        </div>
                    </el-upload>
                </div>
            </div>
            <div>
                <div class="fill-user-info justify-flex-start">
                    <span>医师资格证</span>
                    <el-popover
                        placement="bottom-start"
                        width="322"
                        popper-class="el-popover-par"
                        trigger="hover">
                            <img src="@/assets/images/exPersonI.png" alt="">
                            <img src="@/assets/images/exPersonN.png" alt="">
                        <el-button slot="reference">
                            <img src="@/assets/images/problem.png" alt="">
                        </el-button>
                    </el-popover>
                </div>
                <div>
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl4" :src="imageUrl4" class="avatar">
                        <div v-else class="noUploadImg">
                            <img src="@/assets/images/uploadImg.png" alt="">
                            <p style="margin-top:28px;">请上传证件照</p>
                        </div>
                    </el-upload>
                </div>
            </div>
            <div>
                <div class="fill-user-info justify-flex-start">
                    <span>专业技术资格证</span>
                    <el-popover
                        placement="bottom-start"
                        width="322"
                        popper-class="el-popover-par"
                        trigger="hover">
                            <img src="@/assets/images/exPersonI.png" alt="">
                            <img src="@/assets/images/exPersonN.png" alt="">
                        <el-button slot="reference">
                            <img src="@/assets/images/problem.png" alt="">
                        </el-button>
                    </el-popover>
                </div>
                <div>
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl5" :src="imageUrl5" class="avatar">
                        <div v-else class="noUploadImg">
                            <img src="@/assets/images/uploadImg.png" alt="">
                            <p style="margin-top:28px;">请上传证件照</p>
                        </div>
                    </el-upload>
                </div>
            </div>
            <button class="submit-btn">提交审核</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            text:"",

            imageUrl1: '',

            imageUrl2: '',

            imageUrl3: '',

            imageUrl4: '',

            imageUrl5: '',

            failsSuccess:'',
        }
    },

    methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl1 = URL.createObjectURL(file.raw);
        },

        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';

            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }

            return isJPG && isLt2M;
        }
    },
}
</script>
<style scoped>
    .reporting-content-par{
        padding: 37px 35px 66px 35px;
        background: #fff;
        box-sizing: border-box;
    }

    .reporting-content-title{
        margin-bottom: 25px;
    }

    .reporting-content-title>p:first-child{
        align-items: flex-start;
        padding-bottom: 18px;
        border-bottom: 1px solid #eeeeee;
    }

    .reporting-content-title>p:first-child>span:first-child{
        font-size: 18px;
        color: #353535;
    }

    .reporting-content-title>p:first-child>span:last-child{
        font-size: 14px;
        color: #5a5a5a;
    }

    .reporting-content-title>p:last-child{
        font-size: 14px;
        color: #939393;
    }

    .justify-between{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .felx-column-flexStar{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .justify-flex-start{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .justify-flex-start /deep/ .el-input{
        width: 282px;
        height: 37px;
        margin-left: 20px;
    }

    .justify-flex-start /deep/ .el-input__inner{
        height: 37px;
        box-sizing: border-box;
        border-radius: 0;
    }

    .reporting-content span{
        font-size: 16px;
        color: #353535;
    }

    .fill-user{
        margin-bottom: 38px;
    }

    .fill-user-info{
        margin-bottom: 25px;
    }

    .reporting-content .fill-user-info:nth-child(n+1){
        margin-top: 40px;
    }

    .fill-user-info img{
        margin-left: 12px;
    }

    .noUploadImg{
        width: 282px;
        height: 210px;
        border: 1px solid #e0e0e0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .justify-flex-start /deep/ .el-upload img{
        height: 133px;
    }

    .justify-flex-start /deep/ .avatar-uploader+.avatar-uploader{
        margin-left: 22px;
    }

    .submit-btn{
        width: 288px;
        height: 49px;
        background: #5a75f6;
        color: #fff;
        border-radius: 49px;
        border: 0;
        text-align: center;
        margin-top: 38px;
    }

    .reporting-content /deep/ .el-tooltip{
        cursor: pointer;
    }

    .fill-user-info /deep/ .el-button{
        border: 0;
        padding: 0;
    }

    .fill-user-info /deep/ .el-button:hover{
        background: none;
    }

    .fill-user-info /deep/ span:nth-child(n+1){
        display: block;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .fail-or-success{
        width: 100%;
        height: 50px;
        line-height: 50px;
        border-radius: 4px;
        background: #fceded;
        text-align: center;
        font-size: 16px;
    }

    .success{
        color: springgreen;
    }

    .fail{
        color: #cf0000;
    }
</style>
<style>
    .el-popover-par{
        height: 417px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 0px 10px rgb(211, 211, 211);
    }
    
    .el-popover-par img+img{
        margin-top: 23px;
    }
</style>