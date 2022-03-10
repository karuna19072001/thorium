let mid1=function(req,res,next){
    let xAuthToken = req.headers["x-auth-token"]
    if( xAuthToken != undefined){
        console.log("done")
        next()
    }
    else{
        res.send("request is missing a mandatory header")
    }
}
module.exports.mid1 = mid1;


let authorization = async function (req, res) {
    let token = req.headers["x-auth-token"]
    let decodedToken = jwt.verify(token, "functionUp-thorium");
    let usedLoggedIn = decodedToken.userId 
    let param_Id = req.params.user_Id
    if(usedLoggedIn !== param_Id)
    return res.send({msg : "you are not authorized to access"});
    next()
}

module.exports.mid1 = mid1;
module.exports.authorization = authorization;
