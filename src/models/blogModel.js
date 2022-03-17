const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const blogSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    body: {
        type: String,
        required: true
    },

    authorId: {
        type : ObjectId,
        ref : "Author"
    },
    tags: {
        type: Array,
        required : true,
        unique : true,
       
    },
    category: {
        type: Array,
        required: true
    },
    subcategory:{
        type : Array ,
    },
    
    isPublished : {
        type : Boolean ,
        default : false

    },
    isDeleted : {
        type : Boolean ,
        default : false
    },
    publishedAt : {
        type : Date ,
        
    }

}, { timestamps: [ { createdAt: 'created_at' }, {updatedAt: 'updated_at' }  ]  }  );


module.exports = mongoose.model('Blog', blogSchema)