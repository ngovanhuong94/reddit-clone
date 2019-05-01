const Post = require('../models/Post')

exports.create = async function (req, res, next) {
    const { title, text, category, link } = req.body
    const userId = req.user.id
    try {
        const post = new Post({
            title,
            text,
            category,
            link,
            author: userId
        })
        await post.save()
        return res.status(201).json(post)
    } catch (err) {
        return next(err)
    }
}