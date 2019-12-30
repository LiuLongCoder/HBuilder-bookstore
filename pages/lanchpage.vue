<template>
	<view class="content">
		<text @click="goBookStorePage">{{userId}}</text>
	</view>
</template>

<script>
	import MXRUtil from '../common/mxrutil.js'
	export default {
		data() {
			return {
				userId: MXRUtil.userId
			}
		},
		onLoad() {
			
		}, 
		methods: {
			goBookStorePage() {
				uni.navigateBack({
					delta:1
				})
			}
		},
	}
</script>

<style>
</style>
