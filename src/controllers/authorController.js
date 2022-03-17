const AuthorModel=require("../models/authorModel")
const validator=require( 'email-validator');
const  jwt=require("jsonwebtoken")

const createAuthor= async function(req,res)
{
try{
    let data=req.body;
    let email = data.email;
    if(validator.validate(email)== false)
    {
        return res.status(400).send({msg: "Please input a valid email"})
    }
    let savedData= await AuthorModel.create(data);
   return  res.status(201).send(savedData)
}
catch(error){
    return res.status(500).send({msg: "Error", error:error.message})
}
}

const loginUser = async function (req, res) {
    try{
    let userName = req.body.email; 
    let password = req.body.password;
  
  if(!userName || !password)
  {
    return res.status(400).send({msg:"email and password must be present"})
  }
    let author = await AuthorModel.findOne({ email: userName, password: password });
    if (!author)
      return res.status(400).send({
        status: false,
        msg: "username or the password is not correct",
      });
  
      let token = jwt.sign(
      {
        authorId: author._id.toString(),
        batch: "thorium",
        organization: "FUnctionUp",
      },
      "functionUp-thorium-group42"
      
    );
  
    res.setHeader("x-api-key", token);
  
    return res.status(201).send({ status: true, data: token });
  }
  catch(error)
  {
    res.status(500).send({Error:error.message})
  }
  };
module.exports.createAuthor=createAuthor;
module.exports.loginUser = loginUser;