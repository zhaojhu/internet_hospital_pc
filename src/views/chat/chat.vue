<template>
    <div class="chat-room">
        <div class="chat-room-par">
            <div class="chat-room-left">
                <div class="chat-info-top">
                    <div>
                        <img src="@/assets/images/userImg2.png" alt="">
                    </div>
                    <div>
                        <p>张晓龙</p>
                        <p>主任医师</p>
                    </div>
                </div>
                <div class="chat-info-bottom">
                    <div :class="activeIndex==0?'active':''" @click="activeIndex=0">
                        <span>正在接待</span>
                        <!-- <span class="after">3</span> -->
                    </div>
                    <div :class="activeIndex==1?'active':''" @click="activeIndex=1">
                        <span>待接诊</span>
                        <span class="after">2</span>
                    </div>
                </div>
                <div class="chat-user-list">
                    <div v-for="(item,i) in userList" :key="i" :class="i==0?'chating':''">
                        <div>
                            <img :src="item.img" alt="">
                        </div>
                        <div>
                            <p>
                                <span>{{item.name}}</span>
                                <span>{{item.age}}</span>
                                <span>{{item.gender}}</span>
                            </p>
                            <i>{{item.msg}}</i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chat-room-right">
                <div class="room-right-top">
                    <p>
                        <span>刘晓霞</span>
                        <span>50</span>
                        <span>女</span>
                    </p>
                    <router-link to="/">开处方</router-link>
                </div>
                <div class="room-msg-list">
                    <div class="room-msg-content">
                        <div class="msg-list">
                            <div v-for="(item,i) in msgList" :key="i" :class="item.user=='me'?'mepar':''">
                                <div :class="item.user=='me'?'me':''">
                                    <div>
                                        <img :src="item.img" alt="">
                                    </div>
                                    <div class="item-msg">
                                        {{item.msg}}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="send-msg">
                            <div class="send-msg-functions">
                                <div @click="showEmoji">
                                    <img src="@/assets/images/expression.png" alt="">
                                </div>
                                <label>
                                    <img src="@/assets/images/file.png" alt="">
                                    <input type="file" accept="image/*" style="display:none;">
                                </label>
                            </div>
                            <div v-show="fun" class="more_box">
                                <ul class="emoji-list" v-show="is_emoji">
                                    <li @click="emoji($event)">&#x1F600;</li>
                                    <li @click="emoji($event)">&#x1F601;</li>
                                    <li @click="emoji($event)">&#x1F602;</li>
                                    <li @click="emoji($event)">&#x1F603;</li>
                                    <li @click="emoji($event)">&#x1F604;</li>
                                    <li @click="emoji($event)">&#x1F605;</li>
                                    <li @click="emoji($event)">&#x1F606;</li>
                                    <li @click="emoji($event)">&#x1F607;</li>
                                    <li @click="emoji($event)">&#x1F608;</li>
                                    <li @click="emoji($event)">&#x1F609;</li>
                                    <li @click="emoji($event)">&#x1F60A;</li>
                                    <li @click="emoji($event)">&#x1F60B;</li>
                                    <li @click="emoji($event)">&#x1F60C;</li>
                                    <li @click="emoji($event)">&#x1F60D;</li>
                                    <li @click="emoji($event)">&#x1F60E;</li>
                                    <li @click="emoji($event)">&#x1F60F;</li>
                                    <li @click="emoji($event)">&#x1F610;</li>
                                    <li @click="emoji($event)">&#x1F611;</li>
                                    <li @click="emoji($event)">&#x1F612;</li>
                                    <li @click="emoji($event)">&#x1F613;</li>
                                    <li @click="emoji($event)">&#x1F614;</li>
                                    <li @click="emoji($event)">&#x1F615;</li>
                                    <li @click="emoji($event)">&#x1F616;</li>
                                    <li @click="emoji($event)">&#x1F617;</li>
                                    <li @click="emoji($event)">&#x1F618;</li>
                                    <li @click="emoji($event)">&#x1F619;</li>
                                    <li @click="emoji($event)">&#x1F61A;</li>
                                    <li @click="emoji($event)">&#x1F61B;</li>
                                    <li @click="emoji($event)">&#x1F61C;</li>
                                    <li @click="emoji($event)">&#x1F61D;</li>
                                    <li @click="emoji($event)">&#x1F61E;</li>
                                    <li @click="emoji($event)">&#x1F61F;</li>
                                    <li @click="emoji($event)">&#x1F620;</li>
                                    <li @click="emoji($event)">&#x1F621;</li>
                                    <li @click="emoji($event)">&#x1F622;</li>
                                    <li @click="emoji($event)">&#x1F623;</li>
                                    <li @click="emoji($event)">&#x1F624;</li>
                                    <li @click="emoji($event)">&#x1F625;</li>
                                    <li @click="emoji($event)">&#x1F626;</li>
                                    <li @click="emoji($event)">&#x1F627;</li>
                                    <li @click="emoji($event)">&#x1F628;</li>
                                    <li @click="emoji($event)">&#x1F629;</li>
                                    <li @click="emoji($event)">&#x1F62A;</li>
                                    <li @click="emoji($event)">&#x1F62B;</li>
                                    <li @click="emoji($event)">&#x1F62C;</li>
                                    <li @click="emoji($event)">&#x1F62D;</li>
                                    <li @click="emoji($event)">&#x1F62E;</li>
                                    <li @click="emoji($event)">&#x1F62F;</li>
                                    <li @click="emoji($event)">&#x1F630;</li>
                                    <li @click="emoji($event)">&#x1F631;</li>
                                    <li @click="emoji($event)">&#x1F632;</li>
                                    <li @click="emoji($event)">&#x1F633;</li>
                                    <li @click="emoji($event)">&#x1F634;</li>
                                    <li @click="emoji($event)">&#x1F635;</li>
                                    <li @click="emoji($event)">&#x1F636;</li>
                                    <li @click="emoji($event)">&#x1F637;</li>
                                    <li @click="emoji($event)">&#x1F638;</li>
                                    <li @click="emoji($event)">&#x1F639;</li>
                                    <li @click="emoji($event)">&#x1F63A;</li>
                                    <li @click="emoji($event)">&#x1F63B;</li>
                                    <li @click="emoji($event)">&#x1F63C;</li>
                                    <li @click="emoji($event)">&#x1F63D;</li>
                                    <li @click="emoji($event)">&#x1F63E;</li>
                                    <li @click="emoji($event)">&#x1F63F;</li>
                                    <li @click="emoji($event)">&#x1F640;</li>
                                    <li @click="emoji($event)">&#x1F641;</li>
                                    <li @click="emoji($event)">&#x1F642;</li>
                                    <li @click="emoji($event)">&#x1F643;</li>
                                    <li @click="emoji($event)">&#x1F644;</li>
                                    <li @click="emoji($event)">&#x1F916;</li>
                                    <li @click="emoji($event)">&#x1F917;</li>
                                    <li @click="emoji($event)">&#x1F920;</li>
                                    <li @click="emoji($event)">&#x1F921;</li>
                                    <li @click="emoji($event)">&#x1F922;</li>
                                    <li @click="emoji($event)">&#x1F923;</li>
                                    <li @click="emoji($event)">&#x1F924;</li>
                                    <li @click="emoji($event)">&#x1F925;</li>
                                    <li @click="emoji($event)">&#x1F927;</li>
                                    <li @click="emoji($event)">&#x1F928;</li>
                                    <li @click="emoji($event)">&#x1F929;</li>
                                    <li @click="emoji($event)">&#x1F92A;</li>
                                    <li @click="emoji($event)">&#x1F92B;</li>
                                    <li @click="emoji($event)">&#x1F92F;</li>
                                    <li @click="emoji($event)">&#x1F92C;</li>
                                    <li @click="emoji($event)">&#x1F92D;</li>
                                    <li @click="emoji($event)">&#x1F92E;</li>
                                </ul>
                            </div>
                            <textarea v-model="input_content" id="input" @keyup.enter="submit"></textarea>
                            <div class="send-msg-btn">
                                <button @click="submit">发  送</button>
                            </div>
                        </div>
                    </div>
                    <div class="room-msg-info">
                        <div class="room-user-topTitle">
                            <div :class="userTitleIndex==1?'titleActive':''" @click="userTitleIndex=1">病人详情</div>
                            <div :class="userTitleIndex==2?'titleActive':''" @click="userTitleIndex=2">电子病历</div>
                        </div>
                        <div v-show="userTitleIndex==1?true:false" class="msg-info-over">
                            <div class="room-user-name">
                                <span>刘晓霞</span>
                                <span>50</span>
                                <span>女</span>
                            </div>
                            <div class="room-user-condition">
                                <p>
                                    <span>病情主诉</span>
                                </p>
                                <p>之前高血压一直维持低压100左右，高压140左右，自从上个月有一次外面干活天气太热，头晕，回来量血压，低压都140左右，高压180左右，一直持续到现在，吃降压药血压也没降下来，现在这样的情况应该如何处理？现在没有出现头晕。</p>
                            </div>
                            <div class="room-user-condition">
                                <p>
                                    <span>病情照片</span>
                                </p>
                                <div class="room-user-conditionPic">
                                    <div>
                                        <img src="@/assets/images/condition1.png" alt="">
                                    </div>
                                    <div>
                                        <img src="@/assets/images/condition2.png" alt="">
                                    </div>
                                    <div>
                                        <img src="@/assets/images/condition3.png" alt="">
                                    </div>
                                    <div>
                                        <img src="@/assets/images/condition4.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="room-user-condition">
                                <p>
                                    <span>病情照片</span>
                                </p>
                                <div class="room-user-conditionPic">
                                    <div>
                                        <img src="@/assets/images/condition1.png" alt="">
                                    </div>
                                    <div>
                                        <img src="@/assets/images/condition2.png" alt="">
                                    </div>
                                    <div>
                                        <img src="@/assets/images/condition3.png" alt="">
                                    </div>
                                    <div>
                                        <img src="@/assets/images/condition4.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-show="userTitleIndex==2?true:false" class="msg-info-over">
                            <div class="internet-illness">
                                <p>
                                    <span>刘晓霞</span>
                                    <span>50</span>
                                    <span>女</span>
                                </p>
                                <p>身份证号:500230198812027652</p>
                                <p>看诊时间:2020-02-20</p>
                            </div>
                            <div class="room-user-condition">
                                <p>
                                    <span>病情主诉</span>
                                </p>
                                <p>之前高血压一直维持低压100左右，高压140左右，自从上个月有一次外面干活天气太热，头晕，回来量血压，低压都140左右，高压180左右，一直持续到现在，吃降压药血压也没降下来，现在这样的情况应该如何处理？现在没有出现头晕。</p>
                            </div>
                            <div class="room-user-condition">
                                <p>
                                    <span>现病史</span>
                                </p>
                                <div class="now-illness">经过诊断判断为高血压患者，需要长期服药达到降压效果。</div>
                            </div>
                            <div class="room-user-condition">
                                <p>
                                    <span>已开处方</span>
                                </p>
                                <p>豪降之 厄贝沙坦分散片 </p>
                            </div>
                            <div class="room-user-condition">
                                <p>
                                    <span>病情主诉</span>
                                </p>
                                <p>之前高血压一直维持低压100左右，高压140左右，自从上个月有一次外面干活天气太热，头晕，回来量血压，低压都140左右，高压180左右，一直持续到现在，吃降压药血压也没降下来，现在这样的情况应该如何处理？现在没有出现头晕。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeIndex:0,

            userList:[
                {img:require('@/assets/images/perImg.png'),name:"刘晓霞",age:50,gender:"女",msg:"之前血压一直维持低之前血压一直维持低之前血压一直维持低"},
                {img:require('@/assets/images/perImg.png'),name:"刘晓霞",age:50,gender:"女",msg:"之前血压一直维持低之前血压一直维持低之前血压一直维持低"},
                {img:require('@/assets/images/perImg.png'),name:"刘晓霞",age:50,gender:"女",msg:"之前血压一直维持低之前血压一直维持低之前血压一直维持低"},
                {img:require('@/assets/images/perImg.png'),name:"刘晓霞",age:50,gender:"女",msg:"之前血压一直维持低之前血压一直维持低之前血压一直维持低"},
                {img:require('@/assets/images/perImg.png'),name:"刘晓霞",age:50,gender:"女",msg:"之前血压一直维持低之前血压一直维持低之前血压一直维持低"},
            ],

            msgList:[
                {
                    type:0,//0文字,1.图文,2.文件
                    user:"other",//病人
                    img:require('@/assets/images/perImg.png'),
                    msg:"之前血压一直维持低压100左右，高压140左右，上个月有一次外面干活感到头特别的晕"
                },

                {
                    type:0,//0文字,1.图文,2.文件
                    user:"me",//本人
                    img:require('@/assets/images/userImg2.png'),
                    msg:"您好，为方便问诊，请描述一下血压最高值、目前的药物用法，以及血压控制情况？另外您的大动脉CTA存在继发性高血压的因素，是否测量过四肢血压？是否在心外科或血管外科就诊过？"
                },

                {
                    type:0,//0文字,1.图文,2.文件
                    user:"other",//病人
                    img:require('@/assets/images/perImg.png'),
                    msg:"去医院时血压198/113，现在降到150左右，低压正常  "
                },

                {
                    type:0,//0文字,1.图文,2.文件
                    user:"me",//本人
                    img:require('@/assets/images/userImg2.png'),
                    msg:"您的这种情况药物治疗效果往往不理想，建议到血管外科（有些医院是心外科）就诊，评估是否能够做手术，手术有微创和传统两种方法，如何选择取决于外科医生。"
                }
            ],

            input_content:"",

            userTitleIndex:1,

            fun: 0,

            is_emoji: 0,
        }
    },
    
    methods: {
        refScroll(){
            this.$nextTick(() => {
                var container = document.querySelector('.msg-list')
                container.scrollTop = container.scrollHeight
            })
            // this.input_content = ''
        },

        emoji(event) {
            let e = event.currentTarget
            this.input_content += e.innerText
            document.getElementById('input').focus()
            this.hide()
        },

        show() {
            this.fun = 1
        },

        showEmoji() {
            if (this.is_emoji == 0) {
                this.show()
                this.is_emoji = 1
            } else {
                this.hide()
            }
        },

        hide() {
            this.fun = 0
            this.is_emoji = 0
        },

        submit() {
            const that = this
            if (that.input_content.length <= 1) {
                return false;
            }
            // that.msgs.push({
            // 	imgURL:JSON.parse(sessionStorage.getItem('user')).avatar,
            // 	msg_type: 1, //1文字,2图片,3音频,4视频
            // 	type: 1, //1自己,2对方
            // 	content: that.input,
            // })
            that.send(that.input)
            that.input = ''
            that.scroll()
        },
    },  
}
</script>
<style scoped>
    .chat-room{
        padding: 20px 0 100px 0;
    }

    .chat-room-par{
        width: 100%;
        height: 800px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        box-sizing: border-box;
        border: 1px solid #eff0f2;
        border-radius: 5px;
        overflow: hidden;
    }

    .chat-room-left{
        width: 245px;
        height: 100%;
    }

    .chat-info-top{
        width: 100%;
        height: 107px;
        background: #5a75f6;
        padding: 19px 0 22px 17px;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .chat-info-top>div:last-child{
        margin-left: 12px;
        color: #fff;
        font-size: 16px;
    }

    .chat-info-top>div:last-child>p:last-child{
        margin-top: 11px;
    }

    .chat-info-bottom{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-right: 1px solid #eff0f2;
    }

    .chat-info-bottom div{
        width: 50%;
        height: 57px;
        background: #fbfbfb;
        text-align: center;
        line-height: 56px;
        color: #898888;
        box-sizing: border-box;
        border-bottom: 1px solid #f2f2f2;
        border-right: 1px solid #f2f2f2;
        position: relative;
    }

    .chat-info-bottom div .after{
        position: absolute;
        top: 5px;
        right: 26px;
        display: block;
        width: 15px;
        height: 15px;
        border-radius: 15px;
        line-height: 15px;
        font-size: 8px;
        background: #46cf98;
        color: #fff;
    }

    .chat-info-bottom>div:last-child{
        border-right: 0;
    }

    .chat-info-bottom div.active{
        background: #ffffff;
        color: #5a75f6;
        border-bottom: 0;
    }

    .chat-info-bottom div.active .after{
        display: none;
    }

    .chat-user-list{
        border-right: 1px solid #eff0f2;
        box-sizing: border-box;
        background: #fff;
        height: calc(100% - 57px - 107px);
    }

    .chat-user-list>div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 17px 0 14px 11px;
        background: #fff;
    }

    .chat-user-list>div:hover{
        background: #f2f2f2;
        cursor: pointer;
    }

    .chat-user-list>div.chating{
        background: #f2f2f2;
    }

    .chat-user-list>div>div:first-child{
        margin-right: 13px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .chat-user-list>div>div:last-child{
        width: 142px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .chat-user-list i{
        font-style: normal;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }

    .chat-user-list div p span{
        font-size: 16px;
        color: #353535;
    }

    .chat-user-list div i{
        font-size: 14px;
        color: #898888;
        margin-top: 10px;
    }

    .chat-room-right{
        width: calc(100% - 245px);
        height: 100%;
        background: #fff;
    }

    .room-right-top{
        height: 68px;
        background: #fcfcfc;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 29px 0 27px;
        border-bottom: 1px solid #eff0f2;
    }

    .room-right-top p span{
        font-size: 18px;
        color: #353535;
    }

    .room-right-top p span+span{
        margin-left: 22px;
    }

    .room-right-top a{
        display: block;
        width: 98px;
        height: 33px;
        line-height: 33px;
        border-radius: 33px;
        text-align: center;
        background: #ff5050;
        color: #fff;
    }

    .room-msg-list{
        height: 729px;
        display: flex;
        justify-content: flex-start;
    }

    .room-msg-content{
        width: 661px;
    }
    
    .room-msg-info{
        width: 292px;
        height: 100%;
        border-left: 1px solid #eff0f2;
        box-sizing: border-box;
    }

    .msg-list{
        height: 608px;
        box-sizing: border-box;
        border-bottom: 1px solid #eff0f2;
        padding: 30px 30px 8px 30px;
    }

    /* 设置滚动条的样式 */
    .msg-list::-webkit-scrollbar {
        width: 10px;
    }

    /* 滚动槽 */
    .msg-list::-webkit-scrollbar-track {
        border-radius: 8px;
    }

    /* 滚动条滑块 */
    .msg-list::-webkit-scrollbar-thumb {
        border-radius: 8px;
        border: 2px solid rgb(95, 95, 95);
        box-shadow: 8px 0 0 rgb(95, 95, 95) inset;
    }

    .msg-list::-webkit-scrollbar-thumb:hover {
        box-shadow: 8px 0 0 rgb(95, 95, 95) inset;
        border-color: rgb(95, 95, 95);
    }

    .msg-list::-webkit-scrollbar-thumb:window-inactive {
        display: none;
    }

    .msg-list::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }

    .msg-list:hover::-webkit-scrollbar {
        width: 5px;
    }

    .msg-list::-webkit-scrollbar-thumb {
        border-radius: 10px;
        border: 2px solid rgb(231, 231, 231);
        box-shadow: 5px 0 0 rgb(231, 231, 231) inset;
    } 

    .msg-list {
        overflow-y: overlay;
        word-wrap: break-word;
    }

    .msg-list>div>div{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 48px;
        width: 70%;
    }

    .msg-list>div>div>div:first-child{
        transform: translateY(-7px);
    }

    .msg-list .mepar{
        display: flex;
        justify-content: flex-end;
    }

    .msg-list div.me{
        flex-direction: row-reverse;
    }

    .item-msg{
        background: #dce1f7;
        padding: 16px 22px;
        line-height: 24px;
        font-size: 14px;
        border-radius: 7px;
        border-top-left-radius: 0;
        margin-left: 15px;
        white-space: pre-wrap;
    }

    .me .item-msg{
        border-radius: 7px;
        border-top-right-radius: 0;
        margin-left: 0;
        margin-right: 15px;
    }

    .send-msg{
        height: 121px;
        padding: 15px 25px;
        box-sizing: border-box;
        position: relative;
    }

    .send-msg-functions{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .send-msg-functions div+label{
        margin-left: 18px;
    }

    .send-msg-btn{
        position: absolute;
        z-index: 2;
        right: 20px;
        bottom: 20px;
    }

    .send-msg-btn button{
        width: 85px;
        height: 35px;
        border-radius: 5px;
        background: #5a75f6;
        color: #fff;
        border: 0;
        white-space: pre;
    }

    .send-msg textarea{
        width: 100%;
        box-sizing: border-box;
        border: 0;
        height: calc(100% - 24px);
        resize: none;
        outline: none;
        padding: 4px;
        color: #353535;
        line-height: 22px;
    }

    /* 设置滚动条的样式 */
    .send-msg textarea::-webkit-scrollbar {
        width: 10px;
    }

    /* 滚动槽 */
    .send-msg textarea::-webkit-scrollbar-track {
        border-radius: 8px;
    }

    /* 滚动条滑块 */
    .send-msg textarea::-webkit-scrollbar-thumb {
        border-radius: 8px;
        border: 2px solid rgb(95, 95, 95);
        box-shadow: 8px 0 0 rgb(95, 95, 95) inset;
    }

    .send-msg textarea::-webkit-scrollbar-thumb:hover {
        box-shadow: 8px 0 0 rgb(95, 95, 95) inset;
        border-color: rgb(95, 95, 95);
    }

    .send-msg textarea::-webkit-scrollbar-thumb:window-inactive {
        display: none;
    }

    .send-msg textarea::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }

    .send-msg textarea:hover::-webkit-scrollbar {
        width: 5px;
    }

    .send-msg textarea::-webkit-scrollbar-thumb {
        border-radius: 10px;
        border: 2px solid rgb(231, 231, 231);
        box-shadow: 5px 0 0 rgb(231, 231, 231) inset;
    } 

    .send-msg textarea {
        overflow-y: overlay;
        word-wrap: break-word;
    }

    .room-user-topTitle{
        display: flex;
    }

    .room-user-topTitle div{
        width: 50%;
        height: 47px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 3px solid #fcfcfc;
        background: #fcfcfc;
        border-bottom: 1px solid #eff0f2;
        font-size: 16px;
        color: #5a5a5a;
    }

    .room-user-topTitle div+div{
        border-left: 1px solid #eff0f2;
    }

    .room-user-topTitle div.titleActive{
        border-top-color: #5a75f6;
        color: #5a75f6;
        background: #fff;
        border-bottom-color: #fff;
    }

    .room-user-name{
        width: 100%;
        height: 60px;
        padding-left: 18px;
        display: flex;
        align-items: center;
        font-size: 16px;
        box-sizing: border-box;
        color: #353535;
        border-bottom: 1px solid #eff0f2;
    }

    .room-user-name span+span,.internet-illness span+span{
        margin-left: 22px;
    }

    .room-user-condition{
        padding: 30px 20px 0 20px;
    }

    .room-user-condition p span{
        display: inline-block;
        padding-bottom: 16px;
        border-bottom: 2px solid #5a75f6;

    }

    .room-user-condition p+p{
        margin-top: 20px;
        font-size: 13px;
        color: #999999;
        line-height: 22px;
    }

    .room-user-conditionPic{
        display: flex;
        flex-wrap: wrap;
        margin-top: 28px;
    }

    .room-user-conditionPic div{
        width: 50%;
        height: 106px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    .now-illness{
        padding: 18px 6px 23px 11px;
        border: 1px solid #e7e7e7;
        box-sizing: border-box;
        margin-top: 23px;
        font-size: 14px;
        color: #999999;
    }

    .internet-illness{
        width: 100%;
        padding: 25px 0 25px 18px;
        font-size: 16px;
        box-sizing: border-box;
        color: #353535;
        border-bottom: 1px solid #eff0f2;
    }

    .internet-illness p+p{
        margin-top: 15px;
    }

    .msg-info-over>div{
        width: 100%;
        box-sizing: border-box;
    }

    /* 设置滚动条的样式 */
    .msg-info-over::-webkit-scrollbar {
        width: 10px;
    }

    /* 滚动槽 */
    .msg-info-over::-webkit-scrollbar-track {
        border-radius: 8px;
    }

    /* 滚动条滑块 */
    .msg-info-over::-webkit-scrollbar-thumb {
        border-radius: 8px;
        border: 2px solid rgba(245, 27, 27, 0);
        box-shadow: 8px 0 0 green inset;
    }

    .msg-info-over::-webkit-scrollbar-thumb:hover {
        box-shadow: 8px 0 0 rgb(138, 138, 138) inset;
    }

    .msg-info-over::-webkit-scrollbar-thumb:window-inactive {
        display: none;
    }

    .msg-info-over::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }

    .msg-info-over:hover::-webkit-scrollbar {
        width: 10px;
    }

    .msg-info-over::-webkit-scrollbar-thumb {
        border-radius: 10px;
        border: 2px solid rgba(0,0,0,0);
        box-shadow: 10px 0 0 rgb(216, 216, 216) inset;
    } 

    .msg-info-over {
        height: calc(100% - 51px);
        overflow-y: overlay;
        word-wrap: break-word;
    }

    .more_box{
        position: absolute;
        top: -200px;
        left: -1px;
        background: #fff;
    }

    .emoji-list {
		width: 500px;
		display: flex;
		flex-wrap: wrap;
		height: 200px;
		overflow-y: auto;
		border: 1px solid rgba(0, 0, 0, .1);
		padding: 10px;
		padding-right: 0;
		box-sizing: border-box;
	}

	.emoji-list li {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		font-size: 20px;
	}


	/*滚动条样式*/
	.emoji-list::-webkit-scrollbar,
	#chat_box::-webkit-scrollbar {
		/*滚动条整体样式*/
		width: 4px;
		/*高宽分别对应横竖滚动条的尺寸*/
		height: 4px;
	}

	.emoji-list::-webkit-scrollbar-thumb,
	#chat_box::-webkit-scrollbar-thumb {
		/*滚动条里面小方块*/
		border-radius: 5px;
		-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
		background: rgba(0, 0, 0, 0.2);
	}

	.emoji-list::-webkit-scrollbar-track,
	#chat_box::-webkit-scrollbar-track {
		/*滚动条里面轨道*/
		-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
		border-radius: 0;
		background: rgba(0, 0, 0, 0.1);
	}
</style>