const express = require('express');
const router = express.Router();
const AuthorController=require("../controllers/authorController")
const BlogsController=require("../controllers/blogController")
const Middleware=require("../middlewares/middleware")



//Phase1:
router.post("/authors", AuthorController.createAuthor )

router.post("/blogs",Middleware.authenticationUser, BlogsController.createBlogs )

router.get("/blogs",Middleware.authenticationUser, BlogsController.getBlogs)

router.put("/blogs/:blogId/:authorId",Middleware.authenticationUser, Middleware.authorizationUser, BlogsController.updateBlogs)

router.delete("/blogs/:blogId/:authorId",Middleware.authenticationUser, Middleware.authorizationUser, BlogsController.deleteBlogById)

router.delete("/blogs/:authorId",Middleware.authenticationUser, Middleware.authorizationUser,BlogsController.deleteBlogByQueryParams)


//Phase2:
router.post("/login", AuthorController.loginUser)

module.exports = router;