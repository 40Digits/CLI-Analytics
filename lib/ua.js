'use strict'

const ua = require('universal-analytics')

class UA {
  constructor(uid, userUUID) {
		if (!Boolean(uid)) {
			throw new Error('<cli-analytics> UA missing required uid parameter');
		}

    if (Boolean(userUUID)) {
      this.visitor = ua(uid, userUUID);
    } else {
      this.visitor = ua(uid);
    }
  }

  pageview(path, hostname, title, callback) {
    this.visitor.pageview(path, hostname, title).send()
  }

  event(category, action, label) {
    this.visitor.event(category, action, label).send()
  }

  timing(category, variable, time, label) {
    this.visitor.timing(category, variable, time, label);
  }
}

module.exports = UA;
