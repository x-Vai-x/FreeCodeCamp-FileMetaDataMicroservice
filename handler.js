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
	const name = req.body.name
	const type=req.body.type
	const size=req.body.size
	res.json({name: name, type: type, size: size})
})

app.listen(3001, function() {
	console.log("Listening on port 3001")
})