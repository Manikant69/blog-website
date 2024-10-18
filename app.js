require('dotenv').config();
const express = require('express');
const cors = require('cors');
const blogroute = require('./routes/blogroute');
const app = express();

const corsConfig = {
    origin:"*",
    credential:true,
    methods:["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsConfig));
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.use('/', blogroute);

app.use((err, req, res, next) => {
    console.error('Error occurred:', err);
    res.status(500).send('Internal Server Error');
  });  

const port = process.env.PORT || 4001;

app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`);
})