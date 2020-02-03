const express = require('express')
const port = process.env.PORT || 3000;
const path = require("path");

const app = express();

app.use(express.urlencoded({extends:false}));

app.use(express.json());

app.use(express.static(path.resolve(__dirname,'clinet')))

app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
})

app.listen(port);