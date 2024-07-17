const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
        blogTitle : {type:String, required:true},
        content : {type:String, required:true},
        dateTime: {type:Date, default:Date.now},
        createdBy : {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
        comment : [
            {
               userID : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
               comments: {type:String}
            }    
           ]
    }); 

    module.exports = mongoose.model('blog',blogSchema);



