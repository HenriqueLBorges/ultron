const twitter = require("twitter");
const Twit = require('twit')
const keys  = require('../config/config')
 
const twitterService = new twitter({
    consumer_key: keys.consumerAPIKey ,
    consumer_secret: keys.consumerAPIKeySecret,
    access_token_key: keys.accessToken,
    access_token_secret: keys.accessTokenSecret
  });

module.exports = {

     sendMessage = async (user, message, tweetId) => {
        twitterService.post('statuses/update', {status: 'oi lindão', in_reply_to_status_id: '@tgremi'}, (error, success) => {
            console.log(success)
            console.log(error) 
        })
    }


}