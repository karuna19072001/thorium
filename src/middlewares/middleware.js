const jwt = require("jsonwebtoken");


const authenticationUser=function(req,res,next)
{
  try {
    let token = req.headers["x-api-key"];
    if (!token) return res.status(400).send({ status: false, msg: "token must be present" });
 let decodedToken = jwt.verify(token, "functionUp-thorium-group42");//verifying token with secret key
 //console.log(decodedToken)
if (!decodedToken)
    return res.status(400).send({ status: false, msg: "token is invalid" });//validating token value inside decodedToken
next();
  }
catch(error)
{
  res.send({msg:error.message})
}
}



const authorizationUser=function(req,res,next)
{
  try {
  let token = req.headers["x-api-key"];
let decodedToken = jwt.verify(token, "functionUp-thorium-group42");
console.log(decodedToken)
  let authorizedUser=decodedToken.authorId;
  let loggedInUser=req.params.authorId;
  console.log(authorizedUser,loggedInUser)
  if(authorizedUser!==loggedInUser) return res.status(401).send({status:false,msg:"You are not an authorized person to make these changes"})
  next();  
}
catch(error)
{
  return res.send({msg:error.message})
}
}
module.exports.authenticationUser = authenticationUser;

module.exports.authorizationUser = authorizationUser;