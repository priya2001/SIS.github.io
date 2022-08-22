const mongoose = require("mongoose")

const detailSchema = mongoose.Schema({
    registrationNumber:{
        type: Number,
        required : true
    },
    year:{
        type: String,
        required : true
    },
    firstName:{
        type: String,
        required : true
    },
    lastName:{
        type: String,
        required : true
    },
    FatherName:{
        type: String,
        required : true
    },
    MotherName:{
        type: String,
        required : true
    },
    DateofBirth:{
        type: String,
        required : true
    },
    Category:{
        type: String,
        required : true
    },
    MobileNumber:{
        type: Number,
        required : true
    },
    email:{
        type: String,
        required : true,
        unique:true
    },
    course:{
        type: String,
        required : true
    },
    highSchoolRollNum:{
        type: String,
        required : true
    },
    highSchoolPassing:{
        type: String,
        required : true
    },
    highSchoolPercent:{
        type: String,
        required : true
    },
    interRollnum:{
        type: String,
        required : true
    },
    interPassingyear:{
        type: String,
        required : true
    },
    interPercent:{
        type: String,
        required : true
    },
    currentcourse:{
        type: String,
        required : true
    },
    currentRollnum:{
        type: String,
        required : true
    },
    department:{
        type: String,
        required : true
    },
    overallPercent:{
        type: String,
        required : true
    },
    firstSemPercent:{
        type: String,
        required : true
    },
    secondSemPercent:{
        type: String,
        required : true
    },
    thirdSemPercent:{
        type: String,
        required : true
    },
    primaryMobile:{
        type: Number,
        required : true
    },
    altMobile:{
        type: Number,
        // required : true
    },
    primaryEmail:{
        type:String,
        required: true
    },
    altemail:{
        type:String,
        // required: true
    },
    currentHouseNum:{
        type: String,
        required: true
    },
    currentLocality:{
        type:String,
        required:true,

    },
    currentDistrict:{
        type:String,
        required:true
    },
    currentState:{
        type:String,
        required: true
    },
    currentPincode:{
        type:Number,
        required:true
    },
    permanentHouseNum:{
        type: String,
        required: true
    },
    permanentLocality:{
        type:String,
        required:true,

    },
    permanentDistrict:{
        type:String,
        required:true
    },
    permanentState:{
        type:String,
        required: true
    },
    permanentPincode:{
        type:Number,
        required:true
    },
    SportsAchievement:{
        type:String,
    },
    volunteered:{
        type:String,
    },
    seminar:{
        type:String,
    }

})


const Information = mongoose.model("Information", detailSchema);

module.exports = Information;