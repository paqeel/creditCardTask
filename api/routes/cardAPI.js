var express = require("express");
var router = express.Router();
var fs = require('fs');
// const data = {}
var obj = {};


router.post("/addCards", function (req, res, next) {

    fs.readFile(__dirname + "\\" + "card-detail.json", 'utf8', function (err, data) {
        obj = JSON.parse(data); //now it an object
        obj.push(req.body); //add some data
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFile(__dirname + "\\" + "card-detail.json", json, function (err) {
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
        });
        res.end(json);
    });
});

router.get("/", function (req, res, next) {
    fs.readFile(__dirname + "\\" + "card-detail.json", 'utf8', function (err, data) {
        res.end(data);
    });
});



module.exports = router;