const BooksModule = require('../model/bookmodel');
const booksData = require('./PrabhuPadBooks');
// console.log(booksData);
const insertData = async ()=>{
    try{

        const result = await BooksModule.insertMany(booksData);
        console.log(result)
        

    }catch(e){
        console.log("Error when books is inserting : ",e);
    }
}

insertData();