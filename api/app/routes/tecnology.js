module.exports = function(application){

    application.get('/tecnology', function(req,res, next){
        application.app.controllers.tecnology.tecnology(application, req, res, next);    
    });

}