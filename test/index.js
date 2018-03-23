const uuidv4 = require('uuid/v4')
global.uuid = uuidv4()

console.log('Milkcocoa ACL Tests, uuid: ' + global.uuid + '.\n')

// describe('HTTP', function () {
//   require('./http')
// })