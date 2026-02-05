import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
import connectDB from './db/db.js';
import app from './app.js';


const port  = process.env.PORT || 8080;

connectDB()
.then(() => {
    app.listen(port, ()=>{
        console.log(`Server running on port: ${port}`);
    })
})
.catch((error) => {
    console.log(`Mongo DB connection failed! -> ${error}`)
})












/*
import express from 'express';

const app = express();

(async ()=> {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/ ${DB_NAME}`)

        app.on('error', (error)=>{
            console.log('Error: ', error);
            throw error
        })

        app.listen(process.env.PORT, ()=> {
            `Server is listening on port ${process.env.PORT}`
        })
    }
    catch(error){
        console.error('Error: ', error)
        throw error
    }
}) ()

*/