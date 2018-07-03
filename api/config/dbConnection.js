/////////////////////////
// Conexão com MongoDB //
/////////////////////////

var mongo = require('mongodb');

var connMongoDB = function(){

    var db = new mongo.Db(
        'ibcdb',
        new mongo.Server(
            'localhost', // string contendo o endereço do servidor
            27017, // porta de conexão
            {}
        ),
        {}
    );

    return db;
}

module.exports = function(){
    return connMongoDB;
}
 

///////////////////////
// Conexão com MySQL //
///////////////////////

/*
var mysql = require('mysql');

var connMySQL = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'portal_noticias'
    }); 
}

module.exports = function () {
    return connMySQL;
} */

