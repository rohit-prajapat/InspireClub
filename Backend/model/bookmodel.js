const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const connect=()=>{
  mongoose.connect('mongodb://127.0.0.1:27017/BookStore').then(() => console.log('Connected!'));
}


connect();

const bookSchema = new Schema({
  author: String,
  title: String,
  price : Number,
  image : String,  
});


const BooksModule = mongoose.model('BooksModuel', bookSchema);
module.exports = BooksModule;