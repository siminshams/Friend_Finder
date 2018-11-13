var tableData = require("../data/friends");

module.exports = function(app){
   
    app.get("/api/friends", function(req, res){
        res.json(tableData);
    });


    app.post("/api/friends", function(req, res){
         console.log(tableData);
        let user = req.body;
        let maxDifference = 100;
        let bestMatch;
        let userScores = user.scores;
        for (let i =0; i<tableData.length;i++){
            let match = tableData[i];
           // console.log(match);
            let scores = match.scores;
            let difference = 0;
            for(let j; j <scores.length;j++){
           difference += Math.abs(parsInt(scores[j])- parseInt(userScores[j]));
            }
           if(difference < maxDifference){
                bestMatch = match;
                maxDifference = difference;
           }
        } 
        tableData.push(req.body);       
       res.json(bestMatch);
       
    });
}