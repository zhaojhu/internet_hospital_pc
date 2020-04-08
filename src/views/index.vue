<template>
	<div>
		<div class="home-content-top">
			<div>
				<div class="home-top-logo">
					<img src="@/assets/images/logo.png" alt="">
				</div>
				<div class="home-top-menu">
					<slot name="bottomTable">
						<router-link :to="{name:item.router}" v-for="(item,i) in menu" :key="i" :class="allMenu==i+1?'active':''">{{item.name}}</router-link>
					</slot>
				</div>
				<div class="home-top-user">
					<img v-show="msg>0" src="@/assets/images/msg.png" alt="">
					<img v-show="msg==0" src="@/assets/images/noMsg.png" alt="">
					<p v-show="user!=null">
						<span>欢迎您 , </span>
						<span>{{user.name}}</span>
					</p>
					<p v-show="user==null">
						<router-link to="/">登录</router-link>
						<router-link to="/">注册</router-link>
					</p>
				</div>
			</div>
		</div>

		<div class="home-secend-top" v-if="showHeader">
			<my-header :funs="funs" :funsIndex="funsIndex"></my-header>
		</div>

		<div class="main">
			<div>
				<router-view></router-view>
			</div>
		</div>

		<div class="home-bottom-par">
			<div>
				<p>网友、医生言论仅代表其个人观点，不代表本站同意其说法，本站不承担由此引起的法律责任</p>
				<p>医治云康互联网提供平台支持 版权所有，翻版必究 渝ICP备13001276号-6 渝公网安备 50010502000399</p>
			</div>
		</div>
	</div>
</template>
<script>
	import myHeader from "@/components/header"
	export default {
		components: {
			myHeader
		},

		data() {
			return {

				menu: [
					{
						name: "我的接诊",
						router: "healed"
					},

					{
						name: "在线开方",
						router: "prescription"
					},

					{
						name: "排班管理",
						router: "Scheduling"
					},

					{
						name: "我的认证",
						router: "waitReporting"
					},
				],

				msg: 0,

				user: {
					name: "张晓龙"
				},

				funs: [],

				funs1: [
					{
						name: "已接诊",
						img: require('@/assets/images/reviced.png'),
						imgActive: require('@/assets/images/revicedA.png'),
						router: "healed"
					},

					{
						name: "正在接诊",
						img: require('@/assets/images/reviced.png'),
						imgActive: require('@/assets/images/revicedA.png'),
						number: 3,
						color: "#ff5050",
						router: "healing"
					},

					{
						name: "待接诊",
						img: require('@/assets/images/revice.png'),
						imgActive: require('@/assets/images/reviceA.png'),
						number: 2,
						color: "#46cf98",
						router: "waitingHeal"
					},
				],

				funs2: [
					{
						name: "已开处方",
						img: require('@/assets/images/prescriptioned.png'),
						imgActive: require('@/assets/images/prescriptionedA.png'),
						router: "prescription"
					},

					{
						name: "开处方",
						img: require('@/assets/images/prescription.png'),
						imgActive: require('@/assets/images/prescriptionA.png'),
						number: 3,
						color: "#ff5050",
						router: "openPrescription"
					},
				],

				funsIndex: 0,

				showHeader: false,

				routeName:this.$route.name,

				allMenu:-1,
			}
		},
		watch: {
			$route() {

				switch (this.$route.name) {

					case 'healed':
						this.funsIndex = 0
						this.showHeader = true
						this.funs=this.funs1
						this.allMenu=1
						break;

					case 'healing':
						this.funsIndex = 1
						this.showHeader = true
						this.funs=this.funs1
						this.allMenu=1
						break;

					case 'waitingHeal':
						this.funsIndex = 2
						this.showHeader = true
						this.funs=this.funs1
						this.allMenu=1
						break;

					case 'prescription':
						this.funsIndex = 0
						this.showHeader = true
						this.funs=this.funs2
						this.allMenu=2
						break;

					case 'checkPrescription':
						this.funsIndex = 0
						this.showHeader = true
						this.funs=this.funs2
						this.allMenu=2
						break;

					case 'openPrescription':
						this.allMenu=2
						break;

					case 'Scheduling':
						this.allMenu=3
						break;

					case 'chat':
						this.allMenu=1
						break;

					case 'waitReporting':
						this.allMenu=4
						break;

					default:
						this.showHeader = false
						this.allMenu=-1
						break;
				}
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},

			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			
			i(data) {
				this.funsIndex = data
			}
		},
	}
</script>
<style>
	.home-content-top {
		background: #5a75f6;
		height: 82px;
		flex-shrink: 0;
		;
	}

	.home-content-top>div {
		width: 1200px;
		margin: 0 auto;
		display: flex;
		height: 100% !important;
		justify-content: flex-start;
		align-items: center;
	}

	.home-content-top>div>div {
		height: 100%;
		display: flex;
		align-items: center;
	}

	.home-top-logo {
		margin-right: 40px;
	}

	.home-top-menu {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.home-top-menu a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 200px;
		height: 100%;
		color: #f7f7ff;
		font-size: 16px;
	}

	.home-top-menu a.active {
		background: linear-gradient(to bottom, #767dfb, #5b5ffb);
	}

	.home-top-user{
		margin-left: 40px;
	}

	.home-top-user img {
		margin-right: 20px;
	}

	.home-top-user p {
		color: #ffffff;
		font-size: 16px;
	}

	.home-top-user p a+a::before {
		content: '|';
		margin: 0 4px;
	}

	.home-bottom-par {
		width: 100%;
		height: 115px;
		background: #e8eff6;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.home-bottom-par div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.home-bottom-par p {
		width: 1200px;
		min-width: 1200px;
		text-align: center;
		font-size: 14px;
		color: #727272;
	}

	.home-bottom-par p+p {
		margin-top: 15px;
	}

	.main {
		width: 100%;
		background: #f4f5fa;
	}

	.main>div {
		width: 1200px;
		margin: 0 auto;
	}
</style>
