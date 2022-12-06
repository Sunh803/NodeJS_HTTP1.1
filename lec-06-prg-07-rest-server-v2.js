const express = require('express');
const app =express();
app.use(express.json());
const bodyParser = require('body-parser');
let database = {}
app.get('/membership_api/:member_id',(req,res)=>{
    const memid = req.params.member_id
    if(memid in database){
        res.json({[memid]:database[memid]})
    }else{
        res.json({[memid]: "None"})
    }
})
//update
app.post('/membership_api/:member_id',(req,res)=>{
    const memid = req.params.member_id
    if(memid in database){
        database[memid] = req.body[memid]
        res.json({[memid]:req.body[memid]})
        res.end()
    }else{
        res.json({[memid]: "None"})
        res.end()
    }
})
//newthing
app.put('/membership_api/:member_id',(req,res)=>{
    const memid = req.params.member_id
    if(memid in database){
        res.json({[memid]: "None"})
        res.end()
    }else{
        database[memid]=req.body[memid]
        res.json({[memid] : req.body[memid]})
        res.end()
    }
})
app.delete('/membership_api/:member_id',(req,res)=>{
    const memid = req.params.member_id
    if(memid in database){
        delete database[memid]
        res.json({[memid] :  "Removed"})
    }else{
        res.json({[memid]: "None"})
        
    }

})
app.listen(5000, function(){
    console.log("server is on")
})