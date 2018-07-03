module.exports.tecnology = function(application, req, res, next){

    var connection = application.config.dbConnection;
    var TecnologyDAO = new application.app.models.TecnologyDAO(connection);

    TecnologyDAO.listar(req, res, next);
}