<template>
    <div class="scheduling-content">
        <div class="scheduling-title">
            <span>我的排班</span>
            <div>
                <span class="morning">早班</span>
                <span class="noon">中班</span>
                <span class="night">晚班</span>
                <span class="add" v-show="!isBoolean" @click="isBoolean=true">添加排班</span>
                <span class="addFromLastWeek" v-show="isBoolean" @click="isBoolean=false">引用上周</span>
            </div>
        </div>
        <div class="select-time">
            <el-date-picker
                v-model="value"
                type="month"
                format="yyyy-MM"
                value-format="yyyy-MM"
                @change="monthChange"
                placeholder="选择月">
            </el-date-picker>
        </div>
        <div class="perpetual-calendar-content">
            <el-calendar v-model="value">
                <template slot="dateCell" slot-scope="{date, data}">
                    <div>
                        <div class="calendar-day">{{ data.day.split('-').slice(2).join('-') }}</div>
                        <div v-for="(item,index) in calendarData" :key="index">
                            <div v-if="(item.months).indexOf(data.day.split('-').slice(1)[0])!=-1">
                                <div v-if="(item.days).indexOf(data.day.split('-').slice(2).join('-'))!=-1">
                                    <el-tooltip class="item" effect="dark" :content="item.things" placement="right">
                                        <div class="is-selected">
                                            <p>{{item.things}}</p>
                                            <!-- <p>{{data.day}}</p> -->
                                        </div>
                                    </el-tooltip>
                                </div>
                                <div v-else></div>
                            </div>
                            <div v-else></div>
                        </div>
                    </div>
                </template>
            </el-calendar>
        </div>
        <div class="scheduling-setting" v-show="isBoolean">
            <div class="scheduling-setting-top">
                <span>选择班次:</span>
                <div class="mor">
                    <el-checkbox v-model="moring1" label="08:00-09:30">早班 （ 08 : 00 - 09 : 30 ）</el-checkbox>
                    <el-checkbox v-model="moring2" label="09:30-11:00">早班 （ 09 : 30 - 11 : 00 ）</el-checkbox>
                    <el-checkbox v-model="moring3" label="11:00-12:30">早班 （ 11 : 00 - 12 : 30 ）</el-checkbox>
                </div>
                <div class="noo">
                    <el-checkbox v-model="noon1" label="12:00-13:30">中班 （ 12 : 00 - 13 : 30 ）</el-checkbox>
                    <el-checkbox v-model="noon2" label="13:30-15:00">中班 （ 13 : 30 - 15 : 00 ）</el-checkbox>
                    <el-checkbox v-model="noon3" label="15:00-16:30">中班 （ 15 : 00 - 16 : 30 ）</el-checkbox>
                    <el-checkbox v-model="noon4" label="16:30-18:30">中班 （ 16 : 30 - 18 : 30 ）</el-checkbox>
                </div>
                <div class="nig">
                    <el-checkbox v-model="night1" label="18:30-20:00">晚班 （ 18 : 30 - 20 : 00 ）</el-checkbox>
                    <el-checkbox v-model="night2" label="20:00-21:30">晚班 （ 20 : 00 - 21 : 30 ）</el-checkbox>
                    <el-checkbox v-model="night3" label="21:30-23:00">晚班 （ 21 : 30 - 23 : 00 ）</el-checkbox>
                </div>
            </div>
            <button class="scheduling-btn" @click="isBoolean=false">自动生成排班表</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: new Date(),

            calendarData: [
                {
                    months: ['04'],
                    days: ['15'],
                    things: '早班'
                },

                {
                    months: ['04'],
                    days: ['15'],
                    things: '中班'
                },

                {
                    months: ['10', '11'],
                    days: ['02'],
                    things: '中班'
                },

                {
                    months: ['11'],
                    days: ['02'],
                    things: '中班'
                },

                {
                    months: ['11'],
                    days: ['02'],
                    things: '中班'
                }
            ],

            isBoolean:false,

            moring1:"",

            moring2:"",

            moring3:"",

            noon1:"",

            noon2:"",

            noon3:"",

            noon4:"",

            night1:"",

            night2:"",
            
            night3:"",
        }
    },

    mounted() {
        var d = new Date();
        if((d.getMonth() + 1)<10){
            this.value=d.getFullYear() + '-0' + (d.getMonth() + 1);
        }else{
            this.value=d.getFullYear() + '-' + (d.getMonth() + 1);
        }
    },

    methods: {
        monthChange(value){
            console.log("选择的时间："+value)
        }
    },
}
</script>
<style scoped>
    .scheduling-content{
        padding: 34px 32px 60px 32px;
        background: #fff;
    }

    .scheduling-title{
        width: 100%;
        height: 37px;
        box-sizing: border-box;
        border-bottom: 1px solid #eeeeee;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 23px;
    }
    
    .scheduling-title>span{
        font-size: 18px;
    }

    .scheduling-title span{
        color: #353535;
    }

    .scheduling-title div{
        height: 30px;
        display: flex;
        align-items: center;
    }
    
    .scheduling-title div span+span{
        margin-left: 48px;
    }

    .scheduling-title div span{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .scheduling-title div span:not(:last-child)::before{
        content: ' ';
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        margin-right: 15px;
    }

    .scheduling-title div span.morning::before{
        background: #2ecc71;
    }

    .scheduling-title div span.noon::before{
        background: #ff8353;
    }

    .scheduling-title div span.night::before{
        background: #5795ec;
    }

    .scheduling-title div span.add{
        color: #5a75f6;
        cursor: pointer;
    }

    .select-time{
        margin-bottom: 30px;
    }

    .select-time /deep/ .el-input__inner{
        border-color: #b8c0e8;
        color: #9c9c9c;
    }

    .perpetual-calendar-content /deep/ .el-calendar__body {
		padding: 0;
	}

	.perpetual-calendar-content /deep/ .el-calendar__header {
		display: none;
	}

    .scheduling-setting{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-top: 50px;
    }

    .scheduling-setting-top{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .scheduling-setting-top span{
        display: block;
        white-space: nowrap;
        margin-right: 18px;
        color: #353535;
    }

    .scheduling-setting-top div{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .scheduling-setting-top div+div{
        margin-left: 45px;
    }

    .scheduling-setting-top /deep/ .el-checkbox{
        margin-right: 0;
    }

    .scheduling-setting-top /deep/ .el-checkbox+.el-checkbox{
        margin-top: 20px;
    }

    .scheduling-btn{
        width: 288px;
        height: 48px;
        border-radius: 24px;
        color: #fff;
        background: #5a75f6;
        border: 0;
        margin: 0 auto;
        margin-top: 50px;
        cursor: pointer;
    }  

    .mor /deep/ .el-checkbox__inner{
        border-color: #2ecc71;
        box-sizing: border-box;
    }

    .mor /deep/ .el-checkbox__input.is-checked+.el-checkbox__label{
        color: #2ecc71 !important;
    }

    .mor /deep/ .el-checkbox__input.is-checked .el-checkbox__inner{
        background: #2ecc71;
    }

    .noo /deep/ .el-checkbox__inner{
        border-color: #ff8353;
        box-sizing: border-box;
    }

    .noo /deep/ .el-checkbox__input.is-checked+.el-checkbox__label{
        color: #ff8353 !important;
    }

    .noo /deep/ .el-checkbox__input.is-checked .el-checkbox__inner{
        background: #ff8353;
    }

    .nig /deep/ .el-checkbox__inner{
        border-color: #5795ec;
        box-sizing: border-box;
    }

    .nig /deep/ .el-checkbox__input.is-checked+.el-checkbox__label{
        color: #5795ec !important;
    }

    .nig /deep/ .el-checkbox__input.is-checked .el-checkbox__inner{
        background: #5795ec;
    }
    
    .addFromLastWeek{
        width: 87px;
        height: 28px;
        border-radius: 14px;
        background: #5a75f6;
        color: #fff !important;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
</style>