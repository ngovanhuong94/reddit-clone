const mongoose = require('mongoose')
const Schema = mongoose.Schema


const postSchema = new Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    link: { type: String },
    text: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User'},
    views: { type: Number, default: 0 },
    votes: [{ user: Schema.Typed.ObjectId, vote: Number, _id: false }],
    createdAt: { type: Date, default: Date.now }
})

postSchema.set('toJSON', { getters: true })
postSchema.options.toJSON.transform = function (doc, ret, options) {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
    return ret 
}

module.exports = mongoose.model('Post', postSchema)