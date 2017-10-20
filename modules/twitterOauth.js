const twitterConfig = require('../config/twitterConfig')
const OAuth = require('oauth')

const oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    twitterConfig.consumer_key,
    twitterConfig.consumer_secret,
    '1.0A',
    null,
    'HMAC-SHA1'
);

function getTwitter(api, callback) {
    return oauth.get(
        `https://api.twitter.com/1.1/${api}`,
        twitterConfig.access_token_key, //test user token 
        twitterConfig.access_token_secret, //test user secret             
        function (e, data, res) {
            if (e) return callback(e)
            else return callback(null, data);
        });
}

module.exports = getTwitter