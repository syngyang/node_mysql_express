const Post = require('../models/Post')

exports.getAllPosts = async (req, res, next) => {
    try {
        const [posts, _] = await Post.findAll();
        res.status(200).json({count: posts.length, posts});
    } catch (error) {
        console.log(error);
        next(error);
    }
//   res.send("Get all posts route") 초기 테스트용
};

exports.createNewPost = async(req, res,next) => {
    try {
        //console.log(req) //ok
        let {title, body} = req.body;
        let post = new Post(title, body);
        post = await post.save();

        res.status(201).json({message:"Post created"});
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.getPostById = async(req, res, next) => {
    try {
        let postId = req.params.id;
        const [post, _] = await Post.findById(postId)
        res.status(200).json({post:post[0]})
    } catch (error) {
        console.log(error);
        next(error);
    }
    // res.send("Get Post By ID Route")
}


