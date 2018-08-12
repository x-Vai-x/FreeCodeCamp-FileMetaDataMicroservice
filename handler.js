const express=require('express')
const app=express()
const path=require('path')

const bodyParser=require('body-parser')

app.use( bodyParser.json() )       
app.use(bodyParser.urlencoded({    
  extended: true
}))

app.get('/',function(req, res){
	res.sendFile(path.resolve(__dirname+'/index.html'))
})

app.post('/file',function(req,res){
	res.json(req.body.file)
})

app.listen(3001, function() {
	console.log("Listening on port 3001")
})