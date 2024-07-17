const  express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController');
const userController = require('../controller/userController');
const auth = require('../middlewares/auth');

// user
router.post('/registerUser', userController.registerUser);

router.post('/loginUser', userController.loginUser);

// blog
router.post('/createBlog', blogController.createBlog);
router.get('/getAllBlogs', blogController.getAllBlogs);
router.get('/getBlogById/:id',auth, blogController.getBlogById);
router.put('/updateBlog/:id', blogController.updateBlog);
router.delete('/deleteBlog/:id', blogController.deleteBlog);

// comments management 
router.post('/blog/:id/comments', blogController.comments);
router.get('/blog/:id/getCommentForBlog', blogController.getCommentForBlog);



module.exports = router;


