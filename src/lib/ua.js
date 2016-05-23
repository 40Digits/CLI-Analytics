'use strict'

const request = require('request');
const google = require('universal-analytics');

class UA {
  constructor(tid, options = {}) {
    if (!Boolean(tid)) {
      throw new Error('<cli-analytics> UA missing required uid parameter');
    }

    let defaults = {
      https: true,
    };

    this.timings = {};

    const settings = Object.assign({}, defaults, options);

    if (Boolean(settings.cid)) {
      this.track = new google(tid, settings.cid, settings);
    } else {
      this.track = new google(tid, settings);
    }

    return this;
  }

	/**
	 * getTimeDiff() returns the time difference in milliseconds between
	 * the current time against the specific timing variable.
	 *
	 * @param {String} name
	 * @return {Number} difference
	 */
  getTimeDiff(variable) {
    return new Date().getTime() - this.timings[variable];
  }

	/**
	 * startTimer() creates a timer variable with a created date that
	 * can be used as a base for comparing timings.
	 *
	 * @param {String} name
	 * @return {Number} difference
	 */
  startTimer(variable, time = new Date().getTime()) {
    this.timings[variable] = time;
  }
}

module.exports = UA;
