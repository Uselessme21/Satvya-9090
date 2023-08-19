const express= require('express');
const app = express();  //
const env= require('dotenv').config();
const connection= require('./Db/connection')

app.get('/',(req,res)=>{
return 'hello'

})

app.listen(2000, async()=>{
   await connection;
   console.log('listening on port')
})


