<template>
	<view class="content">
		<scroll-view class="scrollView" scroll-x="true" scroll-y="true">
			<view class="bookItemView" v-bind:key="bIdx" v-for="(book, bIdx) in books" @click="goBookDetailPage(book.bookGUID)">
				<image class="image" mode="aspectFit" :src="book.bookCoverURL"></image>
				<text class="bookNameLable">{{book.bookName}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import MXRUtil from '../common/mxrutil.js'
	
	export default {
		data() {
			return {
				recommendId: undefined,
				books: []
			}
		},
		onLoad(option) {
			if (option.recommendId) {
				this.recommendId = option.recommendId
			}
			if (option.moduleName !== undefined) {
				uni.setNavigationBarTitle({
					title: option.moduleName ? option.moduleName : '专区专区'
				})
			}
		},
		onShow() {
			if (this.recommendId && this.books.length <= 0) {
				MXRUtil.mxr_get('/core/home/recommend/' + this.recommendId + '/books', null, (err, res) => {
					if (err) {
						console.log('<err> >>> get subject books err: ', err)
					} else {
						console.log('>>> get subject books : ', res)
						this.books = res.data.Body.list
					}
				})
			}
		},
		methods: {
			goBookDetailPage(bookGuid) {
				uni.navigateTo({
					url: 'BookDetail?bookGuid=' + bookGuid
				})
			}
		},
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-left: 40upx;
		padding-top: 40upx;
		padding-bottom: 40upx;
		/* padding-right: 40upx; */
	}
	.scrollView {
		width: 100%;
	}
	.bookItemView {
		margin-right: 35upx;
		display: inline-block;
		flex-direction: column;
		width: 200upx;
		border-radius: 8upx;
		padding-bottom: 10upx;
	}
	.image {
		width: 200upx;
		height: 280upx;
		border-radius: 8upx;
	}
	.bookNameLable {
		display: flex;
		width: 200upx;
		font-size: 28upx;
		color: #666;
		max-height: 76upx;
		/* white-space: nowrap; */
		overflow: hidden;
	}
	.scrollView :first {
		margin-top: 10upx;
	}
	
</style>
