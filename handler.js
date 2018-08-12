const express=require('express')
const app=express()
const path=require('path')

app.get('/',function(req, res){
	res.sendFile(path.resolve(__dirname+'/index.html'))
})

app.listen(3001, function() {
console.log("Listening on port 3001")
})