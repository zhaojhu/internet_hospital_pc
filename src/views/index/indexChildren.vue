<template>
	<div>
			<div class="main-right-top">
				<div class="main-right-topTitle">
					<div>待处理事项</div>
					<div>
						<img src="@/assets/images/ref.png" alt="">
						<span>刷新</span>
					</div>
				</div>
				<div class="main-right-topCon">
					<functions :img="require('@/assets/images/phone.png')" name="电话问诊" :number="0" details="暂无问诊患者" colorValue="#5a75f6"></functions>
					<functions :img="require('@/assets/images/imgWord.png')" name="图文问诊" :number="3" details="位患者正在等待" colorValue="#71d6fc"></functions>
					<functions :img="require('@/assets/images/phone.png')" name="在线开方" :number="2" details="位患者需要开具处方" colorValue="#5a75f6"></functions>
				</div>
			</div>
			<div class="main-right-bottom">
				<div class="main-right-top">
					<div class="main-right-topTitle">
						<div>我的排班</div>
						<div>
							<span @click="routerView">添加排班</span>
						</div>
					</div>
					<div class="main-right-topCon">
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
				</div>
			</div>
	</div>
</template>
<script>
	import functions from '@/components/function';
	export default {
		components: {
			functions,
		},

		data() {
			return {
				value: new Date(),
				calendarData: [
					{
						months: ['04', '11'],
						days: ['15'],
						things: '早班'
					},

					{
						months: ['10', '11'],
						days: ['02'],
						things: '早班'
					},

					{
						months: ['11'],
						days: ['02'],
						things: '早班'
					},

					{
						months: ['11'],
						days: ['02'],
						things: '早班'
					}
				],
			}
		},
		
		methods: {
			routerView(){
				this.$router.push({name:'Scheduling'})
			}
		},
	}
</script>
<style scoped>
	.main-right-top {
		width: 100%;
		padding: 30px 30px;
		box-sizing: border-box;
		background: #fff;
	}

	.main-right-topCon {
		width: 100%;
		display: flex;
		overflow-x: auto;
		overflow-y: hidden;
	}

	.main-right-topTitle {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 20px;
		border-bottom: 1px solid #eeeeee;
		margin-bottom: 30px;
	}

	.main-right-topTitle>div {
		font-size: 18px;
		color: #353535;
		user-select: none;
	}

	.main-right-topTitle>div:last-child {
		color: #788ef8;
		font-size: 14px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	.main-right-topTitle img {
		width: 16px;
		height: 16px;
		margin-right: 8px;
	}

	.main-right-bottom {
		margin-top: 15px;
	}

	.main-right-topCon /deep/ .el-calendar__body {
		padding: 0;
	}

	.main-right-topCon /deep/ .el-calendar__header {
		display: none;
	}

	.function-content+.function-content {
		margin-left: 20px;
	}

	.function-content:hover {
		border-color: rgb(216, 216, 216);
		box-shadow: 0 0 10px rgb(216, 216, 216);
		cursor: pointer;
	}
</style>
