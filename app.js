require('dotenv').config();
const express = require('express');
const cors = require('cors');
const blogroute = require('./routes/blogroute');
const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.use('/', blogroute);
app.use('/blog', blogroute);

const port = process.env.PORT || 4001;

app.listen(port, ()=>{
    console.log(`server is running at https://localhost:${port}/blog`);
})