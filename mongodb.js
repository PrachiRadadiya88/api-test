const  {MongoClient}=require('mongodb');
// const  MongoClient=require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';

const url = 'mongodb+srv://prachi:MjP8Fl1Zrgj5JHWE@cluster0.avoi6p8.mongodb.net/test';
const database = 'e-comm'
const client = new MongoClient(url);

async function dbconnect()
{
    let result = await client.connect();
    let db = result.db(database);
  return db.collection('products');
    // let response = await collection.find({name:'m-40'}).toArray();
    // console.log(response);
    
}

module.exports = dbconnect;
