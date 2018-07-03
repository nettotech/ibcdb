var app = require('./config/server');

var port = 8080;

app.listen(port);

console.log('Servidor HTTP esta escutando na porta ' + port);


app.get('/',function(req, res){

    res.send({msg: 'Olá'});
});

var mongo = require('mongodb');

var db = new mongo.Db(
    'ibcdb',
    new mongo.Server(
        'localhost', // string contendo o endereço do servidor
        27017, // porta de conexão
        {}
    ),
    {}
);

app.get('/asset', function(req, res){
    
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

app.get('/tecnology', function(req, res){
    
    db.open( function(err, mongoclient){
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

});

/*
app.post('/api', function(req, res){

    var date = new Date()
    time_stamp = date.getTime();

    var url_imagem = time_stamp + '_' + req.files.arquivo.originalFilename;

    var path_origem = req.files.arquivo.path;
    var path_destino = './uploads/' + url_imagem;

    fs.rename(path_origem, path_destino, function(err){
        if(err){
            res.status(500).json({error: err});
            return;
        }

        var dados = {
            url_imagem: url_imagem,
            titulo: req.body.titulo
        }

        db.open( function(err, mongoclient){
            mongoclient.collection('postagens', function(err, collection){
                collection.insert(dados, function(err, records){
                    if(err){
                        res.json({ 'status': 'erro'});
                    } else {
                        res.json({'status' : 'inclusao realizada com sucesso'});
                    }
                    mongoclient.close();
                });
            });
        });

    });

});

app.get('/api', function(req, res){

    db.open( function(err, mongoclient){
        mongoclient.collection('postagens', function(err, collection){
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

app.get('/imagens/:imagem', function(req, res){
    
    var img = req.params.imagem;

    fs.readFile('./uploads/'+img, function(err, content){
        if(err){
            res.status(400).json(err);
            return;
        }

        res.writeHead(200, { 'content-type' : 'image/jpg'});
        res.end(content);
    });

});

app.get('/api/:id', function(req, res){

    db.open( function(err, mongoclient){
        mongoclient.collection('postagens', function(err, collection){
            collection.find(objectId(req.params.id)).toArray(function(err, results){
                if(err){
                    res.json(err);
                } else {
                    res.status(500).json(results);
                }
                mongoclient.close();
            });
        });
    });

});

app.put('/api/:id', function(req, res){

    db.open( function(err, mongoclient){
        mongoclient.collection('postagens', function(err, collection){
            collection.update(
                { _id : objectId(req.params.id) },
                { $push : {
                            comentarios : {
                                id_comentario : new objectId,
                                comentario : req.body.comentario
                            }

                        }
                },
                {},
                function(err, records){
                    if(err){
                        res.json(err);
                    } else {
                        res.json(records);
                    }
                    mongoclient.close();
                }
            );
        });
    });

});

app.delete('/api/:id', function(req, res){

    db.open( function(err, mongoclient){
        mongoclient.collection('postagens', function(err, collection){
            collection.update(
                { }, 
                { $pull:    {
                                comentarios : { id_comentario : objectId(req.params.id)}
                            }
                },
                {multi: true},
                function(err, records){
                    if(err){
                        res.json(err);
                    } else {
                        res.json(records);
                    }
                mongoclient.close();
            });
        });
    });

});

*/