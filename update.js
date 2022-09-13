const dbconnect = require('./mongodb')

const updateData=async()=>{
    let data = await dbconnect();
    let result = await data.updateOne(//use here only update to update all data that have same name
        {name:'max pro 5'},{$set:{name:'U10',price:1000}}
    )
    if (result.acknowledged) {
        console.log("data updates")
      }
    console.warn(result )
}

updateData();