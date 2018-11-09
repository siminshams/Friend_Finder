var tableData = require("../data/friends");

module.exports = function(app){
   
    app.get("/api/friends", function(req, res){
        res.json(tableData);
    });


    app.post("/api/friends", function(req, res){
        tableData.push(req.body);
        res.json(true);
    });

    // app.post("/api/clear", function(req, res) {
    //     // Empty out the arrays of data
    //     tableData.length = [];
    //     res.json(true);
    //   });
}