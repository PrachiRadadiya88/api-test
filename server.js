

const http = require('http');
var colors = require('colors');
// function send(req,resp){
    
//     resp.write("<h1> hello </h1>");
//     resp.end();

// }

// http.createServer(send).listen(4500);sssss

const control = (req,resp)=>{
    resp.write("<h1>hello guys ch  il</h1>".green);
    resp.end();
}


http.createServer(control).listen(4500);

// function test(a)
// {
//     return a*100;
    // // }
    // both same
// const test = (a) =>a*100;