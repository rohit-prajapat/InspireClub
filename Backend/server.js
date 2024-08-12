const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const BooksModule = require('./model/bookmodel');
const bookroute = require('./routes/booksRoute');
const cors = require('cors');
app.use(cors());
// app.get("/book",(req,res)=>{
//     res.send("hare Krishna : ");
// }) 
app.use('/book',bookroute);
 

const PORT = 500
app.listen(PORT,()=>{
    console.log("server is running : ",PORT);
})

const createBook=(req,res)=>{

    res.send('done is there : ');
    const book1 = new BooksModule({
        author : 'PrabuPad',
        title : 'Law of Nature',
        price : 50,
        image : '12323',
    })

    book1.save().then((x)=>{
        console.log(x);
    });
}