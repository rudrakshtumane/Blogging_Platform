const Blog = require('../model/blogModel');

async function createBlog(req,res){
        try{
        const blog = new Blog(req.body)
         result = await blog.save()
    
        return res.status(200).send({message: "Blog created successfully", result})
       }
         catch(error){
           return  res.status(500).send(error)
         }
    };

    
    async function getAllBlogs(req,res){
        try{
            const blog = await Blog.find() 
            res.status(200).send(blog);
        }catch(error){
            res.status(500).send(error)
        }
    }
    
    

    async function getBlogById(req,res){
            try {
                createdBy = req.query.createdBy;
                const result = await Blog.find({createdBy});
                if(!createdBy){
                    return res.status(400).send({message : "blog not found"});
                }
                 res.status(200).send(result);
            } 
                catch (error) {
                 res.status(500).send(error); 
            }
        };


        async function updateBlog(req,res){
              try{
                const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {new:true});
                if(!updatedBlog){
                    return res.status(400).send({message : "blog not found"});
                }
                res.status(200).send({message : "blog updated successfully"});
              }catch(error){
                res.status(500).send(error); 
              }
            };


         async function deleteBlog(req,res){
                    try {
                       const result = await Blog.findByIdAndDelete(req.params.id);
                        return res.status(200).send({message: "Blog deleted successfully", result});
                     } 
                     catch (error) {
                    return res.status(500).send(error);
                    }
                };

         async function comments(req,res){
                    try{
                        const comment = await Blog.findByIdAndUpdate(req.params.id, {$push : {comment : req.body}});
                        if(!comment){
                          return res.status(400).send({message : "Comment not found"})
                        }
                        res.status(200).send({message : "Comment Added successfully"});
                      }
                      catch(error){
                        return res.status(500).send(error);
                      }
                    };


              

         async function getCommentForBlog(req, res){
                            try{
                                const blogs = await Blog.findById(req.params.id);
                                res.send(blogs.comment);
                            }
                            catch(err){
                                res.status(500 ).send(err);
                            }
                        }
    

    module.exports = {
        createBlog,
        getAllBlogs,
        getBlogById,
        updateBlog,
        deleteBlog,
        comments,
        getCommentForBlog
    }