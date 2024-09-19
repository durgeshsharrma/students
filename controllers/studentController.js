const Student = require("../models/Student.js");

module.exports.addStudent = async (req , res) => {
    try{
          console.log(req.body);
          let Student1 = new Student(req.body);
          await Student1.save();
          console.log("data saved to db successfully")
          res.send("data sended to db....")
    }

    catch(err){
        console.log(err);
    }

}


module.exports.allStudents = async (req , res) => {
    try{
          
            let students = await Student.find({name : "umesh"});
            console.log(students);
            res.send(students);
    }

    catch(err){
        console.log(err);
    }
}
