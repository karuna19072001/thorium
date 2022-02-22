const _ = require('lodash'); 
let pairs = [['horror','The Shining'],['drama','Titanic'],['“thriller”','Shutter Island'],['fantasy','Pans Labyrinth']];
let obj = _.fromPairs(pairs);
module.exports.pairs = pairs;