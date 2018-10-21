let friendData = require('../data/friend')

module.exports = function(app) {
    app.get("/api/friend", function(req, res) {
        res.json(friendData)
      })
    app.post("/api/friend", function(req, res) {
        console.log(req.body)
        
        friendData.push(req.body)
        res.json(friendData)
    // if (tableData.length < 5) {
    //     tableData.push(req.body);
    //     res.json(true);
    // }
    // else {
    //     waitListData.push(req.body);
    //     res.json(false);
    // }

    })
}