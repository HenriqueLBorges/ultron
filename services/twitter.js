let config = require("../config/config");
let Twitter = require("twitter");

let client = new Twitter({
    consumer_key: config.consumerAPIKey,
    consumer_secret: config.consumerAPIKeySecret,
    access_token_key: config.accessToken,
    access_token_secret: config.accessTokenSecret
});

//Define methods here
let search = (params) => {
    
    let promise = new Promise((resolve, reject) => {
        client.get("https://api.twitter.com/1.1/search/tweets.json", params, (error, tweets, response) => {
            if (!error) {
                result = [];
                tweets.statuses.map((tweet) => {
                    result.push({ "user": tweet.user.screen_name, "id": tweet.id_str });
                });
                resolve(result);
                //console.log("result =", result);
            } else {
                reject(error);
            }
        });
    });
    return promise;
}
let reply = async (user, message, id) => {
    let params = {
        status: `Nossa voce sabia que... ${message} :( vai vai  @${user}`,
        in_reply_to_status_id: id
    }
    client.post(
        "statuses/update", params, (error, tweet, response) => {
            if (error) {
                console.error("error =" + error);
            } else console.log("Just pranked another one...");
        }
    );
}
module.exports = {
    search: search,
    reply: reply
}