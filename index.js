const express = require ("express");
const bodyParser = require("body-parser");
const date = require(__dirname +"/date.js");


const app = express();
const items = ["cook", "buy","eat"];
const workItems = [];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');




app.get ("/", function(req,res){
    
const day = date.getDate();


    
    res.render("list", {listTitle: day,newListItems: items  });
 
});
app.post("/", function(req,res){
    const item =  req.body.newItem;
   if (req.body.list=== "work") {
    workItems.push(item);
    res.redirect("/work");
   }else{
    items.push(item);
    res.redirect("/");
   }

});
app.get("/work", function(req,res){
    res.render("list", {listTitle:"work List", newListItems:workItems});
});
app.post("/", function(req,res){
    
    const item =  req.body.newItem;
   workItems.push(item);
   res.redirect("/work");
   });


app.listen(3000,function(){
    console.log("listen port on 3000");
})