// let obj1 = require("../logger/logger.js");
// let obj2 = require("../util/helper.js");
// let obj3 = require("../Question no.4/chunk");
// let obj4 = require("../Question no.4/tail");
// let obj5 = require("../Question no.4/union");
// let obj6 = require("../Question no.4/frompair");
// const express = require('express');
// const router = express.Router();

// router.get('/test-me', function (req, res) {
//     obj1.welcome("Welcome to my application. I am Karuna and a part of FunctionUp Thorium cohort.");
//     obj2.printDate("Today is 21st feb");
//     obj2.printMonth("Month is February");
//     obj2.getBatchInfo("Thorium, W3D1, the topic for today is Nodejs module system");
//     console.log(obj1.endpoint1);
//     console.log(obj2.endpoint2);
//     res.send('Welcome to my application');
// });

// router.get('/hello', function (req, res){
//     console.log(obj3.month);
//     console.log(obj4.myArray);
//     console.log(obj5.myArray2);
//     console.log(obj6.myArray3);
//     res.send('Question no.4 successfully executed!!');
// });
// module.exports = router;

// let obj = require("../movieList/movieList.js");

const express = require('express');
const router = express.Router();

router.get('/movies', function (req, res) {
    res.send('["3 idiots", "URI", "mimi", "masaan", "stree", "hungama"]');
});

router.get('/movies/:movieId', function (req, res) {
    let movieIndex=["3 idiots", "URI", "mimi", "masaan", "stree", "hungama"];
    let index = req.params.movieId;
    if (index>movieIndex.length-1){
        res.send("movie does not exists.");
    }
    else res.send(movieIndex[index]);
});

router.get('/films', function (req, res) {
    let movies = [{
        id: 1,
        name: 'The Shining'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Demo'
       }];
    res.send(movies);
});

router.get('/films/:filmId', function (req, res) {
    let movies = [{
        id: 1,
        name: 'The Shining'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Demo'
       }];
       let flag = 0;
       let id = req.params.filmId;
       for (let i=0; i<movies.length; i++){
           if (id == movies[i].id){
            res.send(movies[i]);
            flag = 1;
            break;
           }
       }
       if (flag == 0)
           res.send("No movie exists with this id.");
    res.send(movies);
});

module.exports = router;