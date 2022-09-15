import express from 'express'
import {v4 as uuidv4} from 'uuid'

const router = express.Router()

let users = []

//Getting all the users.
router.get('/',(req,res)=>{
     res.send(users)})



//Client posting his/her  details into the database.
router.post('/',(req,res) =>{
    const user = req.body

    const userId = uuidv4();
    const userWithId = {...user, id: userId}

    users.push(userWithId)
    res.send(`User with the name ${user.firstName} added to the database`)
})



//Performing get operation for a particular id.
router.get('/:id',(req,res)=>{
    const {id} = req.params
    const foundUser = users.find(user => user.id === id)
    res.send(foundUser)
})



//Performing delete operation
router.delete('/:id',(req,res)=>{
    const {id} = req.params
    users = users.filter(user => user.id !== id)
    console.log(users)
    res.send(users)
})



//Updating the details of the object we use PUT operation and if we want to update the part of an object we use patch
router.patch('/:id',(req,res)=>{
    const {id} = req.params
    const {firstName,lastName,age} = req.body

    const user = users.find(user => user.id === id)

    if(firstName){
        user.firstName = firstName
    }else if(lastName){
        user.lastName = lastName
    }else if(age){
        user.age = age
    }

    res.send(`User with the id ${id} has been updated `)
    
})



export default router