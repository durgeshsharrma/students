const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const studentSchema = new Schema({

    name : {
        required : true,
        type : String,
    },


    rollNo : {
        type : String,
    },


    fatherName : {
        type : String,
    },


    adharCardNo : {
        type : String,
    },


    phoneNo : {
        type : Number,
    }


})


module.exports = mongoose.model("Student" , studentSchema);