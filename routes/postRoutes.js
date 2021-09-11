const express = require('express');
const postControllers = require('../controllers/postControllers')
const router = express.Router();

// 라우트 - get(), post()
router
    .route("/")
    .get(postControllers.getAllPosts)
    .post(postControllers.createNewPost);

router.route("/:id").get(postControllers.getPostById)

module.exports = router;
// exports의 "S" 조심
// 이런 식으로도  : router.get('/', userController.view);