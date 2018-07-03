function TecnologyDAO(connection){
    this._connection = connection();
}

module.exports = function(){

    this.listar = function(connection, callback){

        this._connection.open(function(err, mongoclient){
            mongoclient.collection('tecnology', function(err, collection){
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
    
    }

}




/*
//var ObjectID = require('mongodb').ObjectId;

function TecnologyDAO(connection){
    this._connection = connection();
}

TecnologyDAO.prototype.listar = function(){

    this._connection.open(function(err, mongoclient){
        mongoclient.collection('tecnology', function(err, collection){
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

}
*/
