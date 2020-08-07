const mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuid/v1');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        hashed_password: { //won't be saving the exact password but the hashed one
            type: String,
            required: true
        },
        about: {
            type: String,
            trim: true
        },
        salt: String, //used to generate password
        role: { // user or admin 
            type: Number,
            default: 0
        },
        history: { //purchase history
            type: Array,
            default: []
        }
    },
    { timestamps: true }
);


userSchema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    encryptPassword: function(password) {
        if (!password) return '';
        try {
            return crypto
                .createHmac('sha1', this.salt)
                .update(password)
                .digest('hex');
        } catch (err) {
            return '';
        }
    }
};

module.exports = mongoose.model('User', userSchema);