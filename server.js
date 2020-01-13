
var Twitter = require('twitter');
var config = require('./config.js');
var Tweet = new Twitter(config);




    function retweet(event) {
      var TweetId = event.id_str
      console.log(TweetId)
      var Tweeter = event.user.screenName
      Tweet.post(`statuses/retweet/${TweetId}`, function(err){
        if(err){
          console.log('deu erro no retweet:')
          console.log(err)

        }else {
          console.log('RETWEETADO: ',  `https://twitter.com/${Tweeter}/status/${TweetId}`)
        }
      })

    }

    var stream = Tweet.stream('statuses/filter', {track: 'Sorriso testeteste'})

    stream.on('data', retweet)

    stream.on('error', function(error) {
      console.log(error)
    })

