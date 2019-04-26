let config = require("../config/config");
let Twitter = require("twitter");
 
let twitterService = new Twitter({
  consumer_key: config.consumerAPIKey,
  consumer_secret: config.consumerAPIKeySecret,
  access_token_key: config.accessToken,
  access_token_secret: config.accessTokenSecret
});
 
//Define methods here

module.exports = {
  async sendMessage(user, message, tweetId) {
    let tweetStatus = twitterService.post(
      "statuses/update",
      {
        status: `Nossa voce sabia que .... ${message} :( vai vai  @${user}`,
        in_reply_to_status_id: tweetId
      },
      tweet => {
        console.log(tweet, "tweeet");
        return tweet && tweet.id ? tweet.id : undefined;
      }
    );
  }
};