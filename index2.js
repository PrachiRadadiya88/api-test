// const  {MongoClient}=require('mongodb');
// // const  MongoClient=require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';
// const database = 'e-comm'
// const client = new MongoClient(url);

// async function dbconnect()
// {
//     let result = await client.connect();
//     let db = result.db(database);
//   return db.collection('products');
    // let response = await collection.find({name:'m-40'}).toArray();
    // console.log(response);
//}
const dbconnect = require('./mongodb')


// dbconnect().then((resp)=>{
//    resp.find({}).toArray().then((data)=>{
//     console.log(data)
//    })
// })
// console.log(dbconnect())

const  main =async ()=>{
    let data = await dbconnect();
    data =await data.find().limit(1).toArray();
    console.warn(data);
}

main();