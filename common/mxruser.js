let user
class MXRUser {
	constructor() {
		this.userId = '1742422'
	}

	getUserId() {
		return this.userId
	}
	
	setUserId(_userId) {
		this.userId = _userId
	}

	static sharedInstance() {
		if (user === null || user === undefined) {
			user = new MXRUser()
		}
		return user
	}
}

module.exports = MXRUser
