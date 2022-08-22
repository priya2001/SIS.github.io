const mongoose = require("mongoose")
const validator = require("validator")

const studentDetailSchema = mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true,
        // validate(value){
        //     if(!validator.isEmail(value)){
        //         throw new Error("Email is invalid")
        //     }
        // }
    },
    password :{
        type : String,
        required: true
    }
})

const Credential = mongoose.model("Credential",studentDetailSchema);

module.exports = Credential;