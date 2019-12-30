const parseString = require('xml2js').parseString

function _getConfigData(bookGuid, callback) {
	// #ifdef APP-PLUS
	
	const bookDirPath = plus.io.convertLocalFileSystemURL('_documents/books/' + bookGuid)
	console.log('>>> tmpTest : ', bookDirPath)
	plus.io.resolveLocalFileSystemURL('_documents/books/' + bookGuid + '/others/config.xml', (configEntry) => {
		configEntry.file((file) => {
			let configStr = ''
			let reader = new plus.io.FileReader()
			reader.readAsText(file, 'UTF-8')
			reader.onload = function (res) {
				configStr += res.target.result
			}
			reader.onerror = function (err) {
				console.error('>>> read config err: ', err)
			}
			reader.onloadend = function () {
				// console.log('>>>> test ', configStr)
				parseString(configStr, { explicitArray: false }, function(err, result) {
					if (err) {
						console.error('<err> parse xml err:', err)
						if (callback) {
							callback(err, null)
						}
					} else {
						console.log('config json : ', result)
						if (callback) {
							callback(null, result)
						}
					}
				})
			}
		}, (err) => {
			if (callback) {
				callback(err, null)
			}
		})
	}, (err) => {
		console.error('<err> get file err : ', err)
	})
	// #endif
	if (callback) {
		callback(null, null)
	}
}

