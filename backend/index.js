const express= require('express');
const cors =require('cors')
const app = express();  //
app.use(express.json());
app.use(cors())
const env= require('dotenv').config();
const connection= require('./Db/connection')
const userrouter= require('./Routes/user.route')
app.get('/', (req, res)=>{
 res.send('hello');
 

})
app.use('/register' ,userrouter);

app.listen(2000, async()=>{
   await connection;
   console.log('listening on port')
})


