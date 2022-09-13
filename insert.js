// const  {MongoClient}=require('mongodb');
// // const  MongoClient=require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';
// const databasename = 'e-comm'
// const client = new MongoClient(url);

// async function getdata()
// {
//     let result = await client.connect();
//     let db = result.db(databasename);
//   collection =  db.collection('products');
//     let response = await collection.find({}).toArray();
//     console.log(response);

// }

// getdata();

const dbconnect = require('./mongodb')

const insert = async () => {
  const db = await dbconnect();
  const result = await db.insert(
    // [
    //   { name: 'max 1', brand: 'apple', price: 200, catagory: 'mobile' },
    //   { name: 'max 2', brand: 'one plus', price: 300, catagory: 'mobile' },
    //   { name: 'max 3', brand: 'huaze', price: 400, catagory: 'mobile' }
    // ]
    { name: 'note 5', brand: 'one plus', price: 2000, catagory: 'mobile' }

  );

  if (result.acknowledged) {
    console.log("data inserted")
  }
}

insert();