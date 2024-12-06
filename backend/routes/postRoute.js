import express from "express";
import { postData } from "../utils/constant/postData.js";


export const postRoute = express.Router()



postRoute.get('/',(req , res)=>{
    try{
    res.status(200).send({status: 200 , message: 'Success', data: postData})
    }
    catch(err){
        res.status(400).send({status: 400 , message: 'Something wentrong', data: null})
    }
})

postRoute.post('/',(req , res)=>{
    const data = req.body

    postData.push(data)
    try{
        res.status(201).send({status: 201 , message: 'Data added successfully', data: postData})
    }
    catch(err){
        res.status(400).send({status: 400 , message: 'Failed to add data', data: null})
    }
})
