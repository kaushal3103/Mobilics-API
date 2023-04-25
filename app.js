require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const cors = require('cors');

const User = require('./models/user');

const data = require('./sample_data.json');

const api = require('./routes/api');

app.use(express.json());
app.use(cors());

app.use('/api/v1',api);

const port = process.env.PORT || 3000;

const start = async()=>{
    try{
    await connectDB(process.env.MONGO_URI);
   // await User.create(data)
    app.listen(port,console.log(`Server is listening on port ${port}...`))
    }catch(error){
    console.log(error);
    }
}

start();