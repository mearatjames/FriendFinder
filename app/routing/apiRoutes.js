let friendData = require('../data/friend')

module.exports = function(app) {
    app.get("/api/friend", function(req, res) {
        res.json(friendData)
      })
    app.post("/api/friend", function(req, res) {
        console.log(req.body)
       let initDiff = 50
       let friendIndex
        for (let i = 0; i < friendData.length; i++) {
            let totalDiff = 0
            for (let j = 0; j < 10; j++) {
             totalDiff +=  Math.abs(friendData[i].score[j] - req.body.score[j])           
            }
            if (totalDiff < initDiff) {
                initDiff = totalDiff
                friendIndex = i
            }
        }
        friendData.push(req.body)
        res.json(friendData[friendIndex])
        })
    }
