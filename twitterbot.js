var Twit = require("twit")

var T = new Twit({
    consumer_secret: "",
    consumer_key: "",
    access_token: "",
    access_token_secret: ""
});


var havingTroubleStream = T.stream('statuses/filter', { track: 'prestashop not working', language: ['en', 'fr'] })
var wantsPluginStream = T.stream('statuses/filter', { track: 'plugin prestashop ?'})
var showsLoveStream = T.stream('statuses/filter', { track: 'prestashop is great'})

havingTroubleStream.on('tweet', function (tweet) {
  console.log(tweet)
  //notify support, automated tweet etc
})

wantsPluginStream.on('tweet', function (tweet) {
	console.log(tweet)
	//analyze tweet for products features desirability, notify sales etc
})

showsLoveStream.on('tweet', function (tweet) {
	console.log(tweet)
	//retweet endorsement
	T.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
	  console.log(data)
	})
})