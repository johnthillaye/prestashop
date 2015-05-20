var TwitterBot = require("node-twitterbot").TwitterBot

var Bot = new TwitterBot({
    "consumer_secret": "consumer_secret",
    "consumer_key": "consumer_key",
    "access_token": "access_token",
    "access_token_secret": "access_token_secret"
});

Bot.addAction("isHavingTrouble", function (twitter, action, tweet) {
	Bot.tweet("Hey ! Need any help witht that ?");
}) 

Bot.listen("listening", function (tweet) {
	console.log(tweet);
	return false;
}, isHavingTrouble);

