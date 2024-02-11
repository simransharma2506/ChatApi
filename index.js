const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const {MONGO_URL, PORT} = process.env;

mongoose.connect(MONGO_URL,{
    useNewUrlParser: true,
}).then(()=> console.log("MongoDB connect successfully"))
.catch((err)=> console.error(err));

app.listen(PORT, () =>{
    console.log(`server is listining on port ${PORT}`);
});

app.use(cors({
    origin: ["http://localhost:4000"],
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true,
}));

app.use(express.json());