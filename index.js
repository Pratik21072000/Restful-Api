import  express  from "express";
import bodyParser from 'body-parser';
import router from "./routes/users.js";

const app = express()//We use express to handle complex routing, easier handling of post requests, rapid development of node.js applications and easier to organize our MVC architecture
const PORT = 5000;

app.use(bodyParser.json())//bodyparser is basically for handling post requests in json object which looks like a javascript object


app.use('/users',router)

//Doing request
app.get('/',(req,res) =>  res.send('Hello from homepage!'))


//Atlast we are working on backend so we have to listen to the requests of the client 
app.listen(PORT, () =>{
    console.log(`Server Running on port: http://localhost:${PORT}`)
})
