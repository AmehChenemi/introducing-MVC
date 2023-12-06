const mongoose = require('mongoose')
const studentDatabase = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    stack: {
        type:String,
        required:[true,"Stack is required"]
    },
    email:{
        type:String,
        required:[true,"must enter an email"]
    },
    registeredCourses:{
        type:Array,
        required:[true, "you must register for a course as a student"]
    },
    result:{
        type:Object,
        required:[true,"kindly show the result for each courses registered"]
    
},
},{timeStamp:true})




const studentModel = mongoose.model("student",studentDatabase)

module.exports = studentModel