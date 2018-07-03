module.exports = function(application){
    
    db.

    application.get('/asset', function(req, res){
    
        db.open( function(err, mongoclient){
            mongoclient.collection('asset', function(err, collection){
                collection.find().toArray(function(err, results){
                    if(err){
                        res.json(err);
                    } else {
                        res.json(results);
                    }
                    mongoclient.close();
                });
            });
        });
    
    });

}