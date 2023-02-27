const dotenv = require('dotenv')
const express = require('express');
const cors=require('cors');
const bodyparser = require('body-parser')
const app = express();
app.use(cors());
app.use(bodyparser.json())
dotenv.config({path: './config.env'})

require('./db/conn.js')

app.use(express.json());



app.use(require('./router/auth'));

const PORT = process.env.PORT;


app.get('/', (req, res)=> {
    res.send("Hello World App.js")
} );

app.listen(PORT, ()=> {
    console.log(`Server is running at port no ${PORT}`)
} )