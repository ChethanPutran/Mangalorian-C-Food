const mongoose = require("mongoose");
const validator = require("validator");

const msgSchema = mongoose.Schema({
    name: { type: String, required: true },
    name: { type: String, minlength: 4, maxlength: 25, required: true },
    email: {
        type: String,
        unique: true,
        required: true,
        validate(email) {
            if (!validator.isEmail(email)) {
                throw { message: "Invalid email" };
            }
        },
    },
    findUs: { type: String, required: true },
    news: { type: String, required: true },
    message: { type: String, required: true },
});

const Message = mongoose.model("Message", msgSchema);
module.exports = Message;