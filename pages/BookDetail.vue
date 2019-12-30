<template>
	<view class="content">
		<scroll-view v-if="bookDetailM">
			<view class="bookInfoView">
				<view class="bookImageContainer" :style="bookImageContainerStyle">
					<image class="bookImage" :src="bookDetailM && bookDetailM.bookCoverURL" :style="bookImageStyle"></image>
				</view>
				<text class="vipTag" v-if="bookDetailM && bookDetailM.vipFlag">vip</text>
				<text class="bookNameText">{{bookDetailM && bookDetailM.bookName}}</text>
				<text class="createTimeText" style="color: #999999; font-size: 20upx;margin-top: 20upx;">更新时间：{{bookDetailM.bookUpdateTime}}</text>
				<view class="simpleInfoView inline">
					<view class="oneInfoView">
						<text class="oneInfoText">{{bookDetailM && bookDetailM.bookPublisherName}}</text>
						<text class="oneInfoTitle">发布人</text>
					</view>
					<view class="VLine"></view>
					<view class="oneInfoView">
						<text class="oneInfoText">{{numberToStr(bookDetailM && bookDetailM.bookReadTimes)}}</text>
						<text class="oneInfoTitle">浏览数</text>
					</view>
					<view class="VLine"></view>
					<view class="oneInfoView">
						<text class="oneInfoText">{{numberToStr(bookDetailM && bookDetailM.bookDownloadTimes)}}</text>
						<text class="oneInfoTitle">下载数</text>
					</view>
				</view>
				<text class="bookDescText bookDescLabelShowSome">{{bookDetailM && bookDetailM.bookDESC}}</text>
			</view>
			<!-- 本书支持 -->
			<view v-if="bookDetailM && bookDetailM.supportModelListNew && bookDetailM.supportModelListNew.length > 0">
				<view class="HLine"></view>
				<view class="supportTypeView inline">
					<text class="supportTypeTitle">本书支持:</text>
					<text class="supportTypeText" v-bind:key="sIdx" v-for="(supportModel, sIdx) in bookDetailM.supportModelListNew">{{supportModel.name}}</text>
				</view>
			</view>
			<!-- 标签 -->
			<view v-if="bookTags && bookTags.length > 0">
				<view class="HLine"></view>
				<scroll-view class="bookTagsScroller inline" scroll-x="true">
					<text class="bookTagText" v-bind:key="bIdx" v-for="(bookTag, bIdx) in bookTags">{{bookTag.name}}</text>
				</scroll-view>
			</view>
			<!-- 所属专区 -->
			<view class="zoneListContainer" v-if="zoneArray && zoneArray.length > 0">
				<view class="HLine"></view>
				<text class="zoneTitleText">所属专区</text>
				<view class="zoneCell" v-bind:key="zIdx" v-for="(zone, zIdx) in zoneArray" @click="goSubjectBooksPage(zone.id)">
					<text class="zoneNameText">{{zone.name}}</text>
					<image class="zoneImage" mode="aspectFill" :src="zone.cover"></image>
				</view>
			</view>
			<!-- 相关推荐 -->
			<view class="recommendBookContainer" v-if="recommendBooks && recommendBooks.length > 0">
				<view class="HLine"></view>
				<text class="recommendBookTitleText">相关推荐</text>
				<scroll-view class="recommendBookScroller" v-if="recommendBooks && recommendBooks.length > 0" scroll-x="true">
					<view class="bookItemView" v-bind:key="bIdx" v-for="(book, bIdx) in recommendBooks" @click="goBookDetailPage(book.bookGUID)">
						<image class="bookItemImage" :src="book.bookCoverURL"></image>
						<text class="bookItemNameText">{{book.bookName}}</text>
					</view>
				</scroll-view>
			</view>
		</scroll-view>
		<button class="downBtn" type="primary" @click="downAction">下载</button>
		<button class="downBtn" type="primary" @click="readConfig">配置文件</button>
	</view>
</template>

