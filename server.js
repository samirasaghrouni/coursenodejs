// const http=require('http')
// const server = http.createServer((req,res)=>{
    
//     res.statusCode=200
//     res.setHeader('content-type','text/html')
//     res.write('page  found')//nektbo f jweb 
    
//     res.end()//houni nab3tho jwebb
// })
// server.listen(3000,()=>{console.log('server is running')})



//////////////
const http=require('http')
const server = http.createServer((req,res)=>{
    if((req.url)=='/home'){
        res.statusCode=200
        res.write('welcome to home')
    }else if(((req.url)=='/contact')){
        res.statusCode=200
        res.write('welcome to contact') 
    }else if(((req.url)=='/about')){
        res.statusCode=200
        res.write('welcome to about') 
    } else {
        res.statusCode=404
        res.write('dont found') 
    } 

    res.end()
    
    
   
})
server.listen(3000,()=>{console.log('server is running')})