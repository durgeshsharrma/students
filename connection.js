const mongoose = require('mongoose');
const Url  = "mongodb://127.0.0.1:27017/batch-3";


//if connection suucessfull then 
connection().then(() => {
    console.log("Connection Successfull with mongoDb");
})

//if Error
.catch((err) => {
    console.log(err);
})


//Connection making with Db
async function connection(){
    await mongoose.connect(Url);
}

module.exports = connection;