<script>
	import MXRUtil from '../common/mxrutil.js'
	
	let docEntry			// doc的目录对象
	let bookDirEntry		// 该图书的目录对象
	let bookFielsSize = 0		// 这本书下载的fileist总大小
	let realBookFilesSize = 0
	let hasDownFilesSize = 0	// 已经下载的大小
	export default {
		components: {

		},
		data() {
			return {
				bookDetailM: undefined,
				bookGuid: '9AC6577B5A444E4A9810119C6A4DFBF7',
				bookIconPath: '',
				recommendBooks: [],
				bookTags: [],
				zoneArray: [],
				bookImageContainerStyle: {},
				bookImageStyle: {},
				bgStyle: {},
				imageSrc: ''
			}
		},
		onLoad(option) {
			if (option.bookGuid) {
				this.bookGuid = option.bookGuid
			}
		},
		onShow() {
			// #ifdef APP-PLUS
			plus.io.resolveLocalFileSystemURL('_documents', (entry) => {
				entry.getDirectory('books/' + this.bookGuid, {create:true, exclusive:false}, (newDirEntry) => {
					bookDirEntry = newDirEntry
					console.log('books dir Path : ', bookDirEntry.fullPath)
				}, (err) => {
					console.log('creat dir err', err)
				})
				docEntry = entry
				console.log('>>> 11, ', entry.fullPath)
				let dirReader = entry.createReader()
				dirReader.readEntries((entries) => {
					for (let key in entries) {
						if (entries[key].isFile) {
							entries[key].file( (file) => {
								console.log('>>>> test:', file)
							}, (e) => {
								console.log('>>> file err: ', e)
							})
						} 
						console.log('>>> isFile: ' + entries[key].isFile + '  , isDirectory: ' + entries[key].isDirectory)
						console.log(`>>> fileName : ${entries[key].name}`)
						
					}
				})
			}, (err) => {
				console.log('<err> get doc err:', err)
			})
			// #endif
			
			if (this.bookDetailM == null) {
				MXRUtil.mxr_get('/book/detail/' + this.bookGuid, null, (err, res) => {
					if (err) {
						console.error('<err> >>> get book detail err :', err);
					} else {
						this.bookDetailM = res.data.Body
						// console.log('res >>> ', res)
					}
				})
			}
			if (this.zoneArray == null || this.zoneArray.length === 0) {
				MXRUtil.mxr_get('/book/zone/' + this.bookGuid, null, (err, res) => {
					if (err) {
						console.error('<err> >>> get book zone err: ', err)
					} else {
						// console.log('>>> book zone :', res)
						this.zoneArray = res.data.Body
					}
				})
			}
			if (this.recommendBooks == null || this.recommendBooks.length === 0) {
				MXRUtil.mxr_get('/book/extension/' + this.bookGuid, null, (err, res) => {
					if (err) {
						console.error('<err> >>> get book extension err: ', err)
					} else {
						// console.log('>>> get book extension : ', res)
						this.recommendBooks = res.data.Body.recommendBooks
						this.bookTags = res.data.Body.bookTags
					}
				})
			}
		},
		methods: {
			readConfig () {
				MXRUtil.getLocalBookWithBookGuid(this.bookGuid, (err, bookJson) => {
					if (err) {
						console.error('<error> get book config err: ', err)
					} else {
						console.log('book json : ', bookJson)
					}
				})
			},
			numberToStr (number) {
				if (typeof number === 'number') {
					if (number / 10000 > 0) {
						let str = number / 10000.0 + ''
						if (str.indexOf('.') > -1) {
							return str.substring(0, Math.min(str.indexOf('.') + 2, str.length)) + '万'
						}
					}
				}
				return number
			},
			goBookDetailPage (bookGuid) {
				uni.navigateTo({
					url: 'BookDetail?bookGuid=' + bookGuid
				})
			},
			goSubjectBooksPage (recommendId) {
				uni.navigateTo({
					url: 'SubjectBooks?recommendId=' + recommendId
				})
			},
			appMoveFile (tempFilePath) {
				plus.io.resolveLocalFileSystemURL(
					// url: '_doc/uniapp_save/1577597163669.jpg'
					tempFilePath,
					(tmpEntry) => {
						let pathArray = tempFilePath.split('/')
						let fileName = pathArray.length && pathArray[pathArray.length - 1]
						let zuoK = fileName.indexOf('(')
						let youK = fileName.indexOf(')')
						if (zuoK !== -1 && youK > zuoK && fileName.length > youK) {
							let zuoStr = fileName.substring(0, zuoK)
							let youStr = fileName.substr(youK + 1)
							fileName = zuoStr + youStr
						}
						console.log('get file : >>>', tmpEntry.fullPath)
						if (bookDirEntry) {
							console.log('will move to file : ', fileName)
							tmpEntry.moveTo(bookDirEntry, fileName, (moveEntry) => {
								console.log('move success : ', moveEntry.fullPath)
								// 解压
								if (fileName.indexOf('.zip') != -1) {
									plus.zip.decompress(moveEntry.fullPath, bookDirEntry.fullPath, () => {
										console.log('decompress success : ', fileName)
										moveEntry.remove(() => {
											console.log('>>> remove file <' + fileName + '> success')
										}, (err) => {
											console.error('<err> remove file<' + fileName + '> err:' + err)
										})
									}, (err) => {
										console.error('<err> >>> decompress <' + fileName + '> err', err)
									})
								}
							}, (err) => {
								console.error('<err> >>> move fail : ', err)
							})
						}
					},
					(err) => {
						console.error('get file err>> ', err)
					}
				)
			},
			downAction () {	
				MXRUtil.mxr_get('/areditor/release/filelist/' + this.bookGuid, null, (err, res) => {
					if (err) {
						console.error('<err> >>> get file list err: ', err)
					} else {
						// console.log('>>>> get file list' ,res.data)
						let fileList = res.data.Body.fileList
						for (let key in fileList) {
							let fileM = fileList[key]
							let fileUrl = fileM.fileName
							bookFielsSize += fileM.fileSize
							if (fileM.fileType !== 1) {
								continue
							}
							let downTask = uni.downloadFile({
								url: fileUrl, 
								success: (res) => {
									let tempFilePath = res.tempFilePath
									console.log('>>>>> down file : ' + fileUrl + ', tempFilePath: ' + tempFilePath)
									// #ifdef APP-PLUS
									this.appMoveFile(tempFilePath)
									// #endif
								}, 
								fail: (err) => {
									console.error('<err> down file ' + fileUrl + ' err:' + err)
								}
							})
							let hasAdd = false
							let tmpBytes = 0
							downTask.onProgressUpdate(function(res){
								// console.log('down <' + fileUrl + '> progress: ' + res.progress)
								// console.log('all down progress : ', hasDownFilesSize / realBookFilesSize)
								hasDownFilesSize += (res.totalBytesWritten - tmpBytes)
								tmpBytes = res.totalBytesWritten
								res.total
								if (!hasAdd) {
									hasAdd = true
									realBookFilesSize += res.totalBytesExpectedToWrite
								}
							})
						}
					}
				})
			}
		}
	}
