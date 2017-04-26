const express = require('express');
const router = express.Router();

//Root Route
router.get('/',function(req,res) {
   let data = req.app.get('appData');
   let pagePhotos = [];
    let pageSpeakers = data.speakers;

   data.speakers.forEach(function(item){
      pagePhotos = pagePhotos.concat(item.artwork);
   });

   res.render('index',{

      pageTitle: 'Home',
       artwork: pagePhotos,
       speakers: pageSpeakers,
       pageID: 'home'

   });
});

module.exports = router;