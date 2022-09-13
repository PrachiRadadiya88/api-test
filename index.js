// const http = require('http');


// var colors = require('colors');

// console.log("hello".red);
// console.log("Package.json".bgCyan);
// const fs = require('fs')
// const input  = process.argv
// // console.log(process.argv)

// if(input[2] == 'add')
// {
// fs.writeFileSync(input[3],input[4])
// }else if (input[2]=='remove')
// {
//     fs.unlinkSync(input[3])
// }
// else
// {
//     console.log("invalid op")
// }
// http.createServer(control).listen(3600);
// const { dir } = require('console')
// const fs =require('fs')
// const path = require('path')

// const dirpath  = path.join(__dirname,'files')

// console.warn(dirpath)
// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirpath+"/hello"+i+".txt","a simple text");
// }

// fs.readdir(dirpath,(err,files)=>{
//     // console.warn(files)
//     files.forEach((item)=>{
//         console.log(item)
//     })
// })

// const fs=require('fs');
// const path = require('path');
// const dirpath = path.join(__dirname,'crud')
// const filepath=`${dirpath}/apple.txt`;
// fs.writeFileSync(filepath,'this is a simple file');
// fs.readFile(filepath,'utf-8 ',(err,item)=>{
//     console.log(item )
// });
// fs.appendFile(filepath,'and file name is apple.txt',(err)=>{
//     if(!err) console.log("file is updated")
// })
// fs.rename(filepath,`${dirpath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file is updated")
// })
// fs.unlinkSync(`${dirpath}/fruit.txt`)
// console.log("first")
// var a =10
// var b=0

// let waitingtime = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         b=30
//        resolve(b)

//      },2000)
// })

// waitingtime.then((/*b*/data)=>{
//   b=data
//   console.log(a+b)
// })
// console.log("starting up")
// setTimeout(() => {
//   console.log("2  sec log")
// }, 2000);

// setTimeout(() => {
//   console.log("0 sec log")
// }, 0 );

// console.log("finising up")

// const express = require('express')
// const app = express();
// app.get("",(req,res)=>{
//   console.log("data sent by browser",req.query.name)
//   res.send(`<h1>hello,this is home  page</h1> <a href="/help">go to help</a>` + req.query.name);

// });


// app.get('/help',(req,res)=>{
//   res.send(`<input type="text" placeholder="username" value="${req.query.name}" /> 
//   <button>click me</button>
//   `);

// });

// app.get('/about',(req,res)=>{
//   res.send([{
//     name:'jetani',
//     email:'jetani@gmail.com'
//   },
//   {
//     name:'harshil',
//     email:'herahil@gmail.com'
//   }
// ]


//   );
// });




// 

const express = require('express')
const reqFilter= require('./middleware')

const app = express();
const route = express.Router ();


// app.use(reqFilter)
route.use(reqFilter)
app.get('/', (req, resp) => {
    resp.send("welcome to home page")
});

app.get('/user', (req, resp) => {
    resp.send("welcome to user page")
});

route.get('/about',(req, resp) => {
    resp.send("welcome to about page")
});

route.get('/contact',(req, resp) => {
    resp.send("welcome to contact page")
});

app.use('/',route)

app.listen(5000)