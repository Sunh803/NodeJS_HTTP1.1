var http = require('http');
const path = require('path');
const request = require('request');
console.log('## HTTP client started.')
var options = {
    hostname : '127.0.0.1',
    port : 8080,
    path : '/temp/',
    method : 'get'
};
var req = http.request(options, (res) => { // 페이지를 호출
    console.log(`## GET request for http://localhost:8080${options.path}`)  
    console.log("## GET response [start]") 
    var data = "";
    res.on('data', (chunk) => { // 서버에서 받아온 데이터 수신
    data += chunk;
    });

    res.on('end', () => { // 수신 완료하면 console에 출력
    console.log(data);
    console.log("## GET response [end]")
    });
});
req.end();
var options2 = {
    hostname : '127.0.0.1',
    port : 8080,
    path : '/?var1=9&var2=9',
    method : 'get'
}
var req = http.request(options2, (res) => { // 페이지를 호출

    console.log(`## GET request for http://localhost:8080${options2.path}`)  
    console.log("## GET response [start]") 
    var data = "";
    res.on('data', (chunk) => { // 서버에서 받아온 데이터 수신
    data += chunk;
    });

    res.on('end', () => { // 수신 완료하면 console에 출력
    console.log(data);
    console.log("## GET response [end]")
    });
});

req.end();
var mybody = {'var1' : '9','var2' : '9',}
var options3 = {
    url : 'http://127.0.0.1:8080',
    json : true,
    body : mybody,
};


request.post(options3, (err, res, body) => {
    console.log("## POST request for http://localhost:8080/ with var1 is 9 and var2 is 9")
    console.log("## POST response [start]")
    if (err) {
        return console.log(err);
    }
    console.log(res.body)
    console.log("## POST response [end]")   
    
});
