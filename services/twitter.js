let config = require("../config/config");
let Twitter = require("twitter");
 
let client = new Twitter({
  consumer_key: config.consumerAPIKey,
  consumer_secret: config.consumerAPIKeySecret,
  access_token_key: config.accessToken,
  access_token_secret: config.accessTokenSecret
});
 
//Define methods here