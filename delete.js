const dbconnect = require('./mongodb')
 const deleteData= async ()=>{
   //     console.log("function callses")
    let data = await dbconnect();
    let result  = await data.deleteOne({name:'nokia 102'})//multiple works here in place of deleteone
    console.warn(data);
    if(result.acknowledged)
    {
        console.log("data deleted")
    }
}


 deleteData();