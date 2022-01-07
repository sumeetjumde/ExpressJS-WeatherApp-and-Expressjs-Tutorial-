const express = require('express');
const app = express();
const port = process.env.PORT || 3000 ;
const path = require('path');
const hbs = require('hbs');
const staticpath = path.join(__dirname,"../public");
const partialpath = path.join(__dirname,"../src/views/partials");
app.set('view engine','hbs');

app.use(express.static(staticpath));
app.set('view engine','hbs');
hbs.registerPartials(partialpath);
console.log(path.join(__dirname,"../src/views/partials"));




// Routing
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render('about')
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
    res.render("error")
})
app.listen(port,()=>{
    console.log(`listening to port no ${port}`)
});

