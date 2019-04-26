const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false }
})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next()
    }

    this.password = await bcrypt.hash(this.password, 10)
    next()
})


userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
} 

userSchema.set('toJSON', { getters: true })

userSchema.options.toJSON.transform = function (doc, ret, options) {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
    delete ret.password
    return ret
}
module.exports = mongoose.model('User', userSchema)