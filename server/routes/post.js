const router = require('express').Router()
const { jwtAuth } = require('../midlewares')
const { validateCreatePost } = require('../controllers/validation')
const postController = require('../controllers/post')

router.post('/', jwtAuth, validateCreatePost, postController.create)


module.exports = router