const crypto = require('crypto')
    .randomBytes(256).toString('hex');

module.exports = {
    uri: 'mongodb://localhost:27017/meanstack-ng4',
    secret: crypto,
    db:'meanstack-ng4'
}

