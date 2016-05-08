const ua = require('universal-analytics')

class UA {
  constructor(uid, visitor) {
    if (Boolean(visitor)) {
      this.visitor = ua(uid, visitor);
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
