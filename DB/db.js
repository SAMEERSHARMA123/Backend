const mongoose = require('mongoose');
const dotenv = require("dotenv")
dotenv.config()
const url =  "mongodb+srv://jangidsameer26:vybGTx98TYwEle2Vc@cluster0.nzwe0w4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// const connection = mongoose.connect(url).then(() => console.log("✅ MongoDB connected"))
// .catch(err => console.log("❌ DB error:", err));

const connection = ()=>{
    mongoose.connect(url).then(()=> console.log("MOngoDB COnnect"))
    .catch((err)=>console.log("DB Error:",err));
}
module.exports = connection
