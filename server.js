var http=require('http');
http.createServer((req,res)=>
{
    if(req.url==='/user')
    {
        res.writeHead(200,{'Content-type':'application/json'});
        res.end("{'user-name':'Akshat','Address':'Shimla'}");
    }
    else if(req.url==='/order')
    {
        res.writeHead(200,{'Content-type':'application/json'});
        res.end("{'order-no' : '1','status' : 'Delivered'}");
    }
}).listen(3000,'127.0.0.1');
console.log("Running...");
