import UA from 'lib/ua.js';
const aguid = require('aguid')
const user = require('git-user-email')

export default function init(uid) {
  const guid = aguid(user());
  const ga = new UA(uid, guid);
  return ga;
}
