# CLI Analytics

`CLI Analytics` is intended to allow quick integration from the cli into analytic interfaces. Starting with version 0.0.1, CLI Analytics interfaces with Google Analytics.

### Google Analytics Setup
- CLI Analytics uses **[Universal Analytics](https://www.npmjs.com/package/universal-analytics])** as its interface to interact with Google Analytics Measurement Protocol.

- CLI Analytics current implementation uses the **[Measurement Protocol of Google Analytics](https://developers.google.com/analytics/devguides/collection/protocol/v1/)**

When CLI Analytics is instantiated, it maps the **[Universal Analytics](https://www.npmjs.com/package/universal-analytics])** object to the track object with options sent in through the constructor:

```js
const analytics= require('cli-analytics')(tracking_id, options);
analytics.track.event(...)
analytics.track.pageview(...)
analytics.track.timing(...)
```


### Getting Started


##### Quick Start

**[Universal Analytics](https://www.npmjs.com/package/universal-analytics])** Default Implementation:

```js  
const analytics = require('cli-analytics')(tracking_id, options);
analytics.track.event('Category', 'Action', 'Label', 'Value').send();
```

##### CLI Analytics specific methods

`startTimer(name)` - Instantiates a timer

`getTimeDiff(name)` - Returns the elapsed time of a specific timer in milliseconds.

Example implementation:

```js
analytics.startTimer('timeout');
setTimeout(() => {
  console.log(analytics.getTimeDiff('timeout'));
}, 1000);
```

Normal Use Case:

```js
analytics.startTimer('user-selection');
// ... User Selects Options ...
const timing = analytics.getTimeDiff('user-selection');
analytics.track.timing('User Selection', 'Panel 1', timing).send()
```
