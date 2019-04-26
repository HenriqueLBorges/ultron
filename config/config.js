let consumerAPIKey = process.env.consumer_key
let consumerAPIKeySecret = process.env.consumer_secret
let accessToken = process.env.access_token_key
let accessTokenSecret = process.env.access_token_secret

module.exports = {
    consumerAPIKey: consumerAPIKey,
    consumerAPIKeySecret: consumerAPIKeySecret,
    accessToken: accessToken,
    accessTokenSecret: accessTokenSecret
}