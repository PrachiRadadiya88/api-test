const http = require('http');
const data=require('./datatest')
http.createServer((req,resp)=>{

resp.writeHead(404,{'Content':'application\json'});
resp.write(JSON.stringify(data));
resp.end();
}).listen(4500);
