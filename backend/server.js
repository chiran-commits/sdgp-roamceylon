const express = require('express');
const app = express();
const connectDB = require('./database/database');




const PORT=8010;
connectDB();




app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',require('./routes/routes'));
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

