const db = require('../db')
class Controller {
    async getHistory(req, res){
        const {id, dateStart, dateEnd} = req.query
        const history = await db.query('SELECT DISTINCT * FROM coins_history WHERE coin_id = $1 AND time_open >= $2 AND time_open <= $3 ORDER BY time_open ASC', [id, dateStart, dateEnd])
        res.json(history.rows)
    }
    async getCoins(req, res){
        const coins = await db.query('SELECT coin_id, name, date_added FROM coins_all')
        res.json(coins.rows)
    }
    async getTweets(req, res){
        const {id, dateStart, dateEnd} = req.query
        const tweets = await db.query('SELECT chanel_name, tweet_content, tweet_date FROM coins_tweets WHERE coin_id = $1 AND tweet_date >= $2 AND tweet_date <= $3', [id, dateStart, dateEnd])
        res.json(tweets.rows)
    }
}

module.exports = new Controller();