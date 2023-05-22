// importing express into project 
const express = require("express")

// import path module
const path = require ('path')

// define a PORT for our server to run
const PORT = 8000 

// initialize an express application
const app = express()

// host react app as static files 
app.use(express.static(path.resolve(__dirname, '>>/client/build')))

//define some routes
app.get('/', (request, response)=>{
    response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.get ('/api', (request, response)=>{
    // send message back to client 

    response.json({message: 'Yo yo from the server!' })
})

// start app at PORT 
app.listen(PORT, ()=>{
    console.log('Server is listening on PORT ${PORT}')
 
})