</script>

<style>
	text {
		display: flex;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-left: 40upx;
		padding-right: 40upx;
		position: relative;
	}

	.bgImage {
		position: absolute;
		top: 0upx;
		left: 0upx;
		width: 750upx;
		height: 1334upx;
		filter: blur(275upx);
	}

	.inline {
		display: flex;
		flex-direction: row;
	}

	.bookInfoView {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-top: 400upx;
	}

	.bookImageContainer {
		display: flex;
		position: absolute;
		top: 40upx;
		width: 100%;
		height: 330upx;
		border-radius: 10upx;
		padding: 5upx;
		background-color: #fff;
		align-items: center;
		justify-content: center;
	}

	.bookImage {
		width: 240upx;
		height: 320upx;
		border-radius: 10upx;
	}

	.vipTag {
		margin-top: 20upx;
		padding: 5upx 20upx 5upx 20upx;
		color: #fff;
		background-color: #ffd855;
		border-radius: 10upx;
	}

	.bookNameText {
		font-size: 36upx;
		color: #333;
		margin-top: 30upx;
		lines: 1;
	}

	.simpleInfoView {
		/* justify-content: center; */
		margin-top: 20upx;
		display: flex;
		flex-direction: row;
	}

	.oneInfoView {
		display: flex;
		flex-direction: column;
		max-width: 210upx;
		align-items: center;
		padding-left: 30upx;
		padding-right: 30upx;
	}

	.VLine {
		background-color: #E0E0E0;
		width: 1upx;
		/*height: 200upx;*/
	}

	.HLine {
		margin-top: 30upx;
		margin-bottom: 20upx;
		background-color: #E0E0E0;
		height: 1upx;
	}

	.oneInfoText {
		lines: 1;
		text-overflow: ellipsis;
		font-size: 28upx;
		color: #666666;
	}

	.oneInfoTitle {
		margin-top: 10upx;
		lines: 1;
		text-overflow: clip;
		font-size: 24upx;
		color: #999999;
	}

	.bookDescLabelShowSome {
		lines: 2;
		text-overflow: ellipsis;
	}

	.bookDescText {
		font-size: 30upx;
		color: #666;
		margin-top: 50upx;
	}

	.supportTypeView {
		margin-top: 10upx;
		align-items: center;
	}

	.supportTypeTitle {
		color: #666;
		font-size: 24upx;
	}

	.supportTypeText {
		padding: 6upx 20upx 6upx 20upx;
		margin-left: 20upx;
		background-color: #00B4FF;
		border-radius: 30upx;
		font-size: 24upx;
		color: #fff;
	}

	.bookTagsScroller {
		width: 670upx;
		height: 70upx;
		white-space: nowrap;
	}

	.bookTagText {
		padding: 16upx 30upx 16upx 30upx;
		border-color: #00B4FF;
		border-width: 1upx;
		border-radius: 8upx;
		margin-right: 20upx;
		font-size: 24upx;
		display: inline-flex;
		color: #00B4FF;
		border: 1upx solid #00B4FF
	}

	/* 所属专区 */
	.zoneListContainer {}

	.zoneTitleText {
		font-size: 34upx;
		color: #333333;
	}

	.zoneCell {
		margin-top: 30upx;
	}

	.zoneNameText {
		font-size: 28upx;
		color: #999999;
	}

	.zoneImage {
		margin-top: 10upx;
		width: 670upx;
		height: 250upx;
		border-radius: 10upx;
	}

	/* 相关推荐 */
	.recommendBookContainer {
		/*margin-top: 40upx;*/
	}

	.recommendBookTitleText {
		font-size: 34upx;
		color: #333333;
	}

	.recommendBookScroller {
		margin-top: 30upx;
		width: 100%;
		height: 320upx;
		white-space: nowrap;
	}

	.bookItemView {
		display: inline-block;
		width: 190upx;
		height: 360upx;
		margin-right: 50upx;
	}

	.bookItemImage {
		width: 190upx;
		height: 250upx;
		border-radius: 8upx;
	}

	.bookItemNameText {
		margin-top: 6upx;
		font-size: 24upx;
		width: 190upx;
		color: #666;
		lines: 2;
		overflow: hidden;
	}
	.downBtn {
		margin-top: 20upx;
		width: 600upx;
		border-radius: 8upx;
	}
</style>
