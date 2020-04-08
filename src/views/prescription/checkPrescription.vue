<template>
    <div class="checkPrescription-content">
        <div class="checkPrescription-topTitle">
            <span>{{info.state==1?'正在审核':info.state==2?'未通过':'已开处方'}}</span>
            <a href="javascript:history.back();">返回</a>
        </div>
        <div v-if="info.state!=3" class="checkPrescription-info">
            <span v-show="info.state==1">处方正在审核,请耐心等待</span>
            <span v-show="info.state==2">未通过原因:药品调剂或剂量出现差错 </span>
        </div>
        <div class="checkPrescription-button-par" v-if="info.state==2">
            <button>重开处方</button>
        </div>
        <div class="prescription-parent">
            <p class="top-title">处方笺</p>
            <div class="prescription-parent-number">
                <span>NO:{{info.no}}</span>
                <span>{{info.time}}</span>
            </div>
            <div class="prescription-parent-userInfo">
                <p>
                    <span>{{info.name}}</span>
                    <span>{{info.age}}</span>
                    <span>{{info.gender}}</span>
                    <span>{{info.adress}}</span>
                </p>
                <p>疾病诊断：</p>
                <p v-for="(item,i) in info.illness" :key="i">{{i+1}}.{{item}}</p>
            </div>
            <div class="prescription-parent-userInfo">
                <p>医生嘱托：</p>
                <p v-for="(item,i) in info.entrust" :key="i">{{item}}</p>
            </div>
            <div class="prescription-parent-userInfo">
                <p>Rp：</p>
                <div v-for="(item,i) in info.rp" :key="i" class="prescription-parent-rp">
                    <div>
                        {{i+1}}.
                    </div>
                    <div>
                        <div v-for="(items,k) in item.drug" :key="k" class="prescription-rp-div">
                            <div>{{items.name}}</div>
                            <div>{{items.amount}}</div>
                        </div>
                        <p>{{item.usage}}</p>
                    </div>
                </div>
            </div>
            <div class="prescription-parent-userInfo prescription-last-docter">
                <div class="prescription-docter-par">
                    <p>
                        <span>方案医生:</span>
                        <span>{{info.doctor.programmeName}}</span>
                        <span>{{info.doctor.post}}</span>
                        <span>{{info.doctor.time}}</span>
                    </p>
                    <p>
                        <span></span>
                        <span>{{info.doctor.hospital}}</span>
                        <span>{{info.doctor.subject}}</span>
                    </p>
                    <p class="special-span">
                        <span>处方医生：</span>
                        <span>{{info.doctor.prescriptionName}}</span>
                        <span v-if="info.doctor.prescriptionName2">处方药师：</span>
                        <span v-if="info.doctor.prescriptionName2">{{info.doctor.prescriptionName2}}</span>
                    </p>
                </div>
                <div>
                    <img src="@/assets/images/cy.png" alt="">
                </div>
            </div>
            <button v-show="info.state==3" class="btn-ok">通过审核</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // 1.正在审核,2.审核未通过.3.审核通过.
            info:{
                state:3,

                no:"612354556922",

                time:"2019-07-17",

                name:"陈小小",

                age:29,

                gender:"女",

                adress:"重庆",

                illness:["甲状腺功能减退","内分泌失调症"],

                entrust:["请严格按照遗嘱进行用药","请多喝热水"],

                rp:[
                    {
                        drug:[
                            {name:"氯化钠注射液",amount:"205ml：2.25g*1瓶  250ml"},

                            {name:"注射用青霉素钠",amount:"400万U*2瓶 800万U"},
                        ],

                        usage:"用法：静脉滴注，60滴/分钟，立即执行"
                    },

                    {
                        drug:[
                            {name:"呲美莫司乳膏（爱宁达）1%15g"},

                            {name:"数量：1盒"},
                        ],

                        usage:"用法用量：外用0.1 每日一次 用药7天"
                    }
                ],

                doctor:{
                    programmeName:"文君",

                    prescriptionName2:"陈玲",

                    prescriptionName:"张瑞",

                    post:"主治医师",

                    time:"2019-07-20",

                    hospital:"重庆市人民医院",

                    subject:"皮肤科"
                }
            }
        }
    },
}
</script>
<style scoped>
    .checkPrescription-content{
        padding: 38px 33px 100px 33px;
        background: #fff;
    }

    .checkPrescription-topTitle{
        width: 100%;
        height: 37px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        box-sizing: border-box;
        border-bottom: 1px solid #eeeeee;
        margin-bottom: 29px;
    }

    .checkPrescription-topTitle a{
        display: block;
        width: 40px;
        height: 30px;
        border: 0;
        background: #fff;
        text-align: center;
        border-bottom: 3px solid #5a75f6;
        box-sizing: border-box;
        color: #5a75f6;
        cursor: pointer;
    }

    .checkPrescription-info{
        height: 50px;
        line-height: 50px;
        background: #fceded;
        color: #cf0000;
        text-align: center;
        margin-bottom: 37px;
    }

    .checkPrescription-button-par{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 42px;
    }

    .checkPrescription-button-par button{
        width: 158px;
        height: 35px;
        border: 0;
        border-radius: 35px;
        background: #5a75f6;
        color: #fff;
        text-align: center;
    }

    .prescription-parent{
        width: 100%;
        height: auto;
        padding: 0 160px;
        box-sizing: border-box;
    }

    .prescription-parent .top-title{
        font-size: 24px;
        text-align: center;
        margin-bottom: 23px;
    }

    .prescription-parent>div{
        border-top: 1px dashed #c0c0c0;
        border-bottom: 1px dashed #c0c0c0;
    }

    .prescription-parent>div+div{
        border-top: 0;
    }

    .prescription-parent-number{
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .prescription-parent-number>span:first-child{
        color: #425997;
        font-size: 14px;
    }

    .prescription-parent-number>span:last-child{
        color: #999999;
        font-size: 14px;
    }

    .prescription-parent-userInfo{
        padding: 20px 0;
        font-size: 16px;
        color: #222222;
    }

    .prescription-parent-userInfo p span+span{
        margin-left: 24px;    
    }

    .prescription-parent-userInfo p+p{
        margin-top: 16px;
    }

    .prescription-parent-userInfo .prescription-parent-rp+.prescription-parent-rp{
        border-top: 1px dashed #c0c0c0;
        padding-top: 20px;
    }

    .prescription-parent-rp{
        margin-top: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .prescription-rp-div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 16px;
    }

    .prescription-parent-rp .prescription-rp-div>div:first-child{
        width: 260px;
    }

    .prescription-last-docter{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .prescription-docter-par p{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .prescription-docter-par p>span:first-child{
        display: block;
        width: 84px;
    }

    .prescription-docter-par p>span:first-child+span{
        margin: 0;
    }

    .special-span span:nth-child(even){
        display: block;
        width: 74px;
        height: 34px;
        line-height: 34px;
        text-align: center;
        color:#ff371d;
        margin: 0;
        background: url('../../assets/images/doctorBk.png') no-repeat;
    }
    
    .btn-ok{
        width: 158px;
        height: 35px;
        border-radius: 35px;
        background: #5a75f6;
        color: #fff;
        text-align: center;
        border: 0;
        margin-top: 38px;
    }
</style>