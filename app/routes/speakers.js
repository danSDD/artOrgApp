const express = require('express');
const router = express.Router();


//Speakers Route
router.get('/speakers',function(req,res) {

    let data = req.app.get('appData');
    let pagePhotos = [];
    let pageSpeakers = data.speakers;

    data.speakers.forEach(function(item){
        pagePhotos = pagePhotos.concat(item.artwork);
    });

    res.render('speakers',{

        pageTitle: 'Speakers',
        artwork: pagePhotos,
        speakers: pageSpeakers,
        pageID: 'speakerList'

    });
});


//Speaker  Route
router.get('/speakers/:speakerid',function(req,res) {

    let data = req.app.get('appData');
    let pagePhotos = [];
    let pageSpeakers = [];

    data.speakers.forEach(function(item){
        if(item.shortname === req.params.speakerid) {
            pageSpeakers.push(item);
            pagePhotos = pagePhotos.concat(item.artwork);
        }

    });

    res.render('speakers',{

        pageTitle: 'Speakers',
        artwork: pagePhotos,
        speakers: pageSpeakers,
        pageID: 'speakerDetail'

    });
});

module.exports = router;