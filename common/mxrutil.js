import MXREncryption from './encryption.js'
import MXRBook from './mxrbook.js'
const MXRUser = require('./mxruser.js')

const MXRConstant = {
	serverHost: 'https://bs-api.mxrcorp.cn',
	userId: mxr_getUserId()
}

function mxr_getUser() {
	return MXRUser.sharedInstance()
}

function mxr_getUserId() {
	return mxr_getUser().getUserId()
}

function mxr_request(url, method, param, callback, complete) {
	if (url.indexOf('http') === -1) {
		url = MXRConstant.serverHost + '/' + url
	}
	
	// if (param !== undefined || param !== null) {
	// 	if (url.indexOf('?') === -1) {
	// 		url = url + '?'
	// 	} else {
	// 		url = url + '&'
	// 	}
	//     for (let key in param) {
	//       url = url + key + '=' + param[key] + '&'
	//     }
	//     url = encodeURI(url)
	//  }
	
	let osType = '1' // 1: iOS , 2: Android
	if (uni.getSystemInfoSync().platform == "android") {
		osType = '2'
	}
	let region = '0' // 0: bookCity, 1: Snaplearn
	let appId = '10000000000000000000000000000001' // 10000000000000000000000000000001: bookCity, 10000000000000000000000000000011: Snaplearn
	let headerJson = {userId: mxr_getUserId(), osType: osType, appVersion: '5.40.0', deviceId: '5F3E6EB4-CA01-42B0-BD77-0E72DA409618', region: region, appId: appId, deviceUnique: '5F3E6EB4-CA01-42B0-BD77-0E72DA409618'}
	const headerJsonEncoderStr = MXREncryption.encryptionMxr(JSON.stringify(headerJson))
	
	uni.request({
		url: url,
		method: method,
		header:{'mxr-key': headerJsonEncoderStr},
		data: param,
		success: res => {
			res.data.Body = MXREncryption.decryptionMxr(res.data.Body, true)
			try {
				res.data.Body = JSON.parse(res.data.Body)
			} catch (e) {
				console.log('>>> parse json error :', e)
			} finally {
				if (callback) {
					callback(null, res)
				}
			}
		},
		fail: (err) => {
			if (callback) {
				callback(err, null)
			}
		},
		complete: complete
	});
}

function mxr_get(url, param, callback, complete) {
	mxr_request(url, 'GET', param, callback, complete)
}

function mxr_post(url, param, callback, complete) {
	mxr_request(url, 'POST', param, callback, complete)
}

export default {
	MXRConstant: MXRConstant,
	MXREncryption: MXREncryption, 
	MXRUser: MXRUser,
	user: mxr_getUser(),
	userId: mxr_getUserId(),
	mxr_get: mxr_get,
	mxr_post: mxr_post, 
	getLocalBookWithBookGuid: MXRBook.getLocalBookWithBookGuid
}