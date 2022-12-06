
const request = require('request');
var http = require('http');
request.get('http://localhost:5000/membership_api/0001', function(req, res){
    const responsedata = JSON.parse(res.body)
    console.log(`#1 Code: ${res.statusCode} >> JSON: ${res.body} >> JSON Result: ${responsedata["0001"]}`)
})
const options = {
    uri : 'http://localhost:5000/membership_api/0001',
    body : {"0001" : "apple"},
    json : true
}
request.put(options, function( request, response){

    console.log(`#2 Code: ${response.statusCode} >> JSON: ${JSON.stringify(response.body)} >> JSON Result: ${response.body['0001']}`)
})
request.get('http://localhost:5000/membership_api/0001', function(req, res){
    const responsedata = JSON.parse(res.body)
    console.log(`#3 Code: ${res.statusCode} >> JSON: ${res.body} >> JSON Result: ${responsedata["0001"]}`)
})
const options2 = {
    uri : 'http://localhost:5000/membership_api/0001',
    body : {"0001" : "xpple"},
    json : true
}
request.put(options2, function( request, response){
    console.log(`#4 Code: ${response.statusCode} >> JSON: ${JSON.stringify(response.body)} >> JSON Result: ${response.body['0001']}`)
})
const options3 = {
    uri : 'http://localhost:5000/membership_api/0002',
    body : {"0002" : "xrange"},
    json : true
}
request.post(options3, function( request, response){
    console.log(`#5 Code: ${response.statusCode} >> JSON: ${JSON.stringify(response.body)} >> JSON Result: ${response.body['0002']}`)
})
request.put(options3, function( request, response){})
const options4 = {
    uri : 'http://localhost:5000/membership_api/0002',
    body : {"0002" : "orange"},
    json : true
}
request.post(options4, function( request, response){
    console.log(`#6 Code: ${response.statusCode} >> JSON: ${JSON.stringify(response.body)} >> JSON Result: ${response.body['0002']}`)
})
request.delete('http://localhost:5000/membership_api/0001', function(req, res){
    const responsedata = JSON.parse(res.body)
    console.log(`#7 Code: ${res.statusCode} >> JSON: ${res.body} >> JSON Result: ${responsedata["0001"]}`)
})
request.delete('http://localhost:5000/membership_api/0001', function(req, res){
    const responsedata = JSON.parse(res.body)
    console.log(`#8 Code: ${res.statusCode} >> JSON: ${res.body} >> JSON Result: ${responsedata["0001"]}`)
})