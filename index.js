const express = require('express');
const cors = require('cors');   
require('dotenv').config();

let app = express();

const connectDB=require('./connection');

connectDB();
// const host = 'http://localhost';
const port = process.env.PORT || 3500;


app.use(express.static('public'));
app.use(express.json({limit:'20mb'}));


const usersRouter = require('./routes/user-route');
const dashboardRouter= require('./routes/dashboard-route');




// let corsOptions = {
//     origin: 'http://localhost:3000',
//     methods: 'GET,PUT,POST,DELETE'
// }
    
app.use(cors());
// corsOptions

app.use('/api/v1/app', usersRouter);
app.use('/api/v1/app', dashboardRouter);


app.listen(port, () => {

    // console.log(`server running at ${host}:${port}/api/v1/app`);
    console.log(`server running at ${port}`)

});
