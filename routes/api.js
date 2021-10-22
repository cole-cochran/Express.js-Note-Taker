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

