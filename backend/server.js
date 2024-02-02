const express = require('express');
const app = express();


const PORT=8010;




app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(require('./routes/routes'));
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

