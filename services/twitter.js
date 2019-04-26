let config = require("../config/config");
let Twitter = require("twitter");

let client = new Twitter({
    consumer_key: config.consumerAPIKey,
    consumer_secret: config.consumerAPIKeySecret,
    access_token_key: config.accessToken,
    access_token_secret: config.accessTokenSecret
});

//Define methods here
let search = () => {
    let params = {
        "q": "%22quero%20assistir%20vingadores%22OR%22quero%20ver%20vingadores%22OR%22quero%20testemunhar%20vingadores%22OR%22preciso%20assistir%20vingadores%22OR%22preciso%20ver%20vingadores%22OR%22preciso%20testemunhar%20vingadores%22OR%22tenho%20que%20assistir%20vingadores%22OR%22tenho%20que%20ver%20vingadores%22OR%22tenho%20que%20testemunhar%20vingadores%22",
        "result_type": "mixed",
        "count": "10",
        "lang": "pt",
        "since_id": ""
    }
    result = []
    client.get("https://api.twitter.com/1.1/search/tweets.json", params, (error, tweets, response) => {
        if (!error) {
            tweets.statuses.map((tweet) => {
                result.push({"user": tweet.user.screen_name, "id": tweet.id_str})
            });
        } else {
            console.error(error);
        }
        console.log(result);
    });
}

module.exports = {
    search: search
}