const express = require('express');

const port = 4000;

const app = express();

//Serving for production

app.use(express.static(`${__dirname}/employee_client/build`));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'/employee_client/build/index.html'));
})

app.listen(port,()=>{
    console.log(`Trax employee server listening on: ${port}`)
});