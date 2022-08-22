const mongoose = require("mongoose")


const adminLoginSchema = new mongoose.Schema({
    username:{
        type: String,
        required : true,
        unique: true
    },
    password:{
        type: String,
        required : true,
        unique: true
    }
})


const Admincredential = mongoose.model("Admincredential", adminLoginSchema);

module.exports = Admincredential;