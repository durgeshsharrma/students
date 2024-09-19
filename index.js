const express = require('express');
const app = express();
const connection = require('./connection');
const student = require('./routes/student.js');
connection();


app.use(student);



app.listen(3000 , (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Server has started on port 3000");
    }
})