function _wrapperBookWithConfigJson (bookGuid, configJson) {
	const thisBookDirPath = '_documents/books/' + bookGuid
	let wrapperBookM = {}
	function configResources (resource) {
	  let resourceArray
	  if (resource) {
	    if (Array.isArray(resource)) {
	      resourceArray = resource
	    } else {
	      resourceArray = []
	      resourceArray.push(resource)
	    }
	  }
	  return resourceArray
	}  
	
	function pathJoin() {
		let retPath = ''
		let argLength = arguments.length
		if (argLength > 0) {
			 retPath = arguments[0];
		}
		for (let i = 1; i < argLength; i++) {
			if (retPath.substr(retPath.length - 1) !== '/' && arguments[i].substring[0,1] !== '/') {
				retPath += '/'
			} 
			retPath += arguments[i]
		}
		return retPath
	}
	
	function getBookResStoreDirPath () {
	  return '_documents/resStore'
	}
	
	const bookM = configJson
	wrapperBookM.bookDirPath = thisBookDirPath
	if (bookM && bookM.config && bookM.config.environment) {
	  Object.assign(wrapperBookM, bookM.config.environment)
	}
	let markerDic = {}
	let audioDic = {}
	let ttsActionDic = {}
	let modelDic = {}
	let videoDic = {}
	let imageDic = {}
	let gameDic = {}
	let commonModelDic = {}
	let customModelDic = {}
	let cloudPanoramaDic = {}
	let disPlayEventDic = {}
	let actionEventDic = {}
	wrapperBookM.actionEventDic = actionEventDic
	/********/
	if (bookM && bookM.config && bookM.config.resources) {
	  // 增加maker
	  wrapperBookM.markers = configResources(bookM.config.resources.markers && bookM.config.resources.markers.marker)
	  if (Array.isArray(wrapperBookM.markers)) {
	    wrapperBookM.markers.forEach((marker) => {
	      if (marker.id) {
	        markerDic[marker.id] = marker
	      }
	    })
	  }
	  // add audios
	  wrapperBookM.audios = configResources(bookM.config.resources.audios && bookM.config.resources.audios.audio)
	  if (Array.isArray(wrapperBookM.audios)) {
	    wrapperBookM.audios.forEach((audio) => {
	      if (audio.id) {
	        audioDic[audio.id] = audio
	      }
	    })
	  }
	  // add tts audios
	  wrapperBookM.ttsAudios = configResources(bookM.config.resources.ttss && bookM.config.resources.ttss.tts)
	  if (Array.isArray(wrapperBookM.ttsAudios)) {
	    wrapperBookM.ttsAudios.forEach((ttsAudio) => {
	      if (ttsAudio.id) {
	        ttsActionDic[ttsAudio.id] = ttsAudio
	      }
	    })
	  }
	  // add images
	  wrapperBookM.images = configResources(bookM.config.resources.images && bookM.config.resources.images.image)
	  if (Array.isArray(wrapperBookM.images)) {
	    wrapperBookM.images.forEach((image) => {
	      if (image.id) {
	        imageDic[image.id] = image
	      }
	    })
	  }
	  // add games
	  wrapperBookM.games = configResources(bookM.config.resources.games && bookM.config.resources.games.game)
	  if (Array.isArray(wrapperBookM.games)) {
	    wrapperBookM.games.forEach((game) => {
	      if (game.id) {
	        gameDic[game.id] = game
	      }
	    })
	  }
	  // add models
	  wrapperBookM.models = configResources(bookM.config.resources.models && bookM.config.resources.models.model)
	  if (Array.isArray(wrapperBookM.models)) {
	    wrapperBookM.models.forEach((model) => {
	      if (model.id) {
	        modelDic[model.id] = model
	      }
	    })
	  }
	  // add common_models
	  wrapperBookM.commonModels = configResources(bookM.config.resources.common_models && bookM.config.resources.common_models.common_model)
	  if (Array.isArray(wrapperBookM.commonModels)) {
	    wrapperBookM.commonModels.forEach((commonModel) => {
	      if (commonModel.id) {
	        commonModelDic[commonModel.id] = commonModel
	      }
	    })
	  }
	  // add CustomModels
	  wrapperBookM.customModels = configResources(bookM.config.resources.CustomModels && bookM.config.resources.CustomModels.CustomModel)
	  if (Array.isArray(wrapperBookM.customModels)) {
	    wrapperBookM.customModels.forEach((customModel) => {
	      if (customModel.id) {
	        cloudPanoramaDic[customModel.id] = customModel
	      }
	    })
	  }
	  // add CloudPanoramas
	  wrapperBookM.cloudPanoramas = configResources(bookM.config.resources.CloudPanoramas && bookM.config.resources.CloudPanoramas.CloudPanorama)
	  if (Array.isArray(wrapperBookM.cloudPanoramas)) {
	    wrapperBookM.cloudPanoramas.forEach((cloudPanorama) => {
	      if (cloudPanorama.id) {
	        customModelDic[cloudPanorama.id] = cloudPanorama
	      }
	    })
	  }
	  // add videos
	  wrapperBookM.videos = configResources(bookM.config.resources.videos && bookM.config.resources.videos.video)
	  if (Array.isArray(wrapperBookM.videos)) {
	    wrapperBookM.videos.forEach((video) => {
	      if (video.id) {
	        videoDic[video.id] = video
	      }
	    })
	  }
	}
	// add events
	if (bookM && bookM.config && bookM.config.events && bookM.config.events.event) {
	  if (Array.isArray(bookM.config.events.event)) {
	    bookM.config.events.event.forEach((event) => {
	      event.actions = []
	      // 显示的按钮
	      if (event.marker_id && event.groups && event.groups.group) {
	        disPlayEventDic[event.marker_id] = event
	        if (Array.isArray(event.groups.group)) {
	          event.groups.group.forEarch((group) => {
	            if (group.actions && group.actions.action) {
	              if (Array.isArray(group.actions.action)) {
	                group.actions.action.forEach((action) => {
	                  if (action.parameters && action.parameters.image_id && imageDic[action.parameters.image_id]) {
	                    action.parameters.imagePath = pathJoin(thisBookDirPath, imageDic[action.parameters.image_id] && imageDic[action.parameters.image_id]['path'])
	                  }
	                  event.actions.push(action)
	                })
	              } else {
	                let action = group.actions.action
	                event.actions.push(action)
	                if (action.parameters && action.parameters.image_id && imageDic[action.parameters.image_id]) {
	                  action.parameters.imagePath = pathJoin(thisBookDirPath, imageDic[action.parameters.image_id] && imageDic[action.parameters.image_id]['path'])
	                }
	              }
	            }
	          })
	        } else {
	          if (event.groups.group.actions && event.groups.group.actions.action) {
	            if (Array.isArray(event.groups.group.actions.action)) {
	              event.groups.group.actions.action.forEach((action) => {
	                event.actions.push(action)
	                if (action.parameters && action.parameters.image_id && imageDic[action.parameters.image_id]) {
	                  action.parameters.imagePath = pathJoin(thisBookDirPath, imageDic[action.parameters.image_id] && imageDic[action.parameters.image_id]['path'])
	                }
	              })
	            } else {
	              let action = event.groups.group.actions.action
	              event.actions.push(action)
	              if (action.parameters && action.parameters.image_id && imageDic[action.parameters.image_id]) {
	                action.parameters.imagePath = pathJoin(thisBookDirPath, imageDic[action.parameters.image_id] && imageDic[action.parameters.image_id]['path'])
	              }
	            }
	          }
	        }
	      } else if (event.action_id && event.groups && event.groups.group) {
	        // 按钮的事件
	        if (event.event_type && event.event_type === 'DE_EVENT_TOUCH_BUTTON') {
	        // if (event.groups.group.actions && event.groups.group.actions.action && event.groups.group.actions.action.action_type) {
	          let action = event.groups.group.actions.action
	
	          if (action.parameters && action.parameters.ResStore_Type) {
	            // 是否是资源商店资源
	            if (action.parameters.ResStore_Type === 2 || action.parameters.ResStore_Type === '2') {
	              // 来源为MXR
	              if (action.parameters.ResStore_Source && (action.parameters.ResStore_Source === 1 || action.parameters.ResStore_Source === '1')) {
	                if (typeof action.parameters.ResStore_ResNameUrl === 'string') {
	                  const pathArray = action.parameters.ResStore_ResNameUrl.split('/')
	                  event.resourcePath = pathJoin(getBookResStoreDirPath(), pathArray[pathArray.length - 1])
	                  actionEventDic[event.action_id] = event
	                }
	              } else {
	                event.resourcePath = action.parameters.ResStore_ResNameUrl
	                actionEventDic[event.action_id] = event
	              }
	            } else if (action.parameters.ResStore_Path && (action.parameters.ResStore_Type === 3 || action.parameters.ResStore_Type === '3')) {
	              event.resourcePath = pathJoin(getBookDirPath(bookGuid), action.parameters.ResStore_Path)
	              actionEventDic[event.action_id] = event
	            } else {
	            }
	          }
	
	          if (event.resourcePath == null) {
	            if (action.action_type === 'DE_ACTION_AUDIO') {
	              if (action.parameters && action.parameters.audio_id && audioDic[action.parameters.audio_id]) {
	                event.resourcePath = pathJoin(thisBookDirPath, audioDic[action.parameters.audio_id]['path'])
	                actionEventDic[event.action_id] = event
	              }
	            } else if (action.action_type === 'DE_ACTION_TTS_AUDIO') {
	              if (action.parameters && action.parameters.tts_id && ttsActionDic[action.parameters.tts_id]) {
	                event.resourcePath = pathJoin(thisBookDirPath, ttsActionDic[action.parameters.tts_id]['path'])
	                actionEventDic[event.action_id] = event
	              }
	            } else if (action.action_type === 'DE_ACTION_2D_IMAGE') {
	              if (action.parameters && action.parameters.image_id && imageDic[action.parameters.image_id]) {
	                event.resourcePath = pathJoin(thisBookDirPath, imageDic[action.parameters.image_id]['path'])
	                actionEventDic[event.action_id] = event
	              }
	            } else if (action.action_type === 'DE_ACTION_2D_VIDEO' || action.action_type === 'DE_ACTION_3D_VIDEO') {
	              // DE_ACTION_3D_VIDEO 只是用于unity的
	              if (action.parameters && action.parameters.video_id && videoDic[action.parameters.video_id]) {
	                event.resourcePath = pathJoin(thisBookDirPath, videoDic[action.parameters.video_id]['path'])
	                actionEventDic[event.action_id] = event
	              }
	            } else if (action.action_type === 'DE_ACTION_WEBSITE') {
	              if (action.parameters && action.parameters.link) {
	                event.resourcePath = action.parameters.link
	                if (action.parameters.link_source) {
	                  event.linkSource = action.parameters.link_source
	                }
	                actionEventDic[event.action_id] = event
	              }
	            } else if (action.action_type === 'DE_ACTION_CLOUDPANORAMA') {
	              // DE_ACTION_CLOUDPANORAMA  Cloudpanorama_id  CloudPanorama_Url
	              if (action.parameters && action.parameters.Cloudpanorama_id && action.parameters.CloudPanorama_Url) {
	                event.resourcePath = action.parameters.CloudPanorama_Url
	                actionEventDic[event.action_id] = event
	              }
	            }
	          }
	
	          // 特殊的
	          if (action.action_type === 'DE_ACTION_3D_MODEL' || action.action_type === 'DE_ACTION_CUSTOMMODEL') {
	            let resourcePath
	            if (action.action_type === 'DE_ACTION_CUSTOMMODEL') {
	              // resourcePath = pathJoin(getBookResStoreDirPath(), action.parameters.ResStore_Path + '_3')
	              resourcePath = pathJoin(getBookResStoreDirPath(), action.parameters.ResStore_Path + '_3') // , 'customModel4x_ios.unity3d'
	            } else if (action.parameters && (action.parameters.ResStore_Type === 2 || action.parameters.ResStore_Type === '2')) {
	              if (action.parameters.CommonModelTypy && action.parameters.CommonModelTypy === 'cml') {
	                // resourcePath = pathJoin(getBookResStoreDirPath(), action.parameters.ResStore_Path + '_1')
	                resourcePath = pathJoin(getBookResStoreDirPath(), action.parameters.ResStore_Path + '_1') // 课件
	              } else {
	                // resourcePath = pathJoin(getBookResStoreDirPath(), action.parameters.ResStore_Path + '_0')
	                resourcePath = pathJoin(getBookResStoreDirPath(), action.parameters.ResStore_Path + '_0', 'customModel4x_ios.unity3d')
	              }
	            } else {
	              // 本地 unity端在有 xx.mxrfbx 和 xx4x_ios.unity3d、xx5x_android.unity3d 会根据前端选择unity3d文件
	              resourcePath = pathJoin(thisBookDirPath, modelDic[action.parameters.model_id]['path'])
	              let tmpPath = pathJoin(thisBookDirPath, modelDic[action.parameters.model_id]['path'])
	              resourcePath = _.replace(tmpPath, '.mxrfbx', '4x_ios.unity3d')
	            }
	            event.resourcePath = resourcePath
	            actionEventDic[event.action_id] = event
	          } else if (action.action_type === 'DE_ACTION_GAME') {
	            // DE_ACTION_GAME  game_id  show_style  linked_resources  linked_resources_url
	            if (action.parameters && action.parameters.game_id && gameDic[action.parameters.game_id]) {
	              event.resourcePath = pathJoin(thisBookDirPath, gameDic[action.parameters.game_id]['path'])
	              actionEventDic[event.action_id] = event
	            }
	          }
	
	          // DE_ACTION_360_SCENE_IMAGE  image_id  audio_id
	          // DE_ACTION_3D_MODEL  model_id
	          // DE_ACTION_3D_COMMON_MODEL model_id
	          // DE_ACTION_3D_VIDEO  特殊的button，只有unity里面用到
	          // DE_ACTION_CUSTOMMODEL
	          // DE_ACTION_2D_ANIMATION  animationRes_path
	
	          if (action.action_type === 'DE_ACTION_2D_VIDEO' || action.action_type === ' DE_ACTION_2D_IMAGE') {
	            if (action.parameters && (action.parameters.ResStore_Type === 2 || action.parameters.ResStore_Type === '2')) {
	              // 公司的资源商店资源
	              event.resourcePath = pathJoin(getBookResStoreDirPath(), action.parameters && action.parameters.ResStore_Path)
	              if (action.action_type === 'DE_ACTION_2D_VIDEO') {
	                event.resourcePath = pathJoin(getBookResStoreDirPath(), action.parameters && action.parameters.ResStore_Path + '_6.mp4') // need to do 需要与宋雨确认
	              }
	            } else if (action.parameters && (action.parameters.ResStore_Source === 2 || action.parameters.ResStore_Source === '2')) {
	              // 第三方资源商资源，直接网页播放
	              event.resourcePath = action.parameters && action.parameters.ResStore_ResNameUrl
	            }
	          }
	        }
	      }
	    })
	  } else {
	    let event = bookM.config.events.event
	    event.actions = []
	    if (event.marker_id && event.groups && event.groups.group) {
	      if (Array.isArray(event.groups.group)) {
	        event.groups.group.forEarch((group) => {
	          if (group.actions && group.actions.action) {
	            if (Array.isArray(group.actions.action)) {
	              group.actions.action.forEach((action) => {
	                event.actions.push(action)
	              })
	            } else {
	              event.actions.push(group.actions.action)
	            }
	          }
	        })
	      } else {
	        if (event.groups.group.actions && event.groups.group.actions.action) {
	          if (Array.isArray(event.groups.group.actions.action)) {
	            event.groups.group.actions.action.forEach((action) => {
	              event.actions.push(action)
	            })
	          } else {
	            event.actions.push(event.groups.group.actions.action)
	          }
	        }
	      }
	    }
	  }
	}
	wrapperBookM.events = disPlayEventDic
	/**/
	for (let key in markerDic) {
	  if (disPlayEventDic[key]) {
	    markerDic[key].event = disPlayEventDic[key]
	  }
	}
	wrapperBookM['hello'] = 'martin'
	return wrapperBookM
}

function getLocalBookWithBookGuid (bookGuid, callback) {
	_getConfigData(bookGuid, (err, configJson) => {
		if (err) {
			if (callback) {
				callback(err, null)
			}
		} else {
			let wrapperBook = _wrapperBookWithConfigJson(bookGuid, configJson)
			if (callback) {
				callback(null, wrapperBook)
			}
		}
	})
}

export default {
	getLocalBookWithBookGuid: getLocalBookWithBookGuid
}