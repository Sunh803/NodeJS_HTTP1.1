const http = require('http');
var Url = require('url');
var ip = require('ip');
var queryString = require('querystring');

const server = http.createServer((request, response)=>{
    let body = []
    const {headers, url, method} = request;
    var requestversion = 
    request.httpVersion
    var clientaddress = request.url;
    var parseurl = Url.parse(clientaddress);
    var resource  = parseurl.pathname;
    

    function send_http_response_header(){
        response.writeHead(200, {"Content-Type": "text/plain"}); // (1)
        
    }
    function print_http_request_detail(){
        
        console.log(`::Client address   : ${request.connection.remoteAddress}`);
        console.log(`::Client port      : ${request.connection.remotePort}`);
        console.log(`::Request command  : ${method}`);
        console.log(`::Request line     : ${method} ${url} HTTP/${requestversion}`);
        console.log(`::Request path     : ${url}`);
        console.log(`::Request version  : HTTP/${requestversion}`);
    }
    
    function simple_calc(par1,par2){
        return par1*par2
    }
    function parameter_retrieval(msg){
        var result = []
        var fields =msg.split('&')
        result.push(parseInt(fields[0].split('=')[1]))
        result.push(parseInt(fields[1].split('=')[1]))
        return result
    }
    if (method=="GET"){
        if (url.includes("?")) {
            console.log("## do_GET() activated.")
            var routine = url.split('?')[1]
            print_http_request_detail()
            send_http_response_header()
            var parameters = parameter_retrieval(routine)
            var result = simple_calc(parseInt(parameters[0]),parseInt(parameters[1]))
            response.write("<html>")
            response.write(`GET request for calculation => ${parameters[0]} * ${parameters[1]} = ${result}`);  // (2)
            response.end("</html>")
            console.log(`## GET reqeust for calculation => ${parameters[0]} * ${parameters[1]} = ${result}.`)
        }
        else{
            console.log("## do_GET() activated.")
            print_http_request_detail()
            send_http_response_header
            response.write("<html>")
            response.write(`<p>HTTP Request Get for Path : ${resource}</p>`);  // (2)
            response.end("</html>")
            console.log(`## GET reqeust for directory => ${url}.`)
        }
    }
    else if (method=="POST"){
        console.log("## do_POST() activated.")
        print_http_request_detail()
        send_http_response_header()
        request.on('data', function(data){
            body.push(data);
        });
        request.on('end',function(){
            body = Buffer.concat(body).toString()
            var realbody = JSON.parse(body)
            const keys = Object.keys(realbody)
            const values=Object.values(realbody)
            const result = simple_calc(parseInt(values[0]),parseInt(values[1]))
            response.end(`POST request for calculation => ${values[0]} * ${values[1]} = ${result}`)
            
            console.log(`## POST request data => ${keys[0]}=${values[0]}&${keys[1]}=${values[1]}.`)
            console.log(`## POST request calculation => ${values[0]} * ${values[1]} = ${result}.`)
        })
    }

});

var serverport = process.env.port || 8080;
const hostname = '127.0.0.1';
server.listen(serverport, hostname, ()=>{
    console.log(`## HTTP server started at http://localhost:${serverport}.`)
})
