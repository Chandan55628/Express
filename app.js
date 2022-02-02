const express=require('express');
const fs=require('fs');
const req = require('express/lib/request');
const res = require('express/lib/response');
const path=require('path');
const app=express();
const port=8080;
//EXPRESS SPECIFICS STUFF

app.use('/static',express.static('static'));//For serving static files
app.use(express.urlencoded());

//PUG SEPCIFIC STUFF
app.set('view engine','pug');// Set the templet engine as pug

app.set('views',path.join(__dirname,'views'));//Set the view directory

//END POINTS

app.get('/',(req,res)=>{
    const con="This is the best content so far as use it wisely";
    const params={'title':'PubG is the best game',"content":con};
res.status(200).render('index.pug',params);
});
app.post('/',(req,res)=>{
    name=req.body.name;
    age=req.body.name;
    gender=req.body.gender;
    Aadhar=req.body.Aadhar;
    address=req.body.address;
    more=req.body.more;
    let outputToWrite=`the name of the client is ${name},${age}years old,${gender},
    ${Aadhar},residing at${address},More about him/her ${more}`

   fs.writeFileSync('output.txt',outputToWrite);

    const params={'message':'Your form has been submitted successfully'};
    res.status(200).render('index.pug',params);
})


app.listen(port,()=>{
    console.log(`The application started with port successfully on port ${port}`);

});
