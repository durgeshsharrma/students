const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController.js');


router.use(express.json());

router.get("/students" , (req , res) => {
    studentController.allStudents(req , res);
})

router.post('/add/student' , (req , res) => {
    studentController.addStudent(req,res);
})





module.exports = router;