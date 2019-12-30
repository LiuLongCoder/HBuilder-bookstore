<template>
	<view class="content">
		<scroll-view>
			<view class="contentWrapper" v-bind:key="fIdx" v-for="(floor, fIdx) in dataArray">
				<!-- 图书列表楼层 -->
				<view class="floorView" v-if="floor.type === 1">
					<scroll-view class="bookListScroller" scroll-x="true" scroll-y="false" show-scrollbar="false">
						<view class="bookView" v-bind:key="iIdx" v-for="(item, iIdx) in floor.items">
							<image class="bookImage" mode="aspectFill" resize="stretch" :src="item.itemIcon"></image>
							<text class="bookNameLabel">{{item.itemName}}</text>
						</view>
					</scroll-view>
				</view>
				
				<!-- 专区楼层 -->
				<view class="floorView" v-if="floor.type === 3 && floor.items.length > 0">
					<text class="floorTitleLabel">{{floor.moduleName}}</text>
					<image class="image" mode="aspectFill" resize="stretch" :src="floor.items[0].itemIcon"></image>
				</view>
				
				<!-- 两个专区楼层 -->
				<view class="floorView" v-if="floor.type === 4">
					<view v-if="floor.items.length >= 2">
						<text class="floorTitleLabel">{{floor.moduleName}}</text>
						<view class="twoTopicView">
							<view class="oneTopicView">
								<image class="towTopicImage" mode="aspectFill" resize="stretch" :src="floor.items[0].itemIcon"></image>
								<text class="topicTitleLabel">{{floor.items[0].itemName}}</text>
							</view>
							<view class="oneTopicView secondTopicView">
								<image class="towTopicImage" mode="aspectFill" resize="stretch" :src="floor.items[1].itemIcon"></image>
								<text class="topicTitleLabel">{{floor.items[1].itemName}}</text>
							</view>
						</view>
					</view>
				</view>
				
				<!--专区楼层 UI竖着排列-->
				<view class="floorView" v-if="floor.type === 5 && floor.items.length == 3">
					<text class="floorTitleLabel">{{floor.moduleName}}</text>
					<view class="thirdItemContainer">
						<view class="thirdItemCell" v-bind:key="iIdx" v-for="(item, iIdx) in floor.items">
							<image class="thirdImg" resize="stretch" :src="item.itemIcon"></image>
						</view>
					</view>
				</view>
				
				<!-- 标签列表楼层 -->
				<view  class="floorView" v-if="floor.type === 6">
					<scroll-view class="tagScrollView" scroll-x="true">
						<view v-bind:key="iIdx" v-for="(item, iIdx) in floor.items">
							<text class="tagLabel">{{item.itemName}}</text>
						</view>
					</scroll-view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import MXRUtil from '../../common/mxrutil.js'
	let MXREncryption = MXRUtil.MXREncryption
	const requestUrl = MXRUtil.MXRConstant.serverHost + '/book/detail/9AC6577B5A444E4A9810119C6A4DFBF7'
	const duration = 2000
	console.log('userId : ', MXRUtil.userId)
	export default {
		data() {
			return {
				title: 'Hello',
				hasBanner: false,
				bannerArray: [],
				dataArray: [],
				hasMenu: false,
				menuArray: [],
				isLoadingShow: true,
				loadingType: 'trip'
			}
		},
		onLoad() {
			this._request()
		},
		methods: {
			_request() {
				MXRUtil.mxr_get('/core/home/0', {
					page: '1',
					rows: '20',
					search: 'normal',
					topNums: '20',
					region: '0',
					uid: MXRUtil.userId,
					deviceId: '5F3E6EB4-CA01-42B0-BD77-0E72DA409618'
				}, (err, res) => {
					if (err) {
						console.log('>>> err: ', err)
					} else {
						this.dataArray = res.data.Body.list
						console.log('>>> res: ', this.dataArray)
					}
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-left: 20upx;
		padding-right: 20upx;
	}
	
	
	/* 楼层 */
	.floorView {
		margin-top: 20upx;
		overflow: hidden;
	}
	.floorTitleLabel {
	    margin-bottom: 10upx;
	    color: #333;
	    font-size: 36upx;
		display: block;
	}
	.image {
	    /* flex: 1; */
	    width: 710upx;
	    height: 300upx;
	    border-radius: 10upx;
	}
	/* 图书列表楼层 */
	.bookListScroller {
/* 	    width: 720px;
	    height: 320px; */
	    flex-direction: row;
		width: 100%;
		white-space: nowrap;
	}
	.bookView {
		display: inline-block;
	    width: 190upx;
	    height: 320upx;
	    /* margin-left: 20upx; */
	    margin-right: 20upx;
		overflow-wrap: break-word;
		overflow: hidden;
	}
	.bookImage {
	    width: 190upx;
	    height: 250upx;
	    border-radius: 8px;
		display: block;
	}
	.bookNameLabel {
		width: 190upx;
	    margin-top: 6upx;
	    font-size: 24upx;
	    color: #666;
	    lines: 2;
		font-size: 24rpx;
	}
	
	/* 两个专区楼层 */
	.twoTopicView {
	    /* flex-direction: row; */
		display: flex;
	    justify-content:space-between;
		width: 100%;
	 }
	.oneTopicView {
	    flex: 1;
		display: inline-block;
	}
	.secondTopicView {
		direction: rtl;
	}
	.towTopicImage {
	    width: 340upx;
	    height: 300upx;
	    border-radius: 8upx;
	}
	.topicTitleLabel {
		width: 340upx;
	    margin-top: 10upx;
	    font-size: 30upx;
	    color: #666;
	    lines: 1;
		overflow-wrap: break-word;
		overflow: hidden;
		display: block;
	}
	/* 三个专区 */
	.thirdItemContainer {
		display: flex;
	    /* flex-direction: row; */
	    justify-content: space-between;
	}
	.thirdItemCell {
	    width: 220upx;
	}
	.thirdImg {
	    width: 220upx;
	    height: 180upx;
	    border-radius: 8upx;
	}
	.thirdTitleLabel {
	    margin-top: 6upx;
	    font-size: 24upx;
	    color: #666;
		lines: 1;
	}
	  
	/* 标签列表楼层 */
	.tagScrollView {
		flex-direction: row;
	}
	.tagLabel {
		border-radius: 8px;
		padding-top: 10px;
		padding-bottom: 10px;
		padding-left: 16px;
		padding-right: 16px;
		margin-right: 20px;
		color: #333;
		background-color:blueviolet;
	}
</style>
