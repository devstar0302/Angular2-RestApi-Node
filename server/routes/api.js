var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Video = require('../models/video');

var db = "mongodb://userpavel:pco82493@ds161042.mlab.com:61042/videoplayer";
mongoose.Promise = global.Promise;
mongoose.connect(db, { useMongoClient: true }, function(err){
    if(err){
        console.error("Error! "+ err);
    }
});


router.get('/videos', function(req, res, next){

    console.log('Get requuset for all videos');
    Video.find({})
    .exec(function(err,videos){
        if(err){
            console.log("Error retrieving videos");

        }else{
            res.json(videos);
        }
    });

});
router.get('/videos/:id', function(req, res, next){

    console.log('Get requuset for a single video');
    Video.findById(req.params.id)
    .exec(function(err,video){
        if(err){
            console.log("Error retrieving video");

        }else{
            res.json(video);
        }
    });

});

router.get('/',function(req, res){
res.send('api work');
});

router.post('/video',function(req, res){
    console.log('Post a video'); 
    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.save(function(err, insertedVideo){
        if(err){
            console.log('Error saving video');
        }else{
            res.json(insertedVideo);
        }
    });
});

router.put('/video/:id',function(req, res){

    console.log('Update a video');
    console.log(req.body.title+req.body.url+req.body.description);
    Video.findByIdAndUpdate(req.params.id,
    {
        $set:{title: req.body.title, url:req.body.url, description:req.body.description}
    },
    {
        new:true
    },
    function(err, updateVideo){
        if(err){
            res.send("Error update video")
        }else{
            res.json(updateVideo);
        }
    }
    );
});

router.delete('/video/:id', function(req, res){
    console.log('Deleting video');
    Video.findByIdAndRemove(req.params.id, function(err, deleteVideo){
        if(err){
            res.send('Error deleting video');

        }else{
            res.json(deleteVideo);
        }
    });

});
module.exports = router;