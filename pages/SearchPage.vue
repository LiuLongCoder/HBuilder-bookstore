<template>
	<view class="content"></view>
</template>

<script>
	export default {
		data() {
			return {
				key: value
			}
		},
		onLoad() {
			
		},
		/**
		 * 当 searchInput 输入时触发
		 */
		onNavigationBarSearchInputChanged(e) {
			let text = e.text;
			if (text) {
				console.log('changed : ', text)
			}
		},
		/**
		 * 点击软键盘搜索按键触发
		 */
		onNavigationBarSearchInputConfirmed(e)  {
			let text = e.text;
			if (text) {
				console.log("confirm : ", text)
				// #ifdef APP-PLUS
				/// 强制隐藏键盘
				plus.key.hideSoftKeybord()
				// #endif
			}
		}
	}
</script>

<style>
</style>
