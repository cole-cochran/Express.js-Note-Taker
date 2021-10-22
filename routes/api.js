const db = require ('../db/db.json');
const fs = require('fs');
const path = require('path');
const app = require('express').Router();
const uuidGEN = require('../uuidGEN');

app.delete("/notes/:id", (req, res) => {
    let fileDelete = path.join(__dirname, "../db/db.json");
    for (i = 0; i < db.length; i++) {
      if (db[i].id == req.params.id) {
        db.splice(i, 1);
    }
    }
    
    fs.writeFile(fileDelete, JSON.stringify(db), (err) => {
        if(err){
        }else{
      res.json(db)
        }
    })
});

app.get('/notes', (req,res)=>{
    console.log(`${req.method} Request received so calm your pretty little ass down\n//////showing you the fucking list you dirty bastard//////// `)
    res.status(200).json(db);
    
}
)

app.post('/notes',(req,res)=>{
    console.log('be warned \n your pathetic attempt has been noticed')

    let filePost = path.join(__dirname, "../db/db.json");

    
    let noteDB = req.body

    noteDB.id = uuidGEN()
    
    console.log(`The note now has a new destination:${noteDB.id}`)

  
     db.push(noteDB)
    
    fs.writeFile(filePost, JSON.stringify(db), (err)=> {
        if(err){
           console.log(err)
        }else{
           console.log('fortune favored you this time boy.');
        } 
      });
    
      
     res.json(noteDB);
}
)

module.exports = app;